//카드 섞기 -> arr.length가 0인 상태에서 shift()를 하면 undefined가 리턴된다.
//내 풀이
function answer(n){
    let result=[];
    let arr=[];
    for(let i=0; i<n; i++){
        arr.push(i+1);
    }

    // 틀린 풀이: arr.length가 0인 상태에서 shift()를 하면 undefined가 리턴되어 undefined가 push되니 length 0 안됨
    // while(arr.length!=0){ 
    //     result.push(arr.shift());
    //     arr.push(arr.shift());
    // }

    result.push(arr.shift());
    while(arr.length != 0){

        arr.push(arr.shift());
        result.push(arr.shift());
    }
    return result;
}
let input=[4,7,10];
for(let i=0; i<input.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answer(input[i]));
}


//선생님 풀이
function Queue(){
    this.array = [];
}

Queue.prototype.enqueue = function(ele){
    this.array.push(ele);
}

Queue.prototype.dequeue = function(){
    return this.array.shift();
}

function answerT(n){
    let result=[];

    let queue = new Queue();
    for(let i=1; i<=n; i++){
        queue.enqueue(i);
    }
    while(queue.array.length != 0){
        result.push(qeueu.dequeue());
        if(queue.array.length != 0){
            queue.enqueue(queue.dequeue());
        }
    }
    return result;
}


//우선순위 프린터 출력 순서
Queue.prototype.front = function(){
    return this.array[0];
}

Queue.prototype.max = function(){ //iterator에서 max값 찾을 때 Math.max()
    return Math.max(...this.array);
}

function answerB(priorities, select){
    let result = -1;

    let vq = new Queue(); //value
    let pq = new Queue(); //priority
    for(let i=0; i<priorities.length; i++){
        vq.enqueue(i);
        pq.enqueue(priorities[i]);
    }

    let count=0;
    while(true){
        if(pq.front()===pq.max()){ //마침 맨 앞이 우선순위 젤 높은
            if(vq.front()===select){ //원하는 값 나오면 그만 두고
                count++;
                result = count;
                break;
            } else { //원하는 값 아닌데 우선순위 젤 높으면 빼고 count++
                vq.dequeue();
                pq.dequeue();
                count++;
            }
        } else { //우선순위 안 높으면 맨 뒷값 맨 앞으로
            vq.enqueue(vq.dequeue());
            pq.enqueue(pq.dequeue());
        }
    }

    return result;
}
let inputB = [
    [[3],0],
    [[3,4,5,6],2],
    [[1,1,5,1,1,1],0]
];
for(let i=0; i<inputB.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(answerB(inputB[i]));
}