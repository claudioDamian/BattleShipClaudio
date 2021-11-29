import { render, screen, fireEvent } from '@testing-library/react';
import ScreenStart from './ScreenStart.component';

test('Button text have to be define', () => {
  render(<ScreenStart label="START GAME" />);
  expect(screen.getByText('START GAME')).toBeInTheDocument();;
});

test('Button click event have to be throw', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<ScreenStart handlerClickButton={onClick}/>);
  const button = getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});

const setupInput = () => {
  const onClick = jest.fn();
  const utils = render(<ScreenStart handlerInputText={onClick}/>)
  const input = utils.getByRole('textbox')
  return {
    input,
    onClick,
    ...utils,
  }
}

test('Input value have to be defined', () => {
  const { input } = setupInput();
  fireEvent.change(input, {target: {value: 'Clarita'}});
  expect(input.value).toBe('Clarita');
});