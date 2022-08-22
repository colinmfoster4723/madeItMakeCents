import CreatePost from "../components/editor/CreatePost";
import EditPost from "../components/editor/EditPost";
import { getAllPosts } from "../firebase/firebase-util";

function EditorPage(props) {
  const { posts } = props;
  return (
    <div className="contain">
      <CreatePost />
      <hr></hr>
      <div>
        <h2>Edit Your Posts!</h2>
        {posts && posts.map((post) => <EditPost key={post.id} post={post} />)}
      </div>
    </div>
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

export default EditorPage;
