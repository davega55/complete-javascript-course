/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1959);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 70 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is at retirement age.');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1959, 'Mike');
yearsUntilRetirement(1990, 'Jane');
*/

/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a truck in Omaha';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
console.log(whatDoYouDo('driver', 'Bubba'));
*/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
