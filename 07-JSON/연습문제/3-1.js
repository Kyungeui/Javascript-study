/** 아래의 데이터는 2021년 01월 25일부터 02월 01일까지의 Covid19 일별 확진자 수를 표현한 자료구조다. */
// 1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.

covid19 = [
    {'0125': 426}, {'0126': 343}, {'0127': 547}, {'0128': 490}, 
    {'0129': 460}, {'0130': 443}, {'0131': 338}, {'0201': 299}
]
let sum = 0;

for (const a of covid19) {
    for (const k in a) {
        console.log(a[k]);
        sum += a[k];
    }
}
console.log ("누적 확진자 수: %d", 3346);
console.log("평균 확진자 수: %d", sum / covid19.length);