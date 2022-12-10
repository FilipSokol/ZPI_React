import { ReactElement, useEffect, useState } from "react";
import DeleteModal1821 from "./DeleteModal";
import DescriptionZad1821 from "./Desciption";
import styles from "./Zad1821.module.scss";

export type Data = {
  id: number;
  url: string;
  name: string;
  description: string;
};

const data = [
  {
    id: 1,
    url: "google.pl",
    name: "google.pl",
    description: "Google strona szukajka. Lorem Impsuuuuuuu",
  },
  {
    id: 2,
    url: "wykop.pl",
    name: "wykop.pl",
    description: "Wykop pel. Lorem Impsuuuuuuu",
  },
  {
    id: 3,
    url: "facebook.pl",
    name: "facebook.pl",
    description: "Facebook strona dla debili. Lorem Impsuuuuuuu",
  },
  {
    id: 4,
    url: "pcz.pl",
    name: "pcz.pl",
    description: "Pcz królem uczelni. Lorem Impsuuuuuuu",
  },
];

export default function Zad1821(): ReactElement {
  const [arrayData, setArrayData] = useState<Data[]>([]);
  const [activated, setActivated] = useState(false);
  const [description, setDescription] = useState("");
  const [deleteArrayObjectId, setDeleteArrayObjectId] = useState(0);
  const [modalHidden, setModalHidden] = useState(false);

  const [showError, setShowError] = useState(true);
  const [elementUrl, setElementUrl] = useState("");
  const [elementName, setElementName] = useState("");
  const [elementDesc, setElementDesc] = useState("");

  const sumbitForm = (e: any) => {
    e.preventDefault();

    const newElement = {
      id: Math.floor(Math.random() * 1000000000),
      url: elementUrl,
      name: elementName,
      description: elementDesc,
    };

    if (elementUrl !== "" || elementName !== "" || elementDesc !== "") {
      setArrayData(arrayData.concat(newElement));
      setElementUrl("");
      setElementName("");
      setElementDesc("");
    } else {
      setShowError(true);
      console.log("brak danych");
    }
  };

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
          <DeleteModal1821
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
          <DescriptionZad1821 desription={description} />
        </div>
      )}

      <form className={styles.form} onSubmit={sumbitForm}>
        <label>
          <p>Url: </p>
          <input
            value={elementUrl}
            onChange={(e) => setElementUrl(e.currentTarget.value)}
          />
        </label>
        <label>
          <p>Nazwa: </p>
          <input
            value={elementName}
            onChange={(e) => setElementName(e.currentTarget.value)}
          />
        </label>
        <label>
          <p>Opis: </p>
          <textarea
            value={elementDesc}
            onChange={(e) => setElementDesc(e.currentTarget.value)}
          />
        </label>
        <div className={styles.buttons}>
          <button
            type="submit"
            disabled={
              elementUrl === "" || elementName === "" || elementDesc === ""
            }
          >
            Zapisz
          </button>
          <button
            type="button"
            onClick={() => {
              setElementUrl("");
              setElementName("");
              setElementDesc("");
              setShowError(false);
            }}
          >
            Anuluj
          </button>
        </div>
        {showError && (
          <div className={styles.error}>Błąd! Podaj wszystkie dane.</div>
        )}
      </form>
    </div>
  );
}
