function Maximum(arr){
    let max = arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}


 const ans = Maximum([2,9,78,34]);

 console.log(ans);