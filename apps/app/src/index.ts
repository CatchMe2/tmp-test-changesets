import { greet } from '@tmp-test-changesets/public-lib'
import { greetLoudly } from '@tmp-test-changesets/private-lib'

console.log(greet('world'))
console.log(greetLoudly('world'))
