import { render, screen } from '@testing-library/react';
import ProgressBar from '../ProgressBar/ProgressBar';


test('Should include loan text', () => {
  render(<ProgressBar />);
  const linkElement = screen.getByText(/Loan/);
  expect(linkElement).toBeInTheDocument();
});
