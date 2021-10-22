//1. 배열 -> array_func.js 참조

//+. 프로토타입 - 객체 접근 터널
//어떤 객체가 만들어지기 위해 모태가 되는 원형
//js는 일반적인 객체지향 언어와 다르게, 프로토타입을 이용한 복사(Cloning)을 통해 새로운 객체 생성
//일반적인 객체 생성 방식: 속성은 생성자, 메서드는 프로토타입에서 정의
function ABC(a,b){
    //생성자에서 속성 정의
}
//prototype 속성값으로 메서드 정의
ABC.prototype.x = function(){};
ABC.prototype.y = function(){};

//new 생성자 호출하면서 return받은 값으로 prototype속성을 거쳐서 ABC생성자에 접근 가능
let objA = new ABC(1,2);


//ex) prototype 이용해 Person객체에 메서드 추가해보기
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.isAdult = function(){
    return this.age > 18;
};
const p1 = new Person("bob", 25);
const p2 = new Person("alice", 16);

console.log(p1.isAdult());
console.log(p2.isAdult());


//2. 연결리스트(Linked List)
//각 노드가 데이터와 포인트 가지며, 한 줄로 연결되어 있는 방식으로 데이터 저장
//HEAD: 첫번째 node 가리키는 포인터
//null 만날 때까지
//.size(), .isEmpty(), 출력: .printNode()
//추가: .append(), insert()
//삭제: .remove(), .removeAt()
//.indexOf()

//연결리스트 구현
function Node(data){
    this.data = data;
    this.next = null;
}
function LinkedList(){
    this.head = null;
    this.length = 0;
}
LinkedList.prototype.size = function(){
    return this.length;
};
LinkedList.prototype.imEmpty = function(){
    return this.length===0;
};

let ll = new LinkedList();
ll.head = new Node(123);
ll.length++;
console.log(ll.head.data);
ll.head.next = new Node(456);
ll.length++;
console.log(ll.head.data);

LinkedList.prototype.printNode = function(){
    for(let i=this.head; i!=null; i=i.next){
        //개행 없이. console.log는 개행됨
        process.stdout.write(`${i.data} -> `);
    }
    console.log('null');
};

