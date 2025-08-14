import { Section, YellowContainer, TitleSection, Paragraph } from '../styles';

const DeveloperJourney = ({ theme }) => (
  <Section height="200dvh">
    <YellowContainer $column={2} $row={1} $right theme={theme}>
      <TitleSection theme={theme}>The Developer Journey</TitleSection>
      <Paragraph theme={theme}>
        I&apos;ve been coding my way through life since 2013—long before I discovered
        that "debugging" was just a fancy word for "I have no idea why this works
        now." Fast forward to 2016, and I started diving into the world of creative
        development. Since then, I&apos;ve been lucky enough to work with agencies
        and brands across the globe, and hey, I might&apos;ve even worked on a
        campaign for something you&apos;re using right now!
      </Paragraph>
      <br />
      <Paragraph theme={theme}>
        I live and breathe JavaScript, with a special love for React and GSAP,
        crafting slick, interactive experiences. Oh, and since 2022, I&apos;ve
        added 3D magic to the mix—using R3F, Three.js, and Blender to bring my own
        assets to life. You know, just in case you need a developer who can also
        bend reality a bit.
      </Paragraph>
    </YellowContainer>
  </Section>
);

export default DeveloperJourney;