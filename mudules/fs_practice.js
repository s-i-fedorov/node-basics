const fs = require('fs')

fs.readFile(
    '/home/serhii/WebstormProjects/node-basics/readme.txt',
    'utf8', (err, data)=>{
    if (err) {
        console.error('Error: ',err)
        return
    }
    console.log('Вміст файлу: ', data)
})

fs.writeFile(
    '/home/serhii/WebstormProjects/node-basics/readme2.txt',
    'Новий текст для нового файлу',
    (err)=>{
        if (err){
            console.error('Помилка запису файлу ', err)
            return
        }
        console.log('Файл записано')
    }
    )

console.log(fs.existsSync(
    '/home/serhii/WebstormProjects/node-basics/readme2.txt'
));

const folderPath = '/home/serhii/WebstormProjects/node-basics/test_folder'
if (fs.existsSync(folderPath)){
    console.log('Каталог вже існує')
} else {
fs.mkdir(folderPath,
    // {recursive: true},
    (err)=>{
    if (err) console.error(err)
    })
    console.log('Каталог створено')
}