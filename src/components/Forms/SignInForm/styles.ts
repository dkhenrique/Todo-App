import styled from 'styled-components/native';

export const Form = styled.View``;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Footer = styled.View`    
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  margin-top: 50px; 
`;