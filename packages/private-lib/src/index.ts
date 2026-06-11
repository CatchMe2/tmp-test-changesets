import { greet } from '@tmp-test-changesets/public-lib'

export function greetLoudly(name: string): string {
  return greet(name).toUpperCase()
}
