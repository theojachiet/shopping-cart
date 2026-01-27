import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import StoreItem from "./StoreItem";
import userEvent from "@testing-library/user-event";

const mockItem = { id: 1, imageUrl: '#', name: 'vest', price: 40, quantity: 1 };
const handleChangeQuantity = vi.fn();
const handleIncreaseQuantity = vi.fn();
const handleDecreaseQuantity = vi.fn();
const handleAddToCart = vi.fn();

describe("StoreItem Component", () => {
    it("renders all sections of the item", () => {
        render(<MemoryRouter>
            <StoreItem
                key={1}
                item={mockItem}
                handleChangeQuantity={handleChangeQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleAddToCart={handleAddToCart}
            />
        </MemoryRouter>);

        //image
        expect(screen.getByAltText(/item image/i)).toBeInTheDocument();
        expect(screen.getByText(/vest/i)).toBeInTheDocument();
        expect(screen.getByText(/40/i)).toBeInTheDocument();

        //Quantity inputs
        expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toBeInTheDocument()

        //Add to cart
        expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument()
    });

    it("calls the functions on clicks", async () => {
        render(<MemoryRouter>
            <StoreItem
                key={1}
                item={mockItem}
                handleChangeQuantity={handleChangeQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleAddToCart={handleAddToCart}
            />
        </MemoryRouter>);

        const user = userEvent.setup();

        const inputQuantity = screen.getByRole('textbox');
        const plusButton = screen.getByRole('button', {name: '+'});
        const minusButton = screen.getByRole('button', {name: '-'});
        const addToCartButton = screen.getByRole('button', {name: 'Add to Cart'});

        await user.click(plusButton);
        expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1);

        await user.click(minusButton);
        expect(handleDecreaseQuantity).toHaveBeenCalledTimes(1);

        await user.click(addToCartButton);
        expect(handleAddToCart).toHaveBeenCalledTimes(1);

        await user.type(inputQuantity, "11");
        expect(handleChangeQuantity).toHaveBeenCalledTimes(2);

    })
});