import { Add, Divide, Multiply, Remainder, Sub } from "./math";

/**
 * 사칙연산을 튜플에 적용한 타입
 *
 * type a = Map<[3, 4, 5], "Add", 2>; // [5, 6, 7]
 * type b = Map<[3, 4, 5], "Multiply", 2>; // [6, 8, 10]
 * type c = Map<[3, 4, 5], "Sub", 2>; // [1, 2, 3]
 * type d = Map<[3, 4, 5], "Divide", 2>; // [1, 2, 2]
 * type e = Map<[3, 4, 5], "Remainder", 2>; // [1, 0, 1]
 */
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
