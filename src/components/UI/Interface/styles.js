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
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.sectionText};
  transition: all var(--time-animation-theme) ease;
  margin-bottom: 1rem;
`;
export const Subtitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.sectionText};
  transition: all var(--time-animation-theme) ease;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.sectionText};
  transition: all var(--time-animation-theme) ease;
`;

export const Comment = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.sectionText};
  transition: all var(--time-animation-theme) ease;
`;

export const TitleSection = styled.h2`
  font-family: "Poppins", cursive;
  font-size: 3rem;
  margin: 3rem 0;
  color: ${({ theme }) => theme.colors.sectionText};
  transition: all var(--time-animation-theme) ease;
`;

export const Mouse = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 50%;
  border: 2px solid ${({ theme }) => theme.colors.mouse};
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
    background-color: ${({ theme }) => theme.colors.mouse};

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

export const SectionFull = styled(Section)`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const SectionWithPadding = styled(Section)`
  padding: 0 4rem;
  h1,
  h2,
  p {
    color: ${({ theme }) => theme.colors.text};
  }
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
  background-color: ${({ theme }) => theme.colors.backgroundStory};
  height: 100%;
  width: 100%;
  grid-column: ${(props) => props.$column ?? 1};
  grid-row: ${(props) => props.$row ?? 2};
  border-top-right-radius: ${(props) => (props.$left ? "2rem" : 0)};
  border-bottom-right-radius: ${(props) => (props.$left ? "2rem" : 0)};
  border-bottom-left-radius: ${(props) => (props.$right ? "2rem" : 0)};
  border-top-left-radius: ${(props) => (props.$right ? "2rem" : 0)};

  border-bottom-right-radius: ${(props) => props.$noBorderBottom && 0};
  border-top-right-radius: ${(props) => props.$noBorderTop && 0};

  display: flex;
  flex-direction: column;
  transition: all var(--time-animation-theme) ease;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 5rem;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

export const GradientSVG = styled.svg`
  height: 0;
  width: 0;
`;
