import { useRef } from "react";
import {
  Comment,
  Container,
  GradientSVG,
  Mouse,
  Paragraph,
  PortfolioWrapper,
  Section,
  SectionBlank,
  SectionWithPadding,
  Socials,
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
import Form from "../Form";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Interface = () => {
  const timeline = useRef(gsap.timeline());
  const mouse = useRef();
  const workVault = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (timeline.current) {
      timeline.current.seek(scroll.offset * timeline.current.duration() * 3);
    }
  });

  useGSAP(() => {
    timeline.current.to(mouse.current, {
      opacity: 0,
    });
  });

  return (
    <Container>
      {/* First Page */}
      <SectionWithPadding>
        <PortfolioWrapper>
          <Title>Bruno Borta</Title>
          <Subtitle>Portfolio</Subtitle>
        </PortfolioWrapper>
        <TitleWrapper>
          <Title>Hell Yeah!</Title>
          <Subtitle>Welcome to my (actual) room!</Subtitle>
          <Comment>(inspired by boko33&apos;s amazing website)</Comment>
        </TitleWrapper>
        <Mouse ref={mouse} />
      </SectionWithPadding>
      {/* Second*/}
      <SectionBlank height="100dvh" />
      {/* Third Page */}
      <Section ref={workVault}>
        <YellowContainer $row={1} $left>
          <TitleSection>My Work Vault</TitleSection>
          <Paragraph>Welcome to my digital lair!</Paragraph>
          <Paragraph>This is where all the magic happens—literally.</Paragraph>
          <Paragraph>
            What you’re seeing here is a 3D model of my actual room, the
            epicenter of my creativity.
          </Paragraph>
          <Paragraph>
            Pull up a chair (virtually), relax, and take a look around. Spoiler
            alert: this is where I turn tea into code (because for some reason,
            coffee is not my thing). Get ready for a behind-the-scenes tour of
            my work and what I do best.
          </Paragraph>
        </YellowContainer>
      </Section>
      {/* Fourth Page */}
      <SectionBlank height="100dvh" />
      {/* Fifth Page */}
      <Section height="200dvh">
        <YellowContainer $column={2} $row={1} $right>
          <TitleSection>The Developer Journey</TitleSection>
          <Paragraph>
            I&apos;ve been coding my way through life since 2013—long before I
            discovered that “debugging” was just a fancy word for “I have no
            idea why this works now.” Fast forward to 2016, and I started diving
            into the world of creative development. Since then, I&apos;ve been
            lucky enough to work with agencies and brands across the globe, and
            hey, I might&apos;ve even worked on a campaign for something
            you&apos;re using right now!
          </Paragraph>
          <br />
          <Paragraph>
            I live and breathe JavaScript, with a special love for React and
            GSAP, crafting slick, interactive experiences. Oh, and since 2022,
            I&apos;ve added 3D magic to the mix—using R3F, Three.js, and Blender
            to bring my own assets to life. You know, just in case you need a
            developer who can also bend reality a bit.
          </Paragraph>
        </YellowContainer>
      </Section>
      {/* Sixth Page */}
      <Section height="150dvh">
        <YellowContainer $column={2} $row={1} $right>
          <TitleSection>Two Worlds (Not the Tarzan Song)</TitleSection>
          <Paragraph>
            Born and raised in Porto Alegre, in the (not that) sunny south of
            Brazil, but now thriving and raising (and maybe even growing a few
            roots) in Berlin, Germany. I made the big move in 2020, trading in
            flip-flops for winter boots and churrasco for currywurst. Berlin has
            been my creative playground ever since.
          </Paragraph>
          <Paragraph>
            My work draws from both cultures, blending the vibrant creativity of
            Brazil with the cutting-edge tech scene in Germany. So whether
            I&apos;m coding in Portuguese or English (or, let&apos;s be real,
            JavaScript), I&apos;ve got the best of both worlds fueling my
            creativity.
          </Paragraph>
        </YellowContainer>
      </Section>
      <SectionBlank height="50dvh" />
      <Section height="100dvh">
        <YellowContainer $column={1} $row={1} $left $noBorderBottom>
          <TitleSection>Let&apos;s Connect</TitleSection>
          <Paragraph>
            Got a project in mind? A fun idea you want to chat about? Or maybe
            you just want to say hi—whatever the reason, let&apos;s make it
            happen. Fill out the form below, and I&apos;ll get back to you
          </Paragraph>
          <GradientSVG width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#2d3671", stopOpacity: 1 }}
                />
                <stop
                  offset="25%"
                  style={{ stopColor: "#393983", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#314daf", stopOpacity: 1 }}
                />
                <stop
                  offset="75%"
                  style={{ stopColor: "#0567b7", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#00d4ff", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </GradientSVG>
          <Socials>
            <a href="https://www.linkedin.com/in/brunobortagaray/">
              <FaLinkedin style={{ fill: "url(#gradient)" }} />
            </a>

            <a href="https://github.com/brunoborta">
              <FaGithub style={{ fill: "url(#gradient)" }} />
            </a>

            <a href="https://www.instagram.com/brunoborta/">
              <FaInstagram style={{ fill: "url(#gradient)" }} />
            </a>
          </Socials>
        </YellowContainer>
        <YellowContainer $column={1} $row={2} $left $noBorderTop>
          <Form />
        </YellowContainer>
      </Section>
    </Container>
  );
};

export default Interface;
