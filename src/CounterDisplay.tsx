import { VFC } from 'react';
import { useCounter } from './useCounter';

export const CounterDisplay: VFC = () => {
	const { count, decrement, increment } = useCounter();
	return (
		<div>
			<button onClick={decrement}>-</button>
			<span>{count}</span>
			<button onClick={increment}>+</button>
		</div>
	);
}
