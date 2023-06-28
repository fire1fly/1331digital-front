import { CounterSchema } from '../../types/counterSchema';

export const getCounterValue = (counter: CounterSchema) => counter.value;
