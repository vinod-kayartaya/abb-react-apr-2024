import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import CustomerCard from './CustomerCard';
import { useDispatch } from 'react-redux';
import {
  deleteCustomer,
  setEditingCustomer,
  setSelectedCustomer,
  unsetSelectedCustomer,
} from '../redux/actions/customers-action-creators';

// Mocking the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('CustomerCard Component', () => {
  const mockCustomer = {
    id: 1,
    name: 'John Doe',
    picture: 'https://example.com/avatar.jpg',
  };

  // Mock dispatch function
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with customer details', () => {
    render(<CustomerCard customer={mockCustomer} />);
    expect(screen.getByText(mockCustomer.name)).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute(
      'src',
      mockCustomer.picture
    );
  });

  it('triggers setSelectedCustomer action when search button is clicked', () => {
    render(<CustomerCard customer={mockCustomer} />);
    fireEvent.click(screen.getByTestId('search-button'));
    expect(mockDispatch).toHaveBeenCalledWith(
      setSelectedCustomer(mockCustomer)
    );
  });

  it('triggers deleteCustomer and unsetSelectedCustomer actions when delete button is clicked', () => {
    window.confirm = jest.fn(() => true); // Mocking window.confirm to return true
    render(<CustomerCard customer={mockCustomer} />);
    fireEvent.click(screen.getByTestId('delete-button'));
    expect(window.confirm).toHaveBeenCalled(); // Ensure confirmation dialog is shown
    expect(mockDispatch).toHaveBeenCalledWith(deleteCustomer(mockCustomer.id));
    expect(mockDispatch).toHaveBeenCalledWith(
      unsetSelectedCustomer(mockCustomer)
    );
  });
  it('triggers setEditingCustomer action when edit button is clicked', () => {
    render(<CustomerCard customer={mockCustomer} />);
    fireEvent.click(screen.getByTestId('edit-button'));
    expect(mockDispatch).toHaveBeenCalledWith(setEditingCustomer(mockCustomer)); // Adjusted expectation
  });
});
