import { Button, Card, List } from "antd";
import { FollowUser } from "interface/profile";
import React from "react";
import styled from "styled-components";
import { StopOutlined } from "@ant-design/icons";

interface Props {
  header: string;
  data: FollowUser[];
}

const FollowList = ({ header, data }: Props) => {
  return (
    <StyledList
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <LoadMore>
          <Button>더보기</Button>
        </LoadMore>
      }
      bordered
      dataSource={data}
      renderItem={(item: FollowUser) => (
        <CardWrapper>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </CardWrapper>
      )}
    />
  );
};

const StyledList = styled(List)`
  margin-bottom: 20px;
`;

const LoadMore = styled.div`
  text-align: center;
  margin: 10px 0;
`;

const CardWrapper = styled(List.Item)`
  margin-top: 20px;
`;

export default FollowList;
