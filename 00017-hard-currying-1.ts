// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]


// ============= Your Code Here =============
// 在多个参数的函数中，通过调用函数返回函数的思路，每次返回一个只带有一个变量的函数，通过 infer + 递归
type Impl<Fn> = Fn extends ((...args: infer Args) => infer R)
  ? Args extends [infer F, ...infer Rest] 
    ? (k: F) => Impl<(...args: Rest) => R> 
    : R
  : never
declare function Currying<Fn>(fn: Fn): Impl<Fn>
