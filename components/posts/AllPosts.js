import PostItem from "./PostItem";
import PostsGrid from "./PostsGrid";

function AllPosts(props) {
  return (
    <section>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
