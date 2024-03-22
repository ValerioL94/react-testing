import { expect, test, vi } from 'vitest';
import UserEvent from '@testing-library/user-event';
import { Input } from '../src/App';
import App from '../src/App';
import { render, screen } from '@testing-library/react';

test('input value is updated correctly', async () => {
  render(<App />);

  const input = screen.getByRole('textbox');
  await UserEvent.type(input, 'React');

  expect(input.value).toBe('React');
});

test('call the callback every time input value is changed', async () => {
  const handleChange = vi.fn();

  render(<Input handleChange={handleChange} inputValue="" />);

  const input = screen.getByRole('textbox');
  await UserEvent.type(input, 'React');

  expect(handleChange).toHaveBeenCalledTimes(5);
});
