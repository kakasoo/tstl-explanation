import { IForwardIterator } from "../interface/iterator/IForwardIterator";

export class Repeater<T> implements Readonly<IForwardIterator<T, Repeater<T>>> {
    private index_: number;
    private value_: T | undefined;
    public constructor(index: number, value?: T) {
        this.index_ = index;
        this.value_ = value;
    }

    public index(): number {
        return this.index_;
    }

    public get value(): T {
        return this.value_!;
    }

    next(): Repeater<T> {
        ++this.index_;
        return this;
    }
    equals(obj: Repeater<T>): boolean {
        return this.index() === obj.index();
    }
}
