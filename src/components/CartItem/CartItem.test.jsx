import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CartItem from "./CartItem";

const mockItem = {id: 1, imageUrl: '#', name: 'vest', price: 40, quantity: 1 };

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
});