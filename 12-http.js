const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our home page.')
    res.end()
  }
  if (req.url === '/about') {
    res.write('Welcome to our home page.')
    res.end()
  }
  res.write(`   
   <h1>Oops!</h1>
  <p>We can not find this Page You are looking for</p>
  `)
  res.end()
})

server.listen(3000)
