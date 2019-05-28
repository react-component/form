export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function toArray<T>(value?: T | T[] | null): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [ value ];
}
