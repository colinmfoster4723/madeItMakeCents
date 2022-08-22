import Link from "next/link";
import classes from "./logo.module.scss";

function Logo() {
  return (
    <div className={classes.logo}>
      <Link href={"/"}>{"made it make cents"}</Link>
    </div>
  );
}

export default Logo;
