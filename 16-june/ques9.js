function palindrone(word){
    let arr = word.split(" ");
    let low = 0;
    let high = arr.length-1;
    while(low <=high){
        if(arr[low] === arr[high]){
            low--;
            high++;
        }
        else{
            return false;
        }
    }
    return true;
    
}


 const ans = palindrone("radar");

 console.log(ans);