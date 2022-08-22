import classes from "./post-content.module.scss";

import Image from "next/image";
function PostContent(props) {
  const { title, url, text } = props.post;
  return (
    <section className={classes.content}>
      <h2>{title}</h2>
      <Image src={url} alt={title} width={300} height={200} />
      <p>{text}</p>
    </section>
  );
}

export default PostContent;
