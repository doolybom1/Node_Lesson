console.log("자바스크립트")

var std = { name : '홍길동', age : 30, tel:'1234'};

var arrNumber = [1,2,3,4,5];

var arrString = ['홍길동','성춘향','반정민','박제원']

// console.log(값,값,값) : 각각의 값들을 형변환 하지말고 있는 그대로 콘솔에 출력하라
console.log("객체: ",std)
console.log("숫자형: ",arrNumber)
console.log("문자열형: ",arrString)

var std = {...std, age:100};
console.log("객체 std: ",std)


var sum = 0;

/* 
    forEach문은 배열을 한개씩 순회하면서 요소들을 callback 함수에 전달하며 코드를 수행한다. forEach를 이용하여 요소를 연산한 후
    forEach가 끝난 후 값을 조회하면 forEach의 순회에서 계산된 결과가 정확히 조회돤다는 보장이 없다.
    forEach는 비동기 방식이기 때문에
*/
arrNumber.forEach(function(item, index, originalArray) {
    sum += item; //1번코드
    sum += originalArray[index]; // 1번과 같은 연산 코드
});

arrNumber.forEach(item => {
});

// 배열순회 후 연산 결과를 보장받으려면 전통적 for을 사용해야 한다
for (let i = 0; i < arrNumber.length; i++) {
    sum += arrNumber[i];
}

console.log("합계:", sum);

// 배열을 순회하면서 각 요소를 callback함수에 전달하고 callback함수가 return하는 값들을 모아서 다른 배열로 생성해 준다
const arrNumber2 = arrNumber.map(num=>{
    return num+2;
})

console.log("원래배열:",arrNumber)
console.log("map이후배열:",arrNumber2)


const arrString2 = arrString.find(item => item === "성춘향");
const index = arrString.findIndex(item => item === '성춘향');
console.log("성춘향:", index, arrString2);

const arrString3 = arrString.find(item =>{
    console.log(item);
    return item === '반정민';
})
console.log('반정민:',arrString3);

const arrNumber3 = [1,2,3,4,23,42,512,45]
const evenNumber = arrNumber3.filter(item=>{
    return (item % 2 === 0);
})

console.log('짝수:', evenNumber);

const arrNumber4 = [1,2,3,4,5]
// acc = 0 으로 시작을하고 arrNumber4의 각 요소를 item에 보내고 내부에서 코드를 실행한 후 결과값을 return forEach 수행이 끝난후 연산결과를 조회했을 때
// 연산 결과의 정확도를 보장할 수 없는 문제를 해결한 함수
const reduce = arrNumber4.reduce((acc, item) =>{
    return acc + item;
});

console.log('reduce', arrNumber4, reduce);

const sortString = arrString.sort();
console.log('정렬: ', sortString);


// callback 함수를 사용해서 역순 정렬
// callback 함수에서 결과 조건을 연산한 후
// -1이나 1을 return 하여 역순으로 정렬을 수행한다
const sortString2 = arrString.sort((item,item2)=>{
    if(item > item2) return -1;
});
console.log(sortString2);


const mask = [
    {name:'가든약국', stat:'P'},
    {name:'전대약국', stat:'E'},
    {name:'용봉약국', stat:'E'},
    {name:'조대약국', stat:'S'},
    {name:'충장약국', stat:'E'},
    {name:'전북약국', stat:'P'}
]

const p_mask = mask.filter(item => item.stat ==="P");
console.log('p_mask', p_mask)

const e_mask = mask.filter(item =>{
   return item.stat === 'E';
})
console.log('e_mask', e_mask)

const psort_mask = p_mask.filter((item1,item2) =>{
    if(item1.name > item2.name ) return 1;
})
console.log('p_sort_mask', psort_mask)

const esort_mask = e_mask.filter((item1,item2) =>{
    if(item1.name > item2.name ) return 1;
})
console.log('esort_mask', esort_mask)

