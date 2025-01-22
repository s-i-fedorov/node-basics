const http = require('http');
const { runInNewContext } = require('vm');
const server = http.createServer(
    (req, res)=>{
        console.log(`Запит ${req.method}, url - ${req.url}`)
        if (req.url ==='/'){
                res.writeHead(200,{'Content-Type': 'text/plain'});
                res.end('<hello, Node.js! Nice to meet you, new server>')
        }
        else if (req.url ==='/html'){
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end('<h1>This is HTML response</h1>')
        }
        else if (req.url ==='/json'){
            res.writeHead(200,{'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Hello json obj'}))
        }
        else {
                res.writeHead(400,{'Content-Type': 'text/plain'});
                res.end('Page is not found')
        }
})
server.listen(3000,()=>{
    console.log('Сервер запущений на 3000 порту')
})