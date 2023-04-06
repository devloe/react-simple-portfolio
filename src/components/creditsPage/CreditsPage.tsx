import { NavLink } from 'react-router-dom';
import styles from './CreditsPage.module.css';

export default function CreditsPage() {
  return (
    <main>
      <h1>
        Credits & Disclaimer<span className="color-primary">.</span>
      </h1>

      <h3>Libraries used:</h3>
      <ul className="mb-8">
        <li>
          <NavLink
            to="https://es.reactjs.org/"
            className="underlined"
            target="_blank"
            rel="noreferrer"
          >
            React
          </NavLink>{' '}
          +{' '}
          <a
            href="https://create-react-app.dev/"
            className="underlined"
            target="_blank"
            rel="noreferrer"
          >
            Create React App
          </a>
        </li>
        <li>
          <a
            href="https://redux.js.org/"
            className="underlined"
            target="_blank"
            rel="noreferrer"
          >
            Redux
          </a>
        </li>
        <li>
          <a
            href="https://github.com/css-modules/css-modules"
            className="underlined"
            target="_blank"
            rel="noreferrer"
          >
            CSS Modules
          </a>
        </li>
        <li>
          <a
            href="https://tailwindui.com/"
            className="underlined"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind
          </a>{' '}
          +{' '}
          <a
            href="https://heroicons.dev/"
            className="underlined"
            target="_blank"
            rel="noreferrer"
          >
            HeroIcons
          </a>
        </li>
        <li>
          <a
            href="https://github.com/maxeth/react-type-animation"
            className="underlined"
            target="_blank"
            rel="noreferrer"
          >
            React Type Animation
          </a>
        </li>
      </ul>

      <p>
        The source code of this website is freely available on{' '}
        <a
          href="https://github.com/devloe/jplozano-cra"
          className="underlined"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        . <br />
        You can fork/clone it to build your own portfolio. The only thing I ask
        for in return is that you can include a disclaimer somewhere.
      </p>
    </main>
  );
}
