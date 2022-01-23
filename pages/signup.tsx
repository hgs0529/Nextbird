import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 | NextBird</title>
      </Head>
      <AppLayout>
        <div>회원가입</div>
      </AppLayout>
    </>
  );
};

export default Signup;
