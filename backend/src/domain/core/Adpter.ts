export interface IAdapter<T, R> {
    parse(adapt: T): R;
}