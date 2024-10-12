
function checkPalindrome(){
    let inputfield = document.querySelector(".inputtext");
    let input = inputfield.value;
    let newval = input.toLowerCase();
    let splitinput = newval.split("");
    let revinput = splitinput.reverse();
    let combineinput = revinput.join("");
    let result = document.querySelector("#show-result");
    if( newval === ""){
        result.innerHTML = "Please Enter a Word or Number"
    }
    else if(newval == combineinput){
        result.innerHTML = `${input} is a Palindrome`;
    }
    else if(newval !== combineinput){
        result.innerHTML = `${input} is not a Palindrome`;
    }
    else{
        result.innerHTML = "Invalid Input!!";
    }
    inputfield.value = "";
}
