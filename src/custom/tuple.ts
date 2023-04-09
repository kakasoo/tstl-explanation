import { Length, Sub } from "./math";

export type PartitionByTwo<
    T extends any[],
    L extends number = Length<T>
> = T extends [infer First, infer Second, ...infer Rest]
    ? [[First, Second], ...PartitionByTwo<Rest, Sub<L, 2>>]
    : [];
