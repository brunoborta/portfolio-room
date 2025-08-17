import {
  Title,
  Subtitle,
  Comment,
  Mouse,
  PortfolioWrapper,
  TitleWrapper,
  SectionFull,
  BigAsTitle,
} from "../styles";

const Hero = ({ theme, mouseRef, id }) => (
  <SectionFull theme={theme} id={id}>
    <PortfolioWrapper>
      <Title theme={theme}>Bruno Borta</Title>
      <Subtitle theme={theme}>Portfolio</Subtitle>
    </PortfolioWrapper>
    <TitleWrapper>
      <BigAsTitle theme={theme}>Hell Yeah!</BigAsTitle>
      <Subtitle theme={theme}>Welcome to my (actual) room!</Subtitle>
      <Comment theme={theme}>
        (inspired by boko33&apos;s amazing website)
      </Comment>
    </TitleWrapper>
    <Mouse theme={theme} ref={mouseRef} />
  </SectionFull>
);

export default Hero;
