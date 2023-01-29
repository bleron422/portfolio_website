import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span>Bleron Murseli</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>My work</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons hoverColor={'white'} href="https://github.com/bleron422">
       <AiFillGithub  size="3rem"/>
      </SocialIcons>
      <SocialIcons hoverColor={'#0e76a8'} href="https://www.linkedin.com/in/bleron-murseli/">
       <AiFillLinkedin  size="3rem"/>
      </SocialIcons>
      <SocialIcons hoverColor={'#fb3958'} href="https://www.instagram.com/bleeronmurseli/">
       <AiFillInstagram  size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
