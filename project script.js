// var audio=document.createElement('audio');
// audio.setAttribute('src' , 'Desires.mp3');
// audio.loop=true;
// audio.play();
  
let audio=new Audio('Desires.mp3');  
  function music(){
    console.log("music on");
audio.play();

  }

  document.getElementById("bt").addEventListener("click",function(){
    audio.play();
  });
  
  
  
  