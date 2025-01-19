const url = require('url')
const myUrl = new URL('https://www.youtube.com/watch?v=vpSoYX7zB_E&t=2928s')
const result = {
    protocol: myUrl.protocol,
    path: myUrl.pathname,
    params: myUrl.searchParams.get('t')
}

module.exports = {result}
// console.log(result);