import { render } from '@testing-library/react';
import Board from './Board.component';

test('render Board Component', () => {
  const { getByTestId } = render(<Board squares={[{color: "white", squareId: 0}]} />)
  expect(getByTestId('square').querySelector("div"));
});