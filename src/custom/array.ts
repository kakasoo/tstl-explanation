import { Add, Multiply } from "./math";

export type AddMap<T extends readonly number[], N extends number> = {
    [K in keyof T]: Add<T[K], N>;
};

export type MultiplyMap<T extends readonly number[], N extends number> = {
    [K in keyof T]: Multiply<T[K], N>;
};

export type Map<
    T extends readonly number[],
    OP extends "Add" | "Multiply",
    N extends number
> = OP extends "Add"
    ? { [K in keyof T]: Add<T[K], N> }
    : { [K in keyof T]: Multiply<T[K], N> };
