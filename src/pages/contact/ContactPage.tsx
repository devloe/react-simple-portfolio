import styles from './ContactPage.module.css'
import { Button } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";

export default function ContactPage() {
    return (<section className="main">
       <h1>Let's work together<span className="color-primary">.</span></h1>
       <h2>If you are interested in my services and want to hire me (consulting or full-time job), please use the following ways of contact.</h2>
        
          <div>
            <ul>
        
          <li className={styles.link}><NavLink className="underlined" target="_blank" to="mailto:jplozano6@gmail.com">
            Contact me
          </NavLink></li>

          <li className={styles.link}><NavLink className="underlined" target="_blank" to="https://www.linkedin.com/in/juanpablolozano-6/">
            LinkedIn profile
          </NavLink></li>
            </ul>

          {/*<button className={styles.btn} type="button">
            Schedule a meeting
  </button>*/}
          </div>
    </section>);
}