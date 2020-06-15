var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    
    calculateTip: function() {
        this.tips = [];
        this.totalBills = [];
        
        for(var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];

            if(bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .10;
            }
            this.tips[i] = bill * percentage;
            this.totalBills[i] = bill + (bill * percentage);
        }
    }
}

john.calculateTip();

var mark = {
    fullName: 'Mark Jones',
    bills: [77, 375, 110, 45],
    calculateTip: function() {
        this.tips = [];
        this.totalBills = [];
        
        for(var i = 0; i < this.bills.length ; i++)
        {
            var percentage;
            var bill = this.bills[i];

            if(bill < 100) {
                percentage =  .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage =  .25;
            }
            this.tips[i] = bill * percentage;
            this.totalBills[i] = bill + (bill * percentage);
        }
    }
}

mark.calculateTip();

function calcAverage(tips) {
    var totalTips = 0;
    for(var i = 0; i < tips.length; i++) {
        totalTips += tips[i];
    }
    return totalTips / tips.length;
};

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if(john.average > mark.average) {
    console.log('John\'s family paid more tip');
} else if (mark.average > john.average) {
    console.log('Mark\'s family paid more tip');
} else {
    console.log("Both families paid the same amount in tips");
}

console.log('John\'s average tip ' + john.average);
console.log('Mark\'s average tip ' + mark.average);


