const student = {
    studno: 10101,
    grade: 1,
    name: "학생 1",
    phoneno: "010-1234-1234"
};

// JSON이나 멤버변수를 갖는 객체에 대한 반복문
for (let key in student) {
    console.group(key);
    console.log(student[key]);
    console.groupEnd();
}