const fs = require('fs')

/*
fs.writeFileSync('test.txt', 'Hello JavaScript')
console.log(fs.readFileSync('test.txt').toString())

// 비동기 처리
console.log('point a1')
fs.writeFile('test_2.txt','Hello JavaScript', function (err) {
  console.log('point a2')
  fs.readFile('test_2.txt', (err,data) => {
    console.log('point a3')
    console.log(data.toString())
    console.log('point a4')
  })
  console.log('point a5')
})
console.log('point a6')
*/

/*
// Promise 사용
new Promise((resolve) => {
  resolve(10)
}).then((value) => {
  console.log(value)
  return 20
}).then((value) => {
  console.log(value)
  return 30
}).then((value) => {
  console.log(value)
  return 40
})
*/

// Async Await
async function readAll () {
  const a = await read('test_2.txt')
  console.log(a)
  const b = await read('test_2.txt')
  console.log(b)
  const c = await read('test_2.txt')
  console.log(c)
}

readAll()

function read(filename) {
  return new Promise((resolve) => {
    fs.readFile(filename, (err,data) => {
      resolve(data.toString())
    })
  })
} 

/*
// Generator 활용
const generator = (function * () {
  const a = yield read(generator, 'test_2.txt')
  console.log(a)
  const b = yield read(generator, 'test_2.txt')
  console.log(b)
  const c = yield read(generator, 'test_2.txt')
  console.log(c)

})()
generator.next()

function read(generator, filename) {
  fs.readFile(filename, (err,data) => {
    generator.next(data.toString())
  })
}
*/
