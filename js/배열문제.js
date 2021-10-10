//문제1. 수열 최솟값 위치
function answer(nums){
    //console.log(nums);
    //console.log(nums.length);
    let result = [];
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<nums.length; i++){
        //console.log('input[i]',nums[i]);
        if(nums[i]<min) min = nums[i];
        //console.log(min);
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i]==min){
            result.push(i);
        }
    }
    return result;
}

let input = [
    [5,2,10,2],
    [4,5,7,4,8],
    [12,11,11,16,11,12]
];
for(let i=0; i<input.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answer(input[i]));
}


//문제2. 체스 세트
function answerA(chess){
    let result=[];
    let correct = [1,1,2,2,2,8];
    for(let i=0; i<chess.length; i++){
        result.push(correct[i]-chess[i]);
    }

    return result;
}
let inputA = [
    [0, 1, 2, 2, 2, 7],
    [2, 1, 2, 1, 2, 1],
    [0, 1, 1, 5, 3, 6]
];
for(let i=0; i<inputA.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answerA(inputA[i]));
}



//문제3. 두 수 최대 합
function answerB(nums){
    let result=[];
    result = nums.sort((a,b)=>b-a).slice(0,2);

    //배열메서드 안 쓰고 선생님 방법
    // result = nums[0]>nums[1]? [nums[0], nums[1]]: [nums[1], nums[0]];
    // for(let i=2; i<nums.length; i++){
    //     if(nums[i]>result[0]){
    //         result[1] = result[0];
    //         result[0] = nums[i];
    //     } else if(nums[i]>result[1]){
    //         result[1] = nums[i];
    //     }
    // }
    return result;
}
let inputB = [
    [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
    [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
    [-15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18, 14]
];
for(let i=0; i<inputB.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answerB(inputB[i]));
}



//문제4. 일곱 난장이
function answerC(dwarf){
    let result=[];
    let index=[];
    let sum=0;
    dwarf.forEach(element => {
        sum += element;
    });
    let difference = sum-100;

    for(let i=0; i<dwarf.length; i++){
        for(let j=i+1; j<dwarf.length; j++){
            if(dwarf[i]+dwarf[j] === difference){
                //index.push(i,j);
                dwarf.splice(i,1);
                dwarf.splice(j,1);
                break; //찾았으면 더 돌지 않게 break
                //여기서 break는 안쪽 for문만 나감
            }
        }
        //바깥쪽 for문도 나가도록
        if(dwarf.length==7) break;
    }

    // for(let i=0; i<dwarf.length; i++){
    //     if(i!=index[0] && i!=index[1]){
    //         result.push(dwarf[i]);
    //     }
    // }
    
    
    result = dwarf;
    return result;
}
let inputC = [
    [1,5,6,7,10,12,19,29,33],
    [25,23,11,2,18,3,28,6,37],
    [3,37,5,36,6,22,19,2,28]
];
for(let i=0; i<inputC.length; i++){
    process.stdout.write(`문제4번 #${i+1}`);
    console.log(answerC(inputC[i]));
}



//문제5. 나무 그리기
function answerD(height){
    let str="\n";
    for(let i=0; i<height; i++){
       for(let j=0; j<=height-i-1; j++) str += " ";
       for(let j=0; j<2*i+1; j++) str += "*";
       str += "\n";
    }
    return str;
}
let inputD=[
    3,5,7
];
for(let i=0; i<inputD.length; i++){
    console.log(`#${i+1} ${answerD(inputD[i])}`);
}
console.log(" ")

//문제6. Two Sum
function answerE(nums, target){
    let result=[];
    //for문 2개 O(n^2)
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                result.push(i, j);
            }
        }
    }
    return result.sort((a,b)=>a-b);
}
let inputE=[
    [[2,7,11,15],9],
    [[3,2,4],6],
    [[3,3],6]
];
for(let i=0; i<inputE.length; i++){
    console.log(`#${i+1} ${answerE(inputE[i][0], inputE[i][1])}`);
}


//문제7. OX 퀴즈
function answerF(mark){
    let result=0;
    let sum=0;
    let cnt=0;

    for(let i=0; i<mark.length; i++){
        if(mark[i]===1){
            cnt++;
            sum += cnt;
        } else if(mark[i]===0){
            cnt=0;
        }
    }
    result = sum;

    return result;
}
let inputF=[
    [1,0,1,1,1,0,1,1,0,0],
    [1,1,0,1,1,0,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,0]
];
for(let i=0; i<inputF.length; i++){
    console.log(`#${i+1} ${answerF(inputF[i])}`);
}


//문제8. 벽돌 옮기기
function answerG(blocks){
    let result=0;
    let sum=0;
    let cnt=0;
    blocks.forEach(function(ele){
        sum += ele;
    });
    let avg = sum/blocks.length;
    for(let i=0; i<blocks.length; i++){
        if(blocks[i] - avg>0){
            cnt += blocks[i] - avg;
        }
    }
    result = cnt;
    return result;
}
let inputG = [
    [5,2,4,1,7,5],
    [12,8,10,11,9,5,8],
    [27,14,19,11,26,25,23,15]
];
for(let i=0; i<inputG.length; i++){
    console.log(`#${i+1} ${answerG(inputG[i])}`);
}


//문제9. 숫자 빈도수 구하기
function answerH(s,e){
    let result=[0,0,0,0,0,0,0,0,0,0];
    let gap=[];
    for(let i=s; i<=e; i++){
        gap.push(i);
    }
    let toString = gap.join('');
    for(let i=0; i<=toString.length; i++){
        for(let j=0; j<=9; j++){
            if(j==toString[i]) {result[j]+=1;}
        }
    }
    return result;
}
let inputH=[
    [129,137],
    [1412,1918],
    [4159,9182]
];
for(let i=0; i<inputH.length; i++){
    console.log(`#${i+1} ${answerH(inputH[i][0], inputH[i][1])}`);
}


//문제10. 달팽이 만들기
function answerI(length){
    let result=[];


    return result;
}
let inputI = [3,5,6];
for(let i=0; i<inputI.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answerI(inputI[i]));
}


//두 배열
let arr1=[1,3,5,6,7,98];
let arr2=[4,5,98];

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j]) arr1.splice(i,1);
    }
}
console.log(arr1);


// vds VMware docker 가상환경