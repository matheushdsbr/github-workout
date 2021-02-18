import styled from 'styled-components';

export const FormField = styled.form`
  position: relative;
  width: 100%;
  margin-top: 30px;
`;

export const InputField = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #bdbdbd;
  color: #454550;
  height: 12px;
  outline: none;
  transition: all 0.2s ease-out;
  padding: 18px;

  &:focus {
    border: 1px solid #2962fb;
  }

  &:focus ~ label,
  &:valid ~ label {
    color: #2962fb;
    padding: 0px 8px;
    top: -19px;
  }
`;

export const LabelField = styled.label`
  background: white;
  border-radius: 12px;
  color: #bdbdbd;
  cursor: text;
  left: 0;
  margin-left: 15px;
  margin-top: 6px;
  padding: 0px 8px;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-out;
`;
