import classes from "./main-footer.module.scss";
import Link from "next/link";
function MainFooter() {
  return (
    <footer className={classes.footer}>
      <h5 className={classes.miniLogo}>made it make cents</h5>
      <Link href={"https://www.instagram.com/madeitmakecents/"}>Instagram</Link>
      <Link href={"https://twitter.com/madeitmakecents"}>Twitter</Link>
      <Link href={"https://www.tiktok.com/@madeitmakecents"}>Tik-Tok</Link>
      <p>email</p>
    </footer>
  );
}

export default MainFooter;
