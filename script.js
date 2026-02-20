const frameCount = 240;
const canvas = document.getElementById("frameCanvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const images = [];
const currentFrame = index =>
    `frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

function drawFrame(index) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor((scrollTop / maxScroll) * frameCount)
    );
    drawFrame(frameIndex);
});

images[0].onload = () => drawFrame(0);
