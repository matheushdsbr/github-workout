import styled from 'styled-components';
import colors from '../../tokens/colors';

export const ButtonField = styled.button`
  background: white;
  color: ${colors.dark};
  font-weight: 500;
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  padding: 7px 25px;
  cursor: pointer;
  transition-duration: 0.5s;

  &:focus {
    background: ${colors.primary};
    color: ${colors.white};
  }
`;
