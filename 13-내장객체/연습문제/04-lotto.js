let lotto = new Array(6);


for (let i=0; i<lotto.length; i++) {
    while(true) {
        const rnd = random(1,6);
        console.log("랜덤값 생성 :::", rnd);

        let find =false;

        for(let j=0; j<i; j++) {
            if (rnd == lotto[j]) {
                console.log(" >>> 중복된 값 찾음");
                find = true;
                break;
            }
        }
    }
    lotto.new += random(1, 64)
}
console.log(lotto)