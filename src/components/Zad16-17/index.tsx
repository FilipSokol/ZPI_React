import styles from "./Zad1617.module.scss";
import { ReactElement, useState } from "React";

export default function Zad1617(): ReactElement {
  const [inputDataZad16, setInputDataZad16] = useState("");
  const [inputDataZad17, setInputDataZad17] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <p>Zadanie 16</p>
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setInputDataZad16(e.currentTarget.value)
          }
        />
        <p>{inputDataZad16}</p>
      </div>

      <div className={styles.task}>
        <p>Zadanie 17</p>
        <input
          value={inputDataZad17}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setInputDataZad17(e.currentTarget.value)
          }
        />
        <input
          value={inputDataZad17}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setInputDataZad17(e.currentTarget.value)
          }
        />
      </div>
    </div>
  );
}
