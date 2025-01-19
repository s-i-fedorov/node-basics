const EventEmitter = require('events')
const myEvent = new EventEmitter()
myEvent.on('greet', (name)=>{
    console.log(`Hello ${name}!`)
})
module.exports = { myEvent }
// myEvent.emit('greet', 'Serhii')
