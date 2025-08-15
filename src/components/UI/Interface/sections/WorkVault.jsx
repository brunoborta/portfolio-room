import { Section, YellowContainer, TitleSection, Paragraph } from "../styles";

const WorkVault = ({ theme, workVaultRef, id }) => (
  <Section ref={workVaultRef} id={id}>
    <YellowContainer theme={theme} $row={1} $left>
      <TitleSection theme={theme}>My Work Vault</TitleSection>
      <Paragraph theme={theme}>Welcome to my digital lair!</Paragraph>
      <Paragraph theme={theme}>
        This is where all the magic happens—literally.
      </Paragraph>
      <Paragraph theme={theme}>
        What you&apos;re seeing here is a 3D model of my actual room, the
        epicenter of my creativity.
      </Paragraph>
      <Paragraph theme={theme}>
        Pull up a chair (virtually), relax, and take a look around. Spoiler
        alert: this is where I turn tea into code (because for some reason,
        coffee is not my thing). Get ready for a behind-the-scenes tour of my
        work and what I do best.
      </Paragraph>
    </YellowContainer>
  </Section>
);

export default WorkVault;
