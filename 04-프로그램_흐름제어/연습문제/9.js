let sum = 0;


for (let i=1; i<10; i++) {
    let x =8 *i;
    sum += x;
}

console.log("구구단 8단의 결과값에 대한 총합: %d", sum);

if (sum % 2 == 0) {
    console.log("짝수 입니다.");
} else {
    console.log("홀수 입니다.")
}