LinkedList.prototype.append = function(value){
    let node = new Node(value),
    //(중요!) current값이 this.head 담아두지 않고 밑에서 this.head = this.head.next; 해 버리면 값 바뀌어 버림
    current = this.head;

    if(this.head === null){
        this.head = node;
    } else {
        while(current.next!=null){
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
};

ll.append(10);
ll.printNode();
console.log(ll.size());

LinkedList.prototype.insert = function(value, position=0){
    if(position<0 || position>this.length) return false;

    let node = new Node(value),
    current = this.head,
    index=0,
    prev;

    if(position==0){
        node.next = current;
        this.head = node;
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }
        node.next = current;
        prev.next = node;
    }
    this.length++;
    return true;
};

ll.insert(100,1);
ll.printNode();

//value 찾아 노드 삭제
LinkedList.prototype.remove = function(value){
    let current = this.head,
    prev = current;

    while(current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }
    if(current.data != value) return null;
    if(current == this.head){
        this.head = current.next;
    } else {
        prev.next = current.next;
    }
    this.length--;
    return current.data;
}
console.log(ll.remove(100));
ll.printNode();


//position 위치 노드 삭제
LinkedList.prototype.removeAt = function(position=0){
    if(position<0 || position >= this.length) return null;

    let current = this.head, index=0, prev;

    if(position===0){
        this.head = current.next;
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }
    this.length--;
    return current.data;
}
console.log(ll.removeAt(0));
ll.printNode();


LinkedList.prototype.indexOf = function(value){
    let current = this.head, index=0;

    while(current != null){
        if(current.data === value) return index;
    
        index++;
        current = current.next;
    }
    return -1;
};
console.log(ll.indexOf(456));
ll.printNode();

//remove2(): indexOf + removeAt = remove
LinkedList.prototype.remove2 = function(value){
    return this.removeAt(this.indexOf(value));
}
console.log(ll.remove2(456));
ll.printNode();




//3. 이중 연결 리스트(Double Linked List)
//각 노드가 데이터와 포인터를 가지며, 두 줄로 연결되어 있는 방식으로 데이터 저장
//LinkedList 속성 head와 length뿐이었는데, tail(뒤에서부터 탐색 가능)까지 추가
//포인터가 prev, next 두 개
// .size(), .isEmpty()
// 순차출력, 역출력: .printNode(), .printNodeInverse()
// 노드 추가: .append(), .insert()
// .remove(), removeAt()
// .indexOf()
function DoubleNode(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}
function DoubleLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
DoubleLinkedList.prototype.size = function(){
    return this.length;
};
DoubleLinkedList.prototype.imEmpty = function(){
    return this.length===0;
}

let dll = new DoubleLinkedList();
let node = new DoubleNode(123);
dll.head = node;
dll.tail = node;
dll.length++;

node = new DoubleNode(456);
//서로. 앞next, 뒤prev
dll.tail.next = node; //현재 dall.tail=new DoubleNode(123);
node.prev = dll.tail;
//tail 위치 바꿔줌
dll.tail = node;
dll.length++;
console.log(dll);



DoubleLinkedList.prototype.printNode = function(){
    process.stdout.write("head -> ");
    // this.length까지로 잡으면 안됨. 지금 i 숫자 아님
    for(let i=this.head; i!=null; i=i.next){
        process.stdout.write(`${i.data} -> `);
    }
    console.log("null");
}

dll.printNode();


DoubleLinkedList.prototype.printNodeInverse = function(){
    let temp = [];

    process.stdout.write("null <- ");
    for(let i=this.tail; i != null; i=i.prev){
        temp.push(i.data);
    }
    //뒤에서부터 빼야
    for(let i=temp.length-1; i>=0; i--){
        process.stdout.write(`${temp[i]} <- `);
    }
    console.log("tail");
}
dll.printNodeInverse();


DoubleLinkedList.prototype.append = function(value){
    let node = new Node(value);

    if(this.head === null){
        this.head = node;
        this.tail = node;
    } else {
        //원래 while을 통해서 끝 찾고 넣었었는데 tail이 있으니 바로 넣. O(1)
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    this.length++;
}

dll.append(1);
dll.printNode();
dll.printNodeInverse();


DoubleLinkedList.prototype.insert = function(value, position=0){
    if(position<0 || position>this.length) return false;

    let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

    if(position===0){
        if(this.head===null){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    } else if(position===this.length){
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }
        //노드 prev - node - current 순
        node.next = current;
        prev.next = node;

        current.prev = node;
        node.prev = prev;
    }
    this.length++;
    return true;
}

dll.insert(2,1);
dll.printNode();
dll.printNodeInverse();



DoubleLinkedList.prototype.remove = function(value){
    let current = this.head,
    prev = current;

    while(current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }

    if(current.data != value) return null;
    if(current == this.head){
        this.head = current.next;
        if(this.length===1) this.tail = null;
    }
}



//Stack(): 생성자 함수 초기 데이터 설정
function Stack(array){
    this.array = array? array: [];
}

//getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function(){
    return this.array.slice();
}

//isEmpty(): 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}

let stack = new Stack([1,2,3]);
console.log(Object.getOwnPropertyDescriptors(Stack.prototype));

Stack.prototype.push = function(ele){
    return this.array.push(ele);
}

//데이터 삭제
Stack.prototype.pop = function(){
    return this.array.pop();
}

//가장 끝 데이터 반환
Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
}

Stack.prototype.size = function(){
    return this.array.length;
}

Stack.prototype.indexOf = function(ele, position=0){
    /* case 1 */
    //return this.array.indexOf(ele, position);
    /* case 2 */
    for(let i=position; i<this.array.length; i++){
        if(ele == this.array[i]) return i;
    }
    return -1;
};

Stack.prototype.includes = function(ele, position=0){
    //return this.array.includes(ele, position);

    for(let i=position; i<this.array.length; i++){
        if(ele == this.array[i]) return true;
    }
    return false;
}




//큐
function Queue(array){
    this.array = array? array: [];
}

//getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function(){
    return this.array.slice();
}

Queue.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Queue.prototype.enqueue = function(ele){
    return this.array.push(ele);
}

Queue.prototype.dequeue = function(){
    return this.array.shift();
}

//가장 첫 데이터 반환
Queue.prototype.front = function(){
    return this.array.length == 0? undefined: this.array[0];
};

Queue.prototype.size = function(){
    return this.array.length;
}
//큐 초기화
Queue.prototype.clear = function(){
    this.array = [];
}




// 우선순위 큐
// 데이터와 우선순위 저장 위한
function Element(data, priority){
    this.data = data;
    this.priority = priority;
}
//Element 관리
function PriorityQueue(){
    this.array = [];
}

PriorityQueue.prototype.getBuffer = function(){
    return this.array.map(ele => ele.data);
}

PriorityQueue.prototype.isEmpty = function(){
    return this.array.length == 0;
}

console.log(Object.getOwnPropertyDescriptors(Element.prototype));
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));



