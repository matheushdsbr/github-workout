import styled from 'styled-components';

export const ContainerResult = styled.li`
  margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #888888;
`;

export const Title = styled.p`
  color: #222222;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const TextDescription = styled.p``;

export const Link = styled.a`
  color: #1fb5ff;
  text-decoration: none;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #1fb5ff;
    transition: width 0.2s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    color: #1fb5ff;
    text-decoration: none;
  }
`;
