const path = require('path')
const filePath = `modules/..//test_folder/example.txt`
const rightPath = path.normalize(filePath)
// console.log(__dirname)
console.log(rightPath);
const ext = path.extname('/home/serhii/WebstormProjects/node-basics/test_folder/exampl.txt')
console.log(ext);