//enqueue()
PriorityQueue.prototype.enqueue = function(data, priority){
    let element = new Element(data, priority);
    let added = false;

    for(let i=0; i<this.array.length; i++){
        if(element.priority < this.array[i].priority){
            this.array.splice(i,0,element);
            added = true;
            break;
        }
    }

    if(!added){
        this.array.push(element);
    }

    return this.array.length;
}

//dequeue()
PriorityQueue.prototype.dequeue = function(){
    return this.array.shift();
}

//front(): 가장 첫 데이터 반환
PriorityQueue.prototype.front = function(){
    return this.array.length == 0? undefined: this.array[0].data;
}

PriorityQueue.prototype.size = function(){
    return this.array.length;
}

//큐 초기화
PriorityQueue.prototype.clear = function(){
    this.array = [];
}


//원형 큐
//isFull() 추가됨
//head, tail: 빈칸
//length: 들어있는 size:총
const DEFAULT_SIZE = 5;
function CircularQueue(array=[], size=5){
    this.array = array;
    this.size = array.length>size? array.length: size;
    this.length = array.length;
    this.head = 0;
    this.tail = array.length;
}

CircularQueue.prototype.getBuffer = function(){
    return this.array.slice();
}

CircularQueue.prototype.isEmpty = function(){
    return this.length == 0;
}

CircularQueue.prototype.isFull = function(){
    return this.length == this.size;
}

// console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));/
CircularQueue.prototype.enqueue = function(ele){
    if(this.isFull()) return false;

    this.array[this.tail % this.size] = ele;
    this.tail++;
    this.length++;

    return true;
}

CircularQueue.prototype.dequeue = function(){
    if(this.isEmpty()) return undefined;

    let ele = this.array[this.head % this.size];
    delete this.array[this.head % this.size];
    this.head++;
    this.length--;

    return ele;
}

CircularQueue.prototype.front = function(){
    return this.length == 0? undefined: this.array[this.head];
}

CircularQueue.prototype.dataSize = function(){
    return this.length;
}

CircularQueue.prototype.clear = function(size=DEFAULT_SIZE){
    this.array=[];
    this.size = size;
    this.length=0;
    this.head=0;
    this.tail=0;
}



//데크 : 스택, 큐 합한
function Deque(array=[]){
    this.array = array;
}

Deque.prototype.getBuffer = function(){
    return this.array.slice();
}

Deque.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Deque.prototype.pushFront = function(ele){
    return this.array.unshift(ele);
}

Deque.prototype.popFront = function(){
    return this.array.shift();
}

Deque.prototype.pushBack = function(ele){
    return this.array.push(ele);
}

Deque.prototype.popBack = function(){
    return this.array.pop();
}

Deque.prototype.front = function(){
    return this.array.length == 0? undefined: this.array[0];
}

Deque.prototype.back = function(){
    return this.array.length == 0? undefined: this.array[this.array.length-1];
}

Deque.prototype.size = function(){
    return this.array.length;
}

Deque.prototype.clear = function(){
    this.array = [];
}


//딕셔너리(feat.파이썬) java에서는 Map
function Dictionary(items={}){
    this.items = items;
}

Dictionary.prototype.getBuffer = function(){
    return {...this.items};
}

Dictionary.prototype.clear = function(){
    this.items = {};
}

Dictionary.prototype.size = function(){
    return Object.keys(this.items).length; //keys(): key 배열로 반환
}

let dict = new Dictionary({age: 19, name:"alice"});
console.log(dict.size());


//해시함수 : 임의의 길이 데이터를 "고정 길이"의 데이터로 매핑
//특성: 1.가변 길이->고정 길이
//2. 결과값으로 입력값 찾지 X

//해시테이블: 해시함수 이용해 평균 O(1) 시간복잡도로 특정값 신속하게 찾
//for문은 O(n)
//해시테이블 충돌 해결방법
//방법1. 해시함수 변경: 더 큰 숫자의 공간, % 사용
//방법2. 자료구조 확장: 선형조사법(이중해시), 체이닝
const HASH_SIZE = 37;

function Element(key,value){
    this.key = key;
    this.value = value;
}

function HashTable(){
    this.table = new Array(HASH_SIZE);
    this.length=0;
}

//hashCode(): 해시함수
//key 받아 index 반환
HashTable.prototype.hashCode = function(key){
    let hash=5384;
    for(let i=0; i<key.length; i++){
        hash += hash*33+ key.charCodeAt(i);
    }
    return hash % HASH_SIZE; //index
}

let ht = new HashTable();
console.log(ht);

console.log(ht.hashCode("Ana"));
console.log(ht.hashCode("Sue"));

