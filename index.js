var http = require('http')
var url = require('url')
var fs = require('fs')

http
  .createServer(function (req, res) {
    console.log(req.url)
    let q = url.parse(req.url, true)
    let filename = '.' + q.pathname
    if (req.url === '/') {
      filename = './index.html'
    } else if (req.url === '/about') {
      filename = './about.html'
    } else if (req.url === '/contact-me') {
      filename = './contact-me.html'
    }
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        return (filename = './404.html')
      }
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  })
  .listen(8080)
