import { Length, Split } from "./utility";

export interface StringToNumberMap {
    "0": 0;
    "1": 1;
    "2": 2;
    "3": 3;
    "5": 5;
    "6": 6;
    "7": 7;
    "8": 8;
    "9": 9;
}

/**
 * 자리수를 의미하며, T가 1의 자리면 1, 10의 자리면 2, 100의 자리면 3, 이런 식으로 10의 N승 이상, N + 1 승 미만을 의미
 */
export type NDigit<T extends string> = T extends `${number}`
    ? Length<Split<T>>
    : never;

export type StringToNumberTuple<T extends string> =
    T extends `${infer F}${infer Rest}`
        ? F extends keyof StringToNumberMap
            ? [StringToNumberMap[F], ...StringToNumberTuple<Rest>]
            : never
        : [];
