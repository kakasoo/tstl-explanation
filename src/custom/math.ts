import { Push } from "./tuple";
import { ArrayToUnion, Length, NNTuple, NToNumber, NTuple } from "./utility";

export type Sub<A extends number, B extends number> = NTuple<A> extends [
    ...infer U,
    ...NTuple<B>
]
    ? Length<U>
    : never;

export type Add<N1 extends number, N2 extends number> = Length<
    [...NTuple<N1>, ...NTuple<N2>]
>;

export type LessThan<
    N extends number,
    T extends any[] = []
> = T["length"] extends N ? T : LessThan<N, Push<T, T["length"]>>;

export type LessThanEqual<N extends number, T extends any[] = []> = LessThan<
    NToNumber<Add<N, 1>>
>;

export type GaussSum<
    N1 extends number,
    K = ArrayToUnion<LessThanEqual<N1>>
> = K extends number ? NTuple<K> : never;

export type Multiply<T1 extends number, T2 extends number> = Length<
    NNTuple<T1, T2>
>;

export type Divide<
    T extends number,
    N extends number,
    Answer extends number = 0
> = NTuple<T> extends [...NTuple<N>, ...infer Rest]
    ? Divide<Length<Rest>, N, NToNumber<Add<Answer, 1>>>
    : Answer;

export type Remainder<T extends number, N extends number> = Sub<
    T,
    NToNumber<Multiply<N, Divide<T, N>>>
>;

/**
 * 수의 절대값을 추론하는 타입
 */
export type Absolute<T extends number | string | bigint> =
    `${T}` extends `-${infer R}` ? R : `${T}`;
