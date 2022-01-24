import FollowList from "@/components/FollowList";
import NicknameEditForm from "@/components/NicknameEditForm";
import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";

const Profile = () => {
  const followingList = [
    { nickname: "eden" },
    { nickname: "길동" },
    { nickname: "히랑이" },
  ];
  const followerList = [
    { nickname: "레오" },
    { nickname: "경태" },
    { nickname: "기택" },
  ];
  return (
    <>
      <Head>
        <title role="title">내프로필 | NextBird</title>
      </Head>
      <AppLayout>
        <>
          <NicknameEditForm />
          <FollowList header="팔로잉 목록" data={followingList} />
          <FollowList header="팔로워 목록" data={followerList} />
        </>
      </AppLayout>
    </>
  );
};

export default Profile;
