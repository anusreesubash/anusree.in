import React, { useState, useEffect } from "react";
import Projects from './../../components/Projects/Projects';
import { Layout } from './../../layout/Layout';


export default function UserProfilePage() {
  return (
    <Layout>
      <Projects/>
    </Layout>
  );
};
