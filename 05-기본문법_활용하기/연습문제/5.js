for(let i=0; i<4; i++) {
    // 한 줄에 출력할 문자열 <- "0 1 2 3", "1 2 3 4"
    let num ="";

    //열을 담당하는 반복
    for(let j=0; j<4; j++){
    num += (i+j) + " ";
    }
    console.log(num);
} 