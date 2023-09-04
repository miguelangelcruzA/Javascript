

// function scope 

testVariable = 10;
var example = 5;
var example02;
var testVariable=2;
var testVariable=1;

let test1;

function test(){
    var testVariable = 10;
    console.log(example);
    console.log(testVariable);
    let test1 = 4;
}

test();


// Error variable is not defined
console.log("test variable " + testVariable);
console.log("test variable with let " + test1);


/**
 * Hoisting Javascript
 */


console.log(helloVariable);

var helloVariable;

helloVariable = "hello";


// block Scope 

// block scope 1
{
    let block1 = "block 1"
    console.log("first block");

}

console.log(example02);


// section 02
