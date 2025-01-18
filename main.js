const myMath = require('./mudules/myMath.js');
const resultMath = {
    mult: myMath.mult(2,3),
    dev: myMath.dev(10,5)
}
console.log(resultMath);

const resultFs = require('./mudules/fs_practice')
console.log(resultFs)


// const fs = require('fs');
//
// fs.readFile('readme.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error("Помилка читання файлу:", err);
//         return;
//     }
//     console.log("Вміст файлу readme.txt:", data);
// });