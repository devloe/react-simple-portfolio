import styles from './TechPage.module.css'

export default function TechPage() {
    return (<main className="main">
        <h1>Tech stack <span className="color-primary">.</span></h1>
        <h2>The following are the languages and frameworks in which I have expertise, ordered by proficiency.</h2>
        <div className={styles.container}>
            <div>
                <h3>Languages</h3>
                <ul>
                    <li>Javascript </li>
                    <li>Typescript </li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Swift</li>
                    <li>PHP</li>
                    <li>Java/Kotlin</li>
                    <li>SQL</li>
                    <li>Dart</li>
                </ul>
            </div>

            <div>
            <h3>Frameworks</h3>
            <ul>
                <li>Vue</li>
                <li>React 16+</li>
                <li>Angular</li>
                <li>Webpack</li>
                <li>NodeJS</li>
                <li>Flutter</li>
                <li>Jest</li>
                <li>Cypress</li>
                <li>Laravel</li>
            </ul>
            </div>
        </div>
    </main>);
}