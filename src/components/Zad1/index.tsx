import styles from "./Zad1.module.scss";
import { ReactElement, useState } from "react";

export default function Zad1(): ReactElement {
  const [name, setName] = useState("");

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setName("Filip Sokół");
        }}
      >
        Dodaj imie i nazwisko
      </button>
      <p>{name}</p>
    </div>
  );
}
