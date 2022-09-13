// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
]


// ============= Your Code Here =============
/**
 * 题解：
 *   本题的关键点是如何获取到 类型的可选属性
 *    T extends Record<K, T[K]> ? never : K
 */
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type OptionalKeys<T> = {
  [K in keyof T]-?: T extends Record<K, T[K]> ? never : K
}[keyof T]

type GetOptional<T> = MyPick<T, OptionalKeys<T>>