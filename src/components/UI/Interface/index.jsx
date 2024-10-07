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
import { useTheme } from "../../../hooks/useTheme";

const Interface = () => {
  const timeline = useRef(gsap.timeline());
  const mouse = useRef();
  const stop = useRef([]);
  const workVault = useRef();
  const scroll = useScroll();
  const { getActualTheme, isLight } = useTheme();

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

  useGSAP(() => {
    const darkTheme = ["#2d3671", "#393983", "#314daf", "#0567b7", "#00d4ff"];
    const lightTheme = ["#f6a192", "#f6b092", "#f6c492", "#f6cf92", "#f6d992"];

    stop.current.forEach((ref, i) => {
      gsap.to(ref, {
        stopColor: isLight ? lightTheme[i] : darkTheme[i],
      });
    });
  }, [isLight]);

  return (
    <Container>
      <SectionWithPadding theme={getActualTheme()}>
        <PortfolioWrapper>
          <Title theme={getActualTheme()}>Bruno Borta</Title>
          <Subtitle theme={getActualTheme()}>Portfolio</Subtitle>
        </PortfolioWrapper>
        <TitleWrapper>
          <Title theme={getActualTheme()}>Hell Yeah!</Title>
          <Subtitle theme={getActualTheme()}>
            Welcome to my (actual) room!
          </Subtitle>
          <Comment theme={getActualTheme()}>
            (inspired by boko33&apos;s amazing website)
          </Comment>
        </TitleWrapper>
        <Mouse theme={getActualTheme()} ref={mouse} />
      </SectionWithPadding>
      <SectionBlank height="100dvh" />
      <Section ref={workVault}>
        <YellowContainer theme={getActualTheme()} $row={1} $left>
          <TitleSection theme={getActualTheme()}>My Work Vault</TitleSection>
          <Paragraph theme={getActualTheme()}>
            Welcome to my digital lair!
          </Paragraph>
          <Paragraph theme={getActualTheme()}>
            This is where all the magic happens—literally.
          </Paragraph>
          <Paragraph theme={getActualTheme()}>
            What you’re seeing here is a 3D model of my actual room, the
            epicenter of my creativity.
          </Paragraph>
          <Paragraph theme={getActualTheme()}>
            Pull up a chair (virtually), relax, and take a look around. Spoiler
            alert: this is where I turn tea into code (because for some reason,
            coffee is not my thing). Get ready for a behind-the-scenes tour of
            my work and what I do best.
          </Paragraph>
        </YellowContainer>
      </Section>
      <SectionBlank height="100dvh" />
      <Section height="200dvh">
        <YellowContainer $column={2} $row={1} $right theme={getActualTheme()}>
          <TitleSection theme={getActualTheme()}>
            The Developer Journey
          </TitleSection>
          <Paragraph theme={getActualTheme()}>
            I&apos;ve been coding my way through life since 2013—long before I
            discovered that “debugging” was just a fancy word for “I have no
            idea why this works now.” Fast forward to 2016, and I started diving
            into the world of creative development. Since then, I&apos;ve been
            lucky enough to work with agencies and brands across the globe, and
            hey, I might&apos;ve even worked on a campaign for something
            you&apos;re using right now!
          </Paragraph>
          <br />
          <Paragraph theme={getActualTheme()}>
            I live and breathe JavaScript, with a special love for React and
            GSAP, crafting slick, interactive experiences. Oh, and since 2022,
            I&apos;ve added 3D magic to the mix—using R3F, Three.js, and Blender
            to bring my own assets to life. You know, just in case you need a
            developer who can also bend reality a bit.
          </Paragraph>
        </YellowContainer>
      </Section>
      <Section height="150dvh">
        <YellowContainer $column={2} $row={1} $right theme={getActualTheme()}>
          <TitleSection theme={getActualTheme()}>
            Two Worlds (Not the Tarzan Song)
          </TitleSection>
          <Paragraph theme={getActualTheme()}>
            Born and raised in Porto Alegre, in the (not that) sunny south of
            Brazil, but now thriving and raising (and maybe even growing a few
            roots) in Berlin, Germany. I made the big move in 2020, trading in
            flip-flops for winter boots and churrasco for currywurst. Berlin has
            been my creative playground ever since.
          </Paragraph>
          <Paragraph theme={getActualTheme()}>
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
        <YellowContainer
          $column={1}
          $row={1}
          $left
          $noBorderBottom
          theme={getActualTheme()}
        >
          <TitleSection theme={getActualTheme()}>
            Let&apos;s Connect
          </TitleSection>
          <Paragraph theme={getActualTheme()}>
            Got a project in mind? A fun idea you want to chat about? Or maybe
            you just want to say hi—whatever the reason, let&apos;s make it
            happen. Fill out the form below, and I&apos;ll get back to you
          </Paragraph>
          <GradientSVG width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                {[...Array(5)].map((color, i) => (
                  <stop
                    ref={(el) => (stop.current[i] = el)}
                    key={`stop-${i}`}
                    offset={`${i * 25}%`}
                    style={{ stopOpacity: 1 }}
                  />
                ))}
              </linearGradient>
            </defs>
          </GradientSVG>
          <Socials>
            <a href="https://www.linkedin.com/in/brunobortagaray/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="url(#gradient)"
              >
                <path
                  stroke="#000000"
                  strokeWidth="10"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>

            <a href="https://github.com/brunoborta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                fill="url(#gradient)"
              >
                <path
                  stroke="#000000"
                  strokeWidth="10"
                  d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"
                />
              </svg>
            </a>

            <a href="https://www.instagram.com/brunoborta/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="url(#gradient)"
              >
                <path
                  stroke="#000000"
                  strokeWidth="10"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </Socials>
        </YellowContainer>
        <YellowContainer
          $column={1}
          $row={2}
          $left
          $noBorderTop
          theme={getActualTheme()}
        >
          <Form />
        </YellowContainer>
      </Section>
    </Container>
  );
};

export default Interface;
