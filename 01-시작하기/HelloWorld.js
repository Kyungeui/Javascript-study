"use strict"; // 엄격모드 적용 --> ES6가 등장하면서 함께 출가된 ES5의 변경사항을 활성화 시킴

console.group("group1");                    // 출력하는 내용을 그룹으로 묶음
console.log("안녕하세요. Javascript1");
console.log("안녕하세요. Javascript2");
console.log("안녕하세요. Javascript3");
console.groupEnd();                         // 그룹으로 묶기 끝!!

console.group("group2");
console.log("안녕하세요. Javascript4");
console.group("group2-1");
console.log("안녕하세요. Javascript5");
console.log("안녕하세요. Javascript6");
console.groupEnd();
console.groupEnd();