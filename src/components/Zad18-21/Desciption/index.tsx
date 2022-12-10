import { ReactElement } from "React";

type Props = {
  desription: string;
};

export default function DescriptionZad1821(props: Props): ReactElement {
  const { desription } = props;

  return <p>{desription}</p>;
}
