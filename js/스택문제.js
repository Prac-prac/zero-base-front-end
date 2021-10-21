if(!Array.prototype.peek){
    Array.prototype.peek = function(){
        return this[this.length-1];
    };
}

if(!Array.prototype.isEmpty){
    Array.prototype.isEmpty = function(){
        return this.length == 0;
    };
}

function answer(str){
    let result =[];

    let stack =[];
    for(let i=0; i<str.length; i++){
        if(str[i]=="("){
            stack.push(i);
        } else if(str[i]==")"){
            if(stack.isEmpty()) return [];
            result.push([stack.pop(), i]);
        }
    }

    if(!stack.isEmpty()) return []; //다 pop되어 남아 있으면 안됨. 남아 있으면 짝이 안 맞는 것.
    return result;
}

let input = [
    "(a+b)",
    "(a*(b+c)+d)",
    "(a*(b+c)+d+(e)",
    "(a*(b+c)+d)+e)",
    "(a*(b+c)+d)+(e*(f+g))"
];

for(let i=0; i<input.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answer(input[i]));
}


function answerB(str){
    let result=[];

    let stack=[];
    let dish = str.split("").sort().join("");
    let dish_index=0;


    for(let i=0; i<str.length; i++){
        while(stack.isEmpty() || stack.peek()<str[i]){
            stack.push(dish[dish_index++]);
            result.push(0);
        }
        if(stack.isEmpty() || stack.peek()>str[i]){
            return [];
        } else {
            stack.pop();
            result.push(1);
        }
    }
    return result;
}
let inputB = [ "bacd", "dabc", "edcfgbijha"];
for(let i=0; i<inputB.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answerB(inputB[i]));
}

//기린의 시야
function answerC(giraffe){
    let result=0;

    let stack=[];
    giraffe.push(Number.MAX_SAFE_INTEGER);
    for(let i=0; i<giraffe.length; i++){
        while(!stack.isEmpty() && stack.peek()["h"]<giraffe[i]){
            result += i-stack.pop()["i"]-1; //현재 i에서 stack.pop()["i"]과 사이의 수
        }
        stack.push({h: giraffe[i], i: i});
    }

    return result;
}
let inputC = [
    [10,3,7,4,12,2],
    [7,4,12,1,13,11,12,6],
    [20,1,19,18,15,4,6,8,3,3]
];
for(let i=0; i<inputC.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answerC(inputC[i]));
}