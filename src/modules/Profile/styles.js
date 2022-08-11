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
  width: 28rem;
  margin-bottom: 29px;
  border-radius: 50%;
  transition-duration: 0.1s;

  @media (max-width: 1366px) {
    width: 20rem;
  }

  @media (max-width: 574px) {
    width: 16rem;
  }
`;

export const FullName = styled.h3`
  display: block;
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 130%;
`;

export const UserName = styled.a`
  display: block;
  margin-top: 1.2rem;
  font-weight: 400;
  font-size: 1.8rem;
  text-decoration: none;
  line-height: 22px;
  color: ${colors.BLUE};
  cursor: pointer;
`;

export const Secondary = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1.2rem;
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
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 150%;
  color: ${colors.BLACK};
`;
