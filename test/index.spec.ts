import { freeport } from '../src/index.js'
import { expect } from 'aegir/utils/chai.js'

describe('freeport', () => {
  it('should find a free port', async () => {
    const port = await freeport()

    expect(port).to.be.a('number')
    expect(port).to.not.equal(0)
  })
})
