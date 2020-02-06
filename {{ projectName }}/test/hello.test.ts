import { handler } from '../src'
import assert = require('assert');

const promisify = (callbackway: any) => async (...args: any) => new Promise((resolve, reject) => callbackway(...args, (err, res) => err ? reject(err) : resolve(res)))

describe('hello', () => {
    it('greets', async () => {
        const res = await promisify(handler)({}, {})

        assert(res === 'hello world, from typescript')
    })
})
