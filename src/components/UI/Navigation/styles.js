import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    top: 1.5rem;
    padding: 0.8rem 1.5rem;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    top: 1rem;
    padding: 0.6rem 1rem;
    gap: 1rem;
  }
`;

export const NavigationDot = styled.button`
  width: 10px;
  height: 10px;
  border: 2px solid ${({ theme }) => theme?.colors?.sectionText || "#fff"};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme?.colors?.sectionText || "#fff" : "transparent"};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.3);
    border-color: ${({ theme }) => theme?.colors?.navyBlue || "#2D3671"};
    background-color: ${({ theme }) => theme?.colors?.navyBlue || "#2D3671"};
  }

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-width: 1.5px;
  }

  @media (max-width: 480px) {
    width: 6px;
    height: 6px;
    border-width: 1px;
  }
`;
