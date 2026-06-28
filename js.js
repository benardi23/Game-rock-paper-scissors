


let btn=document.getElementById("btn")
let result=document.getElementById("result")
let text=document.getElementById("text")
function change(){
    let comp=Math.floor(Math.random()*3)
    const array=["scissors","paper","rock"];
    let random=array[comp]
    let inp = document.getElementById("inp").value.toLowerCase().trim()
     text.innerHTML = "Kompjuteri zgjodhi: " + random
    if(random===inp){
        console.log(" -barazim")
        
       result.innerHTML =
  '<img src="equal.png" width="220" >  <br> Barazim ⚖️' 
  

   
  
    }
    else if (
        (inp === "scissors" && random === "paper") ||
        (inp === "paper" && random === "rock") ||
        (inp === "rock" && random === "scissors")
    ) {
        console.log("Ti fitove")

        result.innerHTML =
            '<img src= "ok.jpg" width=220>  <br> Ti fitove 🎉'
    }

    // LOSE
    else {
        console.log("Ti humbe")

        result.innerHTML =
            '<img src="lose.jpg" width=220>  <br> Ti humbe 😢 '
             
            
    }
}