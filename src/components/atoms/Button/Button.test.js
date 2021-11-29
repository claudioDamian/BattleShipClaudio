import { render } from '@testing-library/react';
import Button from './Button.component';

test('show label button', () => {
  const label = render(<Button label="START GAME" />);
  expect(label.getByText("START GAME")).toBeInTheDocument(); 
});