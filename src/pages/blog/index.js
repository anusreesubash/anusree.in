import React, { useState, useEffect } from "react";
import Blog from './../../components/Blog/Blog';
import { Layout } from './../../layout/Layout';


export default function UserProfilePage() {
  return (
    <Layout>
      <Blog/>
    </Layout>
  );
};
