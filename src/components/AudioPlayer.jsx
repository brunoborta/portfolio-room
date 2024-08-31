import styled from "styled-components";
import gramoImage from "../assets/gramo.jpg";
import { FaPlay, FaPause } from "react-icons/fa6";
import { useWaveSurfer } from "../hooks/useWaveSurfer";
import { useAudioBadge } from "../hooks/useAudioBadge";
import { useShowBadge } from "../hooks/useShowBadge";

const Container = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  position: fixed;
  top: -16vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  max-height: 15vh;
  width: 40vw;
  z-index: 10;

  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  // Ensure the image doesn't overflow the container
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Gramophone = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding: 15px;
`;

const TopWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

const SongTime = styled.p`
  font-size: 0.75rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  color: #aaa;
  margin-top: 2px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  background: #b69fc0;
  border-radius: 50%;
  cursor: pointer;
`;

const AudioPlayer = () => {
  const { audioBadgeRef } = useAudioBadge();
  const showHideBadge = useShowBadge();
  const { isPlaying, currentTime, duration, handlePlayPause, waveformRef } =
    useWaveSurfer();

  const hideShowContainer = () => {
    showHideBadge(audioBadgeRef.current, isPlaying, handlePlayPause);
  };

  return (
    <Container ref={audioBadgeRef}>
      <ImageContainer>
        <Gramophone src={gramoImage} alt="Gramophone" />
      </ImageContainer>
      <Content>
        <TopWrapper>
          <DescriptionWrapper>
            <Title>{"Song old as f*"}</Title>
            <SongTime>
              {currentTime} / {duration}
            </SongTime>
          </DescriptionWrapper>
          <Button role="button" onClick={hideShowContainer}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>
        </TopWrapper>
        <div ref={waveformRef} />
      </Content>
    </Container>
  );
};

export default AudioPlayer;
