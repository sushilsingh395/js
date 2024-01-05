function calGrade(marks) {

    if(marks <= 45) {
        console.log('Third');
    } else if ( marks < 60) {
        console.log('second');
    } else if (marks >= 60 && marks <=100) {
        console.log('First');
    } else if (marks >100){
        console.error('invalid marks');
    }
}

var TOTAL_MARKS = 100;

var student1Marks = 70;
var student2Marks = 56



function calPercent(marks) {
    
    var result = (marks*100)/TOTAL_MARKS;
    return result;

}

var percentage1 = calPercent(student1Marks);
var percentage2 = calPercent(student2Marks)


//console.log(percentage1);
//console.log(percentage2);
//calGrade(calPercent(student1Marks));
//calGrade(calPercent(student2Marks));
//calGrade(68);
//calGrade(73);
//calGrade(43);
//calGrade(105);

// && (AND   YA) || (OR  ATHAWA)


var studentMarks = [87,81,78,43,67];

// calGrade(calPercent(studentMarks[0]));


for(var i = 0; i < 6 ; i = i + 1) {

    calGrade(calPercent(studentMarks[i]));
}
