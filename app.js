const colors = ["green" , "red" , "rgba(133,122,200)" , "#f15025" ,"pink" , "white" , "yellow" , "orange"] 
const btn = document.getElementById("btn")
const color =  document.querySelector( ".color");

btn.addEventListener("click" , function(){
   console.log("ram")
   const rand = randomA();
   document.body.style.backgroundColor = colors[rand];
   color.textContent = colors[rand];
})

function randomA(){
    return Math.floor(Math.random() * colors.length );
}