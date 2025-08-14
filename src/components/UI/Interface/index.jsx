import { useRef } from "react";
import { Container, SectionBlank } from "./styles";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../../../hooks/useTheme";

// Sections
import Hero from "./sections/Hero";
import WorkVault from "./sections/WorkVault";
import DeveloperJourney from "./sections/DeveloperJourney";
import TwoWorlds from "./sections/TwoWorlds";
import Contact from "./sections/Contact";

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

  const theme = getActualTheme();

  return (
    <Container>
      <Hero theme={theme} mouseRef={mouse} />
      <SectionBlank height="100dvh" />
      <WorkVault theme={theme} workVaultRef={workVault} />
      <SectionBlank height="100dvh" />
      <DeveloperJourney theme={theme} />
      <TwoWorlds theme={theme} />
      <SectionBlank height="50dvh" />
      <Contact theme={theme} stopRefs={stop} />
    </Container>
  );
};

export default Interface;
