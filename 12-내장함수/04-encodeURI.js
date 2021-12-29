/** 
 * encodeURI(string)
 * 
 * 주어진 문자열을 URl에 포함시키기에  적절한 형태로 변환(=인코딩)하는 처리
 * 인코딩하지 않는 문자
 * A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
 */

var set1 = ";,/?:@&=+$#";
var set2 = "-_.!~*'()";
var set3 = "ABC abc 123";
var set4 = "자바스크립트";

console.log(encodeURI(set1));
console.log(encodeURI(set2));
console.log(encodeURI(set3));
console.log(encodeURI(set4));
