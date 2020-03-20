
var arr = ['홍길동','이몽룡','성춘향','라푼젤']
// ES5 이하의 old version
// var hong = arr[0]
// var lee = arr[1]
// var sung = arr[2]
// var rha = arr[3]

const [hong,lee,sung,rha] = arr
console.log(hong)
console.log(arr)

const names = {name:'홍기동',phone:'1234', addr:'광주광역시'}
const {name,phone,addr} = names
console.log(name)
console.log(phone)
console.log(addr)

const my = {[name]:'홍길동'}
console.log(my.홍기동)