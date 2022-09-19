// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
]


// ============= Your Code Here =============
type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string> =
  S extends `${string}%${infer R}${infer U}`
    ? R extends keyof ControlsMap 
      ? [ControlsMap[R], ...ParsePrintFormat<U>]
      : ParsePrintFormat<U>
    : []

        

// type ParsePrintFormat<
//   S extends string> =
//   S extends `${string}%${infer R}${infer U}`
//   ? R extends keyof ControlsMap 
//   ? [ControlsMap[R],...ParsePrintFormat<U>]
//   : ParsePrintFormat<U>
//   : []  ;
