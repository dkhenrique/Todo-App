import styled from 'styled-components/native';

export const Form = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-bottom: 24px;
  align-self: center;
`;