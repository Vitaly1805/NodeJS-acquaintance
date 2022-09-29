const http = require('http')
const fs = require('fs')
const path = require('path')

const host = '127.0.0.1'
const port = 7000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET': {
      switch (req.url) {
        case '/home': {
          const dir = path.parse(__dirname).dir

          fs.readFile(path.join(dir, 'public', 'home.html'), 'utf-8', (err, data) => {
            if(err) {
              console.log(err)
            }

            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
          })

          break
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html')
          res.end('Not found!')
          break
        }
      }

      break
    }
  }
})

server.listen(port, host, () => {
  console.log('Server start!')
})
