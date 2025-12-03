import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #2d3671 0%, #1a1f45 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 400px;
  width: 90%;
`;

export const Logo = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #d4b5e7;
  letter-spacing: 0.2em;
  text-shadow: 0 0 20px rgba(212, 181, 231, 0.5);
  animation: ${pulse} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #8c7fa2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: rgba(212, 181, 231, 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #8c7fa2 0%, #d4b5e7 100%);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(212, 181, 231, 0.5);
  transition: background-color 0.3s ease;
`;

export const ProgressText = styled.span`
  font-size: 0.9rem;
  color: #8c7fa2;
  font-weight: 300;
  letter-spacing: 0.05em;

  &::after {
    content: "%";
  }
`;
