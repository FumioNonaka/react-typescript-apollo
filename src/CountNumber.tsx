import { VFC } from 'react';
import { useCounter } from './useCounter';

export const CountNumber: VFC = () => {
	const { count } = useCounter();
	return <span>{count}</span>
}
