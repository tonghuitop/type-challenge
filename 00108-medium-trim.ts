// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer rest}` ? TrimLeft<rest> : S
type TrimRight<S extends string> = S extends `${infer rest}${' ' | '\n' | '\t'}` ? TrimRight<rest> : S
type Trim<S extends string> = TrimRight<TrimLeft<S>>
