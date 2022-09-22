canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.rect(150, 143, 430, 200);
ctx.stroke();


color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();




color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "white";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

