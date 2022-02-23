const net = require('net')

module.exports = PromiseLibrary => {
  PromiseLibrary = PromiseLibrary || Promise
  return new PromiseLibrary((resolve, reject) => {
    const server = net.createServer()
    var port = 0

    server.once('listening', () => {
      port = server.address().port
      server.close()
    })
    server.once('close', () => {
      resolve(port)
    })
    server.once('error', reject)
    server.listen(0, '127.0.0.1')
  })
}
