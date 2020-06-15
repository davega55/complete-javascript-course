var john = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    name: "Mark Jones",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
};


if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.name + ' has a higher BMI than ' + mark.name);
} else if (mark.bmi > john.bmi) {
    console.log(mark.name + ' has a higher BMI than ' + john.name);
} else {
    console.log(john.name + ' and ' + mark.name + ' have the same BMI');
}

console.log(john, mark);