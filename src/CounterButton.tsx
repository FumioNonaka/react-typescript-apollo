import { VFC } from "react";

type Props = {
	handleClick: () => void;
	text: string;
};
export const CounterButton: VFC<Props> = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
}