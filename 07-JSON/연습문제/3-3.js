// 위의 데이터를 확진자 수에 대한 오름차순으로 정렬하시오.

covid19 = [
    {'0125': 426}, {'0126': 343}, {'0127': 547}, {'0128': 490}, 
    {'0129': 460}, {'0130': 443}, {'0131': 338}, {'0201': 299}
]
// 방법(1)
for (let a=0; a<covid19.length-1; a++) {
    // a번째 json의 key를 저장하기 위한 변수
    let key_a = null;

    // a번째 json의 key를 대상으로 반복 처리
    for (const k in covid19[a]) {
        key_a = k;
        // 반복중단 -> 예시 데이터는 각 json이 하나의 원소만을 갖기 때문에,
        // 이 구문은 의미 없지만, 만약 json이 두개 이상의 원소를 갖는다면
        // 이 구문으로 인해 key_a에는 첫번째 key가 저장된다.
        break;
    }
    // console.log(key_a)
    
    for (let b=a+1; b<covid19.length; b++) {
        //같은 방법으로 j번째 json의 key 추출
        let key_b = null;

        for (const l in covid19[b]) {
            key_b = l;
            break;
        }
        if (covid19[a][key_a]<covid19[b][key_b]) {
            const tmp = {};
            Object.assign(tmp, covid19[a]);

            covid19[a] ={};
            Object.assign(covid19[a], covid19[b]);

            covid19[b] ={};
            Object.assign(covid19[b], tmp);
        }

    }
}
console.log(covid19);