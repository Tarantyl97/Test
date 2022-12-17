const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

bigCircle();
rectangleBlue();
rectanglePurple();
smallCircle();
triangle(); 

function bigCircle() {
    ctx.beginPath();
    ctx.arc(50, 50, 130, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

function rectangleBlue() {
    ctx.beginPath();
    ctx.save();
    ctx.fillStyle = "blue";
    ctx.rotate(45 * Math.PI / 180);
    ctx.fillRect(120, -40, 300, 50);
    ctx.closePath();
    ctx.restore();
};

function rectanglePurple() {
    ctx.beginPath();
    ctx.fillStyle = "purple";
    ctx.fillRect(30, 250, 300, 100);
    ctx.stroke();
    ctx.closePath();
};

function smallCircle() {
    ctx.beginPath();
    ctx.arc(280, 180, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();        
};

function triangle() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 100);
    ctx.lineTo(300, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
};