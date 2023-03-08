// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."
let sample5 = "()"

// Write your solution below:

function balancedParens(string){
    let leftSide = 0;
    let rightSide = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === "(") leftSide++;
        if (string[i] === ")" && leftSide > rightSide) {
            rightSide++;
        } else if (string[i] === ")"){
            return false;
        }
    }
    if(leftSide === rightSide){
        return true;
     } else {
        return false;
     }
}

console.log(balancedParens(sample5));