import { IReverseIterator } from "../iterator/IReversableIterator";
import { IReversableIterator } from "../iterator/IReversableIterator";
import { IBidirectionalContainer } from "./IBidirectionalContainer";
import { IEmpty } from "../partial/IEmpty";
import { ISize } from "../partial/ISize";
import { IPush } from "../partial/IPush";
/**
 * src/base/container/IContainer.ts
 */
export interface IContainer<
    T extends PElem,
    IteratorT extends IContainer.Iterator<T, IteratorT, ReverseT>,
    ReverseT extends IContainer.ReverseIterator<T, IteratorT, ReverseT>,
    /**
     * 제너릭 역 추론
     *
     * 앞으로 구현될 자료구조들은 IContainer를 상속하여 만들어진다.
     * 이 자료구조를 A라고 할 때, 그 A의 데이터 타입 T를 추론하기 위해 만들어진다.
     */
    PElem = T
> extends IBidirectionalContainer<
            IContainer.Iterator<T, IteratorT, ReverseT>,
            ReverseT
        >,
        Iterable<T>,
        IEmpty,
        ISize,
        IPush<PElem> {}

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
