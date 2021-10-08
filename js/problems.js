//   /** 문제3번
//  * @param s {string}
//  * @return {number}
//  */
//    let firstMinus=false;
//    let one=0;
//    let two=0;
//    let op='';
//    let result=0;
// function store(stringArr){
//     let plus=stringArr.indexOf('+');
//     let minus=stringArr.indexOf('-');
//     let front;
//     if(plus!=-1 && minus!=-1){
//         front = plus>minus? minus: plus;
//     } else if(plus==-1 && minus ==-1){
//         two=stringArr.splice(0);
//         return;
//     } else if(minus ==-1){
//         front = plus;
//     } else {
//         front = minus;
//     }
//     if(!op){
//         op = stringArr.splice(front, 1);
//     }
//     for(let i=0; i<front; i++){
//         if(one != 0){
//             two = Number(stringArr.splice(0, front-1));
//         }
//         one = Number(stringArr.splice(0, front-1));
//     }
// }

// function calc(one,op,two){
//     if(op=='+'){
//         result = one+two;
//     } else if(op=='-'){
//         result = one-two;
//     }
//     return result;
// }
// function solution(s) {
//     var answer= 0;
//     let stringArr=[];
//     for(let i=0; i<s.length; i++){
//         stringArr.push(s[i]);
//     }
//     if(stringArr[0]=='-'){
//         firstMinus = true;
//         stringArr.splice(0,1);
//         store(stringArr);
//         one=one*(-1);
//     }
//     while(1){
//         if(stringArr.length==0){
//             answer = one;
//             break;
//         }
//     store(stringArr);
//     if(!two) store(stringArr);
//     one=calc(one,op,two);
//     op='';
//     two=0;

//     }
//     return answer;
//   }


let abc=['a','b','c'];
console.log(abc.push('d'));
console.log(abc.pop());
console.log(abc.shift());
console.log(abc.unshift('e'));
