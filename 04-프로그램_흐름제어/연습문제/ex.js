let a = 0;
let b = 1;

while (b<10){
    let k= b*7;
    console.log("7 x %d = %d", b,k)
    b++;
    a+=k;
}
console.log("7단의 총합: %d",a);