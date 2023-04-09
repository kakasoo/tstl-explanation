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

export type StringToNumberTuple<T extends string> =
    T extends `${infer F}${infer Rest}`
        ? F extends keyof StringToNumberMap
            ? [StringToNumberMap[F], ...StringToNumberTuple<Rest>]
            : never
        : [];
