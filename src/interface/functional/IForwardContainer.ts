import { IForwardIterator } from "../iterator/IForwardIterator";

export interface IForwardContainer<
    T,
    Iterator extends IForwardIterator<T, Iterator>
> {
    /**
     * @returns Iterator to the first element.
     */
    begin(): Iterator;

    /**
     * @returns Iterator to the end element.
     */
    end(): Iterator;
}
