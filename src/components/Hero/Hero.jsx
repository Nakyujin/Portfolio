import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>I'm a Game Developer</h1>
        <p className={styles.description}>
        Hi, I'm Yujin and I'm currently a University student and passionate about making games! Check out my Projects, Feel free to Contact me if you are interested in my work!  
        </p>
            <a href="mailto:yujin.nakayama02@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        {/* <img src={getImageUrl("heroImage.png")} 
        alt="Hero image of me" 
        className={styles.heroImg}/> */}
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

        </section>
  );
}
