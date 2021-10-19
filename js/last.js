//문제1번
function problem1(n){
    let three=1;
    while(1){
        ++three;
        if(three*three*three==n) break;
        if(three*three*three>n){
            three--;
            break;
        } 
    }
    return three*three*three;
}


//문제2번
function problem2(str){
    let countArr = [0,0,0,0,0,0,0,0,0,0];
    for(let i=0; i<str.length; i++){
        countArr[str[i]]++;
    }

    console.log(countArr);
    let max=0;
    let remberIndex=-1;
    for(let i=0; i<countArr.length; i++){
        if(countArr[i]>max){
            max=countArr[i];
            remberIndex=i;
        }
    } 
    let arr=[];
    if(remberIndex!=-1){
        do{
            for(let i=0; i<countArr.length; i++){
                if(countArr[i]===max){
                    arr.push(i);
                }
            }
            max--;
        }while(max>0);
    }
    for(let i=0; i<=9; i++){
        if(!arr.includes(i)) arr.push(i);
    }
    return arr.join(' ');
}


//문제3번
function solution3(h,w){
    var answer = 0;
    let one = h-1;
    let two = w-1;
    let all = one+two;
    let allSum=1;
    let some = one>two? two: one;
    let someSum =1;
    console.log(all,some);

    for(let i=1; i<some; i++){
        allSum *= all;
        all--;
    }
    for(let i=some; i<1; i--){
        someSum *= some;
        some--;
    }
    answer = allSum/someSum;
    
    return answer;
}


//문제4번
function solution(arr){
    var answer = 0;
    let max=0;
    let maxSum=0;
    let maxArr=[];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]>max) max=arr[i][j];
        }
        maxSum += max;
        max=0;
    }
    return maxSum;
}
