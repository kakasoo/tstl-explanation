/**
 * src/functional/IPointer.ts
 */

export interface IPointer<T> {
    value: T;
}

export namespace IPointer {
    export type ValueType<Pointer extends IPointer<any>> =
        Pointer extends IPointer<infer T> ? T : unknown;
}
