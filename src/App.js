import { useEffect } from 'react';
import styles from './styles/App.module.css';

function App() {

  useEffect(() => {
    document.querySelectorAll(".App_card__Fv4Im").forEach(card => {
      card.onmousemove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
      }
    })
  })


  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.header}>ABOUT/ME</h1>
        <div className={styles.aboutContainer}>
          <div className={styles.education}>
            <h3>EDUCATION</h3>
            <ul>
              <li>
                <h5>2022 - 2023</h5>
                <h4>Information Technology, Drømtorp VGS</h4>
              </li>
              <li>
                <h5>2021 - 2022</h5>
                <h4>Information Technology and Media Production, Drømtorp VGS</h4>
              </li>
            </ul>
          </div>
          <div className={styles.experience}>
            <h3>EXPERIENCE</h3>
            <ul>
              <li>
                <h5>March 2023 - April 2023</h5>
                <h4>IT Department, Kripos</h4>
              </li>
              <li>
                <h5>October 2022 - November 2022</h5>
                <h4>IT Consulent, Marcello AS</h4>
              </li>
            </ul>
          </div>
          <div className={styles.skills}>
            <h3>SKILLS</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node</li>
              <li>SQL</li>
              <li>Firebase</li>
              <li>Git</li>
            </ul>
          </div>
          <div className={styles.favfields}>
            <h3>FAVOURITE FIELDS</h3>
            <ul>
              <li>Frontend</li>
              <li>Backend</li>
              <li>Web</li>
              <li>Mobile</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h1 className={styles.header}>MY/PROJECTS</h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}></div>
          </div>
        </div>
      </section>
      <section>
        <h1 className={styles.header}>CONTACT/ME</h1>
        <div className={styles.contactContainer}>
          <button>Email</button>
          <button>Discord</button>
          <button>LinkedIn</button>
        </div>
      </section>
    </div>
  );
}

export default App;
