import { useReactiveVar } from "@apollo/client";
import { VFC } from "react";
import { countVar } from "./useCounter";

export const CountNumber: VFC = () => {
	const count = useReactiveVar(countVar);
	return <span>{count}</span>
}
