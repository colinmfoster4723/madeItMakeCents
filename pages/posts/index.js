import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../firebase/firebase-util";

function AllPostsPage(props) {
  const { posts } = props;
  return (
    <>
      <div className="contain">
        <h2>All Posts</h2>
        {posts && <AllPosts posts={posts} />}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
