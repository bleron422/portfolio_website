import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import Typed from 'react-typed'
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding> 
    <LeftSection>
      <SectionTitle main center>
        <h1>I'm Bleron Murseli</h1>
        <Typed 
         strings={[
           "Welcome To My Personal Portfolio",
         ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </SectionTitle>
    </LeftSection>
  </Section>
);

export default Hero;