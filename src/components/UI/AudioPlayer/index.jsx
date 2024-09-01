import gramoImage from "../../../assets/gramo.jpg";
import { FaPlay, FaPause } from "react-icons/fa6";
import { useWaveSurfer } from "../../../hooks/useWaveSurfer";
import { useAudioBadge } from "../../../hooks/useAudioBadge";
import { useShowBadge } from "../../../hooks/useShowBadge";

import {
  Container,
  ImageContainer,
  Gramophone,
  Content,
  TopWrapper,
  DescriptionWrapper,
  Title,
  SongTime,
  Button,
} from "./styles";

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
