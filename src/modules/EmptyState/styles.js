import styled from "styled-components";
import { colors } from "styles";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
`;

export const Img = styled.img`
  width: 64px;
  height: 64px;
`;

export const TextError = styled.p`
  width: 210px;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  line-height: 140%;
  color: ${colors.GRAY};
`;
