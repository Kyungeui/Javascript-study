console.group("1) Switch 가본 구문");

const 국어 = "B";

//조건에 맞는 case 블록부터 break 키워드 만날때 까지 실행한다.
switch (국어) {
    case'A':
        console.log("A학점 입니다.");
        break;
    case'B':
        console.log("B학점 입니다.");
        break;
    case'C':
        console.log("C학점 입니다.");
        break;
    default:
        console.log("C학점 미만 입니다.");
        break;

}
console.groupEnd();

console.group("2) break 가 없는 경우");
 const 영어 = "B"

 switch (영어) {
    case 'A':
        console.log("A학점 입니다.");
    case 'B':
        console.log("B학점 입니다.");
    case 'B':
        console.log("C학점 입니다.");
    default:
        console.log("C학점 미만 입니다.");
 }
 console.groupEnd();

 console.group("3)의도적으로 break 조절");
 const 수학 = "B"

 switch (수학) {
    case 'A':
    case 'B':
    case 'C':
        console.log("이 과목을 Pass 했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
 }
 console.groupEnd();

 console.group("4)break의 조건을 식으로 설정하는 경우");

 const 과학 = "66"

 switch (과학 > 70) {
    case true:
        console.log("이 과목을 Pass 했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
 }
 console.groupEnd();