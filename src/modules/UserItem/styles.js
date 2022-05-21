import styled from "styled-components";
import { colors } from "styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1366px) {
    flex-direction: column;
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 39px;
  margin-left: 57px;

  @media (max-width: 1366px) {
    justify-content: center;
    margin: 0;
    text-align: center;
  }
`;

export const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px 0 50px 96px;
  text-align: left;

  @media (max-width: 1366px) {
    flex-direction: column;
    align-items: center;
    margin: 28px 0 50px 0;
  }
`;

export const ContainerNames = styled.div`
  margin-top: 29px;
`;

export const ContainerSecondary = styled.div`
  display: flex;
  margin-top: 25px;

  @media (max-width: 1366px) {
    justify-content: center;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 280px;
  margin-bottom: 29px;
  border-radius: 50%;

  @media (max-width: 1366px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 140px;
  }
`;

export const Icon = styled.img`
  color: ${colors.GRAY};
`;

export const FullName = styled.span`
  display: block;
  height: 34px;
  font-weight: 600;
  font-size: 26px;
  line-height: 130%;
`;

export const UserName = styled.a`
  display: block;
  margin-top: 12px;
  height: 28.74px;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  line-height: 22px;
  color: ${colors.BLUE};
  cursor: pointer;
`;

export const SecondaryText = styled.span`
  margin-left: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${colors.BLACK};
`;

export const BoxSecondary = styled.div`
  margin-right: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 2px;
`;

export const ErrorTitle = styled.h1`
  height: 31px;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  text-align: center;
  color: ${colors.GRAY};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 600px;
`;

export const ErrorImg = styled.img``;

export const ErrorText = styled.p`
  height: 31px;
  margin-top: 42px;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  color: ${colors.GRAY};
`;
