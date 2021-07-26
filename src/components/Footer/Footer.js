import React from 'react';
import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";
import { FooterWrapper, LinkItem } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkItem><SiGithub/></LinkItem>
      <LinkItem><SiTwitter/></LinkItem>
      <LinkItem><SiLinkedin/></LinkItem>
    </FooterWrapper>
  );
};

export default Footer;
