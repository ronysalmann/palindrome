function palindrome(){
    var num = parseInt(document.getElementById("input").value)
    console.log(num)
    for (let i = 1; i <= num; i++){
         console.log(" ".repeat(num-i)+"*".repeat((2*i)-1));
    }
    for (let j = num-1; j >0; j--){
        console.log(" ".repeat(num-j)+"*".repeat((2*j)-1));
    }
}