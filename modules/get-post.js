const http = require('http');
const url = require('url')
const { runInNewContext } = require('vm');
const server = http.createServer(
    (req, res)=>{
        console.log(`Запит ${req.method}, url - ${req.url}`)
        const query = url.parse(req.url,true).query

        if (req.method ==='GET'){
                res.writeHead(200,{'Content-Type': 'text/plain'});
                res.end('You asked: ' + JSON.stringify(query))                
        }
        else if (req.method ==='POST') {
                let body = ''
                req.on('data', (chunk)=>{
                        body += chunk.toString()
                })
                req.on('end', ()=>{
                        res.writeHead(200,{'Content-Type': 'text/plain'});
                        res.end('You sent: ' + body)
                        })
        }        

        })

server.listen(3000,()=>{
    console.log('Сервер запущений на 3000 порту')
})