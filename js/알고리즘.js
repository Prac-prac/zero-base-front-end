//거품정렬
let swap = function(arr, index1, index2){
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

let ascending = function(x,y){ return x>y; }
let descending = function(x,y){ return x<y; }

let bubbleSort = function(arr, compare){
    let swapped;
    for(let i=0; i<arr.length-1; i++){
        swapped = false;
        for(let j=0; i<arr.length-i-1; j++){ //-i: 뒷부분 정렬되어 있는 상태
            if(compare(arr[j], arr[j+1])){
                swap(arr, j, j+1);
                swapped = true;
            }
        }
        if(!swapped) break; //변경(swap) 한 번도 안 했으면
    }
}

/*text code*/
let init_arr=[6,5,1,3,2,4,];
let array = [];

let sorting = [bubbleSort];
let order = [ascending, descending];
for(let i=0; i<sorting.length; i++){
    for(let j=0; j<order.length; j++){
        console.log(sorting[i].name, order[j].name);

        array = [...init_arr];
        sorting[i](array, order[j]);
        console.log(array);
    }
}

//성능 측정
function benchmark(arr, callback){
    let start = Date.now();
    callback(arr);
    return Date.now()-start;
}