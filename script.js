var timer = 10;
var score = 0;
var hitrn = 0;
function increasescore(){
   score += 10;
   document.querySelector("#scoreinc").textContent = score
}

function getNewhit(){
    hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitcount").textContent = hitrn;
}

function bubble(){
   var clutter = "";

for(let i = 1; i<=240; i++){
   var num = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${num}</div>`;
   
}
document.querySelector("#p-bottom").innerHTML = clutter;
}



function runtimer(){
   var stopinterval=  setInterval(function(){
      if(timer > 0){
         timer--;
      document.querySelector("#timer").textContent = timer;
      }
      else{
         clearInterval("stopinterval");
         document.querySelector("#p-bottom").innerHTML = " ";
         document.querySelector("#resscore").innerHTML = score;
         document.querySelector("#totalhit").innerHTML = score/10;
         document.querySelector("#card").style.display = "block"
      }
      
   },1000);
}

document.querySelector("#p-bottom").addEventListener("click", function (dets){
   var clickednum = Number(dets.target.textContent) 
   if(clickednum === hitrn){
      increasescore();
      bubble();
      getNewhit();
     
     
   }
});

runtimer();
 bubble();
 getNewhit();


