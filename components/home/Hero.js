import classes from "./hero.module.scss";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.profile}>
        <Image
          src={"/images/kaylee-profile.jpg"}
          alt="Profile Picture"
          width={200}
          height={200}
        />
      </div>
      <h3>Welcome to my blog</h3>
      <h4>I like to blog about finances and budgeting</h4>
    </section>
  );
}
export default Hero;
