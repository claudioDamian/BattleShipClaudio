import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox.component';

test('Checkbox Label have to be defined', () => {
  const RenderResult = render(<Checkbox />);
  expect(RenderResult.getByText('Vertical')).toBeInTheDocument();
});

test('Checkbox is not checked', () => {
  const { getByTestId } = render(<Checkbox />);
  expect(getByTestId('checkbox')).toHaveProperty('checked', false);
});

test('Click Checkbox', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<Checkbox onClick={onClick} />);
  const checkbox = getByTestId('checkbox')
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});