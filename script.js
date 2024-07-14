function calculateGrade(score) {
  //your code here

	 if (typeof score !== 'number' || score < 0) {
        return 'F';
    }

    // Round the score to the nearest integer
    let roundedScore = Math.round(score);

    // Determine the grade based on the rounded score
    if (roundedScore >= 90) {
        return 'A';
    } else if (roundedScore >= 80) {
        return 'B';
    } else if (roundedScore >= 70) {
        return 'C';
    } else if (roundedScore >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// calculateGrade(90)
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage))
