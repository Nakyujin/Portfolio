import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
  <footer id="Contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to contact me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:yujin.nakayama02@gmail.com">yujin.nakayama02@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/yujin-nakayama-97b1a3295/">linkedin.com/YujinNakayama</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/Nakyujin">github.com/Nakyujin</a>
            </li>
        </ul>
  </footer>
  );
}
