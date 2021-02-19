import styled from 'styled-components';

export const ButtonField = styled.button`
  background: white;
  color: #222222;
  font-weight: 500;
  border: 1px solid #1fb5ff;
  border-radius: 8px;
  padding: 7px 25px;
  cursor: pointer;
  transition-duration: 0.5s;

  &:focus {
    background: #1fb5ff;
    color: #ffffff;
  }
`;
