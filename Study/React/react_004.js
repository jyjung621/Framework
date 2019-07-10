// 제너레이터 함수 ( * )
function * counter() {
  yield 1
  yield 2
  yield 3
  return 1
}

value = counter()
console.log(value)
console.log(value.constructor)
console.log(value.next())
console.log(value.next())
console.log(value.next())
console.log(value.next())
console.log(value.next())


