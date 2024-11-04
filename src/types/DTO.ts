export interface DTO<T> {
  input: T;
  format(isForm?: boolean): T;
}
