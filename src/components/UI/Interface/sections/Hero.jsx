import {
  Title,
  Subtitle,
  Comment,
  Mouse,
  PortfolioWrapper,
  TitleWrapper,
  SectionWithPadding,
} from "../styles";

const Hero = ({ theme, mouseRef, id }) => (
  <SectionWithPadding theme={theme} id={id}>
    <PortfolioWrapper>
      <Title theme={theme}>Bruno Borta</Title>
      <Subtitle theme={theme}>Portfolio</Subtitle>
    </PortfolioWrapper>
    <TitleWrapper>
      <Title theme={theme}>Hell Yeah!</Title>
      <Subtitle theme={theme}>Welcome to my (actual) room!</Subtitle>
      <Comment theme={theme}>
        (inspired by boko33&apos;s amazing website)
      </Comment>
    </TitleWrapper>
    <Mouse theme={theme} ref={mouseRef} />
  </SectionWithPadding>
);

export default Hero;
