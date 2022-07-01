import styled from "styled-components";
import { colors } from "styles";

export const StyledHeader = styled.header`
  display: flex;
  gap: 21px;
  padding: 16px 41px;
  background-color: ${colors.BLUE};
  transition-property: padding, gap;
  transition-duration: 0.1s;

  @media (max-width: 500px) {
    padding: 8px 8px;
    gap: 8px;
  }
`;

export const Logo = styled.img`
  width: 41px;
`;
