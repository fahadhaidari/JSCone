window.onload = () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let angle = 0;
    let factor = 0;

    context.translate(width / 2, 50);
    context.scale(1, -1);

    setInterval(() => {
        angle += 0.08;
        factor += 50;
        
        if (factor % 1000 === 0) {
          context.fillStyle = "#" + Math.random().toString(16).substr(2, 6);
        }
        context.fillRect(Math.cos(angle) * angle, (Math.sin(angle) * angle) - angle, 10 * Math.cos(angle), 5 * Math.sin(factor));
    }, 1);
}
