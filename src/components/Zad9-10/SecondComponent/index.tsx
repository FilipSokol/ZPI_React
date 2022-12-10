import { ReactElement } from "React";

interface Props {
  setActivated: (state: boolean) => void;
}

export default function SecondComponentZad910(props: Props): ReactElement {
  const { setActivated } = props;

  return (
    <div>
      <div>Drugi komponent</div>
      <button onClick={() => setActivated(false)}>
        Deaktywuj drugi komponent
      </button>
    </div>
  );
}
