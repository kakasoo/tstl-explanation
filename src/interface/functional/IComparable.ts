/**
 * src/functional/IComparable.ts
 */

export interface IComparable<T> {
    equals(obj: T): boolean;
    less(obj: T): boolean;
    hashCode(): number;
}
