import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, MenuItem} from './NavbarStyles';
import { useRouter } from "next/router";

const Navbar = () =>  {
  const router = useRouter();

  return (
    <Menu>
      <MenuItem className={router.pathname == "/" ? "active" : ""}>
        <a style={{color:"inherit"}} href="/">Home</a>
      </MenuItem>
      <MenuItem className={router.pathname == "/blog" ? "active" : ""}>
        <a style={{color:"inherit"}} href="/blog">Blog</a>
      </MenuItem>
      <MenuItem className={router.pathname == "/projects" ? "active" : ""}>
        <a style={{color:"inherit"}} href="/projects">Projects</a>
      </MenuItem>
      <MenuItem className={router.pathname == "/resume" ? "active" : ""}>
        <a style={{color:"inherit"}} href="/resume">Resume</a>
      </MenuItem>
    </Menu>
  );
}

export default Navbar;
