import styled from "styled-components";
import { colors } from "styles";

export const Nav = styled.div`
  display: flex;
  padding: 16px 41px;
  width: 100%;
  height: 72px;
  background-color: ${colors.BLUE};

  @media (max-width: 424px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 140px;
  }
`;

export const Img = styled.img`
  width: 41px;
`;
