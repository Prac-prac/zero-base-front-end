//배열 대표함수 고차함수 - map과 reduce 잘
//sort, reverse 문제점
// 1. 정렬될 때 배열의 요소 문자열로 변경해 나열(숫자 정렬 X)
// 2. 대소문자 구분되어 정렬
let arr = [1, -1, 4, 0, 2, 3, 10];
let fruits = ["Orange", "orange", "apple", "banana"];
console.log(arr.sort()); //10 다음에 2 나옴
console.log(arr.reverse()); 

//1. sort 고차함수 
//return 양수값 자리바꿈
let num_ascending_order = function(x,y){return x-y;}; 
let num_descending_order = function(x,y){return y-x;};
console.log(arr.sort(num_ascending_order));

//모두 대문자로 치환해서 소문자 없앰
let string_asceding_order = function(x,y){
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x>y) return 1;
    else if(y>x) return -1;
    else return 0;
}


//숫자,문자 다 되도록 위 두 개 공용화
let ascending_order = function(x,y){
    if(typeof x==="string") x = x.toUpperCase();
    if(typeof y==="string") y = y.toUpperCase();

    return x>y? 1: -1;
}
let descending_order = function(x,y){
    if(typeof x==="string") x = x.toUpperCase();
    if(typeof y==="string") y = y.toUpperCase();

    return x>y? -1: 1;
}

console.log(fruits.sort(ascending_order));


//2. forEach() 고차함수 
// .forEach(function(ele, index, array){})
arr.forEach(function(ele){
    console.log(ele);
});

//3. map() 고차함수
// .map(function(ele, index, array){})
console.log(arr.map(function(ele){
    return ele*2;
}))

//4. find() 고차함수 - return에 조건쓰고 true되는 값 반환. if처럼 쓰여서 신기
// .find(function(ele, index, array){})
let users = [
    {name: "bob", age: 17, job: false},
    {name: "alice", age: 19, job: false},
    {name: "john", age: 27, job: true},
];

let find_job = users.find(function(ele){
    return ele.job==false;
})
console.log(find_job); //{name:'bob',...}

let find_age = users.find(function(ele){
    return ele.age > 20
});
console.log(find_age); //{name:'alice',...}


//5. filter(): find랑 같은데 얘는 배열로 전부 반환

//6. reduce() 고차함수
// .reduce(function(이전함수결과, ele, index, arr){})
//시작할 때 이전함수결과 initial로 초기값 설정 가능
let call_count=0;
let sum = arr.reduce(function(acc, ele, index, array){
    call_count++;
    console.log(acc, "\t", ele, "\t", index);
    return acc + ele; //return값 다음 이전함수결과로
});  //초기값 입력하지 않으면 [0]값이 acc가 됨 ->index 1부터
//}, 0); ->index 0부터
console.log(call_count);
console.log(sum);