import { IBidirectionalContainer } from "./IBidirectionalContainer";

/**
 * src/base/container/IContainer.ts
 */
export interface IContainer<
    T,
    IteratorT extends IContainer.Iterator<T, IteratorT, ReverseT>,
    ReverseT extends IContainer.ReverseIterator<T, IteratorT, ReverseT>
> extends IBidirectionalContainer<
        IContainer.Iterator<T, IteratorT, ReverseT>,
        ReverseT
    > {}

/**
 * IContainer가 가지는 내부 속성
 */
export namespace IContainer {
    export interface Iterator<
        T,
        IteratorT extends Iterator<T, IteratorT, ReverseT>,
        ReverseT extends ReverseIterator<T, IteratorT, ReverseT>
    > {
        reverse(): any;
        prev(): any;
        next(): any;
        equals(): any;
        value(): any;
    }

    export interface ReverseIterator<
        T,
        IteratorT extends Iterator<T, IteratorT, ReverseT>,
        ReverseT extends ReverseIterator<T, IteratorT, ReverseT>
    > {
        base(): any;
        prev(): any;
        next(): any;
        equals(): any;
        value(): any;
    }
}
