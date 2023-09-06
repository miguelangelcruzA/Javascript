



console.log("Hosited before assigment: " + hoisted);

var hoisted = "this got hoisted"


console.log("Hosited after assignment: " + hoisted);


try {
        
    console.log(notHoisted1);

}catch(error){

    console.log("Not hoisted1 with error", error.message);

}

let notHoisted1 = 5;

console.log(notHoisted1)

try {
    console.log(notHosited2)    
} catch (error) {
    console.log("not hoisted2 with error ", error.message)
}

const  notHosited2 = [1,2,3];

console.log(notHosited2)


try {
    notHosited2 = "string";
} catch (error) {
    console.log("not hosited 2 was not able to be changed")
}
finally{

    notHosited2.push(5);

    console.log("NotHoisted2 has been updated. Now is: " + notHosited2);

}

