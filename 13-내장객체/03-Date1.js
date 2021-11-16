/** 
 * Date
 * 객체를 생성하는 순간의 시스템 시각이나 생성자 파라미터로 전달된 시각을 플랫폼에 종속되지 않는 형태로 타나낸다.
 */

/** 요일의 이름을 저장하고 있는 배열의 생성 */
const days = ['일','월','화','수','목','금','금','토'];

/** 객체의 생성 */
const data1 = new Date();

/** 년,월,일,시간,분,초 를 리턴받기 */
const yy = data1.getFullYear();

const mm = data1.getMonth() +1;
const dd = data1.getData();

//0=일요일 ~6= 토요일의 값이 리턴된다.
const i = data1.getDay();
const day = days[i];

const hh = data1.getHours();
const mi = data1.getMinutes();
const ss = data1.getSeconds();

let result = yy + '-' + mm + '-' + dd + '' + day + '요일' + hh + ':' + mi + ':' + ss;
console.log(result);

console.log(data1.toDataString());

console.log(data1.toISOString());