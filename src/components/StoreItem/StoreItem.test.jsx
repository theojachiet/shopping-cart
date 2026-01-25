import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import StoreItem from "./StoreItem";

describe("Navbar Component", () => {
    it("renders all sections of the item", () => {
        render(<MemoryRouter>
            <StoreItem />
        </MemoryRouter>);

        //image
        expect(screen.getByAltText(/item image/i)).toBeInTheDocument();

        //Quantity inputs
        expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toBeInTheDocument()

        //Add to cart
        expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument()
    });
});