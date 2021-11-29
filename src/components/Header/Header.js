import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'

import { Container, Name, Intro, Icon } from './HeaderStyles';

const Header = () =>  {
  return (
    <Container id="home">
      <Name>  ANUSREE SUBASH </Name>
      <Icon>
        <img style={{width:'200px'}} src="https://avatars.githubusercontent.com/u/65728079?v=4"/>
      </Icon>
      <Intro>
        <div style={{paddingBottom: '20px'}}> Welcome to my portfolio. </div>
        <p>I’m a full stack software engineer with passion for mathematics.</p>
      </Intro>
    </Container>
  );
}

export default Header;
