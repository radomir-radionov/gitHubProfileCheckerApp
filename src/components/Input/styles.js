import styled from "styled-components";
import { colors } from "styles";

export const InputStyled = styled.input`
  width: 500px;
  height: 40px;
  padding: 8px 44px;
  outline: 0;
  border: 0;
  border-radius: 6px;
  background-color: ${colors.WHITE};

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 524px) {
    width: 300px;
  }

  @media (max-width: 424px) {
    width: 240px;
  }
`;
