console.log('hello, world!');

//브라우저에서는 입력을 prompt로 받으면 되지만, node js에서는 안되므로 txt로 입력받
const fs = require("fs"); //파일시스템이라는 라이브러리 가져와서
const input = fs.readFileSync("./js/javascript.txt", "utf8"); //읽을 파일, 변환할 언어

console.log(input);



let user = {
    name: "john",
    age: 23,
};
let admin = {};

//얕은복사1 for문 일일이
for(let key in user){
    console.log(key);
    admin[key] = user[key];
}

//얕은복사2 Object.assing()
let admin_obj = Object.assign({}, user);

//얕은복사3 {...}전개연산자
let admin_spread = {...user};




let deepUser = {
    name: "john",
    age: 23,
    sizes: {height: 180, weight: 72},
};

//깊은복사1 재귀함수 이용한
function copyObj(obj){
    let result = {};
    for(let key in obj){
        if(typeof obj[key]==="object"){
            result[key] = copyObj(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}
let deepAdmin = copyObj(deepUser);

//깊은복사2 JSON객체(데이터송수신) 이용. stringify(객체->문자열) 원본 객체와 참조 끊
//stringify : js obj -> string
//parse : string -> js obj
let admin_json = JSON.parse(JSON.stringify(deepUser));



let x=1; let y=2;
{
    function scope(){
        let x=3; let y=4;
        console.log(x,",",y);
    }
scope();
}
scope();


//for ..in 반복문
const person = {name: "John", nickname: "Bab", age: 25};
let text ="";
//k에 key값 반환됨
for(k in person){
    console.log(k); //name \n nickname \n age
    text += person[k];
}
console.log(text); //JohnBab25

//for ..of 반복문 -iterator 속성을 가지고 있어야
let lang = "JavaScript";
for(let x of lang){
    text += x;
    console.log(x); // J \n a \n ...
}
console.log(text); //JavaScript

function add(){
    console.log(arguments); //[arguments]{'0':10, '1':20}
    console.log(arguments[0]+arguments[1]);
} 
add(10, 20);


//재귀함수: 재귀함수에서 중요한 것 탈출 코드
function recursive(num){
    if(num==0) return;
    //뺀 게 num에 반영되지 않으니 계속 3을 넣는 꼴이 되어 무한재귀
    //recursive(num--); //stack size exceeded(스택 초과)
    //recursive(--num);
    //console.log(num); // 1\n2\n3 순으로 출력
    recursive(num-1);
    console.log(num); // 3\n2\n1 순으로 출력
}
recursive(3);


function resum(num){
    if(num==0) return 0;
    return num + resum(num-1);
}
console.log(resum(3));
    
/*
    실행과정을 따라가보면,
    resum(3)일 때 return으로 3+resum(2)
    resum(2)일 때 return으로 2+resum(1)
    resum(1)일 때 return으로 1+resum(0)
    resum(0)일 때 return으로 0
*/


function facto(num){
    if(num==1) return 1;

    return num*facto(num-1);
}
console.log("facto",facto(3));


//배열 대표함수 고차함수 -> array_func.js에 수록


//console.log(new Set(1,2,3)); (X) TypeError: number 1 is not iterable
console.log(new Set([1,2,3]));


// let fruits = new Map(["apple", 50], ["peach", 100]); (X. []하나 더) TypeError: Iterator value apple is not an entry object
let fruits = new Map([["apple", 50], ["peach", 100]]); 
for(let item of fruits.keys()){
    console.log(item);
}
for(let amount of fruits.values()){
    console.log(amount);
}
for(let a of fruits){
    console.log(a); // [ 'apple', 50 ] \n [ 'peach', 100 ]
}
let map_to_obj = Object.fromEntries(fruits);
let obj_kv = Object.entries(map_to_obj);
let obj_to_map = new Map(obj_kv);
console.log(fruits); // Map(2) { 'apple' => 50, 'peach' => 100 }
console.log(fruits.entries()); // [Map Entries] { [ 'apple', 50 ], [ 'peach', 100 ] }

console.log(map_to_obj); //{ apple: 50, peach: 100 }
console.log(obj_kv); //[ [ 'apple', 50 ], [ 'peach', 100 ] ]
console.log(obj_to_map); //Map(2) { 'apple' => 50, 'peach' => 100 }




