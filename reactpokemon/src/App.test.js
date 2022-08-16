import { render, screen } from '@testing-library/react';
import App from './App';
import Next from './pages/Next/Next';

test('renders learn react link', () => {
  render(<App />, <Next />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
