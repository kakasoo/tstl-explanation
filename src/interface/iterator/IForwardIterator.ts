import { IPointer } from "../functional/IPointer";
import { IComparable } from "../functional/IComparable";

/**
 * src/iterator/IFowardIterator.ts
 *
 * IPointer<T>는 현재 iterator가 가리키고 있는 current value를 의미.
 * Iterator는 이터레이터끼리 비교하기 위한 equals 메서드를 가져야 한다.
 */
export interface IForwardIterator<
    T,
    Iterator extends IForwardIterator<T, Iterator> = IForwardIterator<T, any>
> extends IPointer<T>,
        Pick<IComparable<Iterator>, "equals"> {
    /**
     * Get next iterator
     *
     * @return The next iterator
     */
    next(): Iterator;

    /**
     * Test whether equal to other iterator.
     *
     * @param obj The iterator to compare.
     * @return Whether equal or not.
     */
    equals(obj: Iterator): boolean;
}
