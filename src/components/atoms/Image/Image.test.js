import { render } from '@testing-library/react';
import Image from './Image.component';

test('Bacground Image have to be defined', () => {
  const { getByTestId } = render(<Image date-testid="img" shipImg="cruiser.png" />)
  const image = getByTestId('img')
  expect(image).toHaveStyle(`background-image: url(${'cruiser.png'})`);
});