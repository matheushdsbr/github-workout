import React from 'react';
import { InputField } from './styles';

const Input = ({ placeholder, name, onChange }) => (
  <InputField placeholder={placeholder} name={name} onChange={onChange} />
);

export default Input;
