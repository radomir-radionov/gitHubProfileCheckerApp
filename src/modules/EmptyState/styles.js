import styled from "styled-components";
import { colors } from "styles";

export const Container = styled.div.attrs((props) => ({
  height: props.height,
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
`;

export const Img = styled.img``;

export const TextError = styled.p.attrs((props) => ({
  width: props.width,
}))`
  width: ${(props) => props.width};
  height: 31px;
  margin-top: 42px;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  color: ${colors.GRAY};
`;
