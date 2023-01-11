import wepy from 'wepy'; //框架
import C from '../config';
import tool from './tool';
/**
 * 在使用的的时候 canvas-id 一定要是固定的值，不能使用data变量
 */
export default {
  //画矩形框
  drawStrokeRect(ctx, x, y, width, height, bw, color) {
    ctx.save();
    ctx.setLineWidth(bw);
    ctx.setStrokeStyle(color);
    ctx.strokeRect(x, y, width, height);
    ctx.draw();
    ctx.restore();
  },

  //画矩形色块
  drawRect(ctx, x, y, width, height, color) {
    ctx.save();
    //画出背景色
    ctx.setFillStyle(color)
    ctx.fillRect(x, y, width, height);
    ctx.restore();
  },

  /**画圆角矩形 */
  drawRoundRect(ctx, r, x, y, w, h, img) {
    ctx.save()
    if (w < 2 * r) r = w / 2
    if (h < 2 * r) r = h / 2
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath();
    ctx.clip()
    ctx.drawImage(img, x, y, w, h)
    ctx.restore() // 返回上一状态
  },

  //画圆形头像
  drawRoundImg(ctx, r, x, y, img, border_width, border_color) {
    ctx.save() // 保存之前的
    var r = r // 半径*屏幕分辨率比例
    var d = 2 * r // 直径
    var cx = x + r // 圆弧坐标x
    var cy = y + r // 圆弧坐标 y
    var border_width = border_width ? border_width : 0;
    var border_color = border_color ? border_color : '#fff';
    ctx.beginPath(); //开始绘制
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.setLineWidth(border_width);
    ctx.setStrokeStyle(border_color);
    ctx.clip() // 裁剪
    ctx.drawImage(img, x, y, d, d) // 画头像
    ctx.restore() // 返回上一状态
  },

  //画出圆形
  drawArc(ctx, r, x, y, color) {
    ctx.save() // 保存之前的
    ctx.beginPath(); //开始绘制
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.setFillStyle(color);
    ctx.fill();
    ctx.restore() // 返回上一状态
  },

  //画文本
  drawText(ctx, content, size, color, x, y, align_right) {
    ctx.save() // 保存之前的
    ctx.setFontSize(size);
    ctx.fillStyle = color;
    if (align_right) {
      ctx.textAlign = 'right';
    }
    ctx.fillText(content, x, y);
    ctx.restore() // 返回上一状态
  },

  //画图片
  drawImg(ctx, src, x, y, width, height) {
    ctx.save() // 保存之前的
    ctx.drawImage(src, x, y, width, height);
    ctx.restore() // 返回上一状态
  },

  //画
  draw(canvas, config, save) {
    var context = wx.createCanvasContext(canvas.id); //
    var canvas_width = canvas.width; //这个是画布宽
    var canvas_height = canvas.height; //这个是高
    var scale = canvas.scale ? canvas.scale : 1;

    config.forEach(element => {
      console.log(element);
      switch (element.type) {
        case 'text':
          C.DEBUGING ? console.log('画出文字') : false;
          this.drawText(context, element.content, element.size * scale, element.color, element.x * scale, element.y * scale, element.align_right);
          break;
        case 'img':
          C.DEBUGING ? console.log('画出图片') : false;
          if (element.src) {
            this.drawImg(context, element.src, element.x * scale, element.y * scale, element.width * scale, element.height * scale);
          } else {
            C.DEBUGING ? console.log('图片地址没有') : false
          }
          break;
        case 'round_img':
          C.DEBUGING ? console.log('圆形头像') : false;
          this.drawRoundImg(context, element.r * scale, element.x * scale, element.y * scale, element.img, element.bw * scale, element.bc);
          break;
        case 'rect':
          C.DEBUGING ? console.log('画出矩形') : false;
          this.drawRect(context, element.x * scale, element.y * scale, element.width * scale, element.height * scale, element.color);
          break;
        case 'arc':
          C.DEBUGING ? console.log('画圆') : false;
          this.drawArc(context, element.r * scale, element.x * scale, element.y * scale, element.color);
          break;
        case 's_rect':
          C.DEBUGING ? console.log('画矩形框') : false;
          this.drawStrokeRect(context, element.x * scale, element.y * scale, element.width * scale, element.height * scale, element.bw * scale, element.color);
          break;
      }
    });

    context.draw(true, setTimeout(function () {
      if (save) {
        console.log('保存图片');
        //导出图片
        wx.canvasToTempFilePath({ //导出图片
          x: 0,
          y: 0,
          width: canvas_width, //
          height: canvas_height,
          destWidth: canvas_width, //裁剪宽度
          destHeight: canvas_height, //裁剪高度
          canvasId: canvas.id,
          success: res => {
            console.log(res.tempFilePath);
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success(result) {
                wepy.hideLoading();
                tool.systemToast('已保存到本地相册');
              }
            })
          }
        })
      }
    }, 100));
  },

  // drawAndCut(canvas) {
  //   var context = wx.createCanvasContext(canvas.id); //
  //   var canvas_width = canvas.width; //这个是画布宽
  //   var canvas_height = canvas.height; //这个是高
  //   var scale = canvas.scale ? canvas.scale : 1;

  //   config.forEach(element => {
  //     switch (element.type) {
  //       case 'text':
  //         C.DEBUGING ? console.log('画出文字') : false;
  //         this.drawText(context, element.content, element.size * scale, element.color, element.x * scale, element.y * scale, element.align_right);
  //         break;
  //       case 'img':
  //         C.DEBUGING ? console.log('画出图片') : false;
  //         if (element.src != undefined) {
  //           this.drawImg(context, element.src, element.x * scale, element.y * scale, element.width * scale, element.height * scale);
  //         } else {
  //           C.DEBUGING ? console.log('没有图片，图片地址是') : false;
  //           C.DEBUGING ? console.log(element.src) : false;
  //         }
  //         break;
  //       case 'round_img':
  //         C.DEBUGING ? console.log('圆形头像') : false;
  //         this.drawRoundImg(context, element.r * scale, element.x * scale, element.y * scale, element.img, element.bw * scale, element.bc);
  //         break;
  //       case 'rect':
  //         C.DEBUGING ? console.log('画出矩形') : false;
  //         this.drawRect(context, element.x * scale, element.y * scale, element.width * scale, element.height * scale, element.color);
  //         break;
  //       case 'arc':
  //         C.DEBUGING ? console.log('画圆') : false;
  //         this.drawArc(context, element.r * scale, element.x * scale, element.y * scale, element.color);
  //         break;
  //       case 's_rect':
  //         C.DEBUGING ? console.log('画矩形框') : false;
  //         this.drawStrokeRect(context, element.x * scale, element.y * scale, element.width * scale, element.height * scale, element.bw * scale, element.color);
  //         break;
  //     }
  //   });

  //   context.draw(true, setTimeout(function () {
  //     if (save) {
  //       console.log('保存图片');
  //       //导出图片
  //       wx.canvasToTempFilePath({ //导出图片
  //         x: 0,
  //         y: 0,
  //         width: canvas_width, //
  //         height: canvas_height,
  //         destWidth: canvas_width, //裁剪宽度
  //         destHeight: canvas_height, //裁剪高度
  //         canvasId: canvas.id,
  //         success: res => {
  //           console.log(res.tempFilePath);

  //         }
  //       })
  //     }
  //   }, 100));
  // }
}