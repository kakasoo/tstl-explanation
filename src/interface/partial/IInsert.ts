import { IPointer } from "../functional/IPointer";
import { IForwardIterator } from "../iterator/IForwardIterator";

/**
 * src/internal/container/partial/IInsert.ts
 */
export interface IInsert<
    Iterator extends IForwardIterator<IPointer.ValueType<Iterator>, Iterator>
> {
    /**
     *
     * @param it IInsert가 가리키고 있는 현재의 이터레이터
     * @param value 새로 추가할 값
     * @return 값이 추가된 이후의 이터레이터
     */
    insert(it: Iterator, value: IPointer.ValueType<Iterator>): Iterator;
}
