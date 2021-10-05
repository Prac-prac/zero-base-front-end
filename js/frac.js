function answerI(arr){
    console.log("arr",arr);
    let max=0;
    let arr1 = arr.map(function(ele){ 
        return Math.abs(ele);
    });
    console.log(arr1);
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