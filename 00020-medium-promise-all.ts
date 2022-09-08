// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]


// ============= Your Code Here =============
type MyAwaited<T> = T extends Promise<infer X> ? X : T
// declare function PromiseAll<T extends any[]>(value: readonly [...T]): Promise<{[P in keyof T]: MyAwaited<T[P]>}>


declare function PromiseAll<T extends any[]>(value: readonly [...T]): Promise<MapAwaited2<T>>
type MapAwaited2<T extends readonly any[]> = T extends [infer F, ...infer R] ? [MyAwaited<F>,  ...MapAwaited2<R>] : T
