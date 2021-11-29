import { render, screen } from '@testing-library/react';
import WrapperCard from './WrapperCard.component';
import Paragraph from '../Paragraph/Paragraph.comopnent';


test('Children property have to be defined', () => {
  render(<WrapperCard children={<Paragraph paragraph="Paragraph Text" />} />);
  expect(screen.getByText('Paragraph Text')).toBeInTheDocument();
});