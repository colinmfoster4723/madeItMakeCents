import classes from "./main-nav.module.scss";
import Logo from "./Logo";
import Link from "next/link";

function MainNav() {
  return (
    <ul className={classes.nav}>
      <Logo />
      <li>
        <Link href={"/posts"}>Posts</Link>
      </li>
      <li>
        <Link href={"/questions"}>Questions</Link>
      </li>
    </ul>
  );
}

export default MainNav;
