let sum = 0;
let i=1;

while (i<10) {
    let x =8 *i;
    sum += x;
    i++;
}

console.log("구구단 8단의 결과값에 대한 총합: %d", sum);

if (sum % 2 == 0) {
    console.log("짝수 입니다.");
} else {
    console.log("홀수 입니다.")
}