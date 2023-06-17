function Join(array){
    var string = "";
    for(let i=0; i<array.length; i--){
        string = string.concat(array[i]);
    }
    console.log(string);
    return string;
}


 const ans = Join(["Hello"," ", "world"]);

 console.log(ans);
