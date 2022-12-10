import { ReactElement } from "React";
import { imageData } from "..";

import styles from "./SideMenu.module.scss";

interface Props {
  imageId: number;
  imagesArray: imageData[];
  setImageId: (state: number) => void;
}
export default function SideMenu(props: Props): ReactElement {
  const { imagesArray, imageId, setImageId } = props;

  return (
    <div className={styles.container}>
      {imagesArray.map((data: imageData, idx) => {
        return (
          <button
            key={idx}
            className={`${
              imageId === idx ? styles.imageBoxActivated : styles.imageBox
            }`}
            onClick={() => setImageId(idx)}
          >
            <img src={data.url} alt={data.name} />
          </button>
        );
      })}
    </div>
  );
}
