import styles from "./Zad910.module.scss";
import { ReactElement, useState } from "React";
import FirstComponentZad11 from "./FirstComponent";
import SecondComponentZad11 from "./SecondComponent";

export default function Zad11(): ReactElement {
  const [activated, setActivated] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <FirstComponentZad11 setText={setText} setActivated={setActivated} />

      {activated && (
        <SecondComponentZad11 setText={setText} setActivated={setActivated} />
      )}
      {text}
    </div>
  );
}
