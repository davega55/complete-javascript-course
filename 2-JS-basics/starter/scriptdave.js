var johnscore1 = 94;
var johnscore2 = 120;
var johnscore3 = 113;

var mikescore1 = 120;
var mikescore2 = 94;
var mikescore3 = 113;

var maryscore1 = 97;
var maryscore2 = 134;
var maryscore3 = 105;

var johnaverage = (johnscore1 + johnscore2 + johnscore3)/3;
var mikeaverage = (mikescore1 + mikescore2 + mikescore3)/3;
var maryaverage = (maryscore1 + maryscore2 + maryscore3)/3;

switch (true)
{
    case johnaverage > mikeaverage && johnaverage > maryaverage:
        console.log('John\'s average score of ' + johnaverage + ' was greater than Mike\'s average score of ' + mikeaverage +
        ' and Mary\'s average score of ' + maryaverage);
        break;
    case mikeaverage > johnaverage && mikeaverage > maryaverage:
        console.log('Mike\'s average score of ' + mikeaverage + ' was greater than John\'s average score of ' + johnaverage +
        ' and Mary\'s average score of ' + maryaverage);
        break;
    case maryaverage > johnaverage && maryaverage > mikeaverage:
        console.log('Mary\'s average score of ' + maryaverage + ' was greater than John\'s average score of ' + johnaverage +
        ' and Mike\'s average score of ' + mikeaverage);
        break;
    default:
        console.log("There is a draw");
}