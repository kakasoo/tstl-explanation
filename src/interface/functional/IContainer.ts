import { IReverseIterator } from "../iterator/IReversableIterator";
import { IReversableIterator } from "../iterator/IReversableIterator";
import { IBidirectionalContainer } from "./IBidirectionalContainer";
import { IEmpty } from "../partial/IEmpty";
import { ISize } from "../partial/ISize";
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
        >,
        Iterable<T>,
        IEmpty,
        ISize {}

/**
 * IContainer가 가지는 내부 속성
 */
export namespace IContainer {
    export interface Iterator<
        T,
        IteratorT extends Iterator<T, IteratorT, ReverseT>,
        ReverseT extends ReverseIterator<T, IteratorT, ReverseT>
    > extends Readonly<IReversableIterator<T, IteratorT, ReverseT>> {}

    export interface ReverseIterator<
        T,
        IteratorT extends Iterator<T, IteratorT, ReverseT>,
        ReverseT extends ReverseIterator<T, IteratorT, ReverseT>
    > extends Readonly<IReverseIterator<T, IteratorT, ReverseT>> {}
}
