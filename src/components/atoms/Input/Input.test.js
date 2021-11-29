import { render, screen } from '@testing-library/react';
import Input from './Input.component';

test('Input value have to be defined', () => {
  render(<Input textValue="Clarita" />);
  expect(screen.getByDisplayValue('Clarita')).toBeInTheDocument();
});

test('Input placeholder have to be defined', () => {
  render(<Input />);
  expect(screen.getByPlaceholderText('Player Name')).toBeInTheDocument();
});