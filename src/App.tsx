import styles from './App.module.css';
import Footer from './components/Footer';
import Menu from './components/menu/Menu';
import { Outlet } from "react-router-dom"; 

function App() {
  return (
    <div className={styles.container}>
      <Menu />
      <Footer />
      <Outlet />
      
    </div>
  );
}

export default App;
