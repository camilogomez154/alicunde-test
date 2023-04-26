export interface IValidator<T> {
    validate(command: T): Promise<void>;
}