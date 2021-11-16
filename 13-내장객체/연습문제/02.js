const ssn = "020517-1******";

year = ssn.substring(0,2);
month = ssn.substring(3,4);
day = ssn.substring(5,6);
sex = ('남자');


console.log("%s년 %s월 %s일에 태어난 %s세 %s 입니다.",year,month,day,0,sex);