const http = require('http')
const server = http.createServer(
    (req, res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hello, Node.js! Nice to meet you, new server')
})
server.listen(3000,()=>{
    console.log('Сервер запущений на 3000 порту')
})