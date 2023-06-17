function factorial(num){
    let mul = 1;
    while(num > 0){
        mul = mul * num;
        num--;
    }
    return mul
}


 const ans = factorial(5);

 console.log(ans);