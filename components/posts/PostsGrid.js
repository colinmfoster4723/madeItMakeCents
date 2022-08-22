import classes from "./post-grid.module.scss";
import PostItem from "./PostItem";
function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </ul>
  );
}

export default PostsGrid;
