// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]

// ============= Your Code Here =============
/**
 * 1. `U extends unknown ? (args: U) => void : never` 将生成函数的联合函数类型 比如：((args: true) => void) | ((args: 42) => void) | ((args: "foo") => void)
 * 2. `extends (args: infer T) => void ? T : never` 将联合函数聚合成一个函数，👆的联合函数将变为交叉参数的函数 (args: 'foo' & 42 & true) => void
 * 3. 返回出函数参数
 * 
 * 知识点：第二步骤 联合函数的类型，怎么就变成了交叉参数的一个函数？ ts对应PR：https://github.com/Microsoft/TypeScript/pull/21496
 * 即：在 逆变位置 的同一类型变量中的多个候选会被 推断 成 交叉类型。【函数参数是逆变的，而对象属性是协变的。】
 * 关于 逆变与协变 https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html
 */

type UnionF<U> = U extends unknown ? (args: U) => void : never
type UnionToIntersection<U> = UnionF<U> extends (args: infer T) => void ? T : never

