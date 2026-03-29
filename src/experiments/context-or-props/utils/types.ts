export const isNonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined
}

export const isArrayOfNonNullable = <T>(array: T[]): array is NonNullable<T>[] => {
  return array.every(isNonNullable)
}
