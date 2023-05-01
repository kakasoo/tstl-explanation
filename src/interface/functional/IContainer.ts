import { IReverseIterator } from "../iterator/IReversableIterator";
import { IReversableIterator } from "../iterator/IReversableIterator";
import { IBidirectionalContainer } from "./IBidirectionalContainer";
import { IEmpty } from "../partial/IEmpty";
import { ISize } from "../partial/ISize";
import { IPush } from "../partial/IPush";

/**
 * src/base/container/IContainer.ts
 *
 * @template T Stored elements' type
 * @template SourceT Derived type extending this {@link IContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 * @template PElem Parent type of *T*, used for inserting elements through {@link assign} and {@link insert}.
 */
export interface IContainer<
    T extends PElem,
    SourceT extends IContainer<T, SourceT, IteratorT, ReverseT, PElem>,
    IteratorT extends IContainer.Iterator<T, SourceT, IteratorT, ReverseT>,
    ReverseT extends IContainer.ReverseIterator<
        T,
        SourceT,
        IteratorT,
        ReverseT
    >,
    /**
     * 제너릭 역 추론
     *
     * 앞으로 구현될 자료구조들은 IContainer를 상속하여 만들어진다.
     * 이 자료구조를 A라고 할 때, 그 A의 데이터 타입 T를 추론하기 위해 만들어진다.
     * 예컨대 HashMap이 List로 이루어져 있을 때 List의 parent type of T 는 HashMap
     */
    PElem = T
> extends IBidirectionalContainer<
            IContainer.Iterator<T, SourceT, IteratorT, ReverseT>,
            ReverseT
        >,
        Iterable<T>,
        IEmpty,
        ISize,
        IPush<PElem> {
    /**
     * ES6 spec
     */
    [Symbol.iterator](): IterableIterator<T>;

    /**
     * Erase an element.
     *
     * @param pos Position To erase.
     * @return Iterator following the *pos*, strained by the erasing.
     */
    erase(pos: IteratorT): IteratorT;
}

/**
 * IContainer가 가지는 내부 속성
 */
export namespace IContainer {
    /**
     * SourceT는 파생 타입을 의미한다.
     * 이로부터 확장된 타입이 자기 자신 (this)를 가리키도록 하기 위해 만들어진 타입이다.
     * 예를 들어 List class가 IContainer를 통해 구현되었다고 할 때 SourceT는 List 클래스를 가리킨다.
     */
    export interface Iterator<
        T extends Elem,
        SourceT extends IContainer<T, SourceT, IteratorT, ReverseT, Elem>,
        IteratorT extends Iterator<T, SourceT, IteratorT, ReverseT, Elem>,
        ReverseT extends ReverseIterator<T, SourceT, IteratorT, ReverseT, Elem>,
        Elem = T
    > extends Readonly<IReversableIterator<T, IteratorT, ReverseT>> {}

    export interface ReverseIterator<
        T extends Elem,
        SourceT extends IContainer<T, SourceT, IteratorT, ReverseT, Elem>,
        IteratorT extends Iterator<T, SourceT, IteratorT, ReverseT, Elem>,
        ReverseT extends ReverseIterator<T, SourceT, IteratorT, ReverseT, Elem>,
        Elem = T
    > extends Readonly<IReverseIterator<T, IteratorT, ReverseT>> {}
}
