import { render, screen, fireEvent } from '@testing-library/react';
import WinnerMessage from './WinnerMessage';

test('Should be display Winner message', () => {
  render(<WinnerMessage message="The Winner is the Player" />);
  expect(screen.getByText('The Winner is the Player')).toBeInTheDocument();
});

test('Should be throw click event', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<WinnerMessage handlerClickPlayAgain={onClick} />);
  const button = getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});