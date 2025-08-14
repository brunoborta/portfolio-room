import { useRef, useEffect } from "react";
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
// import Navigation from "../Navigation";

const Interface = () => {
  const timeline = useRef(gsap.timeline());
  const mouse = useRef();
  const stop = useRef([]);
  const workVault = useRef();
  const scroll = useScroll();
  const { getActualTheme, isLight } = useTheme();

  // Listener para navegação vinda do Navigation component
  useEffect(() => {
    const handleScrollToSection = (event) => {
      const { scrollPosition } = event.detail;

      if (scroll.el) {
        // Calcular posição alvo
        const targetScroll =
          scrollPosition * (scroll.el.scrollHeight - scroll.el.clientHeight);

        // Animar scroll com GSAP para controle total da velocidade
        gsap.to(scroll.el, {
          scrollTop: targetScroll,
          duration: 2, // 1.5 segundos - scroll mais lento e suave
          ease: "power2.out", // Easing natural e suave
          overwrite: true, // Cancela animação anterior se clicar rapidamente
        });
      }
    };

    window.addEventListener("dreiScrollTo", handleScrollToSection);

    return () => {
      window.removeEventListener("dreiScrollTo", handleScrollToSection);
    };
  }, [scroll]);

  // useFrame combinado para GSAP e Navigation
  const lastOffsetRef = useRef(0);
  useFrame(() => {
    // GSAP Timeline
    if (timeline.current) {
      timeline.current.seek(scroll.offset * timeline.current.duration() * 3);
    }

    // Navigation scroll tracking (otimizado)
    if (scroll.offset !== undefined) {
      const offsetDiff = Math.abs(scroll.offset - lastOffsetRef.current);
      if (offsetDiff > 0.01) {
        // Threshold de 1%
        lastOffsetRef.current = scroll.offset;

        const scrollUpdateEvent = new CustomEvent("dreiScrollUpdate", {
          detail: { offset: scroll.offset },
        });
        window.dispatchEvent(scrollUpdateEvent);
      }
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
      <Hero id="hero" theme={theme} mouseRef={mouse} />
      <SectionBlank height="100dvh" />
      <WorkVault id="work-vault" theme={theme} workVaultRef={workVault} />
      <SectionBlank height="100dvh" />
      <DeveloperJourney id="developer-journey" theme={theme} />
      <TwoWorlds id="two-worlds" theme={theme} />
      <SectionBlank height="50dvh" />
      <Contact id="contact" theme={theme} stopRefs={stop} />
    </Container>
  );
};

export default Interface;
