/** Class를 모듈화 하기 */
const Myclass = function() {
    console.log("--- Myclass의 객체가 생성되었습니다. ---");
    this.age = 20;
    this.name = '노드';
};

Myclass.prototype.say = function() {
    console.log("이름: " + this.name);
    console.log("나이: " + this.age);
};

// 클래스 자체를 모듈에 추가
module.exports = Myclass;