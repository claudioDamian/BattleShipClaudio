import { render, screen } from '@testing-library/react';
import TurnNameCard from './TurnNameCard.component';

test('Title and Name have to be defined', () => {
  render(<TurnNameCard title="Is Turn of" name="CPU" />);
  expect(screen.getByText('Is Turn of')).toBeInTheDocument();
  expect(screen.getByText('CPU')).toBeInTheDocument();
});