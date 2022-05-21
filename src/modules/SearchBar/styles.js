import styled from "styled-components";

export const SearchBarContainer = styled.div`
  margin-left: 22px;

  @media (max-width: 424px) {
    margin-left: 0;
  }
`;

export const Form = styled.form``;

export const FormInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxImage = styled.span`
  position: absolute;
  left: 20px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img``;
