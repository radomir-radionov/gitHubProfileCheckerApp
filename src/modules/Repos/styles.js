import styled from "styled-components";
import { colors } from "styles";

export const ReposContainer = styled.div`
  width: 877px;

  @media (max-width: 968px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 520px) {
    width: 350px;
  }

  @media (max-width: 380px) {
    width: 280px;
  }
`;

export const RepoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin-top: 24px;
  padding: 24px 32px;
  background: #ffffff;
  border-radius: 6px;

  @media (max-width: 400px) {
    min-width: 280px;
  }
`;

export const RepoName = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-decoration: none;
  color: ${colors.BLUE};
`;

export const RepoDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.BLACK};
`;
