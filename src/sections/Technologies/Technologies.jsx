import styles from "./TechnologiesStyles.module.css";

import js from "../../assets/icons/js.png";
import java from "../../assets/icons/java.png";
import cpp from "../../assets/icons/cpp.png";
import python from "../../assets/icons/python.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";

import xampp from "../../assets/icons/xampp.png";
import mysql from "../../assets/icons/mysql.png";
import vscode from "../../assets/icons/vscode.png";
import pycharm from "../../assets/icons/pycharm.png";
import eclipse from "../../assets/icons/eclipse.png";
import arduino from "../../assets/icons/arduino.png";

import TechCard from "../../common/TechCard";

function Technologies() {
  return (
    <section id="technologies" className={styles.container}>
      
      <h1 className="sectionTitle">Technologies</h1>

      <div className={styles.techContainer}>
        <TechCard src={js} name="JavaScript" />
        <TechCard src={java} name="Java" />
        <TechCard src={cpp} name="C++" />
        <TechCard src={python} name="Python" />
        <TechCard src={html} name="HTML" />
        <TechCard src={css} name="CSS" />
      </div>

      <h1 className="sectionTitle">Development Tools</h1>

      <div className={styles.techContainer}>
        <TechCard src={xampp} name="XAMPP" />
        <TechCard src={mysql} name="MySQL" />
        <TechCard src={vscode} name="VSCode" />
        <TechCard src={pycharm} name="Pycharm" />
        <TechCard src={eclipse} name="Eclipse" />
        <TechCard src={arduino} name="Arduino" />
      </div>

    </section>
  );
}

export default Technologies;