import { IForwardContainer } from "./IForwardContainer";
import {
    IReversableIterator,
    IReverseIterator,
} from "../iterator/IReversableIterator";
import { IPointer } from "./IPointer";

export interface IBdirectionalContainer<
    IteratorT extends IReversableIterator<
        IPointer.ValueType<IteratorT>,
        IteratorT,
        ReverseIteratorT
    >,
    ReverseIteratorT extends IReverseIterator<
        IPointer.ValueType<IteratorT>,
        IteratorT,
        ReverseIteratorT
    >
> extends IForwardContainer<IteratorT> {}
