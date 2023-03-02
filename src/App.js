import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faGauge, faHamburger, faDumbbell, faPerson, faDroplet, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import styles from './styles/App.module.css';

function App() {

  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showFavFields, setShowFavFields] = useState(false);

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
        if (entry.isIntersecting) scrambleText(entry, 30);
      })
    })

    document.querySelectorAll("h1").forEach(title => {
      observer.observe(title)
    });

    document.querySelectorAll("#glitchHover").forEach(button => {
      button.onmouseover = (e) => {
        scrambleText(e, 10)
      }
    })

    function scrambleText(e, time) {
      let iterations = 0;
      const interval = setInterval(() => {

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/";
        e.target.innerText = e.target.innerText.split("").map((letter, index) => {
          if (index < iterations) return e.target.dataset.value[index];
          return letters[Math.floor(Math.random() * letters.length)]
        }).join("");

        if (iterations >= e.target.dataset.value.length) clearInterval(interval);
        iterations += 1 / 3;

      }, time)
    }

  })


  return (
    <div className={styles.container}>
      <section>
        <div className={styles.mainHeaderContainer}>
          <h1 data-value="TRYGVE/DEV" className={`${styles.header} ${styles.mainHeader}`}>TRYGVE/DEV</h1>
          <p>"The only way to do great work is to love what you do"</p>
          <div className={styles.mainHeaderButtonDiv}>
            <button data-value="ABOUT/ME" id="glitchHover" onClick={() => document.getElementById("aboutme").scrollIntoView({ behavior: 'smooth' })}>ABOUT/ME</button>
            <button data-value="MY/PROJECTS" id="glitchHover" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: 'smooth' })}>MY/PROJECTS</button>
            <button data-value="CONTACT/ME" id="glitchHover" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: 'smooth' })}>CONTACT/ME</button>
          </div>
        </div>
      </section>
      <section id="aboutme">
        <h1 data-value="ABOUT/ME" className={styles.header}>ABOUT/ME</h1>
        <div className={`${styles.content} ${styles.about}`}>
          <div
            onMouseEnter={() => {
              document.getElementById('education').classList.add(`${styles.slideoutleft}`)
              setTimeout(() => {
                setShowEducation(true)
                document.getElementById('education').classList.remove(`${styles.slideoutleft}`)
              }, 300)
            }}
            onMouseLeave={() => {
              document.getElementById('education-data').classList.add(`${styles.slideoutright}`)
              setTimeout(() => {
                setShowEducation(false)
                document.getElementById('education-data').classList.remove(`${styles.slideoutright}`)
              }, 300)
            }}
            className={`${styles.education} aboutcard`}>
            <h3 id="education" className={showEducation ? 'hidden' : ''}>EDUCATION</h3>
            <ul id="education-data" className={showEducation ? '' : 'hidden'}>
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
          <div
            onMouseEnter={() => {
              document.getElementById('experience').classList.add(`${styles.slideoutleft}`)
              setTimeout(() => {
                setShowExperience(true)
                document.getElementById('experience').classList.remove(`${styles.slideoutleft}`)
              }, 300)
            }}
            onMouseLeave={() => {
              document.getElementById('experience-data').classList.add(`${styles.slideoutright}`)
              setTimeout(() => {
                setShowExperience(false)
                document.getElementById('experience-data').classList.remove(`${styles.slideoutright}`)
              }, 300)
            }}
            className={`${styles.experience} aboutcard`}>
            <h3 id="experience" className={showExperience ? 'hidden' : ''}>EXPERIENCE</h3>
            <ul id="experience-data" className={showExperience ? '' : 'hidden'}>
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
          <div
            onMouseEnter={() => {
              document.getElementById('skills').classList.add(`${styles.slideoutleft}`)
              setTimeout(() => {
                setShowSkills(true)
                document.getElementById('skills').classList.remove(`${styles.slideoutleft}`)
              }, 300)
            }}
            onMouseLeave={() => {
              document.getElementById('skills-data').classList.add(`${styles.slideoutright}`)
              setTimeout(() => {
                setShowSkills(false)
                document.getElementById('skills-data').classList.remove(`${styles.slideoutright}`)
              }, 300)
            }}
            className={`${styles.skills} aboutcard`}>
            <h3 id="skills" className={showSkills ? 'hidden' : ''}>SKILLS</h3>
            <ul id="skills-data" className={showSkills ? '' : 'hidden'}>
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
          <div
            onMouseEnter={() => {
              document.getElementById('favfields').classList.add(`${styles.slideoutleft}`)
              setTimeout(() => {
                setShowFavFields(true)
                document.getElementById('favfields').classList.remove(`${styles.slideoutleft}`)
              }, 300)
            }}
            onMouseLeave={() => {
              document.getElementById('favfields-data').classList.add(`${styles.slideoutright}`)
              setTimeout(() => {
                setShowFavFields(false)
                document.getElementById('favfields-data').classList.remove(`${styles.slideoutright}`)
              }, 300)
            }}
            className={`${styles.favfields} aboutcard`}>
            <h3 id="favfields" className={showFavFields ? 'hidden' : ''}>FAVOURITE FIELDS</h3>
            <ul id="favfields-data" className={showFavFields ? '' : 'hidden'}>
              <li>Frontend</li>
              <li>Backend</li>
              <li>Web</li>
              <li>Mobile</li>
            </ul>
          </div>
        </div>
      </section >
      <section id="projects">
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
      <section id="contact">
        <h1 data-value="CONTACT/ME" className={styles.header}>CONTACT/ME</h1>
        <div className={`${styles.content} ${styles.contact}`}>
          <div onClick={() => window.open("mailto:trygvemf@gmail.com", "_blank")} className={styles.contactCard}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            EMAIL
          </div>
          <div onClick={() => window.open("https://github.com/TrygveDev/", "_blank")} className={styles.contactCard}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            GITHUB
          </div>
          <div onClick={() => window.open("https://discordlookup.com/user/294902949979750401", "_blank")} className={styles.contactCard}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            DISCORD
          </div>
          <div onClick={() => window.open("https://www.linkedin.com/in/trygve-melvold-666a96174/", "_blank")} className={styles.contactCard}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            LINKEDIN
          </div>
        </div>
      </section>
    </div >
  );
}

export default App;
