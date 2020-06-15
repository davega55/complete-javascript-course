/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';
isMarried = false;

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?')
console.log(firstName + ' ' + lastName);
*/

/*
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;


console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof year);
console.log(typeof yearJohn);
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
*/

/*
var markMass, johnMass, markHeight, johnHeight;
markMass = 78;
johnMass = 92;
markHeight = 1.69;
johnHeight = 1.95;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

isMarkHigher = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkHigher);
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married')
{
    console.log(firstName + ' is married!')
}
else
{
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried)
{
    console.log(firstName + ' is married!')
}
else
{
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78;
var heightMark = 1.69
var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIMark > BMIJohn)
{
    console.log('Mark\'s BMI is higher than John\'s');
}
else
{
    console.log('John\'s BMI is higher than Marks\'s');
}
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13)
{
    console.log(firstName + ' is a boy.');
}
else if (age >= 13 && age < 20)
{
    console.log(firstName + ' is a teenager');
}
else if (age >= 20 && age < 30)
{
    console.log(firstName + ' is a young man.');
}
else
{
    console.log(firstName + ' is a man.');
}

var job = 'teacher';
switch (job)
{
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives a truck in Omaha.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
            console.log(firstName + ' does something else.');
            break;
}

switch (true)
{
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*****************************************
 *  Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy value: NOT falsy values

 var height;

 height = 0;

 console.log(height);
 
 if(height || height === 0)
 {
     console.log('Variable is defined');
 }
 else
 {
     console.log('Variable has NOT been defined')
 }