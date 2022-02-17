import React, { ReactChild, ReactChildren, useState } from "react";
import Link from "next/link";
import { Col, Input, Menu, Row } from "antd";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import styled from "styled-components";
import { StateProps } from "interface/user";

interface Props {
  children: ReactChild | ReactChildren;
}

const AppLayout = ({ children }: Props) => {
  const { isLoggedIn } = useSelector((state: StateProps) => state.user);

  return (
    <div role="navigation">
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/hgs0529"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Eden
          </a>
        </Col>
      </Row>
    </div>
  );
};

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

export default AppLayout;
