import styled from "styled-components";
import { colors } from "styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img``;

export const TextError = styled.p`
  height: 31px;
  margin-top: 42px;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  color: ${colors.GRAY};
`;
