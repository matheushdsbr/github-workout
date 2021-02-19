import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 50%;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  color: #222;
  font-weight: 500;
`;

export const Text = styled.p`
  color: #888;
`;

export const Link = styled.a`
  color: #1037c7;
  text-decoration: none;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #1037c7;
    transition: width 0.2s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    color: #1037c7;
    text-decoration: none;
  }
`;

export const ContainerButton = styled.div``;

export const ContainerResultRepos = styled.div``;
