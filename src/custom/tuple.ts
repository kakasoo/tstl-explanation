import { Sub } from "./math";
import { Equal, Length, ToString, ToStringTuple } from "./utility";

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

/**
 * 현재 튜플 형태에 새로운 타입 하나를 추가하는 타입
 *
 * Push<[], any> // [any]
 * Push<[], 1> // [1]
 */
export type Push<T extends any[], V> = [...T, V];

/**
 * Pop<[1,2,3]> // [1,2]
 */
export type Pop<T extends any[]> = T extends [...infer Rest, infer Last]
    ? Rest
    : [];

export type Includes<T extends readonly any[], U> = T extends [
    infer P,
    ...infer R
]
    ? Equal<U, P> extends true
        ? true
        : Includes<R, U>
    : false;

/**
 * 튜플에서 중복 요소를 제거하는 타입
 *
 * Distinct<[1,1,2,2,3,3,3,4]> // [1,2,3,4]
 */
export type Distinct<T extends any[], P extends any[] = []> = T extends [
    infer F,
    ...infer Rest
]
    ? Includes<P, F> extends false
        ? Distinct<Rest, [...P, F]>
        : Distinct<Rest, P>
    : P;
