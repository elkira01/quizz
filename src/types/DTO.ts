export interface DTO<T> {
  input: T | any;
  format(isForm?: boolean): T | any;
}
