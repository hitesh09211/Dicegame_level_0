
var n1= Math.random();
n1=Math.floor(n1*6+1);

var n2= Math.random();
n2=Math.floor(n2*6+1);

 var v = document.querySelector("h1");
if(n1===n2){
    v.innerHTML="draw!"
}
if(n1>n2){
    v.innerHTML=" 🚩player1 win!" 
}
if(n1<n2){
    v.innerHTML="🚩player2 win!" 
}
 var image1 =document.querySelector(".imgp1");  
var image2 =document.querySelector(".imgp2"); 
image1.setAttribute("src","./inverted-dice-"+n1+".png");
image2.setAttribute("src","./inverted-dice-"+n2+".png");
