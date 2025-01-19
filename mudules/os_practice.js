const os = require('os')
// console.log('Операційна система - ', os.platform())
// console.log(`Загальна пам'ять - `, os.totalmem())
// console.log(`Вільна пам'ять - `, os.freemem())
// console.log(`Час роботи системи - `, os.uptime())

// console.log('Інфо про процесор - ', os.cpus())
const result = {
    operatingSystem: os.platform(),
    allMemory: os.totalmem(),
    freeMemory: os.freemem(),
    workTime: os.uptime()
}
// console.log(result);
module.exports = { result }