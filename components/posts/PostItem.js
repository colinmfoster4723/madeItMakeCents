import classes from "./post-item.module.scss";
import Link from "next/link";
import Image from "next/image";

function PostItem(props) {
  const { title, url, text, id } = props.post;
  //   const formattedDate = new Date(date).toLocaleDateString("en-US", {
  //     day: "numeric",
  //     month: "long",
  //     year: "numeric",
  //   });
  const linkPath = `/posts/${id}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={url}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
