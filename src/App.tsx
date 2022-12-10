import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
