import React from 'react';
import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";
import { FooterWrapper, LinkItem } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkItem href="https://github.com/anusreesubash"><SiGithub/></LinkItem>
      <LinkItem href="https://twitter.com/anusree_subash"><SiTwitter/></LinkItem>
      <LinkItem href="https://www.linkedin.com/in/anusree-p-s-92439120a/"><SiLinkedin/></LinkItem>
    </FooterWrapper>
  );
};

export default Footer;
