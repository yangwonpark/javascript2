import _ from 'lodash'

// const usersA = [
// 	{ userId: '1', name: 'HEY'},
// 	{ userId: '2', name: 'Neo'}
// ]
// const usersB = [
// 	{ userId: '1', name: 'HEROPY'},
// 	{ userId: '3', name: 'Amy'}
// ]
// const usersC = usersA.concat(usersB)
// console.log('concat', usersC);
// console.log('uniqBy', _.uniqBy(usersC, 'userId'));		// 이미 중복이 있는 배열 데이터를 userId를 기준으로 중복된 값을 제외하고 반환해준다

// const usersD = _.unionBy(usersA, usersB, 'userId');		// 합치기 전 중복이 있는 여러 배열의 데이터를 합칠 때 unionBy 사용
// console.log('unionBy', usersD);


// const users = [		// 배열 데이터 속 객체 데이터
// 	{userId: '1', name: 'HEROPY'},
// 	{userId: '2', name: 'Neo'},
// 	{userId: '3', name: 'Amy'},
// 	{userId: '4', name: 'Evan'},
// 	{userId: '5', name: 'Lewis'}
// ]

// const foundUser = _.find(users, {name: 'Amy'});
// const foundUserIndex = _.findIndex(users, { name: 'Amy'});
// console.log(foundUser);
// console.log(foundUserIndex);

// _.remove(users, { name: 'HEROPY'});
// console.log(users);

const user = {
	name: 'HEROPY',
	age: 85,
	emails: [
		'thesecon@gmail.com',
		'neo@zillinks.com'
	]
};

// 이렇게 직접 localStorage에 넣을 때 올바르게 처리하려면 객체, 배열로는 안되고 문자 데이터 즉, json으로 처리해야한다
localStorage.setItem('user', JSON.stringify(user));

console.log(localStorage.getItem('user'));

console.log(JSON.parse(localStorage.getItem('user')));

localStorage.removeItem('user'); // 콘솔에 남긴 하지만 실제 application 탭에 들어가면 없다

// json데이터를 수정하고 싶을 때 => 밑처럼 받아온 str 값을 js obj객체로 바꾸고 직접 수정함
// const str = localStorage.getItem('user');
// const obj = JSON.parse(str);
// obj.age = 22
// console.log(obj);
// localStorage.setItem('user', obj);











