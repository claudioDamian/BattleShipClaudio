import { render, screen } from '@testing-library/react';
import Paragraph from './Paragraph.comopnent';

test('Paragraph have to be defined', () => {
  render(<Paragraph paragraph="some text" />);
  expect(screen.getByText("some text")).toBeInTheDocument();
});