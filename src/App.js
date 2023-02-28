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
      <h1>trygve.dev</h1>
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
    </div>
  );
}

export default App;
