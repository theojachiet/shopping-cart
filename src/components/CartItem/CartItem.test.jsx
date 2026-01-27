import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";

const mockItem = { id: 1, imageUrl: '#', name: 'vest', price: 40, quantity: 1 };
const handleChangeQuantity = vi.fn();
const handleIncreaseQuantity = vi.fn();
const handleDecreaseQuantity = vi.fn();
const handleRemove = vi.fn();

describe("CartItem Component", () => {
    it("renders all sections of the item", () => {
        render(<MemoryRouter>
            <CartItem
                key={1}
                item={mockItem}
            />
        </MemoryRouter>);

        //image and attributes
        expect(screen.getByAltText(/item image/i)).toBeInTheDocument();
        expect(screen.getByText(/vest/i)).toBeInTheDocument();
        expect(screen.getByText(/40/i)).toBeInTheDocument();

        //Quantity inputs
        expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();

        //Add to cart
        expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();

        //Price
        expect(screen.getByText(/€/i)).toBeInTheDocument();
    });

    it("calls the functions on clicks", async () => {
        render(<MemoryRouter>
            <CartItem
                key={1}
                item={mockItem}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleChangeQuantity={handleChangeQuantity}
                handleRemove={handleRemove}
            />
        </MemoryRouter>);

        const user = userEvent.setup();

        const inputQuantity = screen.getByRole('textbox');
        const plusButton = screen.getByRole('button', { name: '+' });
        const minusButton = screen.getByRole('button', { name: '-' });
        const removeButton = screen.getByRole('button', { name: 'Remove' });

        await user.click(plusButton);
        expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1);

        await user.click(minusButton);
        expect(handleDecreaseQuantity).toHaveBeenCalledTimes(1);

        await user.click(removeButton);
        expect(handleRemove).toHaveBeenCalledTimes(1);

        await user.type(inputQuantity, "11");
        expect(handleChangeQuantity).toHaveBeenCalledTimes(2);

    })
});