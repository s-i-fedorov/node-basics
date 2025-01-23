const http = require('http');
const fs = require('fs')
const path = require('path')

const server = http.createServer(
    (req, res)=>{

        const filePath = path.join(__dirname, req.url === '/' ? '../index.html' : req.url);

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Файл не знайдено');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }})

})

server.listen(3000,()=>{
    console.log('Сервер запущений на 3000 порту')
})