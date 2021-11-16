/** 변수들의 그룹으로서의 JSON 정의 */
const student = {
    studno: 10101,
    grade: 1,
    name: "학생",
    phoneno: "010-1234-5678"
};

// 각각 데이터 출력
// 데이터에 접근하는 기본적인 방법은 객체이름.하위정보이름
// --> 90% 이상의 경우에서 이 방식이 사용됨.
console.group("출력 type1");
console.log("학번: " + student.studno);
console.log("학년: " + student.grade);
console.log("이름: " + student.name);
console.log("연락처: " + student.phoneno);
console.groupEnd();

//JSON의 key이름을 배열의 인덱스처럼 활용
console.group("출력 type2");
console.log("학번: " + student['studno']);
console.log("학년: " + student['grade']);
console.log("이름: " + student['name']);
console.log("연락처: " + student['phoneno']);
console.groupEnd();


//접근하고자 하는 하위 변수의 이름을 동적으로 설정해야 할 경우 type2가 활용된다.
const keyName = "phoneno";
console.log(student[keyName]);