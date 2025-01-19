const myMath = require('./mudules/myMath.js');
const resultMath = {
    mult: myMath.mult(2,3),
    dev: myMath.dev(10,5)
}
console.log(resultMath);

console.log('--------os-practice--------')
const resultOs = require('./mudules/os_practice')
console.log(resultOs)

