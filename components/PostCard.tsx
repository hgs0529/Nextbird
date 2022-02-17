import { Card } from "antd";
import { Post } from "interface/post";
import { StateProps } from "interface/reducer";
import React from "react";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div>
      <Card cover={post.Images[0] && post.Images[0].src}>
        <Image />
        <Content />
        <Buttons></Buttons>
      </Card>
      {/* <CommentForm /> */}
      {/* <Comments /> */}
    </div>
  );
};

export default PostCard;
