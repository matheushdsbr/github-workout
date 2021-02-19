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
  color: #222222;
  font-weight: 500;
`;

export const Text = styled.p`
  color: #888888;
`;

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

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const ListRepos = styled.ul`
  list-style-type: none;
  padding: 0;
`;
