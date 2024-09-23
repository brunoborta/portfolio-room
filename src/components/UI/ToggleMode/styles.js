import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Toggle = styled.div`
  position: relative;
  height: 2rem;
  width: 4rem;
  border-radius: 2rem;
  background-color: var(--peach);
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  border: 1px solid var(--purple-light);
`;

export const ToggleBall = styled.div`
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: var(--navy-blue);
  transition: all 0.3s ease;
  &:hover {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
