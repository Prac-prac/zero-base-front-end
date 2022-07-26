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


// let abc=['a','b','c'];
// console.log(abc.push('d'));
// console.log(abc.pop());
// console.log(abc.shift());
// console.log(abc.unshift('e'));




//문제1번
function solve(bj, one, two){
    let cnt = one.length + two.length*2 +3;

    for(let i=0; i<bj.length; i++){
        for(let j=0; j<one.length; j++){
            if(bj[i]===one[j]) bj.splice(i,1);
        }
        
    }
    for(let i=0; i<bj.length; i++){
    for(let z=0; z<two.length; z++){
        if(bj[i]===two[z]) bj.splice(i,1);
    }
}


    let text = bj+"("+cnt*150+"만원)";
    return text;
}

//문제2번
function solve2(pattern, str){
    const words = str.split(' ');

    let arr=[];
    for(let i=0; i<pattern.length; i++){
        for(let j=i+1; j<pattern.length; j++){
            if(pattern[i]===pattern[j]){
                if(words[i]!=words[j]) return false;
            }
            if(pattern[i]!=pattern[j]){
                if(words[i]===words[j]) return false;
            }
        }
    }
    return true;   
}


//문제3번
function solution(str){  
    arr=[];
    let re = false;
    for(let i=0; i<str.length; i++){
        arr.push(str[i]);
        }
    do{
        re=false;
        for(let i=0; i<arr.length; i++){
            if(arr[i] == arr[i+1]){
                re = true;
                arr.splice(i,2);
            }
        }
    }while(re);
    return arr;
}


//디스코드 211115-3
/**
* @param n {number}
* @return {number}
*/
function solution(n) {
    let answer=0;
    //연속된 0이 나오면 count
    let count=0;
    let arr=[];
    
    n = n.toString(2)+' ';
    
    for(let i=0; i<n.length; i++){
       if(n[i]==0 && n[i+1]==0){
           //연속된 0이 나오면 count++
           count++;
       } else {
           //앞뒤 연속된 0이 아니면 count arr에 넣어주고 초기화
            arr.push(count);
            count=0;
       }
    }
    //앞이 0이고 뒤가 0이 아닐 때 넣어줘서 +1
    //1과 1 사이의 거리에 0의 갯수를 더한 거니 +1
    // answer = Math.max.apply(null, arr)+2; //apply 대신 [... ]
    answer = Math.max(...arr)+2;

    return answer;
    
    
}

console.log(solution(11));
console.log(solution(513));
console.log(solution(65537));
console.log(solution(524289));
console.log(solution(8388609));
console.log(solution(67108865));