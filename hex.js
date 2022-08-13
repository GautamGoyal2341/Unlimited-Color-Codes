const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("btn")
const color =  document.querySelector( ".color");

btn.addEventListener("click" , function(){
   let hexA = '#';
   
      for(let i = 0 ; i < 6 ; i++){
    //   let ram = randA();
       hexA +=   hex[randA()];
   }
  color.textContent = hexA;
  document.body.style.backgroundColor = hexA;
})

function randA(){
    return (Math.floor(Math.random()*hex.length));
}