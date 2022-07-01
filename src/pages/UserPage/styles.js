import styled from "styled-components";
import { colors } from "styles";

export const StyledUserPage = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 85px;
  padding: 38px 56px;
  text-align: center;
  background-color: ${colors.BACKGROUND};
  transition: padding 0.1s;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 548px) {
    padding: 38px 0;
  }
`;
