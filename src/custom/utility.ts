import { Sub } from "./math";
import { Push } from "./tuple";

export type Length<T extends any[]> = T["length"];

export type ToString<T> = T extends string
    ? T
    : T extends number
    ? `${T}`
    : never;

export type ToStringTuple<T> = T extends string[] ? T : never;

/**
 * 타입 파라미터 N에 따라 AddOne<N>의 결과가 달라지기 때문에 이와 같은 타입은 타입 파라미터에 할당될 수 없다.
 * 따라서 AddOne<N>을 타입 파라미터로 주기 전에 타입을 다시 number로 바꿔주는 유틸리티성 타입이 필요하다.
 *
 * export type LessThanEqual<N extends number, T extends any[] = []> = LessThan<<AddOne<N>>;
 */
export type NToNumber<N> = N extends number ? N : never;

export type NToNumberTuple<N> = N extends number[] ? N : never;

/**
 * 글자를 분리하여 튜플로 변경하는 타입
 *
 * Split<"abcdefg"> // ["a", "b", "c", "d", "e", "f", "g"]
 */
export type Split<T extends string> = T extends `${infer F}${infer Rest}`
    ? [F, ...Split<Rest>]
    : [];

/**
 * N 만큼의 크기를 반환하는 튜플 타입으로,
 * 기본 타입으로 튜플을 받을 경우 그 튜플로부터 N 크기가 될 때까지 any를 Push
 *
 * NTuple<2> // [any, any]
 * NTuple<3, [1]> // [1, any, any]
 * NTuple<4, [1, 'a']> // [1, 'a', any, any]
 */
export type NTuple<
    N extends number,
    T extends any[] = []
> = T["length"] extends N ? T : NTuple<N, Push<T, any>>;

export type ArrayToUnion<T extends any[]> = T[number];

/**
 * N1 * N2 크기의 NTuple을 반환하는 타입으로, 최적화를 위해 N1, N2 숫자를 비교하는 과정이 포함된 타입
 *
 * NNTuple<2,3> = [...NTuple<3>, ...NTuple<3>]
 * NNTuple<3,2> = [...NTuple<3>, ...NTuple<3>]
 */
export type NNTuple<N1 extends number, N2 extends number> = [
    Sub<N1, N2>
] extends [never]
    ? Sub<N1, 1> extends never
        ? []
        : [...NNTuple<Sub<N1, 1>, N2>, ...NTuple<N2>]
    : Sub<N2, 1> extends never
    ? []
    : [...NNTuple<Sub<N2, 1>, N1>, ...NTuple<N1>];

export type IsNever<T> = [T] extends [never] ? true : false;

/**
 * StartsWith<'abc', 'a'> // true
 */
export type StartsWith<
    T extends string,
    U extends string
> = T extends `${U}${string}` ? true : false;

/**
 * EndsWith<'abc', 'c'> // true
 */
export type EndsWith<
    T extends string,
    U extends string
> = T extends `${string}${U}` ? true : false;
