function LeapYear(year){
    if(((year % 4 === 0) && (year % 100 != 0) ) || (year % 400 === 0) ){
        return "Leap Year";
    }
    else{
        return "Not a leap Year"
    }
}


 const ans = LeapYear(400);

 console.log(ans);