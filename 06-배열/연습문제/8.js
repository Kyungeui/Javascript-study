// 아래의 코드는 배열의 원소를 반대로 배치하는 소스코드의 일부이다.
const arr = [5, 3, 2, 8, 9];
console.log('before --> ' + arr);

for (let i = 0; i < parseInt(arr.length/2); i++) {
    const k = arr.length- i -1;
    const tmp = arr[i];
    arr[i] = arr[k];
    arr[k] = tmp;
}
console.log('after --> ' + arr);