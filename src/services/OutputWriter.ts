export interface OutputWriter<T> {
    write(data: T): void;
}