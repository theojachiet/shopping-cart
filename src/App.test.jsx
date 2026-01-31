import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router'
import routes from './routes';
import { renderHook, waitFor } from "@testing-library/react";
import useItems from './useItems';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve([
        {
          id: 1,
          title: "vest",
          price: 10,
          image: "img.jpg"
        }
      ])
    })
  );
})

afterEach(() => {
  vi.restoreAllMocks();
});


describe('App component', () => {
  it('adding an item updates cart', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ['/store'],
    })

    render(<RouterProvider router={router} />)

    const addToCartButton = await screen.findByRole('button', { name: /add to cart/i });
    const cartLink = screen.getByRole('link', { name: /cart/i })

    await user.click(addToCartButton);
    await user.click(cartLink);

    expect(await screen.findByText('vest')).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toHaveTextContent('€')
  });

  it("fetches and formats products", async () => {
    const { result } = renderHook(() => useItems());

    // initially loading
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.items).toEqual([
      {
        id: 1,
        name: "vest",
        price: 10,
        imageUrl: "img.jpg",
        quantity: 1
      }
    ]);

    expect(result.current.error).toBe(null);
  });

  it("loading is true on first render", () => {
    const { result } = renderHook(() => useItems());
    expect(result.current.loading).toBe(true);
  });

  it("sets error when fetch fails", async () => {

    global.fetch = vi.fn(() =>
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve({}),
      })
    );
    
    const { result } = renderHook(() => useItems());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.items).toEqual([]);
  });
});