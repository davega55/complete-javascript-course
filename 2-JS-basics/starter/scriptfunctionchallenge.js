var bills = [124, 48, 268];

function calculateTip(amount) {
    switch (true) {
        case amount < 50:
            return amount * .2;
        case amount >= 50 && amount <= 200:
            return amount * .15;
        case amount > 200:
            return amount * .10;
        default:
            return 0;
    }
}

var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
var totalBill = [bills[0] + calculateTip(bills[0]), bills[1] + calculateTip(bills[1]), bills[2] + calculateTip(bills[2])];

console.log('Bills before tip - Bill 1 $' + bills[0] + ', Bill 2 $'+ bills[1] + ', Bill 3 $'+ bills[2]);
console.log('Tips on Bills - Bill 1 $' + tips[0] + ', Bill 2 $'+ tips[1] + ', Bill 3 $'+ tips[2]);
console.log('Bills with Tips - Bill 1 $' + totalBill[0] + ', Bill 2 $'+ totalBill[1] + ', Bill 3 $'+ totalBill[2]);