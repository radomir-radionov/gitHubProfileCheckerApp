import styled from "styled-components";
import { colors } from "styles";

export const StyledProfile = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 280px;
  margin-bottom: 29px;
  border-radius: 50%;
  transition-duration: 0.1s;

  @media (max-width: 1366px) {
    width: 200px;
  }
`;

export const FullName = styled.h2`
  display: block;
  height: 34px;
  font-weight: 600;
  font-size: 26px;
  line-height: 130%;
`;

export const UserName = styled.a`
  display: block;
  margin-top: 12px;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  line-height: 22px;
  color: ${colors.BLUE};
  cursor: pointer;
`;

export const Secondary = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;

export const BoxSecondary = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.img`
  color: ${colors.GRAY};
`;

export const SecondaryText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${colors.BLACK};
`;
