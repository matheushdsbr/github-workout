import React from 'react';
import { ContainerNegativeMessage, ErrorMessage } from './styles';

const NegativeMessage = ({ children }) => (
  <ContainerNegativeMessage>
    <ErrorMessage>{children}</ErrorMessage>
  </ContainerNegativeMessage>
);

export default NegativeMessage;
