const steps = ["one", "two", "three"];
const listTemplate = (step)=> {
  return `<li>${step}</li>`;
};
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

let grades = ['A', 'B', 'C'];
function gradeToPoints(grade) {
    points = 0
    if (grade === 'A') {
        points = 4;
    }
    else if (leter === 'B') {
        points = 3;
    }
    else if (grade === 'C') {
        points = 2;
    }
    return points;
}
const gpaPoints = grades.map(gradeToPoints);

const gradesTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});

const gpa = gradesTotal / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortfruits = words.filter(function (word){
    return word.length <6;
});

const numbers = [12, 34, 21, 54];
const lucky_n = 21;
const numIndex = numbers.indexOf(lucky_n); 