HashTable.prototype.put = function(key, value){
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if(this.table[index] !== undefined){
        return false;
    }
    this.table[index] = new Element(key, value);
    this.length++;

    return true;
}

HashTable.prototype.get = function(key){
    return this.HashTable[this.hashCode(key)];
}

HashTable.prototype.remove = function(key){
    let element = this.table[this.hashCode(key)];

    if(element !== undefined){
        delete this.table[this.hashCode(key)];
        this.length--;
    }

    return element;
}

HashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    this.length=0;
}

HashTable.prototype.size = function(){
    return this.length;
}

HashTable.prototype.getBuffer = function(){
    let array=[];
    for(let i=0; i<this.table.length; i++){
        if(this.table[i]){
            array.push(this.table[i]);
        }
    }
    return array;
}

HashTable.prototype.print = function(){
    for(let i=0; i<this.table.length; i++){
        if(this.table[i]){
            console.log(i+" -> "
                + this.table[i].key + ": " + this.table[i].value);
        }
    }
}

ht.put("Ana", 172);
ht.put("Sue", 163);

ht.print();
console.log(ht.getBuffer());


//해시테이블 충돌 - 방법1. 선형조사법 해시테이블
//충돌 시 그 다음 주소 확인하고 비어있으면 그 자리에 대신 저장
//해시테이블 메서드와 동일. 다른 것만 아래에.
function LinearHashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

//맨 밑 3줄이 다른 부분
LinearHashTable.prototype.put = function(key, value){
    let index = this.hashCode(key);
    let startIndex = index;
    console.log(`key: ${key} -> index: ${index}`);
    do{
        if(this.table[index]===undefined){
            this.table[index] = new Element(key, value);
            this.length++;
            return true;
        }
        
        index = (index+1)%HASH_SIZE;

    }while(index !== startIndex); //한바퀴 돌고 다시 원위치로 왔을 때 그만

    return false;
}

LinearHashTable.prototype.get = function(key){
    let index = this.hashCode(key);
    let startIndex = index;

    do{
        if(this.table[index] !== undefined && this.table[index].key===key){
            return this.table[index].value;
        }

        index = (index+1) % HASH_SIZE;
    }while(index !== startIndex);
    return false;
}

LinearHashTable.prototype.remove = function(key){
    let index = this.hashCode(key);
    let startIndex = index;

    do{
        if(this.table[index] !== undefined && this.table[index].key===key){
            let element = this.table[index];
            delete this.table[index];
            this.length--;
        
            return element;
        }

           index = (index+1) % HASH_SIZE;
    }while(index !== startIndex);
    return undefined;
}


//해시테이블 충돌 - 방법2. 체이닝 해시테이블
//별도의 자료구조인 연결리스트 병합 사용해 
function ChainingHashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

ChainingHashTable.prototype.put = function(key, value){
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index:${index}`);

    if(this.table[index] === undefined){
        this.table[index] = new LinkedList();
    }
    this.table[index].append(new Element(key,value));
    this.length++;
    return true;
}

// let cht = new ChainingHashTable();
// cht.put("Ana", 172);
// console.log(cht);
//데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function(){
    let array=[];
    for(let i=0; i<this.table.length; i++){
        if(this.table[i]){
            let current = this.table[i].head;
            do{
                array.push(current.data);
                current = cuurent.next;
            }while(current); //null을 만날 때까지
        }
    }
    return array;
}
//데이터 셋 출력
ChainingHashTable.prototype.print = function(){
    for(let i=0; i<this.table.length; i++){
        if(this.table[i]){
            let current = this.table[i].head;
            process.stdout.write(`#${i}`);
            do{
                process.stdout.write(` -> 
                ${current.data.key}: ${current.data.value}`);
                current = current.next;
            }while(current);
            console.log("");
        }
    }
}

ChainingHashTable.prototype.get = function(key){
    let index = this.hashCode(key);
    if(this.tablep[index] !== undefined && !this.table[index].isEmpty()){
        let current = this.tablep[index].head;

        do{
            if(current.data.key === key){
                return current.data.value;
            }
            current = current.next;
        }while(current);
    }
    return undefined;
}

ChainingHashTable.prototype.remvoe = function(key){
    let index = this.hashCode(key);
    let element = undefined;

    if(this.table[index] !== undefined){
        let current = this.table[index].head;

        do{
            if(current.data.key === key){
                element = current.data;
                this.table[index].remove(current.data);
                if(this.array[index].isEmpty()){ //삭제 후 this.array[index] 값 없고 빈껍데기면 지우기
                    delete this.table[index];
                }
            }
            current = current.next;
        }while(current);
    }
    this.length--;
    return element;
}