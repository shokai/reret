/* eslint-env mocha */

import {assert} from 'chai'
import ret from 'ret'
import reret from '../src/'

describe('reret', function () {
  describe('simple', function () {
    const source = 'a+'
    assert.equal(source, reret(ret(source)))
  })
})
