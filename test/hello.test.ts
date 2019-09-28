import {handler} from '../src'
import assert = require('assert');

describe('hello', () => {
    it('greets', async () => {
        const res = await new Promise((resolve, reject) => handler({}, {}, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        }));

        assert(res === 'hello world, from typescript')
    })
})
