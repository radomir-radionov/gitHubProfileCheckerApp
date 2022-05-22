import styled from "styled-components";
import { colors } from "styles";

export const HomePageContainer = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  background-color: ${colors.BACKGROUND};

  @media (max-width: 1366px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
  }
`;
