import React from 'react';
import { ContainerWelcome, TitleWelcome, SubTitleWelcome } from './styles';

const Welcome = () => (
  <ContainerWelcome>
    <TitleWelcome>Welcome to my project!</TitleWelcome>
    <SubTitleWelcome>Search any user on GitHub</SubTitleWelcome>
  </ContainerWelcome>
);

export default Welcome;
