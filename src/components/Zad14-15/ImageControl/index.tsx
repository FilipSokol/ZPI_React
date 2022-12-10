import { ReactElement } from "React";
import { imageData } from "..";

import styles from "./ImageControl.module.scss";

interface Props {
  imageId: number;
  imagesArray: imageData[];
  setImageId: (state: number) => void;
}
export default function ImageControl(props: Props): ReactElement {
  const { imagesArray, imageId, setImageId } = props;

  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
        <img src={imagesArray[imageId].url} alt={imagesArray[imageId].name} />
      </div>
      <div className={styles.buttons}>
        <button
          disabled={imageId === 0}
          onClick={() => setImageId(imageId - 1)}
        >
          Poprzednie
        </button>
        <button
          disabled={imageId === imagesArray.length - 1}
          onClick={() => setImageId(imageId + 1)}
        >
          Następne
        </button>
      </div>
    </div>
  );
}
