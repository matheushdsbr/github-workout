import React from 'react';
import { ButtonField } from './styles';

const Button = ({ type, handle, children }) => (
  <ButtonField type={type} onClick={handle}>
    {children}
  </ButtonField>
);

export default Button;
