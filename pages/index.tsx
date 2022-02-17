import PostCard from "@/components/PostCard";
import PostForm from "@/components/PostForm";
import { StateProps } from "interface/reducer";
import Head from "next/head";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";

const Home = () => {
  const { isLoggedIn } = useSelector((state: StateProps) => state.user);
  const { mainPosts } = useSelector((state: StateProps) => state.post);

  return (
    <>
      <Head>
        <title>넥스트버드 | NextBird</title>
      </Head>
      <AppLayout>
        <>
          {isLoggedIn && <PostForm />}
          {mainPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </>
      </AppLayout>
    </>
  );
};

export default Home;
