export type Length<T extends any[]> = T["length"];

export type Sub<A extends number, B extends number> = NTuple<A> extends [
    ...infer U,
    ...NTuple<B>
]
    ? Length<U>
    : never;

export type Push<T extends any[], V> = [...T, V];

export type NTuple<
    N extends number,
    T extends any[] = []
> = T["length"] extends N ? T : NTuple<N, Push<T, any>>;

type Add<N1 extends number, N2 extends number> = Length<
    [...NTuple<N1>, ...NTuple<N2>]
>;

/**
 * 타입 파라미터 N에 따라 AddOne<N>의 결과가 달라지기 때문에 이와 같은 타입은 타입 파라미터에 할당될 수 없다.
 * 따라서 AddOne<N>을 타입 파라미터로 주기 전에 타입을 다시 number로 바꿔주는 유틸리티성 타입이 필요하다.
 *
 * export type LessThanEqual<N extends number, T extends any[] = []> = LessThan<<AddOne<N>>;
 */
export type NToNumber<N> = N extends number ? N : never;

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

export type c = GaussSum<5>["length"];

export type d = LessThanEqual<5>;

export type ArrayToUnion<T extends any[]> = T[number];

export type b = ArrayToUnion<LessThan<2>>;

export type NNTuple<
    N1 extends number,
    N2 extends number,
    P extends any[] = []
> = Sub<N1, 1> extends never
    ? []
    : [...NNTuple<Sub<N1, 1>, N2, [...P, ...NTuple<N2>]>, ...NTuple<N2>];
