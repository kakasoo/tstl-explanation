import { Sub } from "./math";
import { Length } from "./utility";

/**
 * PartitionByTwo<[1,2,3,4,5,6,7,8]> // [[1,2],[3,4],[5,6],[7,8]]
 */
export type PartitionByTwo<
    T extends any[],
    L extends number = Length<T>
> = T extends [infer First, infer Second, ...infer Rest]
    ? [[First, Second], ...PartitionByTwo<Rest, Sub<L, 2>>]
    : [];
