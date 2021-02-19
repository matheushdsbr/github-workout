import styled from 'styled-components';
import FontSizes from '../../tokens/font-size';
import colors from '../../tokens/colors';

export const ContainerWelcome = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWelcome = styled.h1`
  color: ${colors.dark};
  font-size: ${FontSizes.xxlarge};
`;

export const SubTitleWelcome = styled.p`
  font-size: ${FontSizes.large};
  color: ${colors.primary};
`;
