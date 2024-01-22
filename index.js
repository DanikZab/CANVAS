const canvasPlot= document.getElementById('canvas_plot')
const ctx = canvas_plot.getContext('2d')
ctx.fillRect(0,0,100,100);
ctx.fillStyle='#0000ff';
ctx.fillRect(100,100,200,200);

ctx.moveTo(300,300);
ctx.lineTo(400,400);
ctx.stroke();

ctx.strokeStyle='#ff0000'
ctx.moveTo(320,300);
ctx.lineTo(420,400);
ctx.stroke();

ctx.moveTo(300,300);
ctx.lineTo(400,400);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle='#ff0000'
ctx.moveTo(320,300);
ctx.lineTo(420,400);
ctx.stroke();

ctx.fillText('текст',300,400);
ctx.fillRect(300,400,2,2);
ctx.font='66px Arial';
ctx.textAlign='left';
ctx.textBaseLine='top';
