function findFactorial(){
    var num = document.getElementById("number").value;
    var fact = 1;
    for (i = 1; i <= num; i++){			
        fact = fact * i;    }
     document.getElementById("result").innerHTML=fact;
  
}