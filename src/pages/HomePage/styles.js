import styled from "styled-components";
import { colors } from "styles";

export const HomePageContainer = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  background-color: ${colors.BACKGROUND};

  @media (max-width: 1366px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
  }
`;

export const GreetingMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Text = styled.p`
  width: 210px;
  margin-top: 46px;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  text-align: center;
  color: ${colors.GRAY};
`;

export const Img = styled.img`
  width: 64px;
`;
