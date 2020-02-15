import { handler } from '../src'
import assert = require('assert');

describe('hello', () => {
    it('greets', async () => {
        handler({ queries: { a: 'a' } }, { setStatusCode: () => { }, send: console.log }, {})

        assert(process.title === 'npm')
    })
})
