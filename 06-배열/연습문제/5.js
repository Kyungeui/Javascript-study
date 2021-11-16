// 문제 4번의 장바구니 내역에서 상품금액(판매가*수량)이 가장 비싼 항목은 얼마인지 출력하시오.
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let money = 0;

for (let i = 0; i < price.length; i++) {
     // i번째에 대한 총 금액을 구한다.
    const num = price[i] * qty[i];
    if (money < num) {
        money = num;
    }
}
console.log("가장 높은 상품 금액: " + money + "원");
