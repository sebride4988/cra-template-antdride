import { render, screen } from '@testing-library/react';
import RoutePage from '.';

test('renders learn react link', () => {
  render(<RoutePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
