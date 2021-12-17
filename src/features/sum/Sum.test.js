import { render, screen } from '@testing-library/react';
import sum from './Sum';

test('renders learn link', () => {
    render(<sum />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});