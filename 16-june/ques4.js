function ReverseString(str){ 
    var string = "";
    for(let i= str.length-1; i>=0; i--){
        string += str[i];
    }

    return string;
}

const ans = ReverseString("OpenAI");

console.log(ans);