var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();