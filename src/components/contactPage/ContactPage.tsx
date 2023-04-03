import styles from './ContactPage.module.css'
import { NavLink } from "react-router-dom";

export default function ContactPage() {
    return (<main className="main">
       <h1>Let's work together<span className="color-primary">.</span></h1>
       <h2>If you are interested in my services and would like to hire me for consulting or a full-time job, please use the following methods of contact.</h2>
        
          <div>
            <ul>
        
          <li className={styles.link}><NavLink className="underlined" target="_blank" to="mailto:jplozano6@gmail.com">
            Contact me via email
          </NavLink></li>

          <li className={styles.link}><NavLink className="underlined" target="_blank" to="https://www.linkedin.com/in/juanpablolozano-6/">
            LinkedIn profile
          </NavLink></li>
            </ul>

          {/*<button className={styles.btn} type="button">
            Schedule a meeting
  </button>*/}
          </div>
    </main>);
}