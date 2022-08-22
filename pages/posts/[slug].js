import { getPostData, getAllIds } from "../../firebase/firebase-util";
import PostContent from "../../components/posts/post-detail/PostContent";

function PostDetailPage(props) {
  return (
    <div className="contain">
      <PostContent post={props.post} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const post = await getPostData(slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getAllIds();
  console.log(slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
