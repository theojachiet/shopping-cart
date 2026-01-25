import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from 'react-router';

describe('App component', () => {
  it('dummy test', () => {
    render(<MemoryRouter>
      <App/>
    </MemoryRouter>);
    expect(true).toBe(true);
  });
});