import styled from 'styled-components';
import colors from '../../tokens/colors';
import media from '../../tokens/media';
import fontSizes from '../../tokens/font-size';

export const ButtonField = styled.button`
  background: white;
  color: ${colors.dark};
  font-weight: 500;
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  transition-duration: 0.5s;
  ${media.md} {
    font-size: ${fontSizes.large};
  }

  &:focus {
    background: ${colors.primary};
    color: ${colors.white};
  }
`;
