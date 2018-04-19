const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})