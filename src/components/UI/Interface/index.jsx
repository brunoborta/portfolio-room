import { useRef } from "react";
import {
  Container,
  Mouse,
  PortfolioWrapper,
  Section,
  SectionBlank,
  SectionWithPadding,
  Subtitle,
  Title,
  TitleSection,
  TitleWrapper,
  YellowContainer,
} from "./styles";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";

const Interface = () => {
  const timeline = useRef();
  const mouse = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (timeline.current) {
      timeline.current.seek(scroll.offset * timeline.current.duration() * 3);
    }
  });

  useGSAP(() => {
    timeline.current = gsap.timeline();
    timeline.current.to(mouse.current, {
      opacity: 0,
    });
  });

  return (
    <Container>
      <SectionWithPadding>
        <PortfolioWrapper>
          <Title>Bruno Borta</Title>
          <Subtitle>Portfolio</Subtitle>
        </PortfolioWrapper>
        <TitleWrapper>
          <Title>Hell Yeah!</Title>
          <Subtitle>Welcome to my room!</Subtitle>
        </TitleWrapper>
        <Mouse ref={mouse} />
      </SectionWithPadding>
      <SectionBlank height="50dvh" />
      <Section height="150dvh">
        <YellowContainer>
          <TitleSection>My Work Vault</TitleSection>
          <p>
            As you can see, this is the place I do all my projects and stuff
          </p>
        </YellowContainer>
      </Section>
    </Container>
  );
};

export default Interface;
