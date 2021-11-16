console.group("7)번 문제");
let factorial = 1;
let max = 7;

for (let i=1; i<=max; i ++) {
    factorial *= i;
}
console.log("%d! => %d", max, factorial);

console.groupEnd();