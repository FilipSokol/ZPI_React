import { ReactElement } from "React";

interface Props {
  setText: (text: string) => void;
  setActivated: (state: boolean) => void;
}
export default function FirstComponentZad11(props: Props): ReactElement {
  const { setText, setActivated } = props;

  return (
    <div>
      <button
        onClick={() => {
          setText("");
          setActivated(true);
        }}
      >
        Aktywuj drugi komponent
      </button>
    </div>
  );
}
