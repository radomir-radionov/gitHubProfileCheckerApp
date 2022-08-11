import styled from "styled-components";
import { colors } from "styles";

export const StyledUserPage = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 45px;
  padding: 38px 56px;
  text-align: center;
  background-color: ${colors.BACKGROUND};
  transition: padding 0.1s;

  @media (max-width: 824px) {
    flex-direction: column;
  }

  @media (max-width: 548px) {
    padding: 38px 0;
  }
`;
