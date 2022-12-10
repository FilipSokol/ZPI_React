import { ReactElement, useEffect, useState } from "react";
import DeleteModal1213 from "./DeleteModal";
import DescriptionZad1213 from "./Desciption";
import styles from "./Zad23.module.scss";

export type Data = {
  id: number;
  name: string;
  description: string;
};

const data = [
  {
    id: 1,
    name: "google.pl",
    description: "Google strona szukajka. Lorem Impsuuuuuuu",
  },
  {
    id: 2,
    name: "wykop.pl",
    description: "Wykop pel. Lorem Impsuuuuuuu",
  },
  {
    id: 3,
    name: "facebook.pl",
    description: "Facebook strona dla debili. Lorem Impsuuuuuuu",
  },
  {
    id: 4,
    name: "pcz.pl",
    description: "Pcz królem uczelni. Lorem Impsuuuuuuu",
  },
];

export default function Zad1213(): ReactElement {
  const [arrayData, setArrayData] = useState<Data[]>([]);
  const [activated, setActivated] = useState(false);
  const [description, setDescription] = useState("");
  const [deleteArrayObjectId, setDeleteArrayObjectId] = useState(0);
  const [modalHidden, setModalHidden] = useState(false);

  useEffect(() => {
    setArrayData(data);
  }, []);

  return (
    <div className={styles.container}>
      {arrayData.map((o) => {
        return (
          <div key={o.name}>
            <a
              onClick={() => {
                setDeleteArrayObjectId(o.id);
                setActivated(true);
                setDescription(o.description);
              }}
            >
              {o.name}
              <button onClick={() => setModalHidden(!modalHidden)}>Usuń</button>
            </a>
          </div>
        );
      })}
      <div className={styles.modal}>
        {modalHidden && (
          <DeleteModal1213
            id={deleteArrayObjectId}
            arrayData={arrayData}
            setArrayData={setArrayData}
            setModalHidden={setModalHidden}
            setActivated={setActivated}
          />
        )}
      </div>

      {activated && (
        <div className={styles.description}>
          <DescriptionZad1213 desription={description} />
        </div>
      )}
    </div>
  );
}
