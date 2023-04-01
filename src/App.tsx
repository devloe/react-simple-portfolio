import styles from './App.module.css';
import Menu from './components/menu/Menu';
import { Outlet } from "react-router-dom"; 

function App() {
  return (
    <div className={styles.container}>
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
