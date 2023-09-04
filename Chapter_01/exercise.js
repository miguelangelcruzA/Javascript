//Create a funcrtion called fn1 as shown(function fn1())


function fn1(){

    console.log("Scope 1")

    var scope = 5;

    console.log(scope);

    {
        console.log("Scope 2")

        var scope = "different scope"

        console.log(scope)


    }

    {
        console.log("Scope 3");
    }

    

}

fn1();

