/** 
 * 6행 7열 구성된 2차 배열을 준비하고,
 * 배열의 모든 칸에 1부터 순차적으로 증가하는 값을 할당하시오.
 * 단, i가 0일 때 j가 3보다 작다면 0을 대입하고 인덱스가 3인 위치부터 1씩 증가라는 값을 할당해야 합니다.
 * 또한 counter가 30보다 크다면 그 자이에는 0을 대신 할당 해야 합니다.
 */

// 6행 7열의 빈 배열 만들기
var data = new Array(6);

for (let i=0; i<data.length; i++) {
    data[i] = new Array(7);
}

console.log(data);

// 1씩 증가할 빈
let counter = 1;

for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i].length; j++) {
        if (i == 0 && j < 3 || counter > 30) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    }
}