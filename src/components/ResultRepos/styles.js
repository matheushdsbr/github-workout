import styled from 'styled-components';
import colors from '../../tokens/colors';

export const ContainerResult = styled.li`
  margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.gray[1]};
`;

export const Title = styled.p`
  color: ${colors.dark};
  font-weight: 500;
  margin-bottom: 6px;
`;

export const TextDescription = styled.p``;

export const Link = styled.a`
  color: ${colors.primary};
  text-decoration: none;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${colors.primary};
    transition: width 0.2s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    color: ${colors.primary};
    text-decoration: none;
  }
`;
