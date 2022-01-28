import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';
import { AvatarType } from '..';

describe('Avatar Component', () => {
  it('should render with default props', () => {
    render(<Avatar />);
    const avatar = screen.getByLabelText('loading');
    const img = screen.queryByRole('img');
    expect(avatar).toHaveAttribute('type', 'user');
    expect(img).not.toBeInTheDocument();
    expect(avatar).toHaveTextContent('L');
  });

  test.each([
    { username: 'Kent C. Dodds', expectedInitial: 'K' },
    { username: 'toni', expectedInitial: 'T' },
  ])(
    "should shows initial '$expectedInitial' when username is '$username' and no image url was given",
    ({ username, expectedInitial }) => {
      render(<Avatar username={username} />);
      expect(screen.getByLabelText(username)).toHaveTextContent(expectedInitial);
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    }
  );

  test('should with default props render just image when image url was given', () => {
    const username = 'Toni';
    render(<Avatar username={username} src="https://avatars.githubusercontent.com/u/3626297" />);
    expect(screen.getByRole('img', { name: username })).toBeVisible();
    expect(screen.queryByLabelText(username)).not.toBeInTheDocument();
  });

  test('should render just loading icon when loading is true', () => {
    const labelText = 'Loading avatar ...';
    const username = 'Toni';
    render(<Avatar username={username} isLoading />);
    expect(screen.getByLabelText(labelText)).toBeVisible();
    expect(screen.getByLabelText(labelText)).toHaveAttribute('aria-busy', 'true');
    expect(screen.queryByLabelText(username)).not.toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('should render rounded icon when type is user', () => {
    const username = 'Toni';
    render(<Avatar type={AvatarType.USER} username={username} />);
    expect(screen.getByLabelText(username)).toHaveStyle({ 'border-radius': '50%' });
  });

  test('should render square icon with rounded border when type is organization', () => {
    const username = 'Toni';
    render(<Avatar type={AvatarType.ORGANIZATION} username={username} />);
    expect(screen.getByLabelText(username)).toHaveStyle({ 'border-radius': '5px' });
  });
});
