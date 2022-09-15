// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]


// ============= Your Code Here =============
type CapitalizeWords<S extends string> =
  S extends `${infer Word} ${infer R}` ? `${CapitalizeWords<Word>} ${CapitalizeWords<R>}`
  : S extends `${infer Word}.${infer R}` ? `${CapitalizeWords<Word>}.${CapitalizeWords<R>}`
  : S extends `${infer Word},${infer R}` ? `${CapitalizeWords<Word>},${CapitalizeWords<R>}`
  : Capitalize<S>
