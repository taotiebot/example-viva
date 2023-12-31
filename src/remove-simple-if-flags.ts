import { f1, f2 } from './common'

// If feature flag is true (f1)
f1()
// If feature flag is false (f2)
f2()
// If conditional doesn't have a block wrapper (f1)
f1()

// If else conditional doesn't have a block wrapper (f2)
f2()

// If there are multiple statements inside the block (f1, f2, f3)
f1()
f2()
f1()
// If there are multiple statements inside the block (inverse) (f2, f1)
f2()
f1()
// If feature flag within context (f1)
f1()
// If feature flag within multiple context (f1)
f1()
// If feature flag within context (inverse) (f2)
f2()
// If feature flag within multiple context (inverse) (f2)
f2()
// If feature flag within multiple context (f1)
f1()
// If feature flag within multiple context (f2)
f2()
