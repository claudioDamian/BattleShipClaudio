import { render, screen } from '@testing-library/react';
import Card from './Card.component';

test('Card count spaces have to be defined', () => {
  render(<Card shipImg="cruiser.png" shipName="Cruiser" count="3 spaces" opcaity />);
  expect(screen.getByText('3 spaces')).toBeInTheDocument();
});

test('Card ship name have to be defined', () => {
  render(<Card shipImg="cruiser.png" shipName="Cruiser" count="3 spaces" opcaity />);
  expect(screen.getByText('Cruiser')).toBeInTheDocument();
});