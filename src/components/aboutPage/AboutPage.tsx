'use client';

import { NavLink } from 'react-router-dom';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <main>
      <h1 className={styles.mainTitle}>
        Fuel by passion and curiosity<span className="color-primary">.</span>
      </h1>
      <h2 className={styles.mainSubtitle}>
        I'm Juan Pablo, a software developer specialized in frontend with over
        10 years of experience in the industry.
      </h2>
      <div className={styles.intro}>
        <p>
          I'm passionate about creating elegant and functional user interfaces
          that improve user experience and bring designs to life.
        </p>

        <p>
          {' '}
          Throughout my career, I have worked with a variety of programming
          languages and frameworks. I have collaborated with cross-functional
          teams to build web and mobile applications, ensuring that they are
          responsive, accessible, and optimized for performance.
        </p>

        <p>
          {' '}
          In addition to my technical skills, I bring a strong work ethic,
          attention to detail, and a collaborative mindset to every project. I
          believe in staying up-to-date with the latest trends and best
          practices in frontend development, and I enjoy sharing my knowledge
          and insights with others.
        </p>

        <p>
          <NavLink
            target="_blank"
            to={`CV-JuanPabloLozano.pdf`}
            className="underlined mr-4"
          >
            View resumè
          </NavLink>{' '}
        </p>
      </div>
    </main>
  );
}
