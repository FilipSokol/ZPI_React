import Zad1 from "../../components/Zad1";
import Zad11 from "../../components/Zad11";
import Zad1213 from "../../components/Zad12-13";
import Zad1415 from "../../components/Zad14-15";
import Zad1617 from "../../components/Zad16-17";
import Zad1821 from "../../components/Zad18-21";
import Zad23 from "../../components/Zad2-3";
import Zad45 from "../../components/Zad4-5";
import Zad678 from "../../components/Zad6-8";
import Zad910 from "../../components/Zad9-10";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Zad1 />
      <Zad23 />
      <Zad45 />
      <Zad678 />
      {/* Brak Reactowej logiki. Staty powinny trzymać się w rodzicu w takim przypadku. */}
      <Zad910 />
      <Zad11 />
      <Zad1213 />
      <Zad1415 />
      <Zad1617 />
      <Zad1821 />
    </div>
  );
}
