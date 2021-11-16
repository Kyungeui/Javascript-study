/**
[반복 회수를 구하기 위한 연산]
1. 원소가 5개일 경우 반복 회수 : 2회
    -5/2를 연산한다 . 연산 결과를 parseInt() 명령을 통해 나머지를 버릴 수 있다. 2나머지 5 -> 2나머지
2. 원소가 6개일 경우 반복 회수 : 3회
    -6/2를 연산한다.

=> 즉 배열의 길이 /2 만큼 반복 처리

[반대쪽 위치의 원소 구하기]
=>배열의 길이 -i-1
*/

const data = [1, 5, 2, 4, 3];
console.log(data);

// 반복 횟수 -> 2나눈다.
// parseInt(실수)명령은 소수점 아래를 버리고 정수 부분만 반환한다.
const p = parseInt(data.length/2);

for (let i=0; i<p; i++) {
    //i번째 원소의 반대쪽에 위치한 원소의 인덱스.
    const k = data.length -i -1 ;

    //i번째 원소와 k번째 원소의 교환 
    const tmp = data [i];
    data [i] = data[k];
    data [k] = tmp;
}
console.log(data);