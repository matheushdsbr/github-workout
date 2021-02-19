import styled from 'styled-components';
import colors from '../../tokens/colors';
import fontSizes from '../../tokens/font-size';
import media from '../../tokens/media';

export const ContainerResult = styled.li`
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.gray[0]};
`;

export const Title = styled.p`
  color: ${colors.dark};
  font-weight: 500;
  margin-bottom: 6px;
`;

export const Link = styled.a`
  display: inline-block;
  color: ${colors.primary};
  font-weight: 500;
  margin-bottom: 0;

  &:hover {
    cursor: pointer;
    color: ${colors.primary};
    font-weight: 500;
  }

  ${media.md} {
    font-size: ${fontSizes.large};
  }
`;

export const TextDescription = styled.p`
  color: ${colors.gray[1]};
  font-size: ${fontSizes.small};

  ${media.md} {
    font-size: ${fontSizes.medium};
  }
`;
