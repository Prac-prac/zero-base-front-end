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