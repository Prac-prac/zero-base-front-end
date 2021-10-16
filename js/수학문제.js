// Number() == str(문자열->숫자형)/1

function solutionDate(a, b) {
    var answer = '';
    
    var day= new Date(2016, a-1, b).getDay();
    //직관적 쉬운 방법 switch
    // switch(day){
    //     case 0: answer = "SUN"; break;
    //     case 1: answer = "MON"; break;
    //     case 2: answer = "TUE"; break;
    //     case 3: answer = "WED"; break;
    //     case 4: answer = "THU"; break;
    //     case 5: answer = "FRI"; break;
    //     case 6: answer = "SAT"; break;
    // }
  
  
    //switch로 길게 말고 간단히 배열에 담아서 하는 방법
    let arr = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
    answer = arr[day];
  
    //한줄로. 뒤 []가 인덱스
    //return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][new Date(2016, a-1, b).getDay()];
  
    return answer;
}

//폰켓몬 몇 가지를 어떻게 세나 배열에 넣고 비교해야하나? No!!! -> Set
function pocketmon(arr){
    let selectable = arr.length/2;
    let kindof = new Set(arr).size;
    //set 배열 형태로
    // let kindof = [...new Set(arr)].length;
    return selectable>kindof? kindof: selectable;
}

//sort 활용
function stringSort(strings, n){
    //n번째가 같은 문자이면? 가지고 삼항식. :뒤가 같지 않은 일반적인 상황
    //1: 바꾸고 -1:그대로 두고
    return strings.sort((x,y)=> x[n]==y[n]? (x>y?1:-1) : (x[n]>y[n]?1:-1));
}

//이중for문 없이. repeat 활용
const stars = '*'.repeat(a);
for(let i=0; i<b; i++) console.log(stars);

//두 수 사이 합
//첫값이 더 클 때 자리 바꾸기
if(a>b) [a,b]=[b,a];
//한줄로하면
//가우스법칙: (첫값+마지막값)*개수/2
return (first+last)*(Math.abs(a-b)+1)/2; 


//가우스법칙 탈 때마다 곱절 올라가는 놀이공원
//price * ((cnt*(1+cnt))/2)

//이차배열인 commands
//commands.map((ele)=>{ //이차배열의 요소인 일차배열
//   const [start, end, position] = ele;  //ele인 [,,] 그대로 대입됨
// return arr.slice(start-1, end).sort(~);
//});

//filter 사용. 조건 맞는 값만 배열로 반환
let answer = arr.filter(n => n%divisor ==0);

//연속적으로 중복되는 수 없애기
//나는 중복되는 수를 splice해서 지울 생각으로 while짜보고 안됐는데
//그냥 처음부터 덜어내는 게 아니라 새로운 배열에 집어넣을 생각을 함
// if(arr[i]!=arr[i+1]){push}/