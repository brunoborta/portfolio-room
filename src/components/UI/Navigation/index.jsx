import { useState, useEffect } from "react";
import { Container, NavigationDot } from "./styles";
import { useTheme } from "../../../hooks/useTheme";

// Mapeamento das seções para as 9 páginas do ScrollControls
const sections = [
  { id: "hero", label: "Home", page: 0 }, // Página 0
  { id: "work-vault", label: "Portfolio", page: 2.2 }, // Página ~2.2
  { id: "developer-journey", label: "Developer Journey", page: 4.5 }, // Página ~4.5
  { id: "two-worlds", label: "Two Worlds", page: 6.5 }, // Página ~6.5
  { id: "contact", label: "Contact", page: 8.2 }, // Página ~8.2
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { getActualTheme } = useTheme();
  const theme = getActualTheme();

  useEffect(() => {
    // Listener para atualizações do scroll offset do drei
    const handleScrollUpdate = (event) => {
      const { offset } = event.detail;
      const currentPage = offset * 9; // Converter offset (0-1) para página (0-9)

      // Encontrar seção ativa baseada na página atual
      let activeId = "hero";

      for (let i = sections.length - 1; i >= 0; i--) {
        if (currentPage >= sections[i].page) {
          activeId = sections[i].id;
          break;
        }
      }

      setActiveSection(activeId);
    };

    // Intersection Observer como fallback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    // Adicionar listeners
    window.addEventListener("dreiScrollUpdate", handleScrollUpdate);

    // Observar seções como fallback
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("dreiScrollUpdate", handleScrollUpdate);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sections.find((s) => s.id === sectionId);
    if (!section) return;

    // Disparar evento customizado para comunicar com ScrollControls
    const scrollEvent = new CustomEvent("dreiScrollTo", {
      detail: {
        sectionId: section.id,
        page: section.page,
        scrollPosition: section.page / 9, // 0-1 range para o drei
      },
    });

    window.dispatchEvent(scrollEvent);
  };

  return (
    <Container theme={theme}>
      {sections.map((section) => (
        <NavigationDot
          key={section.id}
          $isActive={activeSection === section.id}
          onClick={() => scrollToSection(section.id)}
          title={section.label}
          theme={theme}
        />
      ))}
    </Container>
  );
};

export default Navigation;
