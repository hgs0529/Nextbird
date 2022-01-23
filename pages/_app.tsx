import React from "react";
import "antd/dist/antd.css";
import Head from "next/head";

interface Props {
  Component: React.ElementType;
}

const app = ({ Component }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NextBird</title>
      </Head>
      <Component />
    </>
  );
};

export default app;
