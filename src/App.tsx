import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
