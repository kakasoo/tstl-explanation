import { IForwardIterator } from "./IForwardIterator";

/**
 * Bidirectional iterator
 *
 * src/iterator/IBidirectionalIterator.ts
 */
export interface IBidirectionalIterator<
    T,
    Iterator extends IBidirectionalIterator<
        T,
        Iterator
    > = IBidirectionalIterator<T, any>
> extends IForwardIterator<T, Iterator> {
    prev(): Iterator;
}
