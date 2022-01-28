import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  it('first test', () => {
    render(<Avatar />);
    screen.debug();
    screen.logTestingPlaygroundURL()
  });
});
