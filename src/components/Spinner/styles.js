import styled from "styled-components";

export const BoxLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Loader = styled.div`
  border: 12px solid #f3f3f3;
  border-radius: 50%;
  border-top: 12px solid #3498db;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
