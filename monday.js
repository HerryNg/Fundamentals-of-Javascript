
//1 Area of a circle
function areaofcircle(){
var pi = 3.14;
typeof 3,14;
var radius = 7;
var a = (pi * radius**2)/2;
console.log (typeof pi)
console.log("The area of a circle give the radius " + radius +"(m) is " +a +"(m2)");
}
areaofcircle();

//2 Operators & Comparison
function OperatorsandComparison(){
    10 + 24 === 34 //true 
    // expected result of 10 + 24 is number 34, so compare it with number 4 lead to true

    "10" + "24" === "1024" //true because "10" + "24" will be show as 1024

    "Hello" + " " + 2021 === "Hello 2021" //true because it will be read as Hello 2021
    
    1 + 2 * 3 === 7 // true since 2x3 is 6 then plus 1 is 7

    6 % 2 === 0 // true since 6 can divine 2 with the whole is 3

    5.5 % 2 === 1.5 //true since 5,5 divine for 2 is 2 with the left number is 1.5

}
OperatorsandComparison();

//3 conditional
function Conditionals(){
 var x = 5;
 var y = 0;
 var z = -4;

 if( x > 0){
     console.log("positive")
 }
 else if(x < 0){
     console.log("negative")
 }
else{
    console.log("zero")
} 

if( y > 0){
    console.log("positive")
}
else if(y < 0){
    console.log("negative")
}
else{
   console.log("zero")
}  

if( z > 0){
    console.log("positive")
}
else if(z < 0){
    console.log("negative")
}
else{
   console.log("zero")
}  


var a = 1;
var b =4;
var c = 80;

if(a < b && a < c){
    var sm = a;
  
}
else if (a > b && a > c){
    var bm = a;
    
}

if(b < a && b < c){
    var sm = b;
    
}
else if (b > a && b > c){
    var bm = b;
    
}

if(c < b && c < a){
    var sm = c;
    
}
else if (c > b && c > a){
    var bm = c;
   
}
 if (a ===b && a ===c){
     console.log("All number is equal.")
 }

console.log(sm + " is the smallest number, and " + bm + " the biggest number between a = " + a + ". b = " + b + ", and c = " + c);
}
Conditionals();

//4 Loops
function loops(){
    var a =1;
    var b = 5;
    var s = "";
    if( a < b){
        for( var i = a; i <= b; i++)
        {
         s += i + " ";
        }
        console.log("Output: " + s);
    }

  
    
    var a =7;
    var b = 4;
    var m = "";
    if( a > b){
        for( var i = a; i >= b; i--)
        {
         m += i + " ";
        }
        console.log("Output: " + m);
    }

    var x = 50;
    var y = 555;
    var sum = 0;
    if(x < y)
    {
        for( var i = x; i <= y; i++)
        {
            sum += i;
        }
        console.log("Sum of number from " + x + " to " + y + " is: " + sum);
    }
    function sumDigits(n){
        let numArr = n.toString().split("");
    
        let sum = numArr.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0);
        
        return sum;
    }
    var n = 2679;
    console.log("Sum of digits of "+ n + " is "+sumDigits(n));
}
loops();

//5 Functions

//6 Swapping values
function swappingValues(){
    var a = 111;
    var b = 999;
    let temp;
     temp= a;
     a = b;
     b = temp;
     console.log(a + " " + b);
}
swappingValues();


//7 Random of Number
function random(){
    console.log(Math.round(Math.random() * 1000));
    console.log(Math.round(Math.random() * 1000));
    console.log(Math.round(Math.random() * 1000));
    console.log(Math.round(Math.random() * 1000));
}
random();

//8 Magic-8-ball
function magic_8_ball(){
    console.log("Can I become a programmer?");
    var ranNum = Math.round(Math.random() * 1);
    if(ranNum = 0)
    {
        console.log("Yes, you will.")
    }else console.log("No, you won't.")
}
magic_8_ball();

