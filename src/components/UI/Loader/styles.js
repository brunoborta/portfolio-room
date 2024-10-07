import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const scale = keyframes`
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const fill = keyframes`
  100% {
    box-shadow: inset 0px 0px 0px 30px #4bb71b;
  }
`;

export const Spinner = styled.svg`
  width: 3rem;
  height: 3rem;
  animation: ${rotate} 2s linear infinite;
`;

export const Success = styled(Spinner)`
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #4bb71b;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #4bb71b;
  animation:
    ${fill} 0.4s ease-in-out 0.4s forwards,
    ${scale} 0.3s ease-in-out 0.9s both;
  position: relative;
  top: 5px;
  right: 5px;
  margin: 0 auto;
`;

export const Circle = styled.circle`
  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #4bb71b;
    fill: #fff;
    animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
`;

export const Path = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;
