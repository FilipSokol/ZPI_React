import styles from "./Zad678.module.scss";
import { ReactElement, useState } from "React";

export default function Zad45(): ReactElement {
  const [imageId, setImageId] = useState(0);
  const imagesArray = [
    {
      name: "arekNaMotorku",
      url: "https://scontent.fktw1-1.fna.fbcdn.net/v/t31.18172-8/10443106_457407434398403_8873145285370888667_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=9qkT559Y3TAAX9xIrix&_nc_ht=scontent.fktw1-1.fna&oh=00_AfBDMSUx9HzqtLVGIG01V0DlqlbTlWhazWGIkpxJ9WjA1A&oe=63AF5B01",
    },
    {
      name: "matiPrzyStole",
      url: "https://scontent.fktw4-1.fna.fbcdn.net/v/t1.6435-9/47181248_1442455422553431_4735867000562122752_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=HlJhYqnlmC4AX_JEkZ3&tn=HHn0QO6V8GgRYZ2C&_nc_ht=scontent.fktw4-1.fna&oh=00_AfCzhNvwpZI2iq8TFIPSabIQbdJbsRQOoX0UrW-GRC66bg&oe=63AF39A4",
    },
    {
      name: "arekWGorach",
      url: "https://scontent.fktw4-1.fna.fbcdn.net/v/t1.6435-9/118949259_1790799677725832_1690596979150635208_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=DxaNwn3hg70AX-3IJqQ&tn=HHn0QO6V8GgRYZ2C&_nc_ht=scontent.fktw4-1.fna&oh=00_AfBSkp-JDL7SbluQvGls3eZWts--FIBFunNDRUANIkkdLw&oe=63AF3F88",
    },
    {
      name: "matiSpi",
      url: "https://scontent.fktw4-1.fna.fbcdn.net/v/t1.6435-9/47366729_1442455579220082_2946945123855892480_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=N8htxVeYADkAX8p5tyT&_nc_oc=AQm6PqP7U2b4CCQVvpWHBZmbE506veqHGhLV6hogSS_ZmmRPH71QXiIbKxtZBzYJJfY&_nc_ht=scontent.fktw4-1.fna&oh=00_AfB_iNAdRoKMenC5n7oI7QRAA-GMsiraDNPEtBsUgpMqvA&oe=63AF4AFB",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imagesBox}>
        <img src={imagesArray[imageId].url} alt={imagesArray[imageId].name} />
      </div>
      <div className={styles.buttons}>
        {imageId !== 0 && (
          <button onClick={() => setImageId(imageId - 1)}>Poprzedni</button>
        )}
        {imageId !== imagesArray.length - 1 && (
          <button onClick={() => setImageId(imageId + 1)}>Następna</button>
        )}
      </div>
    </div>
  );
}
