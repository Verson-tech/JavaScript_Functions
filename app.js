console.log("Hello World!\n==========\n");



// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){    
    // for ( let i = 1; i >= count; i--){

    //     if(i % 2 != 0){

    //         console.log(i);
    //     }    
    // }
    for ( let i = 1; i <= Math.abs(count); i++){

        if(i % 2 != 0){

            console.log(i * Math.sign(count));
        }    
    }


}

printOdds(10);
printOdds(-10);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen  = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (age < 16){
    console.log(belowSixteen);
  }else{
    console.log(aboveSixteen);
  }
}

checkAge("V", 20);
checkAge("J", 15);


//Exercise 3: Which Quadrant?
console.log("EXERCISE 3:\n==========\n");

function checkQuadr(x,y){

    if (x > 0 && y > 0 ){
        console.log("Quadrant 1");
    }else if(x<0 && y > 0){
        console.log("Quadrant 2");
    }else if(x < 0 && y < 0){
        console.log("Quadrant 3");
    }else if (x > 0 && y < 0){
        console.log("Quadrant 4");
    }

}

checkQuadr(14,17);
checkQuadr(-14, 11118);
checkQuadr(-56, -15);
checkQuadr(- 45, 17);



console.log("EXERCISE 4:\n==========\n");
//Exercise 4: What type of triangle?


function isTriangle(a,b,c){
    return a + b > c || b+c > a ||  c + a > b
}

function checkTriangle(a,b,c){
    let isValid = isTriangle(a,b,c);
    if(isValid){
    if (a == b && b == c){
        console.log("Equilateral")
    }else if(a==b || b==c || a==c){
        console.log("Isosceles")
    }else{
        console.log("Scalene");
    }
}else{
    console.log("Not a valid triangle.")
}
}

checkTriangle(2,2,2);
checkTriangle(1,1,10);
checkTriangle(2,2,30);
checkTriangle(0,0,0);