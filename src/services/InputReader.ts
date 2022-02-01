export interface InputReader<T> {
    read(): Promise<T>
}