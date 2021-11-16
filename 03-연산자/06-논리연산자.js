/** 1) and */
console.group("1) and");
console.log(true && true);       //true
console.log(true && false);      //false
console.log(false && true);      //false
console.log(false && false);     //false
console.groupEnd();

/** 2) and 연산 여러개 사용 */
console.group("2) and 연산 여러 개 사용");
console.log(true && true && true);      //true
console.log(true && true && false);     //false
console.log(false && false && true);    //false
console.log(false && true && true);     //false
console.groupEnd();

/** 3) or */
console.group("3) or");
console.log(true || true);       //true
console.log(true || false);      //true
console.log(false || true);      //true
console.log(false || false);     //false
console.groupEnd();

/** 4) or 연산 여러개 사용 */
console.group("3) or");
console.log(true || true || true);       //true
console.log(true || true || false);      //true
console.log(false || false || true);     //true
console.log(false || true || true);      //true
console.groupEnd();

/** 5) 복합사용 */
console.group("5) 복합사용");
// AND가  OR보다 항상 우선한다.
console.log(true && true || true);       // t || t -> t
console.log(true && true || false);      // t || f -> t
console.log(false && false || true);     // f || t -> t
console.log(false && true || true);      // t || t -> t

console.log(true || true && true);       // t || t -> t
console.log(true || true && false);      // t || f -> t
console.log(false || false && true);     // f || f -> f
console.log(false || true && true);      // f || t -> t
console.groupEnd();

/** 6) not */
console.group("6) not ");
let success = true