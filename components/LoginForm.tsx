import { Button, Form, Input } from "antd";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("hgs_0529@naver.com");
  const [password, setPassword] = useState("2232405r");

  const onChangeId = useCallback((e: { target: HTMLInputElement }) => {
    console.log(e.target.value);
  }, []);

  const onChangePwd = useCallback((e: { target: HTMLInputElement }) => {
    console.log(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-id">패스워드</label>
        <br />
        <Input
          type="password"
          name="user-id"
          value={password}
          onChange={onChangePwd}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;
export default LoginForm;
