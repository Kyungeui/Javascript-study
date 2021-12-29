/**
 * encodeURIComponent(string)
 * 
 * 알파벳과 숫자및 비예약 표식을 제외한 모든 글자를 URL에 포함시킬수 있는 문자열로 인코딩 한다.
 */

 var set1 = ";,/?:@&=+$#";
 var set2 = "-_.!~*'()";
 var set3 = "ABC abc 123";
 var set4 = "자바스크립트";
 
console.log(encodeURIComponent(set1));
console.log(encodeURIComponent(set2));
console.log(encodeURIComponent(set3));
console.log(encodeURIComponent(set4));
 
