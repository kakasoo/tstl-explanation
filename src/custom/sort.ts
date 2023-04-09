import { Length, NToNumber, NToNumberTuple, Sub } from "./math";

export type Compare<N1 extends number, N2 extends number> = N1 extends N2
    ? true
    : [Sub<N1, N2>] extends [never]
    ? false
    : true;

export type BubbleSort<
    T extends any[],
    L extends number = Length<T>
> = L extends 1
    ? T
    : T extends [infer F, infer S, ...infer Rest]
    ? BubbleSort<
          [
              ...(Compare<NToNumber<F>, NToNumber<S>> extends true
                  ? [F, ...BubbleSort<[S, ...Rest], Sub<L, 1>>]
                  : [S, ...BubbleSort<[F, ...Rest], Sub<L, 1>>])
          ],
          Sub<L, 1>
      >
    : never;
