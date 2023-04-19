import { Sub } from "./math";
import { Length, ToString, ToStringTuple } from "./utility";

/**
 * PartitionByTwo<[1,2,3,4,5,6,7,8]> // [[1,2],[3,4],[5,6],[7,8]]
 */
export type PartitionByTwo<
    T extends any[],
    L extends number = Length<T>
> = T extends [infer First, infer Second, ...infer Rest]
    ? [[First, Second], ...PartitionByTwo<Rest, Sub<L, 2>>]
    : [];

/**
 * Join<['a', 'b', 'c']> // 'abc'
 * Join<['a', 'b', 'c'], '-'> // 'a-b-c'
 */
export type Join<T extends string[], U extends string | number> = T extends [
    infer F,
    ...infer Rest
]
    ? Rest extends []
        ? `${ToString<F>}`
        : `${ToString<F>}${U}${Join<ToStringTuple<Rest>, U>}`
    : "";

export type IsTuple<T extends readonly any[] | { length: number }> = [
    T
] extends [never]
    ? false
    : T extends readonly any[]
    ? number extends T["length"]
        ? false
        : true
    : false;

/**
 * Reverse<[1,2,3]> // [3,2,1]
 */
export type Reverse<T extends any[]> = T extends [infer F, ...infer Rest]
    ? [...Reverse<Rest>, F]
    : [];

/**
 * Shift<[1,2,3]> // [2,3]
 */
export type Shift<T extends any[]> = T extends [infer F, ...infer Rest]
    ? Rest
    : [];

/**
 * Unshift<[1, 2, 3], 4> // [4,1,2,3]
 */
export type Unshift<T extends any[], V> = [V, ...T];
