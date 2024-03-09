import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
  return (
  <section className={styles.container} id ="about">
    <h2 className={styles.title}>About</h2>
  <div className={styles.content}>
    <img 
    src={getImageUrl("about/aboutImage.png")} 
    alt="A picture of me! :)" 
    className={styles.aboutImage}/>
  <ul className={styles.aboutItems}>
    <li className={styles.aboutItem}>
        <img src={getImageUrl("about/PhysicsCollider.png")} alt="cursor icon" className = {styles.aboutImg} />
        <div className={styles.aboutItemText}>
            <h3>Game Developer</h3>
            <p>I'm a game Developer, with extensive experience using Unity with 2D Physics. Check out my Github!</p>
        </div>
  </li>
  <li className={styles.aboutItem}>
        <img src={getImageUrl("about/PixelartIcon.png")} alt="server icon" className = {styles.aboutImg} />
        <div className={styles.aboutItemText}>
            <h3>Pixel Artist</h3>
            <p>I specialize in Character Design, bringing character to life using Pixel Art</p>
        </div>
  </li>
  <li className={styles.aboutItem}>
        <img src={getImageUrl("about/ServerIcon.png")} alt="3 icon" className = {styles.aboutImg} />
        <div className={styles.aboutItemText}>
            <h3>Fullstack Developer</h3>
            <p>I have experience building multiple fullstack websites, mainly using React and MySql</p>
        </div>
  </li>
  </ul>
  </div>
  </section>
  );
}
