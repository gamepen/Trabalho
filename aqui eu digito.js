//criar 2 circulo

var c = document.getElementById("meu");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(250,75,2,250,75,300);
grd.addColorStop(0,"purple");
grd.addColorStop(1,"pink");
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,150);
 
var c = document.getElementById("meu");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 30, 0, 2 * Math.PI);
ctx.stroke();


var c = document.getElementById("meu");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(400, 75, 30, 0, 2 * Math.PI);
ctx.stroke();

// adicionar>> function mymove()
