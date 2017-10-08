console.log('Hello World!!');

var output = (function (x) {
    delete x;
    return x;
})(5)
console.log(output);

var runTimeFunc = function () {
    console.log('I am run time function');
};

function compTimeFunc() {
    console.log('I am compile time function');
};

//console.log(runTimeFunc() + compTimeFunc());

var Employee = {
    age: 28,
    name: 'abc',
    designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

console.log(Employee);

var Employee1 = {
    company: 'xyz'
}
var emp1 = Object.create(Employee1);
console.log(emp1);
delete emp1.company
console.log(emp1.company);

function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }

    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function () { console.log(i); });
        //  document.appendChild(btn);
    }
}
test();

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(1));

function sum(x) {
    if (arguments.length == 2)
        return arguments[0] + arguments[1];
    else {
        return function (y) {
            return x + y;
        }
    }
}

console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5

function isPalindrome(str) {
    var temp;
    if (str) {
        temp = str.trim().toLowerCase();
        if (str.toLowerCase() === temp.split('').reverse().join(''))
            return true;
        else
            return false;
    }
    return false;
}

console.log(isPalindrome('trarT1'));

var car = (function () {
    var color;
    var type;
    function car(color, type) {
        this.color = color;
        this.type = type;
    };
    car.prototype.displayCar = function () {
        console.log("Car color:" + this.color + " | Car type:" + this.type);
    };
    return car;
}());

var c1 = new car('black', 'sedan');
var c2 = new car('white', 'suv');

c1.displayCar();

c2.displayCar();

var memo=[];
function fibo(x) {
    if (x == 0)
        return 0;
    else if (x == 1)
        return 1;
    else if (x == 2)
        return 1;
    else {
        if(memo[x])
            return memo[x];
        memo[x] = (fibo(x - 1) + fibo(x - 2));
        return memo[x];
    }
}

console.log(fibo(800));

console.log(6 + 9);

var globalVar = "abc";
// Parent self invoking function
(function outerFunction(outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope
    var outerFuncVar = 'x';
    // Closure self-invoking function
    (function innerFunction(innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y";
        console.log(
        "outerArg = " + outerArg + "\n" +
        "outerFuncVar = " + outerFuncVar + "\n" +
        "innerArg = " + innerArg + "\n" +
        "innerFuncVar = " + innerFuncVar + "\n" +
        "globalVar = " + globalVar);
    })(5);
    // end of scope innerFunction)(5); // Pass 5 as parameter
})(7);
// end of scope outerFunction )(7); // Pass 7 as parameter