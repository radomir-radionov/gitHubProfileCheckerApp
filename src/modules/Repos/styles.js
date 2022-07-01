import styled from "styled-components";
import SVG from "react-inlinesvg";
import { colors } from "styles";

export const StyledRepos = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  text-align: left;

  @media (max-width: 548px) {
    text-align: center;
  }
`;

export const StyledRightArrow = styled(SVG)`
  width: 12px;
  height: 12px;
  transform: scaleX(-1);

  &:hover path {
    fill: #0064eb;
  }
`;

export const StyledLeftArrow = styled(SVG)`
  width: 12px;
  height: 12px;
  margin-right: 10px;

  &:hover path {
    fill: #0064eb;
  }
`;

export const Page = styled.li`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 30px;
`;

export const StyledText = styled.p`
  padding: 2px;
  color: ${colors.GRAY};
`;

export const StyledPagination = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 30px;

  .pagination {
    display: flex;
    list-style: none;
  }

  .pagination__page {
    padding: 2px 6px;
    margin-left: 16px;
    width: 21px;
    height: 25px;
    color: ${colors.GRAY};
    border-radius: 3px;
  }

  .break {
    margin-left: 16px;
  }

  .page-item {
    padding-top: 3px;
    margin-left: 26px;
  }

  .active {
    background: #0064eb;
    color: white;
  }

  a {
    cursor: pointer;
  }

  .disabled a {
    cursor: not-allowed;
  }

  .disabled a svg path {
    fill: #808080;
    cursor: not-allowed;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }
`;
