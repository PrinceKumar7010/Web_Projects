var v1=Math.floor(Math.random() * 6)+1;
var randimg1="../Dicee Challenge - Starting Files/images/dice"+v1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randimg1);


var v2=Math.floor(Math.random() * 6)+1;
var randimg2="../Dicee Challenge - Starting Files/images/dice"+v2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randimg2);


if(v1>v2){
    var s=document.querySelector("h2").innerHTML="Congratulations, Player 1 Wins ";
    
}
if(v1<v2){
    var s=document.querySelector("h2").innerHTML="Congratulations, Player 2 Wins ";
  
}
if(v1==v2){
    var s=document.querySelector("h2").innerHTML="Amazing , Its a Tie ";
   
}