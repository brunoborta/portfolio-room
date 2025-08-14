import { Section, YellowContainer, TitleSection, Paragraph } from "../styles";

const TwoWorlds = ({ theme }) => (
  <Section height="150dvh">
    <YellowContainer $column={2} $row={1} $right theme={theme}>
      <TitleSection theme={theme}>
        Two Worlds (Not the Tarzan Song)
      </TitleSection>
      <Paragraph theme={theme}>
        Born and raised in Porto Alegre, in the (not that) sunny south of
        Brazil, but now thriving and raising (and maybe even growing a few
        roots) in Berlin, Germany. I made the big move in 2020, trading in
        flip-flops for winter boots and churrasco for currywurst. Berlin has
        been my creative playground ever since.
      </Paragraph>
      <Paragraph theme={theme}>
        My work draws from both cultures, blending the vibrant creativity of
        Brazil with the cutting-edge tech scene in Germany. So whether I&apos;m
        coding in Portuguese or English (or, let&apos;s be real, JavaScript),
        I&apos;ve got the best of both worlds fueling my creativity.
      </Paragraph>
    </YellowContainer>
  </Section>
);

export default TwoWorlds;
