import myData from './myData.json'

// json 확장자 파일은 하나의 문자 데이터이다!!!
// 밑의 과정은 json -> string -> javscript에서 실제 사용 가능한 object로의 과정이다
console.log(myData);

const str = JSON.stringify(myData);

console.log(str);

const obj = JSON.parse(str);
console.log(obj); 
