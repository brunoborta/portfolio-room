import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import {
  Container,
  Sentence,
  BackgroundVideo,
  Cursor,
  SentenceWrapper,
  Joke,
  Wrapper,
} from "./styles";

import video from "/media/intro.mp4";
import FancyButton from "../FancyButton";

gsap.registerPlugin(TextPlugin);

const Intro = () => {
  const textRef = useRef([]);
  const cursorRef = useRef([]);
  const jokeRef = useRef();
  const buttonRef = useRef();
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(cursorRef.current[0], {
      visibility: "visible",
    })
      .to(
        cursorRef.current[0],
        {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "<"
      )

      .to(textRef.current[0], {
        duration: 1,
        text: "Hello there!👋 ",
        ease: "power2.inOut",
        delay: 1,
      })
      .to(textRef.current[0], {
        duration: 2,
        text: "Hello there!👋 My name is Bruno Borta!",
        ease: "power2.inOut",
        delay: 2,
      })
      .to(cursorRef.current[0], {
        visibility: "hidden",
        display: "none",
      })
      .to(cursorRef.current[1], {
        visibility: "visible",
      })
      .to(
        cursorRef.current[1],
        {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(textRef.current[1], {
        duration: 1,
        text: "I am ",
        ease: "power2.inOut",
      })
      .to(jokeRef.current, {
        duration: 1,
        text: "awesome!",
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
        delay: 0.5,
        repeatDelay: 0.5,
      })
      .to(
        jokeRef.current,
        {
          duration: 1,
          text: "good haha!",
          ease: "power2.inOut",
          marginLeft: "0.8rem",
          yoyo: true,
          repeat: 1,
          delay: 0.5,
          repeatDelay: 0.5,
        },
        ">"
      )
      .to(
        jokeRef.current,
        {
          duration: 1,
          text: "kinda meh 🥲",
          ease: "power2.inOut",
          marginLeft: "0.8rem",
          yoyo: true,
          repeat: 1,
          delay: 0.5,
          repeatDelay: 1,
        },
        ">"
      )
      .to(
        jokeRef.current,
        {
          duration: 2,
          text: "a creative developer",
          ease: "power2.inOut",
          marginLeft: "0.8rem",
          delay: 1,
        },
        ">"
      )
      .to(cursorRef.current[1], {
        visibility: "hidden",
        display: "none",
      })
      .to(cursorRef.current[2], {
        visibility: "visible",
      })
      .to(
        cursorRef.current[2],
        {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        textRef.current[2],
        {
          duration: 3,
          text: "that loves animations and 3D stuff!",
          ease: "power2.out",
        },
        "<"
      )
      .to(cursorRef.current[2], {
        visibility: "hidden",
        display: "none",
      })
      .to(buttonRef.current, {
        opacity: 1,
        duration: 1,
      });

    () => tl.kill();
  }, []);

  return (
    <Container isVisible={isVisible}>
      <Wrapper>
        <BackgroundVideo autoPlay loop muted id="intro-video">
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        {[...Array(4)].map((_, index) => (
          <SentenceWrapper key={`intro-${index}`}>
            <Sentence ref={(el) => (textRef.current[index] = el)}></Sentence>
            <Cursor ref={(el) => (cursorRef.current[index] = el)}>_</Cursor>
            {index === 1 && <Joke ref={jokeRef}></Joke>}
          </SentenceWrapper>
        ))}
        <FancyButton ref={buttonRef} isVisible={false} onClick={handleClick}>
          Click to see more!
        </FancyButton>
      </Wrapper>
    </Container>
  );
};

export default Intro;
