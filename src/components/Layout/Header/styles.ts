import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Greating = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

