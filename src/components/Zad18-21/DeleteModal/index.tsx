import { ReactElement } from "React";
import { Data } from "..";

type Props = {
  id: number;
  setModalHidden: (state: boolean) => void;
  arrayData: Data[];
  setArrayData: (state: Data[]) => void;
  setActivated: (state: boolean) => void;
};

export default function DeleteModal1821(props: Props): ReactElement {
  const { id, setModalHidden, setArrayData, arrayData, setActivated } = props;

  return (
    <div>
      <div>Czy na pewno chcesz usunąć link?</div>
      <button
        onClick={() => {
          setArrayData(arrayData.filter((item: Data) => item.id !== id));
          setModalHidden(false);
          setActivated(false);
        }}
      >
        Tak
      </button>
      <button onClick={() => setModalHidden(false)}>Nie</button>
    </div>
  );
}
