const freeport = require('../lib/freeport')
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it

describe('freeport', () => {
  it('should find a free port', () => {
    return freeport()
    .then(port => {
      expect(port).to.be.a('number')
      expect(port).to.not.equal(0)
    })
  })

  it('should work with a external promise library', () => {
    const bluebird = require('bluebird')

    return freeport(bluebird)
    .then(port => {
      expect(port).to.be.a('number')
      expect(port).to.not.equal(0)
    })
  })
})
