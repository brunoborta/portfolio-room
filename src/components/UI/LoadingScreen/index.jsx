import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Container,
  Content,
  Logo,
  ProgressBar,
  ProgressFill,
  ProgressText,
  LoadingText,
} from "./styles";

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef();
  const progressFillRef = useRef();
  const progressTextRef = useRef();
  const hasCompletedRef = useRef(false);

  // Progresso simulado otimizado
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (!hasCompletedRef.current) {
          hasCompletedRef.current = true;
          // Transição de saída
          gsap
            .timeline({
              onComplete: () => {
                if (onLoadComplete) onLoadComplete();
              },
            })
            .to(progressFillRef.current, {
              backgroundColor: "#4bb71b",
              duration: 0.3,
            })
            .to(
              containerRef.current,
              {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
              },
              "+=0.2"
            );
        }
      },
    });

    // Progresso em 3 fases para parecer mais natural
    tl.to(
      { value: 0 },
      {
        value: 60,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: function () {
          setProgress(Math.round(this.targets()[0].value));
        },
      }
    )
      .to(
        { value: 60 },
        {
          value: 90,
          duration: 0.6,
          ease: "power1.inOut",
          onUpdate: function () {
            setProgress(Math.round(this.targets()[0].value));
          },
        }
      )
      .to(
        { value: 90 },
        {
          value: 100,
          duration: 0.4,
          ease: "power1.in",
          onUpdate: function () {
            setProgress(Math.round(this.targets()[0].value));
          },
        }
      );

    return () => {
      tl.kill();
    };
  }, [onLoadComplete]);

  // Atualizar barra de progresso visualmente
  useGSAP(
    () => {
      if (progressFillRef.current) {
        gsap.to(progressFillRef.current, {
          width: `${progress}%`,
          duration: 0.2,
          ease: "power2.out",
        });
      }

      if (progressTextRef.current) {
        gsap.to(progressTextRef.current, {
          innerText: progress,
          duration: 0.2,
          snap: { innerText: 1 },
          ease: "none",
        });
      }
    },
    { dependencies: [progress] }
  );

  return (
    <Container ref={containerRef}>
      <Content>
        <Logo>BR</Logo>
        <LoadingText>Loading Experience...</LoadingText>
        <ProgressBar>
          <ProgressFill ref={progressFillRef} />
        </ProgressBar>
        <ProgressText ref={progressTextRef}>0</ProgressText>
      </Content>
    </Container>
  );
};

export default LoadingScreen;
