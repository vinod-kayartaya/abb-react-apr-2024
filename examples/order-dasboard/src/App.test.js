import { render, screen } from '@testing-library/react';
import App from './App';

xtest('renders learn react link', () => {
  render(<App />);
  const elem = screen.getByText(/Customer dashboard/i);
  expect(elem).toBeInTheDocument();
});
