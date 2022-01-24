import { Form, Input } from "antd";
import React from "react";
import styled from "styled-components";

const NicknameEditForm = () => {
  return (
    <FormWrapper>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </FormWrapper>
  );
};

const FormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 30px;
`;

export default NicknameEditForm;
