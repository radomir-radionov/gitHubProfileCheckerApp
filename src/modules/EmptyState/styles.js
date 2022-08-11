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
  width: 210px;
`;

export const Img = styled.img`
  height: 6.4rem;
  width: 6.4rem;
`;

export const TextError = styled.p`
  font-weight: 400;
  font-size: 2.2rem;
  text-align: center;
  line-height: 140%;
  color: ${colors.GRAY};
`;
