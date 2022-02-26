import { VFC } from 'react';
import { useCounter } from './useCounter';
import { CounterButton } from './CounterButton';
import { CountNumber } from './CountNumber';

export const CounterDisplay: VFC = () => {
	const { decrement, increment } = useCounter();
	return (
		<div>
			<CounterButton handleClick={decrement} text="-" />
			<CountNumber />
			<CounterButton handleClick={increment} text="+" />
		</div>
	);
}
