 window.onload = window.onresize =function () {


     var theCanvas = document.getElementById("canvasOne");
     var context = theCanvas.getContext("2d");
     function drawScreen() {

         drawRoundedRect(50, 50, 1400, 600, 20, true, "rgba(255,255,255,0.5)" );


         //内容
         context.fillStyle="#000000";
         context.font="14px_sans";
         context.fillText("hello world", 215, 50);
         //test

     }
     // 绘制圆角矩形
     // @param {Number} x - 矩形左上角x轴坐标
     // @param {Number} y - 矩形左上角y轴坐标
     // @param {Number} width - 矩形的宽度
     // @param {Number} height - 矩形的高度
     // @param {Number} radius - 矩形圆角的半径
     // @param {Boolean} isFill - 是否绘制填充，true填充，false边框
     // @param {String} color - 矩形的颜色
     function drawRoundedRect(x, y, width, height, radius, isFill, color)
     {
         context.save();
         context.beginPath();
         context.moveTo(x + radius, y);
         context.arcTo(x + width, y, x + width, y + radius, radius);
         context.arcTo(x + width, y + height, x + width - radius, y + height, radius);
         context.arcTo(x, y + height, x, y + height - radius, radius);
         context.arcTo(x, y, x + radius, y, radius);
         context.closePath();
         if (isFill)
         {
             context.fillStyle = color;
             context.fill();
         }
         else
             {
                 context.strokeStyle = color;
                 context.stroke(); }
                 context.restore();
     }

     drawScreen();
 }
