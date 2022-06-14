/*
Function doesn't need any parameters.
The range is established in the for loop starting with index (i) as 1 and going to less than or equal to 100. Then i++ counts through it by 1 number.
In the if statement, you need to start with the outlier, fizzbuzz, before moving onto fizz and buzz.
Else just prints out the count.
No return needed because it's console.log'd at every level
*/


function fb(){
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        } else if (i % 3 === 0){
            console.log("fizz");
        } else if (i % 5 === 0){
            console.log("buzz");
        } else {
            console.log(i)
        }
    }
}

fb();
