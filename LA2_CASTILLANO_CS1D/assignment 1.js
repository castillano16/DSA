// Student Information
let student1 = {
    fullName: "Marbelen Castillano",
    birthDate: "June 16, 2006",
    birthPlace: "Uso, Suyo, Ilocos Sur, Philippines 2715",
    address: "Uso, Suyo, Ilocos Sur, Philippines 2715",
    course: "Bachelor of Science in Computer Science",
    dreamJob: "Accountancy"
};

let student2 = {
    fullName: "Janeen Tawagen Inigo",
    birthDate: "September 16, 2006",
    birthPlace: "Labut, Lidlidda, Ilocos Sur, Philippines 2723",
    address: "Labut, Lidlidda, Ilocos Sur, Philippines 2723",
    course: "Bachelor of Science in Computer Science",
    dreamJob: "Teacher"
};

let student3 = {
    fullName: "Janeen Gallardo Retoriano",
    birthDate: "December 6, 2003",
    birthPlace: "Paltoc, San Emillio, Ilocos Sur, Philippines 2722",
    address: "Paltoc, San Emillio, Ilocos Sur, Philippines 2722", 
    course: "Bachelor of Science in Computer Science",
    dreamJob: "Chef"
};

// Function to format and display student details
function displayStudentInfo(student) {
    console.log(`[${student.fullName.toUpperCase()}] was born [${student.birthDate}] at [${student.birthPlace.toUpperCase()}], and currently living at [${student.address.toUpperCase()}].`);
    console.log(`[${student.fullName.toLowerCase()}] is taking up [${student.course.toLowerCase()}] and dreams to be [${student.dreamJob}] after graduation.`);
    console.log("\n");
}

// Displaying information for all students
displayStudentInfo(student1);
displayStudentInfo(student2);
displayStudentInfo(student3);
