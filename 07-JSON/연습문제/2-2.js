const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};
let sum = 0;
let student = 0;
for ( const key in exam) {
    sum += exam[key][2]
    student ++;
    }
    
    let avg = sum / student;
    console.log ("모든 학생의 수학 총점은 %d점 이고 평균은 %d입니다.",sum , avg);
    

