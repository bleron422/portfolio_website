import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 6, text: 'Completed Courses'},
  { number: 1, text: 'Finished my Degree', },
  { number: 19, text: 'Project on Github', },
  { number: 2, text: 'Freelance Project Completed', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {card.number !== 0 ? <BoxNum>{`${card.number}+`}</BoxNum> : ''}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;