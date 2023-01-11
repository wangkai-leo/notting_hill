'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    // 裁剪方法
    cut: function cut(url, canvasId, imageInforCB, savedFilePathCB) {
        var that = this;
        var ctx = wx.createCanvasContext('cropper');
        that._getImageInfor(url, ctx, canvasId, imageInforCB, savedFilePathCB);
    },


    // 删除本地存储数据
    clearSavedFileList: function clearSavedFileList(currSavedFilePath) {
        wx.getSavedFileList({
            success: function success(res) {
                for (var i = 0; i < res.fileList.length; i++) {
                    if (currSavedFilePath !== res.fileList[i].filePath) {
                        wx.removeSavedFile({
                            filePath: res.fileList[i].filePath,
                            complete: function complete(res) {
                                console.log('本地图片删除结束', res);
                            }
                        });
                    }
                }
            }
        });
    },


    // 获取图片信息
    _getImageInfor: function _getImageInfor(url, ctx, canvasId, imageInforCB, savedFilePathCB) {
        var that = this;
        wx.getImageInfo({
            src: url,
            success: function success(imageInfor) {
                console.log('getImageInfo2', imageInfor);
                imageInforCB(imageInfor);
                // 将图画到canvas上
                that._drawImage(ctx, imageInfor, function () {
                    that._getTempFilePath(canvasId, imageInfor, savedFilePathCB);
                });
            },
            fail: function fail(res) {
                console.log('getImageInfo fail', res);
            },
            complete: function complete(res) {
                console.log('getImageInfo complete', res);
            }
        });
    },


    // 在canvas上画图
    _drawImage: function _drawImage(ctx, imageInfor, cb) {
        ctx.drawImage(imageInfor.path, 0, 0, imageInfor.width, imageInfor.height);
        ctx.draw(false, function () {
            console.log('绘制完成');
            cb();
        });
    },


    // 使用canvas剪裁,后获取临时本地路径,
    _getTempFilePath: function _getTempFilePath(canvasId, imageInfor, savedFilePathCB) {
        var that = this;
        var cutData = that._computedCutData(imageInfor);
        console.log('cutData', cutData);
        wx.canvasToTempFilePath({
            x: cutData.x,
            y: cutData.y,
            width: imageInfor.width,
            height: imageInfor.height,
            destWidth: cutData.destWidth,
            destHeight: cutData.destHeight,
            canvasId: canvasId,
            success: function success(res) {
                console.log('canvasToTempFilePath res', res);
                that._saveImage(res.tempFilePath, savedFilePathCB);
            },
            fail: function fail(res) {
                console.log('canvasToTempFilePath fail', res);
            },
            complete: function complete(res) {
                console.log('canvasToTempFilePath complete', res);
            }
        });
    },


    // 将_getTempFilePath得到的临时路径保存到本地
    _saveImage: function _saveImage(tempFilePath, savedFilePathCB) {
        wx.saveFile({
            tempFilePath: tempFilePath,
            success: function success(res) {
                var savedFilePath = res.savedFilePath;
                console.log('savedFilePath', res);
                savedFilePathCB(savedFilePath);
            },
            fail: function fail() {
                console.log('saveFile,fail');
            },
            complete: function complete() {
                console.log('saveFile,complete');
            }
        });
    },


    // 计算裁剪数据,目前由长宽1:1裁成长宽比5:4的图片,裁剪公式 (h-(w/5*4))/2
    _computedCutData: function _computedCutData(imageInfor) {
        var cutData = {
            x: 0, // canvas剪切左上角x坐标
            y: 0, // canvas剪切左上角y坐标
            destWidth: 0, // 图片裁剪宽度 
            destHeight: 0 // 图片裁剪高度
        };
        var cutY = (imageInfor.height - imageInfor.width / 5 * 4) / 2;
        cutData.y = cutY;
        cutData.x = 0;
        cutData.destWidth = imageInfor.width;
        cutData.destHeight = imageInfor.height - cutY * 2;
        return cutData;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1dC5qcyJdLCJuYW1lcyI6WyJjdXQiLCJ1cmwiLCJjYW52YXNJZCIsImltYWdlSW5mb3JDQiIsInNhdmVkRmlsZVBhdGhDQiIsInRoYXQiLCJjdHgiLCJ3eCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJfZ2V0SW1hZ2VJbmZvciIsImNsZWFyU2F2ZWRGaWxlTGlzdCIsImN1cnJTYXZlZEZpbGVQYXRoIiwiZ2V0U2F2ZWRGaWxlTGlzdCIsInN1Y2Nlc3MiLCJyZXMiLCJpIiwiZmlsZUxpc3QiLCJsZW5ndGgiLCJmaWxlUGF0aCIsInJlbW92ZVNhdmVkRmlsZSIsImNvbXBsZXRlIiwiY29uc29sZSIsImxvZyIsImdldEltYWdlSW5mbyIsInNyYyIsImltYWdlSW5mb3IiLCJfZHJhd0ltYWdlIiwiX2dldFRlbXBGaWxlUGF0aCIsImZhaWwiLCJjYiIsImRyYXdJbWFnZSIsInBhdGgiLCJ3aWR0aCIsImhlaWdodCIsImRyYXciLCJjdXREYXRhIiwiX2NvbXB1dGVkQ3V0RGF0YSIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwieCIsInkiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiX3NhdmVJbWFnZSIsInRlbXBGaWxlUGF0aCIsInNhdmVGaWxlIiwic2F2ZWRGaWxlUGF0aCIsImN1dFkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUFlOztBQUVYO0FBQ0FBLE9BSFcsZUFHUEMsR0FITyxFQUdGQyxRQUhFLEVBR1FDLFlBSFIsRUFHc0JDLGVBSHRCLEVBR3VDO0FBQzlDLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1DLE1BQU1DLEdBQUdDLG1CQUFILENBQXVCLFNBQXZCLENBQVo7QUFDQUgsYUFBS0ksY0FBTCxDQUFvQlIsR0FBcEIsRUFBeUJLLEdBQXpCLEVBQThCSixRQUE5QixFQUF3Q0MsWUFBeEMsRUFBc0RDLGVBQXREO0FBQ0gsS0FQVTs7O0FBU1g7QUFDQU0sc0JBVlcsOEJBVVFDLGlCQVZSLEVBVTJCO0FBQ2xDSixXQUFHSyxnQkFBSCxDQUFvQjtBQUNo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QUFQO0FBQ0g7QUFwSFUsQyIsImZpbGUiOiJjdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAvLyDoo4Hliarmlrnms5VcbiAgICBjdXQodXJsLCBjYW52YXNJZCwgaW1hZ2VJbmZvckNCLCBzYXZlZEZpbGVQYXRoQ0IpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdjcm9wcGVyJyk7XG4gICAgICAgIHRoYXQuX2dldEltYWdlSW5mb3IodXJsLCBjdHgsIGNhbnZhc0lkLCBpbWFnZUluZm9yQ0IsIHNhdmVkRmlsZVBhdGhDQik7XG4gICAgfSxcblxuICAgIC8vIOWIoOmZpOacrOWcsOWtmOWCqOaVsOaNrlxuICAgIGNsZWFyU2F2ZWRGaWxlTGlzdChjdXJyU2F2ZWRGaWxlUGF0aCkge1xuICAgICAgICB3eC5nZXRTYXZlZEZpbGVMaXN0KHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5maWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyclNhdmVkRmlsZVBhdGggIT09IHJlcy5maWxlTGlzdFtpXS5maWxlUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVtb3ZlU2F2ZWRGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzLmZpbGVMaXN0W2ldLmZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmnKzlnLDlm77niYfliKDpmaTnu5PmnZ8nLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8g6I635Y+W5Zu+54mH5L+h5oGvXG4gICAgX2dldEltYWdlSW5mb3IodXJsLCBjdHgsIGNhbnZhc0lkLCBpbWFnZUluZm9yQ0IsIHNhdmVkRmlsZVBhdGhDQikge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHd4LmdldEltYWdlSW5mbyh7XG4gICAgICAgICAgICBzcmM6IHVybCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpbWFnZUluZm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEltYWdlSW5mbzInLCBpbWFnZUluZm9yKTtcbiAgICAgICAgICAgICAgICBpbWFnZUluZm9yQ0IoaW1hZ2VJbmZvcik7XG4gICAgICAgICAgICAgICAgLy8g5bCG5Zu+55S75YiwY2FudmFz5LiKXG4gICAgICAgICAgICAgICAgdGhhdC5fZHJhd0ltYWdlKGN0eCwgaW1hZ2VJbmZvciwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9nZXRUZW1wRmlsZVBhdGgoY2FudmFzSWQsIGltYWdlSW5mb3IsIHNhdmVkRmlsZVBhdGhDQik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRJbWFnZUluZm8gZmFpbCcsIHJlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0SW1hZ2VJbmZvIGNvbXBsZXRlJywgcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOWcqGNhbnZhc+S4iueUu+WbvlxuICAgIF9kcmF3SW1hZ2UoY3R4LCBpbWFnZUluZm9yLCBjYikge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlSW5mb3IucGF0aCwgMCwgMCwgaW1hZ2VJbmZvci53aWR0aCwgaW1hZ2VJbmZvci5oZWlnaHQpO1xuICAgICAgICBjdHguZHJhdyhmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+e7mOWItuWujOaIkCcpO1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOS9v+eUqGNhbnZhc+WJquijgSzlkI7ojrflj5bkuLTml7bmnKzlnLDot6/lvoQsXG4gICAgX2dldFRlbXBGaWxlUGF0aChjYW52YXNJZCwgaW1hZ2VJbmZvciwgc2F2ZWRGaWxlUGF0aENCKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGN1dERhdGEgPSB0aGF0Ll9jb21wdXRlZEN1dERhdGEoaW1hZ2VJbmZvcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXREYXRhJywgY3V0RGF0YSk7XG4gICAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICAgIHg6IGN1dERhdGEueCxcbiAgICAgICAgICAgIHk6IGN1dERhdGEueSxcbiAgICAgICAgICAgIHdpZHRoOiBpbWFnZUluZm9yLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZUluZm9yLmhlaWdodCxcbiAgICAgICAgICAgIGRlc3RXaWR0aDogY3V0RGF0YS5kZXN0V2lkdGgsXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OiBjdXREYXRhLmRlc3RIZWlnaHQsXG4gICAgICAgICAgICBjYW52YXNJZDogY2FudmFzSWQsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbnZhc1RvVGVtcEZpbGVQYXRoIHJlcycsIHJlcyk7XG4gICAgICAgICAgICAgICAgdGhhdC5fc2F2ZUltYWdlKHJlcy50ZW1wRmlsZVBhdGgsIHNhdmVkRmlsZVBhdGhDQik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW52YXNUb1RlbXBGaWxlUGF0aCBmYWlsJywgcmVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW52YXNUb1RlbXBGaWxlUGF0aCBjb21wbGV0ZScsIHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDlsIZfZ2V0VGVtcEZpbGVQYXRo5b6X5Yiw55qE5Li05pe26Lev5b6E5L+d5a2Y5Yiw5pys5ZywXG4gICAgX3NhdmVJbWFnZSh0ZW1wRmlsZVBhdGgsIHNhdmVkRmlsZVBhdGhDQikge1xuICAgICAgICB3eC5zYXZlRmlsZSh7XG4gICAgICAgICAgICB0ZW1wRmlsZVBhdGg6IHRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2F2ZWRGaWxlUGF0aCA9IHJlcy5zYXZlZEZpbGVQYXRoO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlZEZpbGVQYXRoJywgcmVzKTtcbiAgICAgICAgICAgICAgICBzYXZlZEZpbGVQYXRoQ0Ioc2F2ZWRGaWxlUGF0aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlRmlsZSxmYWlsJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZUZpbGUsY29tcGxldGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOiuoeeul+ijgeWJquaVsOaNriznm67liY3nlLHplb/lrr0xOjHoo4HmiJDplb/lrr3mr5Q1OjTnmoTlm77niYcs6KOB5Ymq5YWs5byPIChoLSh3LzUqNCkpLzJcbiAgICBfY29tcHV0ZWRDdXREYXRhKGltYWdlSW5mb3IpIHtcbiAgICAgICAgbGV0IGN1dERhdGEgPSB7XG4gICAgICAgICAgICB4OiAwLCAgICAgICAgICAvLyBjYW52YXPliarliIflt6bkuIrop5J45Z2Q5qCHXG4gICAgICAgICAgICB5OiAwLCAgICAgICAgICAvLyBjYW52YXPliarliIflt6bkuIrop5J55Z2Q5qCHXG4gICAgICAgICAgICBkZXN0V2lkdGg6IDAsICAvLyDlm77niYfoo4Hliarlrr3luqYgXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OiAwICAvLyDlm77niYfoo4Hliarpq5jluqZcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGN1dFkgPSAoaW1hZ2VJbmZvci5oZWlnaHQgLSAoaW1hZ2VJbmZvci53aWR0aCAvIDUgKiA0KSkgLyAyO1xuICAgICAgICBjdXREYXRhLnkgPSBjdXRZO1xuICAgICAgICBjdXREYXRhLnggPSAwO1xuICAgICAgICBjdXREYXRhLmRlc3RXaWR0aCA9IGltYWdlSW5mb3Iud2lkdGg7XG4gICAgICAgIGN1dERhdGEuZGVzdEhlaWdodCA9IGltYWdlSW5mb3IuaGVpZ2h0IC0gY3V0WSAqIDI7XG4gICAgICAgIHJldHVybiBjdXREYXRhO1xuICAgIH1cbn0iXX0=