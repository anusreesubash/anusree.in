import React, { useState, useEffect } from "react";
import Resume from './../../components/Resume/Resume';
import { Layout } from './../../layout/Layout';


export default function UserProfilePage() {
  return (
    <Layout>
      <Resume/>
    </Layout>
  );
};
