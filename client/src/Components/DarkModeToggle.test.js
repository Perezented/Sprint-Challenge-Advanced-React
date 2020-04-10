import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle';

test('DarkModeToggle renders', () => {
    render(<DarkModeToggle />);
});
test('Dark Mode button clicks', () => {
    const { getByText } = render(<DarkModeToggle />);
    fireEvent.click(getByText(/dark Mode/i));
});
test('Light Mode button clicks', () => {
    const { getByText } = render(<DarkModeToggle />);
    fireEvent.click(getByText(/Light Mode/i));
});
