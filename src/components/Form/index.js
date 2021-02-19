import React from 'react';
import { FormField, SVGSearch, InputField, LabelField } from './styles';

const Form = ({ onSubmit, name, onChange }) => (
  <>
    <FormField onSubmit={onSubmit}>
      <SVGSearch src="/search.svg" alt="Search" />
      <InputField
        id="username"
        name={name}
        onChange={onChange}
        required="required"
      />
      <LabelField htmlFor="username">Search GitHub user</LabelField>
    </FormField>
  </>
);

export default Form;
