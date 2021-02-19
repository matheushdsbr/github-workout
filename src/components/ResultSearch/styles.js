import styled from 'styled-components';
import colors from '../../tokens/colors';
import fontSizes from '../../tokens/font-size';
import media from '../../tokens/media';

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

  ${media.md} {
    width: 25%;
  }
`;

export const Title = styled.p`
  color: ${colors.dark};
  font-weight: 500;
  font-size: ${fontSizes.large};

  ${media.md} {
    font-size: ${fontSizes.xlarge};
  }
`;

export const Text = styled.p`
  color: ${colors.gray[1]};
  ${media.md} {
    font-size: ${fontSizes.large};
  }
`;

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

  ${media.md} {
    font-size: ${fontSizes.large};
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  ${media.md} {
    margin-bottom: 45px;
  }
`;

export const ContainerList = styled.div`
  width: 50%;
  margin: auto;
`;

export const ListRepos = styled.ul`
  list-style-type: none;
  padding: 0;
`;
