function myFunction() {
    idArray = new Array()
    idArray [1] = "Love"
    idArray [2] = "Loyalty"
    idArray [3] = "Respect"
    
  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*3);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
  }


