import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('triggering change using fireevent', () => {
    const onChange = jest.fn();
    const onAppearance = jest.fn();
    const props = {
      id: 'Focused',
      label: 'Focused input',
      hideLabel: false,
      placeholder: 'Focused',
      onChange,
      appearance: onAppearance,
      startFocused: true,
    };
    render(<Input {...props} />);
    const input = screen.getByRole('textbox', { name: props.label });
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('triggering type event using userevent', () => {
    const onChange = jest.fn();
    const onAppearance = jest.fn();
    const props = {
      id: 'Focused',
      label: 'Focused input',
      hideLabel: false,
      placeholder: 'Focused',
      onChange,
      appearance: onAppearance,
      startFocused: true,
    };
    render(<Input {...props} />);
    const input = screen.getByRole('textbox', { name: props.label });
    userEvent.type(input, 'test');
    expect(onChange).toHaveBeenCalledTimes(4);
  });
});
