import NumberOps from './NumberOps';
import { render, fireEvent } from '@testing-library/react';

// test suite
describe('NumberOps tests', () => {
  // test case
  it('should render the NumberOps component', () => {
    const result = render(<NumberOps />);
    let elem = result.getByText('1234');
    expect(elem).toBeInTheDocument();
    elem = result.getByText('Decrement');
    expect(elem).toBeInTheDocument();
    elem = result.getByText('Increment');
    expect(elem).toBeInTheDocument();
  });

  it('should decrement the count if the "Decrement" button is clicked', () => {
    const result = render(<NumberOps />);
    const btn = result.getByText('Decrement');
    fireEvent.click(btn);
    let elem = result.getByText('1233');
    expect(elem).toBeInTheDocument();
  });

  it('should increment the count if the "Increment" button is clicked', () => {
    const result = render(<NumberOps />);
    const btn = result.getByText('Increment');
    fireEvent.click(btn);
    let elem = result.getByText('1235');
    expect(elem).toBeInTheDocument();
  });
});
