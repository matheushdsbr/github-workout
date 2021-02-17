import React from 'react';
import { StandardButton } from './styles';

const Button = ({ type, children }) => (
  <StandardButton type={type}>{children}</StandardButton>
);

export default Button;
