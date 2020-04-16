function average(scores) {
    let total = 0;
    let averageScore = 0;

    for (score of scores) {
        total = total + score;
    }

    return Math.round(total / scores.length);
}

let grades = [90, 98, 89, 100, 100, 86, 94];

let averageGrade = average(grades);
console.log(averageGrade);
