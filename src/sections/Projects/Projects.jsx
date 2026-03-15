import styles from "./ProjectsStyles.module.css";
import fmgd from "../../assets/fmgd.png";
import dreamyagenda from "../../assets/dreamyagenda.png";
import trialert from "../../assets/trialert.png";
import moodringer from "../../assets/moodringer.png";
import gtbquiz from "../../assets/gtbquiz.png";
import piano from "../../assets/piano.png";
import ticktalk from "../../assets/ticktalk.png";
import shoppinglist from "../../assets/shoppinglist.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Projects</h1>

      <div className={styles.projectsContainer}>

        <div className={styles.projectCard}>
          <img src={fmgd} alt="FMGD" />
          <h2>FMGD</h2>
          <p>
            Fearful Museum Game Development is a 2D pixel-style horror game developed 
            to create an immersive and suspenseful gaming experience. Players navigate 
            eerie museum halls, solve puzzles, and encounter dynamic challenges designed 
            to test problem-solving and quick thinking.
          </p>
          <div className={styles.toolsBox}>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Unity</span>
            <span>HTML5</span>
            <span>C#</span>
            <span>Tilemap System</span>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src={dreamyagenda} alt="Dreamy Agenda" />
          <h2>Dreamy Agenda</h2>
          <p>
            Dreamy Agenda is a modern task management application designed to help 
            users organize their daily schedules and responsibilities efficiently.
            It features a clean interface, customizable task categories, reminder 
            notifications, and synchronization across devices.
          </p>
          <div className={styles.toolsBox}>
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Firebase</span>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src={trialert} alt="TriAlert" />
          <h2>TriAlert</h2>
          <p>
            Trialert is a mobile application developed as a thesis project, designed to provide real-time safety and emergency alerts to users. 
            Its main goal is to keep users informed and prepared by delivering timely notifications about critical events or situations. 
            The app features automated alerts, reminders, and location-based notifications, ensuring users can respond quickly and make 
            informed decisions during emergencies. By utilizing modern mobile technologies, Trialert offers a reliable and user-friendly 
            platform that helps improve personal safety and awareness. This project demonstrates how mobile applications can be effectively 
            used to enhance safety, making Trialert a practical and essential tool for its users.
          </p>
          <div className={styles.toolsBox}>
            <span>MIT App Inventor</span>
            <span>Firebase</span>
            <span>Google Maps API</span>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src={moodringer} alt="Mood Ringer" />
          <h2>Mood Ringer</h2>
          <p>
            Mood Ringer is a mental wellness application that allows users to track 
            their emotional states throughout the day. Users can journal experiences,
            identify mood patterns, and receive mindfulness prompts.
          </p>
          <div className={styles.toolsBox}>
            <span>MIT App Inventor</span>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src={gtbquiz} alt="Guess The Bit Quiz" />
          <h2>Guess The Bit Quiz</h2>
          <p>
            Guess The Bit Quiz is an interactive educational game that helps users 
            learn computer science fundamentals. Players solve challenges involving 
            binary numbers, hexadecimal values, logic gates, and programming logic.
          </p>
          <div className={styles.toolsBox}>
            <span>MIT App Inventor</span>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src={piano} alt="Piano" />
          <h2>Piano</h2>
          <p>
            Piano is a web-based digital piano application that allows users to play,
            compose, and record music directly in the browser with interactive keys 
            and high-quality sound samples.
          </p>
          <div className={styles.toolsBox}>
            <span>MIT App Inventor</span>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src={ticktalk} alt="TickTalk" />
          <h2>TickTalk</h2>
          <p>
            TickTalk is a voice-enabled application designed to announce the current time.
            When the user taps the Speak button, the system converts the time into speech and 
            reads it aloud for easy access and convenience.
          </p>
          <div className={styles.toolsBox}>
            <span>MIT App Inventor</span>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src={shoppinglist} alt="Shopping List" />
          <h2>Shopping List</h2>
          <p>
            Shopping List is an application designed to help users organize grocery 
            and shopping needs efficiently. Users can add, edit, categorize, and 
            share lists with family or friends.
          </p>
          <div className={styles.toolsBox}>
            <span>MIT App Inventor</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;