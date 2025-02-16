import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/me.png'
          alt='An image showing jihwan'
          width={300}
          height={300}
          instrictive
        />
      </div>
      <h1>Hi, I'm Jihwan</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
}
