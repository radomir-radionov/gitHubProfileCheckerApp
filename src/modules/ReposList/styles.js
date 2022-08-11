import styled from "styled-components";
import { colors } from "styles";

export const StyledReposList = styled.div``;

export const Repo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin-top: 24px;
  padding: 2.4rem 3.2rem;
  background: #ffffff;
  border-radius: 6px;

  @media (max-width: 400px) {
    min-width: 280px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 2.4rem;
  color: ${colors.BLUE};
`;

export const Description = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.BLACK};
`;
