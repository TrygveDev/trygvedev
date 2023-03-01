import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faGauge, faHamburger, faDumbbell, faPerson, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import styles from './styles/App.module.css';

function App() {

  useEffect(() => {
    document.querySelectorAll(".projectcard").forEach(card => {
      card.onmousemove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
      }
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) scrambleText(entry);
      })
    })

    document.querySelectorAll("h1").forEach(title => {
      observer.observe(title)
    });

    function scrambleText(e) {
      let iterations = 0;
      const interval = setInterval(() => {

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/";
        e.target.innerText = e.target.innerText.split("").map((letter, index) => {
          if (index < iterations) return e.target.dataset.value[index];
          return letters[Math.floor(Math.random() * letters.length)]
        }).join("");

        if (iterations >= e.target.dataset.value.length) clearInterval(interval);
        iterations += 1 / 3;

      }, 30)
    }

  })


  return (
    <div className={styles.container}>
      <section>
        <div className={styles.mainHeaderContainer}>
          <h1 data-value="TRYGVE/DEV" className={`${styles.header} ${styles.mainHeader}`}>TRYGVE/DEV</h1>
          <p>"The only way to do great work is to love what you do"</p>
        </div>
      </section>
      <section id="aboutme">
        <h1 data-value="ABOUT/ME" className={styles.header}>ABOUT/ME</h1>
        <div className={`${styles.content} ${styles.about}`}>
          <div className={`${styles.education} aboutcard`}>
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
          <div className={`${styles.experience} aboutcard`}>
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
          <div className={`${styles.skills} aboutcard`}>
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
          <div className={`${styles.favfields} aboutcard`}>
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
        <h1 data-value="MY/PROJECTS" className={styles.header}>MY/PROJECTS</h1>
        <div className={`${styles.content} ${styles.projects}`}>
          <div onClick={() => window.open("https://github.com/TrygveDev/HandleWeb", '_blank')} className={`${styles.card} projectcard`}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <FontAwesomeIcon icon={faShoppingCart} size={"2x"} />
              <h3>handle</h3>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/TrygveDev/centrl", '_blank')} className={`${styles.card} projectcard`}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <FontAwesomeIcon icon={faGauge} size={"2x"} />
              <h3>centrl</h3>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/oo7isme/matswipe", '_blank')} className={`${styles.card} projectcard`}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <FontAwesomeIcon icon={faHamburger} size={"2x"} />
              <h3>matswipe</h3>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/TrygveDev/wegojim", '_blank')} className={`${styles.card} projectcard`}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <FontAwesomeIcon icon={faDumbbell} size={"2x"} />
              <h3>wegojim</h3>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/TrygveDev/trygvedev", '_blank')} className={`${styles.card} projectcard`}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <FontAwesomeIcon icon={faPerson} size={"2x"} />
              <h3>portfolio</h3>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/TrygveDev/Moist", '_blank')} className={`${styles.card} projectcard`}>
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <FontAwesomeIcon icon={faDroplet} size={"2x"} />
              <h3>moist</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 data-value="CONTACT/ME" className={styles.header}>CONTACT/ME</h1>
        <div className={styles.content}>
        </div>
      </section>
    </div>
  );
}

export default App;
