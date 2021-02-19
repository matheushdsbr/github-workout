import React from 'react';
import { SVG, FormField, InputField, LabelField } from './styles';

const Form = ({ onSubmit, name, onChange }) => (
  <>
    <FormField onSubmit={onSubmit}>
      <InputField
        id="username"
        name={name}
        onChange={onChange}
        required="required"
      />
      <SVG />
      <LabelField htmlFor="username">Search GitHub user</LabelField>
    </FormField>
  </>
);

export default Form;
