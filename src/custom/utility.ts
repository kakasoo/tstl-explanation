export type Split<T extends string> = T extends `${infer F}${infer Rest}`
    ? [F, ...Split<Rest>]
    : [];
