function getGrades(inputSelector) {
    //get grades from the input box.
    const grades = document.querySelector(inputSelector);
    //split them into an array String.split(',')).
    const gradesArray = grades.split(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const gradesFormated = gradesArray.map((grade) => grade.trim().toUpperCase());
    // return grades
    return gradesFormated;
}

function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    else if (grade === "C") {
        points = 2;
    }
    else if (grade === "D") {
        points = 1;
    }
    return points;
}

function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
}

function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
}
document.querySelector("#submitButton").addEventListener("click", clickHandler);