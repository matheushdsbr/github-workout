import styled from 'styled-components';

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
  font-size: 28px;
`;

export const SubTitleWelcome = styled.p`
  font-size: 18px;
`;
