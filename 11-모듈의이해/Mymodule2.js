/** exports의 하위 속성으로 변수,JSON,함수 추가하기 */
module.exports.name = "노드";
module.exports.property = {id:'nodejs', type:'Javascript'};
module.exports.say = function() {
    console.log("Hellow World");
};

/** exports 속성으로 객체 추가 */
module.exports.home = {
    postcode: '12345',
    adress: '서울시 강난구 역삼동',
    getAddress: function() {
        console.log(this.postcode + '' + this.adress);
    }
};