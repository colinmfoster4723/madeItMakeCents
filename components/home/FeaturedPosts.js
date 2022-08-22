import classes from "./featured-posts.module.scss";

import PostsGrid from "../posts/PostsGrid";

function FeaturedPosts(props) {
  return (
    <section className={classes.list}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
