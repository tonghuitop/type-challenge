// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: string
}


// ============= Your Code Here =============
type isReadonly<Key extends keyof Obj, Obj> =
  Equal<Pick<Obj, Key>, Readonly<Pick<Obj, Key>>> extends true ? Key : never

type GetReadonlyKeys<Obj extends Record<string, any>> = keyof {
  [Key in keyof Obj as isReadonly<Key, Obj>]: Obj[Key]
}
