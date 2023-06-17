function Average(arr){
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        sum = sum + arr[i];
    }

    const average = sum/ arr.length;
    return average;
}


 const ans = Average([2,4,6,8]);

 console.log(ans);