console.log('--------export-practice--------')
const myMath = require('./mudules/myMath.js');
const resultMath = {
    mult: myMath.mult(2,3),
    dev: myMath.dev(10,5)
}
console.log(resultMath);

console.log('--------os-practice--------')
const resultOs = require('./mudules/os_practice.js')
console.log(resultOs.result)

console.log('--------events-practice--------')
const resultEvents = require('./mudules/events_example.js')
resultEvents.myEvent.emit('greet', 'Serhii')

console.log('--------crypto-practice--------')
const resultCrypto = require('./mudules/crypto_example.js')
console.log('Hash: ', resultCrypto.hash)

console.log('--------url-practice--------')
const resultUrl = require('./mudules/url_example.js')
console.log(resultUrl.result)