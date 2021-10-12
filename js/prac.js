let count=0;
let text="";
function star(num){
    count++;
    for(let i=0; i<num; i++){
        text +="*";
    }
    let result=`#${count}${text}`
    text="";
    return result;
}
console.log(star(5));
console.log(star(7));
console.log(star(12));


function answer(num){
    let result="";  //안에서. 실행될 때마다 자동 reset되게
    for(let i=0; i<=num; i++){
        result +="*";
    }
    return result;
}
let input=[5,7,12];
for(let i=0;i<input.length;i++){
    console.log(`#${i+1} ${answer(input[i])}`); //console.log 여러번 안찍고 반복문으로
}
// --------------------------------------
number=[];
let stringTwo = function(string){
    sp=string.split("");
    console.log(sp);
    for(let i=sp[0]; i<=sp[1]; i++){
        number.push(i);
    }
    return number; //[ '3', 4, 5, 6, 7 ] parseInt 써야
    
};
console.log(stringTwo("37"));



function aanswer(x,y){
    let rresult=[];
    if(x>y){[x,y]=[y,x];}
    // if(x>y){let t=x; x=y; y=t;} 
    for(let i=x; i<=y; i++){
        rresult.push(i);
    } 
    return rresult;
}
let iinput=[
    [3,7], [8,3], [12,10]
];
for(let i=0; i<iinput.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(aanswer(iinput[i][0], iinput[i][1]));
}


//--------------------------------
function answerB(score){
    let avg=0;
    let sum=0;
    score.forEach(function(ele){
        sum += ele;
    })
    avg = sum/score.length; 
    return avg.toFixed(2); //.toFixed 둘째자리까지
}

let inputB=[
    [80,95,65,70,100],
    [82,77,51,64,73,90,80],
    [100,71,59,88,72,75,91,93]
];
for(let i=0; i<inputB.length; i++){
    console.log(`#${i+1} ${answerB(inputB[i])}`);
}

//--------------------------------
function answerC(emp){
    let emp_id;
    emp_max=0;
    emp_id=0;
    // emp.forEach(function(ele,index){
    //     if(ele>emp_max) {
    //         emp_max=ele;
    //         emp_id=index;
    //     }
    // })

    for(let i=0; i<emp.length; i++){
        if(emp[i]>emp_max) {
        emp_max=emp[i];
        emp_id=i;
        }
    }

    return emp_id+1;
}
let inputC = [
    [3,7,9,6,1],
    [2,7,1,4,3,0,5],
    [7,5,0,1,2,12,6]
];
for(let i=0; i<inputC.length; i++){
    console.log(`#${i+1} ${answerC(inputC[i])}`);
}


//--------------------------------------------
function answerD(s,e){
    let sequence=[];
    sequence.push(s);
    sequence.push(e);

    let minus = s-e;
   
    while(minus>=0){  //while(1)로 하고if문 break로
        sequence.push(minus); 
        s=e;
        e=minus;
        minus=s-e;  
    }
    return sequence;
}

let inputD = [[9,3], [6,3], [13,7]];
for(let i=0; i<inputD.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answerD(inputD[i][0], inputD[i][1]));
}


//---------------------------------
//제곱 문제
function answerE(x, y){
    let resultE=1;
    for(let i=0; i<y; i++){
        resultE *= x; //x *= x 아니다. x값도 갱신됨. 곱하는 x값 그대로여야
    }     
    return resultE;
}

let inputE = [
    [2,3], [4,6], [1,100]
];
for(let i=0; i<inputE.length; i++){
    console.log(`#${i+1} ${answerE(inputE[i][0],inputE[i][1])}`);
}

function answerF(user){
    let permit=user.height>=150; //한줄
    return permit;
}
let inputF = [
    {name: "john", age: 27, height: 181},
    {name: "alice", age: 12, height: 148},
    {name: "bob", age: 14, height: 156},
];
for(let i=0; i<inputF.length; i++){
    console.log(`#${i+1} ${answerF(inputF[i])}`);
}


