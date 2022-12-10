import styles from "./Zad910.module.scss";
import { ReactElement, useState } from "React";
import FirstComponentZad910 from "./FirstComponent";
import SecondComponentZad910 from "./SecondComponent";

export default function Zad910(): ReactElement {
  const [activated, setActivated] = useState(false);

  return (
    <div className={styles.container}>
      <FirstComponentZad910 setActivated={setActivated} />

      {activated && <SecondComponentZad910 setActivated={setActivated} />}
    </div>
  );
}
