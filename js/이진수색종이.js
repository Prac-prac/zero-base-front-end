function solution(n){
    var answer = 0;
    var numarr = [];
    let allsum = 0;
    
    for(let i=0; i<=n; i++){
        allsum += calc(i);
    }
    return allsum;
}

function calc(n){    
    var arr = [];
    let sum=0;
    
    while(1){
        arr.unshift(n%2);
        n = parseInt(n/2);
        if(n===0 || n===1) {
            arr.unshift(n);
            break;    
        }
        // console.log(n);
    }
    // console.log(arr);

    for(let i=0; i<arr.length; i++){
        if(arr[i]===1){
            sum += 1;
        }
    }
    // console.log('sum', sum);
    return sum;
}
