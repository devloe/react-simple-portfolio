import styles from './TechPage.module.css'

export default function TechPage() {
    return (<section className="main">
        <h1>Tech stack <span className="color-primary">.</span></h1>
        <h2>The following are the languages and frameworks that I domain, ordered by expertise.</h2>
        <div className={styles.container}>
        <div>
            <h3>Languages</h3>
            <p>Javascript </p>
            <p>Typescript </p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Swift</p>
            <p>PHP</p>
            <p>Java/Kotlin</p>
            <p>SQL</p>
            <p>Dart</p>
        </div>

        <div>
            <h3>Frameworks & Libraries</h3>
            <p>Vue</p>
            <p>React 16+</p>
            <p>Angular</p>
            <p>Webpack</p>
            <p>NodeJS</p>
            <p>Flutter</p>
            <p>Jest</p>
            <p>Cypress</p>
            <p>Laravel</p>
        </div>
        </div>
    </section>);
}