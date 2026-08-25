// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZephyrLedger title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZephyrLedger/i);
    expect(titleElement).toBeInTheDocument();
});
