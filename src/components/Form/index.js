import React from 'react';
import { FormField, InputField, LabelField } from './styles';
import StandardButton from '../Button';

const Form = ({ onSubmit, name, onChange }) => (
  <>
    <FormField onSubmit={onSubmit}>
      <InputField
        id="username"
        name={name}
        onChange={onChange}
        required="required"
      />
      <LabelField htmlFor="username">Search GitHub user</LabelField>

      <StandardButton type="submit">Search</StandardButton>
    </FormField>
  </>
);

export default Form;
