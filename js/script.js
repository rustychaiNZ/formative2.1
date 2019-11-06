//function: find max value of a number list
function findMax(aNums) {
    var iMax = aNums[0];

    for(var iCount=0; iCount<aNums.length; iCount++) {
        // iMax was displaying the minimum rather than the maximum
        if(iMax < aNums[iCount]) {
            iMax = aNums[iCount];
        }
    }

    return iMax;
}

//-----------------------------------------

//Input: Get 3 grades for each student
var iSize = parseInt(prompt('Class size?'));
var aGradesPhysics = [];
var aGradesChemistry = [];
// This variable was not an array 
var aGradesBiology = [];

//ParseInt does the same as Number but removes anything other than a number from the value if input
//Example parseInt(abc123) will give you 123
for(var iCount=0; iCount<iSize; iCount++) {
    var iGradePhysics = parseInt(prompt('Student '+(iCount+1)+': Grade for Physics out of 100'));
    aGradesPhysics.push(iGradePhysics);

    var iGradeChemistry = parseInt(prompt('Student '+(iCount+1)+': Grade for Biology out of 100'));
    aGradesChemistry.push(iGradeChemistry);

    var iGradeBiology = parseInt(prompt('Student '+(iCount+1)+': Grade for Chemistry out of 100'));
    aGradesBiology.push(iGradeBiology);
}

// processing: calculate average grade for each student and find top grade in class
var aAverageGrades = [];

for(var iCount=0; iCount<iSize; iCount++) {
    // Changed 'aGradesPhysics.length' to a '3' as there are only 3 subjects that a student can take
    var fAverage = (aGradesPhysics[iCount] + aGradesChemistry[iCount] + aGradesBiology[iCount]) / 3;
    aAverageGrades.push(fAverage);
}
// Removed the 's' from the findMax method
var iTopGrade = findMax(aAverageGrades);

//output: list result for each student and top grade


// Started the loop that searches through the array at 0 when initially it was starting from 1
for(var iCount=0; iCount<aAverageGrades.length; iCount++) {
    if(aAverageGrades[iCount] < 50) {

        document.write('Student '+(iCount+1)+': Fail'+'<br>');

    } else if((aAverageGrades[iCount] >= 50) && (aAverageGrades[iCount] < 80)) {

        document.write('Student '+(iCount+1)+': Pass<br>');

    } else {

        document.write('Student ' + (iCount+1) + ': Pass with Distinction'+'<br>');
    }
}

// The 'iTopGrade' varibale was incorrectly written with a lower case 'g' instead of an upper case
document.write('<h1>The top overall grade is '+ iTopGrade +'</h1>');
