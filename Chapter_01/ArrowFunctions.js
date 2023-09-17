

//Arrow function or fat arrow functions

test = () => {
    let arr = [10,10,23,211,23];
     arr.filter(item => item == 10).length;
}



// test();

// let arr = [10,10,23,211,23];


// let exists = arr.filter(item => item == 10);

// console.log(exists.length)

let srt = "JavaScript";

function reverseString(str) {
    let splitString = str.split("");
    let join = "";
    for (i=splitString.length-1;i>=0;i--){
         join += splitString[i];
    }
 
    return join;
 }


 console.log(reverseString(srt));




 function replaceChar(string, char){

    return string.replace(char,"#")
 }

 console.log(replaceChar("hello world",'l'));