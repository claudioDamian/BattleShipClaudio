import React from 'react';
import { CheckboxStyled, Label, Wrapper } from './Checkbox.styled';

const Checkbox = ({ handlerCheckBox }) => {
  return (
    <Wrapper>
      <CheckboxStyled type="checkbox" value="vertical" onClick={handlerCheckBox}/>
      <Label>Vertical</Label>
    </Wrapper>
  )
};

export default Checkbox;