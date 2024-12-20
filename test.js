const container = document.getElementById("application");
const canvas = document.createElement("canvas");
canvas.width = 500;  // Set the width of the canvas
canvas.height = 500; // Set the height of the canvas

// Append the canvas to the container
container.appendChild(canvas);

// Get the 2D drawing context
const ctx = canvas.getContext("2d");

// Function to draw the black hole (an ellipse)
function drawBlackHole(x, y) {
    ctx.beginPath();
    ctx.ellipse(x, y, 50, 150, 0, 0, 2 * Math.PI); // Draw an ellipse (black hole)
    ctx.closePath();
    ctx.fillStyle = "black"; // Set fill color to black for the black hole
    ctx.fill();
}

// Draw the black hole at position (200, 200)
drawBlackHole(200, 200);