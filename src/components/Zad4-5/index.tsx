import styles from "./Zad45.module.scss";
import { ReactElement, useState } from "React";

export default function Zad45(): ReactElement {
  const [value, setValue] = useState(0);

  const handleClick = (e: string) => {
    switch (e) {
      case "increment":
        setValue(value + 1);
        break;
      case "decrement":
        setValue(value - 1);
        break;
      case "doubleIncrement":
        setValue(value + 2);
        break;
      case "doubleDecrement":
        setValue(value - 2);
        break;
      default:
        setValue(0);
    }
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          handleClick("increment");
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          handleClick("doubleIncrement");
        }}
      >
        +2
      </button>
      <p>{value}</p>
      <button
        onClick={() => {
          handleClick("decrement");
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          handleClick("doubleDecrement");
        }}
      >
        -2
      </button>
    </div>
  );
}
