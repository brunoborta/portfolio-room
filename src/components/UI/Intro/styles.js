import styled, { keyframes } from "styled-components";

const maskPlay = keyframes`
    0% {
	-webkit-mask-position: 0% 0;
	mask-position: 0% 0;
  }
  99% {
	-webkit-mask-position: 100% 0;
	mask-position: 100% 0;
  }
  100% {
    display: none;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: 100;

  -webkit-mask: url(/media/nature-sprite.png);
  mask: url(/media/nature-sprite.png);
  -webkit-mask-size: 2300% 100%;
  mask-size: 2300% 100%;
  -webkit-animation: ${(props) => (props.$isShowRoom ? maskPlay : null)} 1.4s
    steps(22) forwards;
  animation: ${(props) => (props.$isShowRoom ? maskPlay : null)} 1.4s steps(22)
    forwards;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 4rem;

  @media (width <= 425px) {
    padding: 0 2rem;
  }
`;

export const Sentence = styled.h2`
  font-size: 3rem;
  text-align: center;

  @media (width <= 1024px) {
    font-size: 2.5rem;
  }

  @media (width <= 425px) {
    font-size: 2rem;
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  filter: brightness(140%);
`;

export const SentenceWrapper = styled.div`
  display: flex;
`;

export const Cursor = styled(Sentence)`
  visibility: hidden;
`;
export const Joke = styled(Sentence)`
  margin-left: 0.8rem;
`;
