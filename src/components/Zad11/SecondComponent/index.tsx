import { ReactElement } from "React";

type Props = {
  setText: (activated: string) => void;
  setActivated: (state: boolean) => void;
};

export default function SecondComponentZad11(props: Props): ReactElement {
  const { setText, setActivated } = props;

  return (
    <div>
      Czy chesz dalej uczyć się frameworka React?
      <button
        onClick={() => {
          setActivated(false);
          setText("Cieszę się! Idźmy dalej!");
        }}
      >
        Tak
      </button>
      <button
        onClick={() => {
          setActivated(false);
          setText("Przykro mi, że się męczysz!");
        }}
      >
        Nie
      </button>
    </div>
  );
}
