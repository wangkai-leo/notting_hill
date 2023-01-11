export default {

    // 裁剪方法
    cut(url, canvasId, imageInforCB, savedFilePathCB) {
        let that = this;
        const ctx = wx.createCanvasContext('cropper');
        that._getImageInfor(url, ctx, canvasId, imageInforCB, savedFilePathCB);
    },

    // 删除本地存储数据
    clearSavedFileList(currSavedFilePath) {
        wx.getSavedFileList({
            success: function (res) {
                for (let i = 0; i < res.fileList.length; i++) {
                    if (currSavedFilePath !== res.fileList[i].filePath) {
                        wx.removeSavedFile({
                            filePath: res.fileList[i].filePath,
                            complete: function (res) {
                                console.log('本地图片删除结束', res);
                            }
                        });
                    }
                }
            }
        });
    },

    // 获取图片信息
    _getImageInfor(url, ctx, canvasId, imageInforCB, savedFilePathCB) {
        let that = this;
        wx.getImageInfo({
            src: url,
            success: function (imageInfor) {
                console.log('getImageInfo2', imageInfor);
                imageInforCB(imageInfor);
                // 将图画到canvas上
                that._drawImage(ctx, imageInfor, () => {
                    that._getTempFilePath(canvasId, imageInfor, savedFilePathCB);
                });
            },
            fail: function (res) {
                console.log('getImageInfo fail', res);
            },
            complete: function (res) {
                console.log('getImageInfo complete', res);
            }
        });
    },

    // 在canvas上画图
    _drawImage(ctx, imageInfor, cb) {
        ctx.drawImage(imageInfor.path, 0, 0, imageInfor.width, imageInfor.height);
        ctx.draw(false, () => {
            console.log('绘制完成');
            cb();
        });
    },

    // 使用canvas剪裁,后获取临时本地路径,
    _getTempFilePath(canvasId, imageInfor, savedFilePathCB) {
        let that = this;
        let cutData = that._computedCutData(imageInfor);
        console.log('cutData', cutData);
        wx.canvasToTempFilePath({
            x: cutData.x,
            y: cutData.y,
            width: imageInfor.width,
            height: imageInfor.height,
            destWidth: cutData.destWidth,
            destHeight: cutData.destHeight,
            canvasId: canvasId,
            success: function (res) {
                console.log('canvasToTempFilePath res', res);
                that._saveImage(res.tempFilePath, savedFilePathCB);
            },
            fail: function (res) {
                console.log('canvasToTempFilePath fail', res);
            },
            complete: function (res) {
                console.log('canvasToTempFilePath complete', res);
            }
        });
    },

    // 将_getTempFilePath得到的临时路径保存到本地
    _saveImage(tempFilePath, savedFilePathCB) {
        wx.saveFile({
            tempFilePath: tempFilePath,
            success: function (res) {
                let savedFilePath = res.savedFilePath;
                console.log('savedFilePath', res);
                savedFilePathCB(savedFilePath);
            },
            fail: function () {
                console.log('saveFile,fail');
            },
            complete: function () {
                console.log('saveFile,complete');
            }
        });
    },

    // 计算裁剪数据,目前由长宽1:1裁成长宽比5:4的图片,裁剪公式 (h-(w/5*4))/2
    _computedCutData(imageInfor) {
        let cutData = {
            x: 0,          // canvas剪切左上角x坐标
            y: 0,          // canvas剪切左上角y坐标
            destWidth: 0,  // 图片裁剪宽度 
            destHeight: 0  // 图片裁剪高度
        };
        let cutY = (imageInfor.height - (imageInfor.width / 5 * 4)) / 2;
        cutData.y = cutY;
        cutData.x = 0;
        cutData.destWidth = imageInfor.width;
        cutData.destHeight = imageInfor.height - cutY * 2;
        return cutData;
    }
}