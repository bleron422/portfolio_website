import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:045-951-535">045-951-535</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:bmurseli57@gmail.com">
            bmurseli57@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons hoverColor={'white'} href="https://github.com/bleron422">
        <AiFillGithub  size="3rem"/>
        </SocialIcons>
        <SocialIcons hoverColor={'#0e76a8'} href="https://www.linkedin.com/in/bleron-murseli/">
         <AiFillLinkedin  size="3rem"/>
        </SocialIcons>
        <SocialIcons hoverColor={'#fb3958'} href="https://www.instagram.com/bleeronmurseli/">
        <AiFillInstagram  size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;