import styled, { keyframes } from "styled-components";

const mouseScroll = keyframes`
  0% {
    top: 0.5rem;
    opacity: 1;
  }
  70% {
    top: 2rem;
  }
  100% {
    top: 2rem;
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100dvw;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;
export const Subtitle = styled.h2`
  font-size: 1.5rem;
`;

export const TitleSection = styled(Title)`
  font-family: "Gravitas One", cursive;
  margin: 5rem 0;
`;

export const Mouse = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 50%;
  border: 2px solid var(--navy-blue);
  transform: translateX(-50%);
  height: 3.3rem;
  width: 2rem;
  border-radius: 2rem;

  &::after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    height: 0.6rem;
    width: 0.6rem;
    background-color: var(--navy-blue);
    border-radius: 50%;

    animation: ${mouseScroll} 2s infinite;
  }
`;

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: ${({ height }) => height || "100dvh"};
`;

export const SectionWithPadding = styled(Section)`
  padding: 0 4rem;
`;

export const SectionBlank = styled(Section)`
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;

export const TitleWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
`;

export const PortfolioWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const YellowContainer = styled.div`
  padding: 0 4rem;
  background-color: var(--beige);
  height: 100%;
  width: 100%;
  grid-column: 1;
  grid-row: 1 / 3;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
