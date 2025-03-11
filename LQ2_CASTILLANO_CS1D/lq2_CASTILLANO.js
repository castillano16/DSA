let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

if (course === "BSCS") {
    console.log(name + ", you are enrolled in Bachelor of Science in Computer Science.");
} else if (course === "BSM") {
    console.log(name + ", you are enrolled in Bachelor of Science in Mathematics.");
} else if (course === "BAEL") {
    console.log(name + ", you are enrolled in Bachelor of Arts in English Language.");
} else {
    console.log(name + ", your course is not recognized. Please consult the registrar.");
}

let iterations = Math.floor(age / 4);
for (let i = 0; i < iterations; i++) {
    console.log(name);
}