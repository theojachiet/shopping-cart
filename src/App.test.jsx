import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router'
import routes from './routes';

describe('App component', () => {
  it('adding an item updates cart', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ['/store'],
    })

    render(<RouterProvider router={router}/>)

    const addToCartButton = screen.getAllByRole('button', { name: /add to cart/i })[0];
    const cartLink = screen.getByRole('link', { name: /cart/i })

    await user.click(addToCartButton);
    await user.click(cartLink);

    expect(await screen.findByText('vest')).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toHaveTextContent('€')
  });
});