import styled from "styled-components";

const transitionTime = "0.6s";

export const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 2rem;
  opacity: 0;

  // All hover effects
  button:hover + div {
    transform: translate(-0.5rem, 1rem);
  }

  button:hover div {
    left: -100%;
  }
`;
export const Button = styled.button`
  position: relative;
  border: 3px solid black;
  background: linear-gradient(
    to left,
    #f6a192,
    #f6b092,
    #f6c492,
    #f6cf92,
    #f6d992
  );
  font-size: 2rem;
  font-weight: 700;

  border-radius: 3rem;
  padding: 1.25rem 3rem;

  cursor: pointer;
  opacity: 1;
  overflow: hidden;
  z-index: 10;
`;

export const Reflection = styled.div`
  pointer-events: none;
  width: 100%;
  height: 70%;
  background: var(--transparent);
  rotate: -45deg;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: -1;
  transition: all 1s ease;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    height: 60%;
    background-color: var(--transparent);
  }
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    #f6a192,
    #f6b092,
    #f6c492,
    #f6cf92,
    #f6d992
  );
  position: absolute;
  top: 0;
  left: 0;
  border: 3px solid black;
  border-radius: 3rem;
  z-index: -1;
  transition: all ${transitionTime} ease;
`;
