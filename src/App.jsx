"use client";
import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.mask}>
        <p>
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </div>

      <div className={styles.body}>
        <p>
          I'm a <span>selectively skilled</span> product designer with strong
          focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  );
}

export default App;
