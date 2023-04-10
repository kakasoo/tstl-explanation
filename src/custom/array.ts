import { Add, Divide, Multiply, Remainder, Sub } from "./math";

export type AddMap<T extends readonly number[], N extends number> = {
    [K in keyof T]: Add<T[K], N>;
};

export type MultiplyMap<T extends readonly number[], N extends number> = {
    [K in keyof T]: Multiply<T[K], N>;
};

export type Map<
    T extends readonly number[],
    OP extends "Add" | "Multiply" | "Sub" | "Divide" | "Remainder",
    N extends number
> = OP extends "Add"
    ? { [K in keyof T]: Add<T[K], N> }
    : OP extends "Multiply"
    ? { [K in keyof T]: Multiply<T[K], N> }
    : OP extends "Sub"
    ? { [K in keyof T]: Sub<T[K], N> }
    : OP extends "Divide"
    ? { [K in keyof T]: Divide<T[K], N> }
    : OP extends "Remainder"
    ? { [K in keyof T]: Remainder<T[K], N> }
    : never;