function answerG(str){
    let week = new Array(
        "일", 
        "월",
        "화",
        "수",
        "목",
        "금",
        "토",
    );
    let day;

    day=week[new Date(str).getDay()];
    return day;
}
let inputG = [
    "2021-01-27", "2021-02-27", "2021-03-14"
];
for(let i=0; i<inputG.length; i++){
    console.log(`#${i+1} ${answerG(inputG[i])}`)
}

//중복단어 제거
function answerH(arr){
    let new_arr=[];
    // let set=new Set();
    // arr.forEach(function(ele){
    //     set.add(ele);
    // });
    // for(let item of set){

    //     new_arr.push(item);
    // }
    //방법1
    //iterable객체, 유사(배열)객체 받아 얕복해서 배열형태로 반환
    new_arr = Array.from(new Set(arr));
    //방법2
    new Set(arr).forEach(function(item){
        new_arr.push(item); 
    })
    return new_arr;
}
let inputH =[
    ["john", "alice", "alice"],
    ["Hello", "hello", "HELLO", "hello"],
    ["kiwi", "kiwi", "banana", "mango"]
]
for(let i=0; i<inputH.length; i++){
    console.log(`#${i+1} ${answerH(inputH[i])}`);
}


//배열 최대값 한줄로 구하는 법 Math.max.apply(null, arr);
function answerI(arr){
    console.log("arr",arr);
    let max = arr[0]; //Number.MIN_SAFE_INTEGER로 세팅해도
    // let arr1 = arr.map(function(ele){ //forEach는 반환값 없음. undefined
    //     return Math.abs(ele);
    // });
    // console.log(arr1);

    for(let i=1; i<arr.length; i++){
        if(arr[i]>max) max=arr[i];
    }
    // max = Math.max.apply(null, arr);
    return max;
}
let inputI = [
    [1,6,5,2,3],
    [19, 41, 23, -4, 17],
    [-64, -27, -41, -33, -59]
];
for(let i=0; i<inputI.length; i++){
    console.log(`#${i+1} ${answerI(inputI[i])}`);
}


function answerJ(str){
    let spam_flag;
    let lower=str.toLowerCase();
    spam_flag=lower.includes("advert");
    return spam_flag;
}
let inputJ = [
    "RE:Request documents",
    "[Advertisement] free mobile!",
    "50% off this week (advertising)"
];
for(let i=0; i<inputJ.length; i++){
    console.log(`#${i+1} ${answerJ(inputJ[i])}`);
}


//역배열
function answerK(str){
    let reverse =[];
    if(str.length%2==0){
        for(let i=0; i<str.length/2; i++){
            reverse[str.length-i-1]=str[i];
        }
    } else {
        for(let i=0; i<(str.length+1)/2; i++){
            reverse[str.length-i-1]=str[i];
        }
    }
    return reverse;
}
let inputK = [
    [1,2,3,4],
    [-1,6,"hello",-15],
    ["apple", "banana", "mango"]
];
for(let i=0; i<inputK.length; i++){
    console.log(`#${i+1} ${answerK(inputK[i])}`);
}





//수학
//순열
//1. 반복문으로
let pArray=["a", "b", "c"]
let pCount=0;

function permutation(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i==j) continue;
            for(let k=0; k<arr.length; k++){
                if(i==k) continue;
                if(j==k) continue;
            
                console.log(arr[i], arr[j], arr[k]);
                pCount++;
            }
        }
    }
}
permutation(pArray);
console.log(pCount);

//2.재귀함수로
let ppCount=0;
//s 시작 위치
//r 몇 개 뽑. 도착해야할 index
function ppermutation(arr, s, r){
    if(s==r){
        ppCount++;
        console.log(arr.join(" "));
        return;
    }
    for(let i=s; i<arr.length; i++){
        [arr[s], arr[i]] = [arr[i], arr[s]]; //두번째요소선택
        ppermutation(arr, s+1, r);
        [arr[s], arr[i]] = [arr[i], arr[s]];
    }
}
ppermutation(pArray, 0, 2);
console.log(ppCount);


//조합
let inputC = [1,2,3,4];
let cnt = 0;
function combination(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            cnt++;
            console.log(arr[i], arr[j]);
        }
    }
}
combination(inputC);
