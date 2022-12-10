import { MouseEvent, ReactElement } from "react";
import styles from "./Zad23.module.scss";

const data = [
  { name: "google.pl", url: "https://www.google.pl" },
  { name: "wykop.pl", url: "https://www.wykop.pl" },
  { name: "facebook.pl", url: "https://www.dacebook.pl" },
  { name: "pcz.pl", url: "https://www.pcz.pl" },
];

export default function Zad23(): ReactElement {
  const handleClick = (event: MouseEvent<EventTarget>) => {
    const target = event.currentTarget as HTMLButtonElement;
    if (target) {
      target.style.background = "black";
      target.style.color = "gold";
    }
  };

  return (
    <div className={styles.container}>
      {data.map((o) => {
        return (
          <div key={o.name}>
            <a href={o.url} target="_blank" onClick={(e) => handleClick(e)}>
              {o.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
