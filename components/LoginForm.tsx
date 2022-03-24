import { Button, Form, Input } from "antd";
import useInput from "hooks/useInput";
import { StateProps } from "interface/reducer";
import Link from "next/link";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";
import styled from "styled-components";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state: StateProps) => state.user);
  const [id, onChangeId] = useInput("");
  const [password, onChangePwd] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginRequestAction({ id, password }));
  }, [password, id]);

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
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
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
