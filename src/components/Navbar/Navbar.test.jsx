import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router";

describe("Navbar Component", () => {
    it("renders all three sections of the website", () => {
        render(<MemoryRouter>
            <Navbar />
        </MemoryRouter>);
        
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/store/i)).toBeInTheDocument();
        expect(screen.getByText(/cart/i)).toBeInTheDocument();
    });
});