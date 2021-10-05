//Ziff Zubb
function ziffZubb(start, end){
    for(let i = start; i <= end; i++)
    {   
        if( i % 3 ===0 && i % 5===0)
        {
         console.log("Ziffzubb");
        }
        else if(i %3 ===0)
        {
            console.log("Ziff");
        }else if (i % 5 === 0)
        {
            console.log("Zubb");
        }else {
            console.log(i);
        }
    }
}
ziffZubb(1, 20);

//GCD
function gcd(a, b){
    if(a < 0)
    {
       return a =-a;
    }
    if(b < 0)
    {
        return b = -b;
    }
    
    if (b > a){
       var  m = (b -a) % a;
       var result
        if (m === 0)
        {
              result = a;
        }else if ( m !== 0){
            
            result = m;
        }

    }

    console.log('gcd of ' + a + " and " + b + " is " + result); 

}
gcd(12, 18);

//LCM

//Prime Number
function isPrime(a){
    if(a ===2)
    {
        return true;
    }else if ( a > 1)
    {
        for ( let i =2; i < a; i++)
        {
          
            if(a % i !==0){
                return true; 
            }else if(a === i*i ){
                return false;
            }else {
                return false;
            }
        }
    }else {
        return false;
        
    }
    
    
}
let x = isPrime(7);
console.log(x); 


//Capture Time
function captureTime(){
    let yourAgeInMilliSeconds = Date.now() - new Date("2000-03=31");

    let yourAgeInSeconds = yourAgeInMilliSeconds * 1000;
    let yourAgeInMins = yourAgeInSeconds * 60;
    let youAgeInhours = yourAgeInMins * 60;
    let youAgeInDays = youAgeInhours * 24;
    let yourAgeInWeeks = youAgeInDays * 7;
    let yourAgeInMonths = yourAgeInWeeks * 4;
    let yourAgeInYears = yourAgeInMonths * 12;

    console.log("Your age in millisecond is: " +yourAgeInMilliSeconds);
    console.log("Your age in seconds is: " + yourAgeInSeconds);
    console.log("Your age in minutes is: " + yourAgeInMins);
    console.log("Your age in hours is: " + youAgeInhours);
    console.log("Yout age in days is: " + youAgeInDays);
    console.log("Your age in weeks is: " + yourAgeInWeeks);
    console.log("Your age in months is: " + yourAgeInMonths);
    console.log("Your age in years is: " + yourAgeInYears);

}
captureTime();