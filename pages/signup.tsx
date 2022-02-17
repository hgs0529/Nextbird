import Form from "antd/lib/form/Form";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import { Input, Checkbox, Button } from "antd";
import useInput from "hooks/useInput";
import styled from "styled-components";

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(password, passwordCheck, term);
  }, [password, passwordCheck, term]);

  return (
    <>
      <Head>
        <title>회원가입 | NextBird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input
              required
              value={typeof id === "string" && id}
              onChange={onChangeId}
            />
          </div>
          <div>
            <label htmlFor="user-id">닉네임</label>
            <br />
            <Input required value={nickname} onChange={onChangeNickname} />
          </div>
          <div>
            <label htmlFor="user-id">패스워드</label>
            <br />
            <Input required value={password} onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-id">패스워드 확인</label>
            <br />
            <Input
              required
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <ErrorMessage style={{ color: "red" }}>
                비밀번호가 일치하지 않습니다.
              </ErrorMessage>
            )}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              약관에 동의합니다.
            </Checkbox>
            {termError && (
              <ErrorMessage style={{ color: "red" }}>
                약관에 동의하셔야 합니다.
              </ErrorMessage>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

const ErrorMessage = styled.div`
  color: red;
`;

export default Signup;
