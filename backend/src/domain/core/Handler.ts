export interface IHandler<T, R> {
    execute(command: T): Promise<R>;
}