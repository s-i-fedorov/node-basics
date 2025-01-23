const http = require('http');
const { runInNewContext } = require('vm');
const server = http.createServer(
    (req, res)=>{
        if (req.url ==='/'){
                res.writeHead(200,{'Content-Type': 'text/plain'});
                res.end('Main page')
        }        
        else if (req.url ==='/about'){
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.end('About')
        }
        else if (req.url ==='/contact'){
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.end('Contacts')
        }
        else {
                res.writeHead(400,{'Content-Type': 'text/plain'});
                res.end('Page is not found')
        }
})
server.listen(3000,()=>{
    console.log('Сервер запущений на 3000 порту')
})