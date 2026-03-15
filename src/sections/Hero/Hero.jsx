import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import cv from "../../assets/cv.pdf";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Kim Samson"
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Kim <br />
          Samson
        </h1>

        <h2>Computer Engineer</h2>

        <span>
          <a href="https://www.linkedin.com/in/kim-samson-b79597195/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>

          <a href="https://github.com/kimmycorpuz/kimsamson-portfolio" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>

        <p>
          I'm a Computer Engineering student with a strong foundation in software and hardware development and a growing interest in web development. 
          I am passionate about learning new technologies and continuously improving my skills. I aim to apply my technical knowledge to real-world projects, 
          enhance my analytical and problem-solving abilities, and gain hands-on experience in system development and technical support.
        </p>

        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;