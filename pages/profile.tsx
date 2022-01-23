import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";

const Profile = () => {
  return (
    <>
      <Head>
        <title>내프로핍 | NextBird</title>
      </Head>
      <AppLayout>
        <div>내프로필</div>
      </AppLayout>
    </>
  );
};

export default Profile;
