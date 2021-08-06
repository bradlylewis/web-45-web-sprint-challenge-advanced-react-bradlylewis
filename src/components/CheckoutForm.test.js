import React from 'react';
import { render, screen  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// test("form header renders", () => {});

// test("form shows success message on submit with form details", () => {});

test("checks if form header renders", () => {
    render(<CheckoutForm />);

    const checkoutFormHeader = screen.getByText(/Checkout Form/i)
    const firstName = screen.getByText(/First Name/i)
    const lastName = screen.getByText(/Last Name/i)
    const address = screen.getByText(/Address/i)
    const city = screen.getByText(/City/i)
    const state = screen.getByText(/State/i)
    const zip = screen.getByText(/Zip/i)
    const button = screen.getByRole("button", { name: /checkout/i });

    expect(checkoutFormHeader).toBeInTheDocument()
    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(address).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(state).toBeInTheDocument()
    expect(zip).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    expect(checkoutFormHeader).toBeVisible();
    expect(firstName).toBeVisible();
    expect(lastName).toBeVisible();
    expect(address).toBeVisible();
    expect(city).toBeVisible();
    expect(state).toBeVisible();
    expect(zip).toBeVisible();
    expect(button).toBeVisible();
});

test("checks if form functions successfully", () => {
    render(<CheckoutForm />);
  
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const address = screen.getByLabelText(/Address/i)
    const city = screen.getByLabelText(/City/i)
    const state = screen.getByLabelText(/State/i)
    const zip = screen.getByLabelText(/Zip/i)
    const button = screen.getByRole("button", { name: /checkout/i })
  
    userEvent.type(firstName, "Donald")
    userEvent.type(lastName, "Glover")
    userEvent.type(address, "30 Rockefeller Plaza")
    userEvent.type(city, "New York City")
    userEvent.type(state, "New York")
    userEvent.type(zip, "10112")
    userEvent.click(button)
  
    const confirmationMessage = screen.getByText(/Your new green friends will be shipped to/i);
    const customerDetails = screen.getByText(/Donald/i);
  
    expect(confirmationMessage).toBeTruthy();
    expect(customerDetails).toBeTruthy();
  
    expect(confirmationMessage).toBeVisible();
    expect(customerDetails).toBeVisible();
  });