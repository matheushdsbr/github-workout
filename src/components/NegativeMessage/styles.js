import styled from 'styled-components';
import colors from '../../tokens/colors';

export const ContainerNegativeMessage = styled.div`
  margin: auto;
  margin-top: 15px;
`;

export const ErrorMessage = styled.p`
  color: ${colors.negative};
  font-weight: 500;
`;
