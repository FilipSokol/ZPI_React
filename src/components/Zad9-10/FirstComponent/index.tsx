import { ReactElement } from "React";

interface Props {
  setActivated: (state: boolean) => void;
}

export default function FirstComponentZad910(props: Props): ReactElement {
  const { setActivated } = props;

  return (
    <div>
      <button onClick={() => setActivated(true)}>
        Aktywuj drugi komponent
      </button>
    </div>
  );
}
