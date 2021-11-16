// ** 풀이(1) ** // - 코딩
// let number =1;
number = 2;

// ** 풀이(1) ** //
let start = null;
let end = null;

if (number === 1) {
    start = 3;
    end = 10;
} else if (number === 2) {
    start = 2;
    end = 9;
}

for (let a=start; a<end; a+=2) {
    for(let b=1; b<10; b++) {
        console.log("%d x %d = %d", a, b, a*b)
    }
}

// ** 풀이(2) ** // - 프로그램

// // let number =1;
// number = 2;

// // f(x)=4-x라는 방정식을 세워서 적용한 경우.
// for (let i=4-number; i<10; i+=2){
//     for (let j=1; j<10; j++) {
//         console.log("%d x %d = %d", i, j, i*j)
//     }
// }