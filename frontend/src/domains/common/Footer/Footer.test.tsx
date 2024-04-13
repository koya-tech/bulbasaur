import { describe, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import Footer from './Footer';

describe('test of footer GUI', () => {
    it('', () => {
        render(<Footer />);

        expect(screen.getByText("Link")).toBeTruthy();
        expect(screen.getByText("About")).toBeTruthy();
        expect(screen.getByText("2024 made by Koya-tech")).toBeTruthy();
    })
})
