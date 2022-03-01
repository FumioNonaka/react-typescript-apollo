import { useCallback } from 'react';
import { makeVar, useReactiveVar } from '@apollo/client';

export const countVar = makeVar(0);
export const useCounter = () => {
	const count = useReactiveVar(countVar);
	const setCount = useCallback((value: number) => countVar(value), [])
	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);
	return { count, decrement, increment };
};
