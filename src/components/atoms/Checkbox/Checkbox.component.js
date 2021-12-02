import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxStyled, Label, Wrapper } from './Checkbox.styled';

const Checkbox = ({handlerCheckBox}) => {
  return (
    <Wrapper>
      <CheckboxStyled data-testid="checkbox" type="checkbox" value="vertical" onClick={handlerCheckBox}/>
      <Label>Vertical</Label>
    </Wrapper>
  )
};

Checkbox.propTypes = {
  handlerCheckBox: PropTypes.func
}
export default Checkbox;