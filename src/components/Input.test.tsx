import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input, Props } from './Input';

describe('Input Component', () => {
  test('should call onChange 4 times when type "test"', async () => {
    const textToType = 'Loading avatar ...';
    const username = 'Toni';
    const onChangeMock = jest.fn();
    const defaultProps: Props = {
      id: 'Basic',
      label: 'search',
      value: '',
      appearance: 'pill',
      orientation: 'horizontal',
      hideLabel: false,
    };
    render(<Input {...defaultProps} onChange={onChangeMock} />);
    /* fireEvent.change(screen.getByRole('textbox', { name: /search/i }), {
      target: { value: 'test' },
    }); */
    userEvent.type(screen.getByRole('textbox', { name: /search/i }), 'test');
    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });
});
