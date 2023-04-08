import { IBidirectionalIterator } from "./IBidirectionalIterator";

/**
 * src/IReversableIterator.ts
 */
export interface IReversableIterator<
    T,
    IteratorT extends IReversableIterator<T, IteratorT, ReverseT>,
    ReverseT extends IReverseIterator<T, IteratorT, ReverseT>
> extends IBidirectionalIterator<T, IteratorT> {
    /**
     * Constuct reverse iterator
     *
     * @return The reverse iterator
     */
    reverse(): ReverseT;
}

/**
 * src/IReverseIterator.ts
 */
export interface IReverseIterator<
    T,
    Base extends IReversableIterator<T, Base, This>,
    This extends IReverseIterator<T, Base, This>
> extends IBidirectionalIterator<T, This> {
    /**
     * Get base iterator.
     *
     * @return The base iterator.
     */
    base(): Base;
}
