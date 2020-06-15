var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1985,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    address: [
        {
            number: '1207',
            street: 'Main',
            type: 'Avenue',
            city: 'Topeka',
            state: 'Kansas',
            zipCode: '66601'
        },
        {
            number: '100',
            street: 'Poplar',
            direction: 'N',
            type: 'Lane',
            city: 'Kansas City',
            state: 'Missouri',
            zipCode: '64184'
        }
    ],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return this.age = 2020 - this.birthYear;
    }
};

/*
console.log(john.firstName);
console.log(john.family[2]);
console.log(john.address[1].city);
var x = 'birthYear';
console.log(john[x]);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

john.calcAge();
console.log(john);


