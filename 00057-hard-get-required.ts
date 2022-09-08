// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]


// ============= Your Code Here =============
// type MyExclue<T, U> = T extends U ? never : T;

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type RequiredKeys<T> = {
  [K in keyof T]-?: T extends Record<K, T[K]> ? K : never
}[keyof T]

type GetRequired<T> = MyPick<T, RequiredKeys<T>>
