var name = 'John';

function first() {
    var a = 'Hello ';
    second();
    var x = a + name;
    console.log(x);
}

function second() {
    var b = 'Hi ';
    third();
    var z = b + name;
    console.log(z);
}

function third() {
    var c = 'Hey! ';
    var z = c + name;
    console.log(z);
}

first();
console.log(name);