import { Button, Form, Input } from "antd";
import useInput from "hooks/useInput";
import { Post } from "interface/post";
import { StateProps } from "interface/reducer";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const CommentForm = ({ post }: { post: Post }) => {
  const id = useSelector((state: StateProps) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          style={{ position: "absolute", right: 0, bottom: -40 }}
          htmlType="submit"
          type="primary"
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
