//Add Students to Class
const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.length + 1 <= 6 && studentName !== "" || studentName == 'Queen') {
    if (class07Students.includes(studentName)) {
      console.log(`'Student ${studentName} is already in the class'`);
    } 
    else {
      class07Students.push(studentName);
    }
  } 
  else {
    if (studentName === '') {
      console.log(`You should give a name`);
    } else {
      console.log(` "Cannot add more students to class 07" `);
    }
    }
      
}

addStudentToClass('Shahila');
addStudentToClass('Shahila');
addStudentToClass("");
addStudentToClass('Mafraz1');
addStudentToClass('Mafraz');
// addStudentToClass('Queen');
addStudentToClass('Mafraz2');
addStudentToClass('Mafraz3');
addStudentToClass('Mafraz4');
addStudentToClass('Mafraz5');
addStudentToClass('Queen');
addStudentToClass('Mafraz6');


console.log(class07Students);
//console.log(total);


// Get number of Student
function getNumberOfStudents(student_arr) {
  let total = student_arr.length;
  console.log(total);
}

getNumberOfStudents(class07Students);
