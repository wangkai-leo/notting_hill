'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fnav = function (_wepy$component) {
    _inherits(Fnav, _wepy$component);

    function Fnav() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Fnav);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fnav.__proto__ || Object.getPrototypeOf(Fnav)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            /**     
             * 图片路径
             */
            'imgSrc': {
                type: String
            },
            /**
             * 裁剪框高度
             */
            'height': {
                type: Number,
                value: 200
            },
            /**
             * 裁剪框宽度
             */
            'width': {
                type: Number,
                value: 200
            },
            /**
             * 裁剪框最小尺寸
             */
            'min_width': {
                type: Number,
                value: 100
            },
            'min_height': {
                type: Number,
                value: 100
            },
            /**
             * 裁剪框最大尺寸
             */
            'max_width': {
                type: Number,
                value: 300
            },
            'max_height': {
                type: Number,
                value: 300
            },
            /**
             * 裁剪框禁止拖动
             */
            'disable_width': {
                type: Boolean,
                value: false
            },
            'disable_height': {
                type: Boolean,
                value: false
            },
            /**
             * 锁定裁剪框比例
             */
            'disable_ratio': {
                type: Boolean,
                value: false
            },
            /**
             * 生成的图片尺寸相对剪裁框的比例
             */
            'export_scale': {
                type: Number,
                value: 3
            },
            /**
             * 生成的图片质量0-1
             */
            'quality': {
                type: Number,
                value: 1
            },
            'cut_top': {
                type: Number,
                value: null
            },
            'cut_left': {
                type: Number,
                value: null
            },
            /**
             * canvas上边距（不设置默认不显示）
             */
            'canvas_top': {
                type: Number,
                value: null
            },
            /**
             * canvas左边距（不设置默认不显示）
             */
            'canvas_left': {
                type: Number,
                value: null
            },
            /**
             * 图片宽度
             */
            'img_width': {
                type: null,
                value: null
            },
            /**
             * 图片高度
             */
            'img_height': {
                type: null,
                value: null
            },
            /**
             * 图片缩放比
             */
            'scale': {
                type: Number,
                value: 1
            },
            /**
             * 图片旋转角度
             */
            'angle': {
                type: Number,
                value: 0
            },
            /**
             * 最小缩放比
             */
            'min_scale': {
                type: Number,
                value: 0.5
            },
            /**
             * 最大缩放比
             */
            'max_scale': {
                type: Number,
                value: 2
            },
            /**
             * 是否禁用旋转
             */
            'disable_rotate': {
                type: Boolean,
                value: false
            },
            /**
             * 是否限制移动范围(剪裁框只能在图片内)
             */
            'limit_move': {
                type: Boolean,
                value: false
            }
        }, _this.data = {

            el: 'image-cropper', //暂时无用
            info: wx.getSystemInfoSync(),
            MOVE_THROTTLE: null, //触摸移动节流settimeout
            MOVE_THROTTLE_FLAG: true, //节流标识
            INIT_IMGWIDTH: 0, //图片设置尺寸,此值不变（记录最初设定的尺寸）
            INIT_IMGHEIGHT: 0, //图片设置尺寸,此值不变（记录最初设定的尺寸）
            TIME_BG: null, //背景变暗延时函数
            TIME_CUT_CENTER: null,
            _touch_img_relative: [{
                x: 0,
                y: 0
            }], //鼠标和图片中心的相对位置
            _flag_cut_touch: false, //是否是拖动裁剪框
            _hypotenuse_length: 0, //双指触摸时斜边长度
            _flag_img_endtouch: false, //是否结束触摸
            _flag_bright: true, //背景是否亮
            _canvas_overflow: true, //canvas缩略图是否在屏幕外面
            _canvas_width: 200,
            _canvas_height: 200,
            origin_x: 0.5, //图片旋转中心
            origin_y: 0.5, //图片旋转中心
            _cut_animation: false, //是否开启图片和裁剪框过渡
            _img_top: wx.getSystemInfoSync().windowHeight / 2, //图片上边距
            _img_left: wx.getSystemInfoSync().windowWidth / 2 //图片左边距
        }, _this.watch = {
            //监听截取框宽高变化
            width: function width(value, that) {
                if (value < that.data.min_width) {
                    that.setData({
                        width: that.data.min_width
                    });
                }
                that._computeCutSize();
            },
            height: function height(value, that) {
                if (value < that.data.min_height) {
                    that.setData({
                        height: that.data.min_height
                    });
                }
                that._computeCutSize();
            },
            angle: function angle(value, that) {
                //停止居中裁剪框，继续修改图片位置
                that._moveStop();
                if (that.data.limit_move) {
                    if (that.data.angle % 90) {
                        that.setData({
                            angle: Math.round(that.data.angle / 90) * 90
                        });
                        return;
                    }
                }
            },
            _cut_animation: function _cut_animation(value, that) {
                //开启过渡300毫秒之后自动关闭
                clearTimeout(that.data._cut_animation_time);
                if (value) {
                    that.data._cut_animation_time = setTimeout(function () {
                        that.setData({
                            _cut_animation: false
                        });
                    }, 300);
                }
            },
            limit_move: function limit_move(value, that) {
                if (value) {
                    if (that.data.angle % 90) {
                        that.setData({
                            angle: Math.round(that.data.angle / 90) * 90
                        });
                    }
                    that._imgMarginDetectionScale();
                    !that.data._canvas_overflow && that._draw();
                }
            },
            canvas_top: function canvas_top(value, that) {
                that._canvasDetectionPosition();
            },
            canvas_left: function canvas_left(value, that) {
                that._canvasDetectionPosition();
            },
            imgSrc: function imgSrc(value, that) {
                that.pushImg();
            },
            cut_top: function cut_top(value, that) {
                that._cutDetectionPosition();
                if (that.data.limit_move) {
                    !that.data._canvas_overflow && that._draw();
                }
            },
            cut_left: function cut_left(value, that) {
                that._cutDetectionPosition();
                if (that.data.limit_move) {
                    !that.data._canvas_overflow && that._draw();
                }
            }
        }, _this.methods = {

            /**
             * 上传图片
             */
            upload: function upload() {
                var that = this;
                wx.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera'],
                    success: function success(res) {
                        var tempFilePaths = res.tempFilePaths[0];
                        that.pushImg(tempFilePaths);
                        wx.showLoading({
                            title: '加载中...'
                        });
                    }
                });
            },

            /**
             * 返回图片信息
             */
            getImg: function getImg(getCallback) {
                var _this2 = this;

                this._draw(function () {
                    wx.canvasToTempFilePath({
                        width: _this2.data.width * _this2.data.export_scale,
                        height: Math.round(_this2.data.height * _this2.data.export_scale),
                        destWidth: _this2.data.width * _this2.data.export_scale,
                        destHeight: Math.round(_this2.data.height) * _this2.data.export_scale,
                        fileType: 'png',
                        quality: _this2.data.quality,
                        canvasId: _this2.data.el,
                        success: function success(res) {
                            getCallback({
                                url: res.tempFilePath,
                                width: _this2.data.width * _this2.data.export_scale,
                                height: _this2.data.height * _this2.data.export_scale
                            });
                        }
                    }, _this2);
                });
            },

            /**
             * 设置图片动画
             * {
             *    x:10,//图片在原有基础上向下移动10px
             *    y:10,//图片在原有基础上向右移动10px
             *    angle:10,//图片在原有基础上旋转10deg
             *    scale:0.5,//图片在原有基础上增加0.5倍
             * }
             */
            setTransform: function setTransform(transform) {
                if (!transform) return;
                if (!this.data.disable_rotate) {
                    this.setData({
                        angle: transform.angle ? this.data.angle + transform.angle : this.data.angle
                    });
                }
                var scale = this.data.scale;
                if (transform.scale) {
                    scale = this.data.scale + transform.scale;
                    scale = scale <= this.data.min_scale ? this.data.min_scale : scale;
                    scale = scale >= this.data.max_scale ? this.data.max_scale : scale;
                }
                this.data.scale = scale;
                var cutX = this.data.cut_left;
                var cutY = this.data.cut_top;
                if (transform.cutX) {
                    this.setData({
                        cut_left: cutX + transform.cutX
                    });
                    this.data.watch.cut_left(null, this);
                }
                if (transform.cutY) {
                    this.setData({
                        cut_top: cutY + transform.cutY
                    });
                    this.data.watch.cut_top(null, this);
                }
                this.data._img_top = transform.y ? this.data._img_top + transform.y : this.data._img_top;
                this.data._img_left = transform.x ? this.data._img_left + transform.x : this.data._img_left;
                //图像边缘检测,防止截取到空白
                this._imgMarginDetectionScale();
                //停止居中裁剪框，继续修改图片位置
                this._moveDuring();
                this.setData({
                    scale: this.data.scale,
                    _img_top: this.data._img_top,
                    _img_left: this.data._img_left
                });
                !this.data._canvas_overflow && this._draw();
                //可以居中裁剪框了
                this._moveStop(); //结束操作
            },

            /**
             * 设置剪裁框位置
             */
            setCutXY: function setCutXY(x, y) {
                this.setData({
                    cut_top: y,
                    cut_left: x
                });
            },

            /**
             * 设置剪裁框尺寸
             */
            setCutSize: function setCutSize(w, h) {
                this.setData({
                    width: w,
                    height: h
                });
                this._computeCutSize();
            },

            /**
             * 设置剪裁框和图片居中
             */
            setCutCenter: function setCutCenter() {
                var cut_top = (this.data.info.windowHeight - this.data.height) * 0.5;
                var cut_left = (this.data.info.windowWidth - this.data.width) * 0.5;
                //顺序不能变
                this.setData({
                    _img_top: this.data._img_top - this.data.cut_top + cut_top,
                    cut_top: cut_top, //截取的框上边距
                    _img_left: this.data._img_left - this.data.cut_left + cut_left,
                    cut_left: cut_left //截取的框左边距
                });
            },
            _setCutCenter: function _setCutCenter() {
                var cut_top = (this.data.info.windowHeight - this.data.height) * 0.5;
                var cut_left = (this.data.info.windowWidth - this.data.width) * 0.5;
                this.setData({
                    cut_top: cut_top, //截取的框上边距
                    cut_left: cut_left //截取的框左边距
                });
            },

            /**
             * 设置剪裁框宽度-即将废弃
             */
            setWidth: function setWidth(width) {
                this.setData({
                    width: width
                });
                this._computeCutSize();
            },

            /**
             * 设置剪裁框高度-即将废弃
             */
            setHeight: function setHeight(height) {
                this.setData({
                    height: height
                });
                this._computeCutSize();
            },

            /**
             * 是否锁定旋转
             */
            setDisableRotate: function setDisableRotate(value) {
                this.data.disable_rotate = value;
            },

            /**
             * 是否限制移动
             */
            setLimitMove: function setLimitMove(value) {
                this.setData({
                    _cut_animation: true,
                    limit_move: !!value
                });
            },

            /**
             * 初始化图片，包括位置、大小、旋转角度
             */
            imgReset: function imgReset() {
                this.setData({
                    scale: 1,
                    angle: 0,
                    _img_top: wx.getSystemInfoSync().windowHeight / 2,
                    _img_left: wx.getSystemInfoSync().windowWidth / 2
                });
            },

            /**
             * 加载（更换）图片
             */
            pushImg: function pushImg(src) {
                var _this3 = this;

                if (src) {
                    this.setData({
                        imgSrc: src
                    });
                    //发现是手动赋值直接返回，交给watch处理
                    return;
                }

                // getImageInfo接口传入 src: '' 会导致内存泄漏

                if (!this.data.imgSrc) return;
                wx.getImageInfo({
                    src: this.data.imgSrc,
                    success: function success(res) {
                        _this3.data.imageObject = res;
                        //图片非本地路径需要换成本地路径
                        if (_this3.data.imgSrc.search(/tmp/) == -1) {
                            _this3.setData({
                                imgSrc: res.path
                            });
                        }
                        //计算最后图片尺寸
                        _this3._imgComputeSize();
                        if (_this3.data.limit_move) {
                            //限制移动，不留空白处理
                            _this3._imgMarginDetectionScale();
                        }
                        _this3._draw();
                    },
                    fail: function fail(err) {
                        _this3.setData({
                            imgSrc: ''
                        });
                    }
                });
            },
            imageLoad: function imageLoad(e) {
                var _this4 = this;

                setTimeout(function () {
                    _this4.triggerEvent('imageload', _this4.data.imageObject);
                }, 1000);
            },

            /**
             * 设置图片放大缩小
             */
            setScale: function setScale(scale) {
                if (!scale) return;
                this.setData({
                    scale: scale
                });
                !this.data._canvas_overflow && this._draw();
            },

            /**
             * 设置图片旋转角度
             */
            setAngle: function setAngle(angle) {
                if (!angle) return;
                this.setData({
                    _cut_animation: true,
                    angle: angle
                });
                this._imgMarginDetectionScale();
                !this.data._canvas_overflow && this._draw();
            },
            _initCanvas: function _initCanvas() {
                //初始化canvas
                if (!this.data.ctx) {
                    this.data.ctx = wx.createCanvasContext("image-cropper", this);
                }
            },

            /**
             * 根据开发者设置的图片目标尺寸计算实际尺寸
             */
            _initImageSize: function _initImageSize() {
                //处理宽高特殊单位 %>px
                if (this.data.INIT_IMGWIDTH && typeof this.data.INIT_IMGWIDTH == "string" && this.data.INIT_IMGWIDTH.indexOf("%") != -1) {
                    var width = this.data.INIT_IMGWIDTH.replace("%", "");
                    this.data.INIT_IMGWIDTH = this.data.img_width = this.data.info.windowWidth / 100 * width;
                }
                if (this.data.INIT_IMGHEIGHT && typeof this.data.INIT_IMGHEIGHT == "string" && this.data.INIT_IMGHEIGHT.indexOf("%") != -1) {
                    var height = this.data.img_height.replace("%", "");
                    this.data.INIT_IMGHEIGHT = this.data.img_height = this.data.info.windowHeight / 100 * height;
                }
            },

            /**
             * 检测剪裁框位置是否在允许的范围内(屏幕内)
             */
            _cutDetectionPosition: function _cutDetectionPosition() {
                var _this5 = this;

                var _cutDetectionPositionTop = function _cutDetectionPositionTop() {
                    //检测上边距是否在范围内
                    if (_this5.data.cut_top < 0) {
                        _this5.setData({
                            cut_top: 0
                        });
                    }
                    if (_this5.data.cut_top > _this5.data.info.windowHeight - _this5.data.height) {
                        _this5.setData({
                            cut_top: _this5.data.info.windowHeight - _this5.data.height
                        });
                    }
                },
                    _cutDetectionPositionLeft = function _cutDetectionPositionLeft() {
                    //检测左边距是否在范围内
                    if (_this5.data.cut_left < 0) {
                        _this5.setData({
                            cut_left: 0
                        });
                    }
                    if (_this5.data.cut_left > _this5.data.info.windowWidth - _this5.data.width) {
                        _this5.setData({
                            cut_left: _this5.data.info.windowWidth - _this5.data.width
                        });
                    }
                };
                //裁剪框坐标处理（如果只写一个参数则另一个默认为0，都不写默认居中）
                if (this.data.cut_top == null && this.data.cut_left == null) {
                    this._setCutCenter();
                } else if (this.data.cut_top != null && this.data.cut_left != null) {
                    _cutDetectionPositionTop();
                    _cutDetectionPositionLeft();
                } else if (this.data.cut_top != null && this.data.cut_left == null) {
                    _cutDetectionPositionTop();
                    this.setData({
                        cut_left: (this.data.info.windowWidth - this.data.width) / 2
                    });
                } else if (this.data.cut_top == null && this.data.cut_left != null) {
                    _cutDetectionPositionLeft();
                    this.setData({
                        cut_top: (this.data.info.windowHeight - this.data.height) / 2
                    });
                }
            },

            /**
             * 检测canvas位置是否在允许的范围内(屏幕内)如果在屏幕外则不开启实时渲染
             * 如果只写一个参数则另一个默认为0，都不写默认超出屏幕外
             */
            _canvasDetectionPosition: function _canvasDetectionPosition() {
                if (this.data.canvas_top == null && this.data.canvas_left == null) {
                    this.data._canvas_overflow = false;
                    this.setData({
                        canvas_top: -5000,
                        canvas_left: -5000
                    });
                } else if (this.data.canvas_top != null && this.data.canvas_left != null) {
                    if (this.data.canvas_top < -this.data.height || this.data.canvas_top > this.data.info.windowHeight) {
                        this.data._canvas_overflow = true;
                    } else {
                        this.data._canvas_overflow = false;
                    }
                } else if (this.data.canvas_top != null && this.data.canvas_left == null) {
                    this.setData({
                        canvas_left: 0
                    });
                } else if (this.data.canvas_top == null && this.data.canvas_left != null) {
                    this.setData({
                        canvas_top: 0
                    });
                    if (this.data.canvas_left < -this.data.width || this.data.canvas_left > this.data.info.windowWidth) {
                        this.data._canvas_overflow = true;
                    } else {
                        this.data._canvas_overflow = false;
                    }
                }
            },

            /**
             * 图片边缘检测-位置
             */
            _imgMarginDetectionPosition: function _imgMarginDetectionPosition(scale) {
                if (!this.data.limit_move) return;
                var left = this.data._img_left;
                var top = this.data._img_top;
                var scale = scale || this.data.scale;
                var img_width = this.data.img_width;
                var img_height = this.data.img_height;
                if (this.data.angle / 90 % 2) {
                    img_width = this.data.img_height;
                    img_height = this.data.img_width;
                }
                left = this.data.cut_left + img_width * scale / 2 >= left ? left : this.data.cut_left + img_width * scale / 2;
                left = this.data.cut_left + this.data.width - img_width * scale / 2 <= left ? left : this.data.cut_left + this.data.width - img_width * scale / 2;
                top = this.data.cut_top + img_height * scale / 2 >= top ? top : this.data.cut_top + img_height * scale / 2;
                top = this.data.cut_top + this.data.height - img_height * scale / 2 <= top ? top : this.data.cut_top + this.data.height - img_height * scale / 2;
                this.setData({
                    _img_left: left,
                    _img_top: top,
                    scale: scale
                });
            },

            /**
             * 图片边缘检测-缩放
             */
            _imgMarginDetectionScale: function _imgMarginDetectionScale() {
                if (!this.data.limit_move) return;
                var scale = this.data.scale;
                var img_width = this.data.img_width;
                var img_height = this.data.img_height;
                if (this.data.angle / 90 % 2) {
                    img_width = this.data.img_height;
                    img_height = this.data.img_width;
                }
                if (img_width * scale < this.data.width) {
                    scale = this.data.width / img_width;
                }
                if (img_height * scale < this.data.height) {
                    scale = Math.max(scale, this.data.height / img_height);
                }
                this._imgMarginDetectionPosition(scale);
            },
            _setData: function _setData(obj) {
                var data = {};
                for (var key in obj) {
                    if (this.data[key] != obj[key]) {
                        data[key] = obj[key];
                    }
                }
                this.setData(data);
                return data;
            },

            /**
             * 计算图片尺寸
             */
            _imgComputeSize: function _imgComputeSize() {
                var img_width = this.data.img_width,
                    img_height = this.data.img_height;
                if (!this.data.INIT_IMGHEIGHT && !this.data.INIT_IMGWIDTH) {
                    //默认按图片最小边 = 对应裁剪框尺寸
                    img_width = this.data.imageObject.width;
                    img_height = this.data.imageObject.height;
                    if (img_width / img_height > this.data.width / this.data.height) {
                        img_height = this.data.height;
                        img_width = this.data.imageObject.width / this.data.imageObject.height * img_height;
                    } else {
                        img_width = this.data.width;
                        img_height = this.data.imageObject.height / this.data.imageObject.width * img_width;
                    }
                } else if (this.data.INIT_IMGHEIGHT && !this.data.INIT_IMGWIDTH) {
                    img_width = this.data.imageObject.width / this.data.imageObject.height * this.data.INIT_IMGHEIGHT;
                } else if (!this.data.INIT_IMGHEIGHT && this.data.INIT_IMGWIDTH) {
                    img_height = this.data.imageObject.height / this.data.imageObject.width * this.data.INIT_IMGWIDTH;
                }
                this.setData({
                    img_width: img_width,
                    img_height: img_height
                });
            },

            //改变截取框大小
            _computeCutSize: function _computeCutSize() {
                if (this.data.width > this.data.info.windowWidth) {
                    this.setData({
                        width: this.data.info.windowWidth
                    });
                } else if (this.data.width + this.data.cut_left > this.data.info.windowWidth) {
                    this.setData({
                        cut_left: this.data.info.windowWidth - this.data.cut_left
                    });
                };
                if (this.data.height > this.data.info.windowHeight) {
                    this.setData({
                        height: this.data.info.windowHeight
                    });
                } else if (this.data.height + this.data.cut_top > this.data.info.windowHeight) {
                    this.setData({
                        cut_top: this.data.info.windowHeight - this.data.cut_top
                    });
                }!this.data._canvas_overflow && this._draw();
            },

            //开始触摸
            _start: function _start(event) {
                this.data._flag_img_endtouch = false;
                if (event.touches.length == 1) {
                    //单指拖动
                    this.data._touch_img_relative[0] = {
                        x: event.touches[0].clientX - this.data._img_left,
                        y: event.touches[0].clientY - this.data._img_top
                    };
                } else {
                    //双指放大
                    var width = Math.abs(event.touches[0].clientX - event.touches[1].clientX);
                    var height = Math.abs(event.touches[0].clientY - event.touches[1].clientY);
                    this.data._touch_img_relative = [{
                        x: event.touches[0].clientX - this.data._img_left,
                        y: event.touches[0].clientY - this.data._img_top
                    }, {
                        x: event.touches[1].clientX - this.data._img_left,
                        y: event.touches[1].clientY - this.data._img_top
                    }];
                    this.data._hypotenuse_length = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                }!this.data._canvas_overflow && this._draw();
            },
            _move_throttle: function _move_throttle() {
                var _this6 = this;

                //安卓需要节流
                if (this.data.info.platform == 'android') {
                    clearTimeout(this.data.MOVE_THROTTLE);
                    this.data.MOVE_THROTTLE = setTimeout(function () {
                        _this6.data.MOVE_THROTTLE_FLAG = true;
                    }, 1000 / 40);
                    return this.data.MOVE_THROTTLE_FLAG;
                } else {
                    this.data.MOVE_THROTTLE_FLAG = true;
                }
            },
            _move: function _move(event) {
                if (this.data._flag_img_endtouch || !this.data.MOVE_THROTTLE_FLAG) return;
                this.data.MOVE_THROTTLE_FLAG = false;
                this._move_throttle();
                this._moveDuring();
                if (event.touches.length == 1) {
                    //单指拖动
                    var left = event.touches[0].clientX - this.data._touch_img_relative[0].x,
                        top = event.touches[0].clientY - this.data._touch_img_relative[0].y;
                    //图像边缘检测,防止截取到空白
                    this.data._img_left = left;
                    this.data._img_top = top;
                    this._imgMarginDetectionPosition();
                    this.setData({
                        _img_left: this.data._img_left,
                        _img_top: this.data._img_top
                    });
                } else {
                    //双指放大
                    var width = Math.abs(event.touches[0].clientX - event.touches[1].clientX),
                        height = Math.abs(event.touches[0].clientY - event.touches[1].clientY),
                        hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)),
                        scale = this.data.scale * (hypotenuse / this.data._hypotenuse_length),
                        current_deg = 0;
                    scale = scale <= this.data.min_scale ? this.data.min_scale : scale;
                    scale = scale >= this.data.max_scale ? this.data.max_scale : scale;
                    //图像边缘检测,防止截取到空白
                    this.data.scale = scale;
                    this._imgMarginDetectionScale();
                    //双指旋转(如果没禁用旋转)
                    var _touch_img_relative = [{
                        x: event.touches[0].clientX - this.data._img_left,
                        y: event.touches[0].clientY - this.data._img_top
                    }, {
                        x: event.touches[1].clientX - this.data._img_left,
                        y: event.touches[1].clientY - this.data._img_top
                    }];
                    if (!this.data.disable_rotate) {
                        var first_atan = 180 / Math.PI * Math.atan2(_touch_img_relative[0].y, _touch_img_relative[0].x);
                        var first_atan_old = 180 / Math.PI * Math.atan2(this.data._touch_img_relative[0].y, this.data._touch_img_relative[0].x);
                        var second_atan = 180 / Math.PI * Math.atan2(_touch_img_relative[1].y, _touch_img_relative[1].x);
                        var second_atan_old = 180 / Math.PI * Math.atan2(this.data._touch_img_relative[1].y, this.data._touch_img_relative[1].x);
                        //当前旋转的角度
                        var first_deg = first_atan - first_atan_old,
                            second_deg = second_atan - second_atan_old;
                        if (first_deg != 0) {
                            current_deg = first_deg;
                        } else if (second_deg != 0) {
                            current_deg = second_deg;
                        }
                    }
                    this.data._touch_img_relative = _touch_img_relative;
                    this.data._hypotenuse_length = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                    //更新视图
                    this.setData({
                        angle: this.data.angle + current_deg,
                        scale: this.data.scale
                    });
                }!this.data._canvas_overflow && this._draw();
            },

            //结束操作
            _end: function _end(event) {
                this.data._flag_img_endtouch = true;
                this._moveStop();
            },

            //点击中间剪裁框处理
            _click: function _click(event) {
                var _this7 = this;

                if (!this.data.imgSrc) {
                    //调起上传
                    this.upload();
                    return;
                }
                this._draw(function () {
                    var x = event.detail ? event.detail.x : event.touches[0].clientX;
                    var y = event.detail ? event.detail.y : event.touches[0].clientY;
                    if (x >= _this7.data.cut_left && x <= _this7.data.cut_left + _this7.data.width && y >= _this7.data.cut_top && y <= _this7.data.cut_top + _this7.data.height) {
                        //生成图片并回调
                        wx.canvasToTempFilePath({
                            width: _this7.data.width * _this7.data.export_scale,
                            height: Math.round(_this7.data.height * _this7.data.export_scale),
                            destWidth: _this7.data.width * _this7.data.export_scale,
                            destHeight: Math.round(_this7.data.height) * _this7.data.export_scale,
                            fileType: 'png',
                            quality: _this7.data.quality,
                            canvasId: _this7.data.el,
                            success: function success(res) {
                                _this7.triggerEvent('tapcut', {
                                    url: res.tempFilePath,
                                    width: _this7.data.width * _this7.data.export_scale,
                                    height: _this7.data.height * _this7.data.export_scale
                                });
                            }
                        }, _this7);
                    }
                });
            },

            //渲染
            _draw: function _draw(callback) {
                var _this8 = this;

                if (!this.data.imgSrc) return;
                var draw = function draw() {
                    //图片实际大小
                    var img_width = _this8.data.img_width * _this8.data.scale * _this8.data.export_scale;
                    var img_height = _this8.data.img_height * _this8.data.scale * _this8.data.export_scale;
                    //canvas和图片的相对距离
                    var xpos = _this8.data._img_left - _this8.data.cut_left;
                    var ypos = _this8.data._img_top - _this8.data.cut_top;
                    //旋转画布
                    _this8.data.ctx.translate(xpos * _this8.data.export_scale, ypos * _this8.data.export_scale);
                    _this8.data.ctx.rotate(_this8.data.angle * Math.PI / 180);
                    _this8.data.ctx.drawImage(_this8.data.imgSrc, -img_width / 2, -img_height / 2, img_width, img_height);
                    _this8.data.ctx.draw(false, function () {
                        callback && callback();
                    });
                };
                if (this.data.ctx.width != this.data.width || this.data.ctx.height != this.data.height) {
                    //优化拖动裁剪框，所以必须把宽高设置放在离用户触发渲染最近的地方
                    this.setData({
                        _canvas_height: this.data.height,
                        _canvas_width: this.data.width
                    }, function () {
                        //延迟40毫秒防止点击过快出现拉伸或裁剪过多
                        setTimeout(function () {
                            draw();
                        }, 40);
                    });
                } else {
                    draw();
                }
            },

            //裁剪框处理
            _cutTouchMove: function _cutTouchMove(e) {
                var _this9 = this;

                if (this.data._flag_cut_touch && this.data.MOVE_THROTTLE_FLAG) {
                    if (this.data.disable_ratio && (this.data.disable_width || this.data.disable_height)) return;
                    //节流
                    this.data.MOVE_THROTTLE_FLAG = false;
                    this._move_throttle();
                    var width = this.data.width,
                        height = this.data.height,
                        cut_top = this.data.cut_top,
                        cut_left = this.data.cut_left,
                        size_correct = function size_correct() {
                        width = width <= _this9.data.max_width ? width >= _this9.data.min_width ? width : _this9.data.min_width : _this9.data.max_width;
                        height = height <= _this9.data.max_height ? height >= _this9.data.min_height ? height : _this9.data.min_height : _this9.data.max_height;
                    },
                        size_inspect = function size_inspect() {
                        if ((width > _this9.data.max_width || width < _this9.data.min_width || height > _this9.data.max_height || height < _this9.data.min_height) && _this9.data.disable_ratio) {
                            size_correct();
                            return false;
                        } else {
                            size_correct();
                            return true;
                        }
                    };
                    height = this.data.CUT_START.height + (this.data.CUT_START.corner > 1 && this.data.CUT_START.corner < 4 ? 1 : -1) * (this.data.CUT_START.y - e.touches[0].clientY);
                    switch (this.data.CUT_START.corner) {
                        case 1:
                            width = this.data.CUT_START.width + this.data.CUT_START.x - e.touches[0].clientX;
                            if (this.data.disable_ratio) {
                                height = width / (this.data.width / this.data.height);
                            }
                            if (!size_inspect()) return;
                            cut_left = this.data.CUT_START.cut_left - (width - this.data.CUT_START.width);
                            break;
                        case 2:
                            width = this.data.CUT_START.width + this.data.CUT_START.x - e.touches[0].clientX;
                            if (this.data.disable_ratio) {
                                height = width / (this.data.width / this.data.height);
                            }
                            if (!size_inspect()) return;
                            cut_top = this.data.CUT_START.cut_top - (height - this.data.CUT_START.height);
                            cut_left = this.data.CUT_START.cut_left - (width - this.data.CUT_START.width);
                            break;
                        case 3:
                            width = this.data.CUT_START.width - this.data.CUT_START.x + e.touches[0].clientX;
                            if (this.data.disable_ratio) {
                                height = width / (this.data.width / this.data.height);
                            }
                            if (!size_inspect()) return;
                            cut_top = this.data.CUT_START.cut_top - (height - this.data.CUT_START.height);
                            break;
                        case 4:
                            width = this.data.CUT_START.width - this.data.CUT_START.x + e.touches[0].clientX;
                            if (this.data.disable_ratio) {
                                height = width / (this.data.width / this.data.height);
                            }
                            if (!size_inspect()) return;
                            break;
                    }
                    if (!this.data.disable_width && !this.data.disable_height) {
                        this.setData({
                            width: width,
                            cut_left: cut_left,
                            height: height,
                            cut_top: cut_top
                        });
                    } else if (!this.data.disable_width) {
                        this.setData({
                            width: width,
                            cut_left: cut_left
                        });
                    } else if (!this.data.disable_height) {
                        this.setData({
                            height: height,
                            cut_top: cut_top
                        });
                    }
                    this._imgMarginDetectionScale();
                }
            },
            _cutTouchStart: function _cutTouchStart(e) {
                var currentX = e.touches[0].clientX;
                var currentY = e.touches[0].clientY;
                var cutbox_top4 = this.data.cut_top + this.data.height - 30;
                var cutbox_bottom4 = this.data.cut_top + this.data.height + 20;
                var cutbox_left4 = this.data.cut_left + this.data.width - 30;
                var cutbox_right4 = this.data.cut_left + this.data.width + 30;

                var cutbox_top3 = this.data.cut_top - 30;
                var cutbox_bottom3 = this.data.cut_top + 30;
                var cutbox_left3 = this.data.cut_left + this.data.width - 30;
                var cutbox_right3 = this.data.cut_left + this.data.width + 30;

                var cutbox_top2 = this.data.cut_top - 30;
                var cutbox_bottom2 = this.data.cut_top + 30;
                var cutbox_left2 = this.data.cut_left - 30;
                var cutbox_right2 = this.data.cut_left + 30;

                var cutbox_top1 = this.data.cut_top + this.data.height - 30;
                var cutbox_bottom1 = this.data.cut_top + this.data.height + 30;
                var cutbox_left1 = this.data.cut_left - 30;
                var cutbox_right1 = this.data.cut_left + 30;
                if (currentX > cutbox_left4 && currentX < cutbox_right4 && currentY > cutbox_top4 && currentY < cutbox_bottom4) {
                    this._moveDuring();
                    this.data._flag_cut_touch = true;
                    this.data._flag_img_endtouch = true;
                    this.data.CUT_START = {
                        width: this.data.width,
                        height: this.data.height,
                        x: currentX,
                        y: currentY,
                        corner: 4
                    };
                } else if (currentX > cutbox_left3 && currentX < cutbox_right3 && currentY > cutbox_top3 && currentY < cutbox_bottom3) {
                    this._moveDuring();
                    this.data._flag_cut_touch = true;
                    this.data._flag_img_endtouch = true;
                    this.data.CUT_START = {
                        width: this.data.width,
                        height: this.data.height,
                        x: currentX,
                        y: currentY,
                        cut_top: this.data.cut_top,
                        cut_left: this.data.cut_left,
                        corner: 3
                    };
                } else if (currentX > cutbox_left2 && currentX < cutbox_right2 && currentY > cutbox_top2 && currentY < cutbox_bottom2) {
                    this._moveDuring();
                    this.data._flag_cut_touch = true;
                    this.data._flag_img_endtouch = true;
                    this.data.CUT_START = {
                        width: this.data.width,
                        height: this.data.height,
                        cut_top: this.data.cut_top,
                        cut_left: this.data.cut_left,
                        x: currentX,
                        y: currentY,
                        corner: 2
                    };
                } else if (currentX > cutbox_left1 && currentX < cutbox_right1 && currentY > cutbox_top1 && currentY < cutbox_bottom1) {
                    this._moveDuring();
                    this.data._flag_cut_touch = true;
                    this.data._flag_img_endtouch = true;
                    this.data.CUT_START = {
                        width: this.data.width,
                        height: this.data.height,
                        cut_top: this.data.cut_top,
                        cut_left: this.data.cut_left,
                        x: currentX,
                        y: currentY,
                        corner: 1
                    };
                }
            },
            _cutTouchEnd: function _cutTouchEnd(e) {
                this._moveStop();
                this.data._flag_cut_touch = false;
            },

            //停止移动时需要做的操作
            _moveStop: function _moveStop() {
                var _this10 = this;

                //清空之前的自动居中延迟函数并添加最新的
                clearTimeout(this.data.TIME_CUT_CENTER);
                this.data.TIME_CUT_CENTER = setTimeout(function () {
                    //动画启动
                    if (!_this10.data._cut_animation) {
                        _this10.setData({
                            _cut_animation: true
                        });
                    }
                    _this10.setCutCenter();
                }, 1000);
                //清空之前的背景变化延迟函数并添加最新的
                clearTimeout(this.data.TIME_BG);
                this.data.TIME_BG = setTimeout(function () {
                    if (_this10.data._flag_bright) {
                        _this10.setData({
                            _flag_bright: false
                        });
                    }
                }, 2000);
            },

            //移动中
            _moveDuring: function _moveDuring() {
                //清空之前的自动居中延迟函数
                clearTimeout(this.data.TIME_CUT_CENTER);
                //清空之前的背景变化延迟函数
                clearTimeout(this.data.TIME_BG);
                //高亮背景
                if (!this.data._flag_bright) {
                    this.setData({
                        _flag_bright: true
                    });
                }
            },

            //监听器
            _watcher: function _watcher() {
                var _this11 = this;

                Object.keys(this.data).forEach(function (v) {
                    _this11._observe(_this11.data, v, _this11.data.watch[v]);
                });
            },
            _observe: function _observe(obj, key, watchFun) {
                var _this12 = this;

                var val = obj[key];
                Object.defineProperty(obj, key, {
                    configurable: true,
                    enumerable: true,
                    set: function set(value) {
                        val = value;
                        watchFun && watchFun(val, _this12);
                    },
                    get: function get() {
                        if (val && '_img_top|img_left||width|height|min_width|max_width|min_height|max_height|export_scale|cut_top|cut_left|canvas_top|canvas_left|img_width|img_height|scale|angle|min_scale|max_scale'.indexOf(key) != -1) {
                            var ret = parseFloat(parseFloat(val).toFixed(3));
                            if (typeof val == "string" && val.indexOf("%") != -1) {
                                ret += '%';
                            }
                            return ret;
                        }
                        return val;
                    }
                });
            },
            _preventTouchMove: function _preventTouchMove() {}
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Fnav, [{
        key: 'attached',
        value: function attached() {
            this.data.info = wx.getSystemInfoSync();
            //启用数据监听
            this._watcher();
            this.data.INIT_IMGWIDTH = this.data.img_width;
            this.data.INIT_IMGHEIGHT = this.data.img_height;
            this.setData({
                _canvas_height: this.data.height,
                _canvas_width: this.data.width
            });
            this._initCanvas();
            this.data.imgSrc && (this.data.imgSrc = this.data.imgSrc);
            //根据开发者设置的图片目标尺寸计算实际尺寸
            this._initImageSize();
            //设置裁剪框大小>设置图片尺寸>绘制canvas
            this._computeCutSize();
            //检查裁剪框是否在范围内
            this._cutDetectionPosition();
            //检查canvas是否在范围内
            this._canvasDetectionPosition();
            //初始化完成
            this.triggerEvent('load', {
                cropper: this
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            console.log(this.currIndex);
        }
    }]);

    return Fnav;
}(_wepy2.default.component);

exports.default = Fnav;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlY3JvcHBlci5qcyJdLCJuYW1lcyI6WyJGbmF2IiwicHJvcHMiLCJ0eXBlIiwiU3RyaW5nIiwiTnVtYmVyIiwidmFsdWUiLCJCb29sZWFuIiwiZGF0YSIsImVsIiwiaW5mbyIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJNT1ZFX1RIUk9UVExFIiwiTU9WRV9USFJPVFRMRV9GTEFHIiwiSU5JVF9JTUdXSURUSCIsIklOSVRfSU1HSEVJR0hUIiwiVElNRV9CRyIsIlRJTUVfQ1VUX0NFTlRFUiIsIl90b3VjaF9pbWdfcmVsYXRpdmUiLCJ4IiwieSIsIl9mbGFnX2N1dF90b3VjaCIsIl9oeXBvdGVudXNlX2xlbmd0aCIsIl9mbGFnX2ltZ19lbmR0b3VjaCIsIl9mbGFnX2JyaWdodCIsIl9jYW52YXNfb3ZlcmZsb3ciLCJfY2FudmFzX3dpZHRoIiwiX2NhbnZhc19oZWlnaHQiLCJvcmlnaW5feCIsIm9yaWdpbl95IiwiX2N1dF9hbmltYXRpb24iLCJfaW1nX3RvcCIsIndpbmRvd0hlaWdodCIsIl9pbWdfbGVmdCIsIndpbmRvd1dpZHRoIiwid2F0Y2giLCJ3aWR0aCIsInRoYXQiLCJtaW5fd2lkdGgiLCJzZXREYXRhIiwiX2NvbXB1dGVDdXRTaXplIiwiaGVpZ2h0IiwibWluX2hlaWdodCIsImFuZ2xlIiwiX21vdmVTdG9wIiwibGltaXRfbW92ZSIsIk1hdGgiLCJyb3VuZCIsImNsZWFyVGltZW91dCIsIl9jdXRfYW5pbWF0aW9uX3RpbWUiLCJzZXRUaW1lb3V0IiwiX2ltZ01hcmdpbkRldGVjdGlvblNjYWxlIiwiX2RyYXciLCJjYW52YXNfdG9wIiwiX2NhbnZhc0RldGVjdGlvblBvc2l0aW9uIiwiY2FudmFzX2xlZnQiLCJpbWdTcmMiLCJwdXNoSW1nIiwiY3V0X3RvcCIsIl9jdXREZXRlY3Rpb25Qb3NpdGlvbiIsImN1dF9sZWZ0IiwibWV0aG9kcyIsInVwbG9hZCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRocyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJnZXRJbWciLCJnZXRDYWxsYmFjayIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiZXhwb3J0X3NjYWxlIiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsImZpbGVUeXBlIiwicXVhbGl0eSIsImNhbnZhc0lkIiwidXJsIiwidGVtcEZpbGVQYXRoIiwic2V0VHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiZGlzYWJsZV9yb3RhdGUiLCJzY2FsZSIsIm1pbl9zY2FsZSIsIm1heF9zY2FsZSIsImN1dFgiLCJjdXRZIiwiX21vdmVEdXJpbmciLCJzZXRDdXRYWSIsInNldEN1dFNpemUiLCJ3IiwiaCIsInNldEN1dENlbnRlciIsIl9zZXRDdXRDZW50ZXIiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldERpc2FibGVSb3RhdGUiLCJzZXRMaW1pdE1vdmUiLCJpbWdSZXNldCIsInNyYyIsImdldEltYWdlSW5mbyIsImltYWdlT2JqZWN0Iiwic2VhcmNoIiwicGF0aCIsIl9pbWdDb21wdXRlU2l6ZSIsImZhaWwiLCJlcnIiLCJpbWFnZUxvYWQiLCJlIiwidHJpZ2dlckV2ZW50Iiwic2V0U2NhbGUiLCJzZXRBbmdsZSIsIl9pbml0Q2FudmFzIiwiY3R4IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsIl9pbml0SW1hZ2VTaXplIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJpbWdfd2lkdGgiLCJpbWdfaGVpZ2h0IiwiX2N1dERldGVjdGlvblBvc2l0aW9uVG9wIiwiX2N1dERldGVjdGlvblBvc2l0aW9uTGVmdCIsIl9pbWdNYXJnaW5EZXRlY3Rpb25Qb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJtYXgiLCJfc2V0RGF0YSIsIm9iaiIsImtleSIsIl9zdGFydCIsImV2ZW50IiwidG91Y2hlcyIsImxlbmd0aCIsImNsaWVudFgiLCJjbGllbnRZIiwiYWJzIiwic3FydCIsInBvdyIsIl9tb3ZlX3Rocm90dGxlIiwicGxhdGZvcm0iLCJfbW92ZSIsImh5cG90ZW51c2UiLCJjdXJyZW50X2RlZyIsImZpcnN0X2F0YW4iLCJQSSIsImF0YW4yIiwiZmlyc3RfYXRhbl9vbGQiLCJzZWNvbmRfYXRhbiIsInNlY29uZF9hdGFuX29sZCIsImZpcnN0X2RlZyIsInNlY29uZF9kZWciLCJfZW5kIiwiX2NsaWNrIiwiZGV0YWlsIiwiY2FsbGJhY2siLCJkcmF3IiwieHBvcyIsInlwb3MiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJfY3V0VG91Y2hNb3ZlIiwiZGlzYWJsZV9yYXRpbyIsImRpc2FibGVfd2lkdGgiLCJkaXNhYmxlX2hlaWdodCIsInNpemVfY29ycmVjdCIsIm1heF93aWR0aCIsIm1heF9oZWlnaHQiLCJzaXplX2luc3BlY3QiLCJDVVRfU1RBUlQiLCJjb3JuZXIiLCJfY3V0VG91Y2hTdGFydCIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJjdXRib3hfdG9wNCIsImN1dGJveF9ib3R0b200IiwiY3V0Ym94X2xlZnQ0IiwiY3V0Ym94X3JpZ2h0NCIsImN1dGJveF90b3AzIiwiY3V0Ym94X2JvdHRvbTMiLCJjdXRib3hfbGVmdDMiLCJjdXRib3hfcmlnaHQzIiwiY3V0Ym94X3RvcDIiLCJjdXRib3hfYm90dG9tMiIsImN1dGJveF9sZWZ0MiIsImN1dGJveF9yaWdodDIiLCJjdXRib3hfdG9wMSIsImN1dGJveF9ib3R0b20xIiwiY3V0Ym94X2xlZnQxIiwiY3V0Ym94X3JpZ2h0MSIsIl9jdXRUb3VjaEVuZCIsIl93YXRjaGVyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJfb2JzZXJ2ZSIsInYiLCJ3YXRjaEZ1biIsInZhbCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsInNldCIsImdldCIsInJldCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiX3ByZXZlbnRUb3VjaE1vdmUiLCJldmVudHMiLCJjcm9wcGVyIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJjdXJySW5kZXgiLCJ3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QUFMO0FBQ0E7QUFDQSxpQkFBSzJELFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEI7QUFDdEJvRyx5QkFBUztBQURhLGFBQTFCO0FBR0g7OzsrQkF1MEJNQyxPLEVBQVM7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxTQUFqQjtBQUNIOzs7O0VBcG1DNkJDLGVBQUtDLFM7O2tCQUFsQjNOLEk7QUFzbUNwQiIsImZpbGUiOiJpbWFnZWNyb3BwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBHIGZyb20gJy4uL2NvbW1vbi9nbG9iYWwuanMnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGkuanMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbmF2IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgICAgLyoqICAgICBcclxuICAgICAgICAgKiDlm77niYfot6/lvoRcclxuICAgICAgICAgKi9cclxuICAgICAgICAnaW1nU3JjJzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOijgeWJquahhumrmOW6plxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICdoZWlnaHQnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDIwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KOB5Ymq5qGG5a695bqmXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJ3dpZHRoJzoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAyMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOijgeWJquahhuacgOWwj+WwuuWvuFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICdtaW5fd2lkdGgnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDEwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ21pbl9oZWlnaHQnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDEwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KOB5Ymq5qGG5pyA5aSn5bC65a+4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJ21heF93aWR0aCc6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMzAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnbWF4X2hlaWdodCc6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMzAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDoo4HliarmoYbnpoHmraLmi5bliqhcclxuICAgICAgICAgKi9cclxuICAgICAgICAnZGlzYWJsZV93aWR0aCc6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGlzYWJsZV9oZWlnaHQnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6ZSB5a6a6KOB5Ymq5qGG5q+U5L6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJ2Rpc2FibGVfcmF0aW8nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog55Sf5oiQ55qE5Zu+54mH5bC65a+455u45a+55Ymq6KOB5qGG55qE5q+U5L6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJ2V4cG9ydF9zY2FsZSc6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog55Sf5oiQ55qE5Zu+54mH6LSo6YePMC0xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJ3F1YWxpdHknOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgICdjdXRfdG9wJzoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY3V0X2xlZnQnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNhbnZhc+S4iui+uei3ne+8iOS4jeiuvue9rum7mOiupOS4jeaYvuekuu+8iVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICdjYW52YXNfdG9wJzoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjYW52YXPlt6bovrnot53vvIjkuI3orr7nva7pu5jorqTkuI3mmL7npLrvvIlcclxuICAgICAgICAgKi9cclxuICAgICAgICAnY2FudmFzX2xlZnQnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWbvueJh+WuveW6plxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICdpbWdfd2lkdGgnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlm77niYfpq5jluqZcclxuICAgICAgICAgKi9cclxuICAgICAgICAnaW1nX2hlaWdodCc6IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWbvueJh+e8qeaUvuavlFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICdzY2FsZSc6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Zu+54mH5peL6L2s6KeS5bqmXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJ2FuZ2xlJzoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmnIDlsI/nvKnmlL7mr5RcclxuICAgICAgICAgKi9cclxuICAgICAgICAnbWluX3NjYWxlJzoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwLjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOacgOWkp+e8qeaUvuavlFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICdtYXhfc2NhbGUnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYr+WQpuemgeeUqOaXi+i9rFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICdkaXNhYmxlX3JvdGF0ZSc6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmK/lkKbpmZDliLbnp7vliqjojIPlm7Qo5Ymq6KOB5qGG5Y+q6IO95Zyo5Zu+54mH5YaFKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICdsaW1pdF9tb3ZlJzoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuXHJcbiAgICAgICAgZWw6ICdpbWFnZS1jcm9wcGVyJywgLy/mmoLml7bml6DnlKhcclxuICAgICAgICBpbmZvOiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLFxyXG4gICAgICAgIE1PVkVfVEhST1RUTEU6IG51bGwsIC8v6Kem5pG456e75Yqo6IqC5rWBc2V0dGltZW91dFxyXG4gICAgICAgIE1PVkVfVEhST1RUTEVfRkxBRzogdHJ1ZSwgLy/oioLmtYHmoIfor4ZcclxuICAgICAgICBJTklUX0lNR1dJRFRIOiAwLCAvL+WbvueJh+iuvue9ruWwuuWvuCzmraTlgLzkuI3lj5jvvIjorrDlvZXmnIDliJ3orr7lrprnmoTlsLrlr7jvvIlcclxuICAgICAgICBJTklUX0lNR0hFSUdIVDogMCwgLy/lm77niYforr7nva7lsLrlr7gs5q2k5YC85LiN5Y+Y77yI6K6w5b2V5pyA5Yid6K6+5a6a55qE5bC65a+477yJXHJcbiAgICAgICAgVElNRV9CRzogbnVsbCwgLy/og4zmma/lj5jmmpflu7bml7blh73mlbBcclxuICAgICAgICBUSU1FX0NVVF9DRU5URVI6IG51bGwsXHJcbiAgICAgICAgX3RvdWNoX2ltZ19yZWxhdGl2ZTogW3tcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgIH1dLCAvL+m8oOagh+WSjOWbvueJh+S4reW/g+eahOebuOWvueS9jee9rlxyXG4gICAgICAgIF9mbGFnX2N1dF90b3VjaDogZmFsc2UsIC8v5piv5ZCm5piv5ouW5Yqo6KOB5Ymq5qGGXHJcbiAgICAgICAgX2h5cG90ZW51c2VfbGVuZ3RoOiAwLCAvL+WPjOaMh+inpuaRuOaXtuaWnOi+uemVv+W6plxyXG4gICAgICAgIF9mbGFnX2ltZ19lbmR0b3VjaDogZmFsc2UsIC8v5piv5ZCm57uT5p2f6Kem5pG4XHJcbiAgICAgICAgX2ZsYWdfYnJpZ2h0OiB0cnVlLCAvL+iDjOaZr+aYr+WQpuS6rlxyXG4gICAgICAgIF9jYW52YXNfb3ZlcmZsb3c6IHRydWUsIC8vY2FudmFz57yp55Wl5Zu+5piv5ZCm5Zyo5bGP5bmV5aSW6Z2iXHJcbiAgICAgICAgX2NhbnZhc193aWR0aDogMjAwLFxyXG4gICAgICAgIF9jYW52YXNfaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgb3JpZ2luX3g6IDAuNSwgLy/lm77niYfml4vovazkuK3lv4NcclxuICAgICAgICBvcmlnaW5feTogMC41LCAvL+WbvueJh+aXi+i9rOS4reW/g1xyXG4gICAgICAgIF9jdXRfYW5pbWF0aW9uOiBmYWxzZSwgLy/mmK/lkKblvIDlkK/lm77niYflkozoo4HliarmoYbov4fmuKFcclxuICAgICAgICBfaW1nX3RvcDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgLyAyLCAvL+WbvueJh+S4iui+uei3nVxyXG4gICAgICAgIF9pbWdfbGVmdDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAvIDIsIC8v5Zu+54mH5bem6L656LedXHJcbiAgICB9O1xyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgICAgIC8v55uR5ZCs5oiq5Y+W5qGG5a696auY5Y+Y5YyWXHJcbiAgICAgICAgd2lkdGgodmFsdWUsIHRoYXQpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhhdC5kYXRhLm1pbl93aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhhdC5kYXRhLm1pbl93aWR0aFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhhdC5fY29tcHV0ZUN1dFNpemUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlaWdodCh2YWx1ZSwgdGhhdCkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGF0LmRhdGEubWluX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoYXQuZGF0YS5taW5faGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0Ll9jb21wdXRlQ3V0U2l6ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5nbGUodmFsdWUsIHRoYXQpIHtcclxuICAgICAgICAgICAgLy/lgZzmraLlsYXkuK3oo4HliarmoYbvvIznu6fnu63kv67mlLnlm77niYfkvY3nva5cclxuICAgICAgICAgICAgdGhhdC5fbW92ZVN0b3AoKTtcclxuICAgICAgICAgICAgaWYgKHRoYXQuZGF0YS5saW1pdF9tb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5kYXRhLmFuZ2xlICUgOTApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmdsZTogTWF0aC5yb3VuZCh0aGF0LmRhdGEuYW5nbGUgLyA5MCkgKiA5MFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2N1dF9hbmltYXRpb24odmFsdWUsIHRoYXQpIHtcclxuICAgICAgICAgICAgLy/lvIDlkK/ov4fmuKEzMDDmr6vnp5LkuYvlkI7oh6rliqjlhbPpl61cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuZGF0YS5fY3V0X2FuaW1hdGlvbl90aW1lKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmRhdGEuX2N1dF9hbmltYXRpb25fdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXRfYW5pbWF0aW9uOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW1pdF9tb3ZlKHZhbHVlLCB0aGF0KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuZGF0YS5hbmdsZSAlIDkwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5nbGU6IE1hdGgucm91bmQodGhhdC5kYXRhLmFuZ2xlIC8gOTApICogOTBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoYXQuX2ltZ01hcmdpbkRldGVjdGlvblNjYWxlKCk7XHJcbiAgICAgICAgICAgICAgICAhdGhhdC5kYXRhLl9jYW52YXNfb3ZlcmZsb3cgJiYgdGhhdC5fZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW52YXNfdG9wKHZhbHVlLCB0aGF0KSB7XHJcbiAgICAgICAgICAgIHRoYXQuX2NhbnZhc0RldGVjdGlvblBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW52YXNfbGVmdCh2YWx1ZSwgdGhhdCkge1xyXG4gICAgICAgICAgICB0aGF0Ll9jYW52YXNEZXRlY3Rpb25Qb3NpdGlvbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1nU3JjKHZhbHVlLCB0aGF0KSB7XHJcbiAgICAgICAgICAgIHRoYXQucHVzaEltZygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3V0X3RvcCh2YWx1ZSwgdGhhdCkge1xyXG4gICAgICAgICAgICB0aGF0Ll9jdXREZXRlY3Rpb25Qb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhhdC5kYXRhLmxpbWl0X21vdmUpIHtcclxuICAgICAgICAgICAgICAgICF0aGF0LmRhdGEuX2NhbnZhc19vdmVyZmxvdyAmJiB0aGF0Ll9kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1dF9sZWZ0KHZhbHVlLCB0aGF0KSB7XHJcbiAgICAgICAgICAgIHRoYXQuX2N1dERldGVjdGlvblBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGF0LmRhdGEubGltaXRfbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgIXRoYXQuZGF0YS5fY2FudmFzX292ZXJmbG93ICYmIHRoYXQuX2RyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEuaW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgLy/lkK/nlKjmlbDmja7nm5HlkKxcclxuICAgICAgICB0aGlzLl93YXRjaGVyKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLklOSVRfSU1HV0lEVEggPSB0aGlzLmRhdGEuaW1nX3dpZHRoO1xyXG4gICAgICAgIHRoaXMuZGF0YS5JTklUX0lNR0hFSUdIVCA9IHRoaXMuZGF0YS5pbWdfaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIF9jYW52YXNfaGVpZ2h0OiB0aGlzLmRhdGEuaGVpZ2h0LFxyXG4gICAgICAgICAgICBfY2FudmFzX3dpZHRoOiB0aGlzLmRhdGEud2lkdGgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5pbWdTcmMgJiYgKHRoaXMuZGF0YS5pbWdTcmMgPSB0aGlzLmRhdGEuaW1nU3JjKTtcclxuICAgICAgICAvL+agueaNruW8gOWPkeiAheiuvue9rueahOWbvueJh+ebruagh+WwuuWvuOiuoeeul+WunumZheWwuuWvuFxyXG4gICAgICAgIHRoaXMuX2luaXRJbWFnZVNpemUoKTtcclxuICAgICAgICAvL+iuvue9ruijgeWJquahhuWkp+Wwjz7orr7nva7lm77niYflsLrlr7g+57uY5Yi2Y2FudmFzXHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZUN1dFNpemUoKTtcclxuICAgICAgICAvL+ajgOafpeijgeWJquahhuaYr+WQpuWcqOiMg+WbtOWGhVxyXG4gICAgICAgIHRoaXMuX2N1dERldGVjdGlvblBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy/mo4Dmn6VjYW52YXPmmK/lkKblnKjojIPlm7TlhoVcclxuICAgICAgICB0aGlzLl9jYW52YXNEZXRlY3Rpb25Qb3NpdGlvbigpO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5a6M5oiQXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2xvYWQnLCB7XHJcbiAgICAgICAgICAgIGNyb3BwZXI6IHRoaXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuIrkvKDlm77niYdcclxuICAgICAgICAgKi9cclxuICAgICAgICB1cGxvYWQoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wdXNoSW1nKHRlbXBGaWxlUGF0aHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0uLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi/lOWbnuWbvueJh+S/oeaBr1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEltZyhnZXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmF3KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5kYXRhLndpZHRoICogdGhpcy5kYXRhLmV4cG9ydF9zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQodGhpcy5kYXRhLmhlaWdodCAqIHRoaXMuZGF0YS5leHBvcnRfc2NhbGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RXaWR0aDogdGhpcy5kYXRhLndpZHRoICogdGhpcy5kYXRhLmV4cG9ydF9zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXN0SGVpZ2h0OiBNYXRoLnJvdW5kKHRoaXMuZGF0YS5oZWlnaHQpICogdGhpcy5kYXRhLmV4cG9ydF9zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlVHlwZTogJ3BuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbGl0eTogdGhpcy5kYXRhLnF1YWxpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzSWQ6IHRoaXMuZGF0YS5lbCxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVzLnRlbXBGaWxlUGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRhdGEud2lkdGggKiB0aGlzLmRhdGEuZXhwb3J0X3NjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmRhdGEuaGVpZ2h0ICogdGhpcy5kYXRhLmV4cG9ydF9zY2FsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruWbvueJh+WKqOeUu1xyXG4gICAgICAgICAqIHtcclxuICAgICAgICAgKiAgICB4OjEwLC8v5Zu+54mH5Zyo5Y6f5pyJ5Z+656GA5LiK5ZCR5LiL56e75YqoMTBweFxyXG4gICAgICAgICAqICAgIHk6MTAsLy/lm77niYflnKjljp/mnInln7rnoYDkuIrlkJHlj7Pnp7vliqgxMHB4XHJcbiAgICAgICAgICogICAgYW5nbGU6MTAsLy/lm77niYflnKjljp/mnInln7rnoYDkuIrml4vovawxMGRlZ1xyXG4gICAgICAgICAqICAgIHNjYWxlOjAuNSwvL+WbvueJh+WcqOWOn+acieWfuuehgOS4iuWinuWKoDAuNeWAjVxyXG4gICAgICAgICAqIH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIGlmICghdHJhbnNmb3JtKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVfcm90YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiB0cmFuc2Zvcm0uYW5nbGUgPyB0aGlzLmRhdGEuYW5nbGUgKyB0cmFuc2Zvcm0uYW5nbGUgOiB0aGlzLmRhdGEuYW5nbGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzY2FsZSA9IHRoaXMuZGF0YS5zY2FsZTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgc2NhbGUgPSB0aGlzLmRhdGEuc2NhbGUgKyB0cmFuc2Zvcm0uc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBzY2FsZSA9IHNjYWxlIDw9IHRoaXMuZGF0YS5taW5fc2NhbGUgPyB0aGlzLmRhdGEubWluX3NjYWxlIDogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBzY2FsZSA9IHNjYWxlID49IHRoaXMuZGF0YS5tYXhfc2NhbGUgPyB0aGlzLmRhdGEubWF4X3NjYWxlIDogc2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgICAgIGxldCBjdXRYID0gdGhpcy5kYXRhLmN1dF9sZWZ0O1xyXG4gICAgICAgICAgICBsZXQgY3V0WSA9IHRoaXMuZGF0YS5jdXRfdG9wO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtLmN1dFgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3V0X2xlZnQ6IGN1dFggKyB0cmFuc2Zvcm0uY3V0WFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEud2F0Y2guY3V0X2xlZnQobnVsbCwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5jdXRZKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1dF90b3A6IGN1dFkgKyB0cmFuc2Zvcm0uY3V0WVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEud2F0Y2guY3V0X3RvcChudWxsLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuX2ltZ190b3AgPSB0cmFuc2Zvcm0ueSA/IHRoaXMuZGF0YS5faW1nX3RvcCArIHRyYW5zZm9ybS55IDogdGhpcy5kYXRhLl9pbWdfdG9wO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuX2ltZ19sZWZ0ID0gdHJhbnNmb3JtLnggPyB0aGlzLmRhdGEuX2ltZ19sZWZ0ICsgdHJhbnNmb3JtLnggOiB0aGlzLmRhdGEuX2ltZ19sZWZ0O1xyXG4gICAgICAgICAgICAvL+WbvuWDj+i+uee8mOajgOa1iyzpmLLmraLmiKrlj5bliLDnqbrnmb1cclxuICAgICAgICAgICAgdGhpcy5faW1nTWFyZ2luRGV0ZWN0aW9uU2NhbGUoKTtcclxuICAgICAgICAgICAgLy/lgZzmraLlsYXkuK3oo4HliarmoYbvvIznu6fnu63kv67mlLnlm77niYfkvY3nva5cclxuICAgICAgICAgICAgdGhpcy5fbW92ZUR1cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IHRoaXMuZGF0YS5zY2FsZSxcclxuICAgICAgICAgICAgICAgIF9pbWdfdG9wOiB0aGlzLmRhdGEuX2ltZ190b3AsXHJcbiAgICAgICAgICAgICAgICBfaW1nX2xlZnQ6IHRoaXMuZGF0YS5faW1nX2xlZnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICF0aGlzLmRhdGEuX2NhbnZhc19vdmVyZmxvdyAmJiB0aGlzLl9kcmF3KCk7XHJcbiAgICAgICAgICAgIC8v5Y+v5Lul5bGF5Lit6KOB5Ymq5qGG5LqGXHJcbiAgICAgICAgICAgIHRoaXMuX21vdmVTdG9wKCk7IC8v57uT5p2f5pON5L2cXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDorr7nva7liaroo4HmoYbkvY3nva5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRDdXRYWSh4LCB5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBjdXRfdG9wOiB5LFxyXG4gICAgICAgICAgICAgICAgY3V0X2xlZnQ6IHhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDorr7nva7liaroo4HmoYblsLrlr7hcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRDdXRTaXplKHcsIGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wdXRlQ3V0U2l6ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6+572u5Ymq6KOB5qGG5ZKM5Zu+54mH5bGF5LitXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0Q3V0Q2VudGVyKCkge1xyXG4gICAgICAgICAgICBsZXQgY3V0X3RvcCA9ICh0aGlzLmRhdGEuaW5mby53aW5kb3dIZWlnaHQgLSB0aGlzLmRhdGEuaGVpZ2h0KSAqIDAuNTtcclxuICAgICAgICAgICAgbGV0IGN1dF9sZWZ0ID0gKHRoaXMuZGF0YS5pbmZvLndpbmRvd1dpZHRoIC0gdGhpcy5kYXRhLndpZHRoKSAqIDAuNTtcclxuICAgICAgICAgICAgLy/pobrluo/kuI3og73lj5hcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIF9pbWdfdG9wOiB0aGlzLmRhdGEuX2ltZ190b3AgLSB0aGlzLmRhdGEuY3V0X3RvcCArIGN1dF90b3AsXHJcbiAgICAgICAgICAgICAgICBjdXRfdG9wOiBjdXRfdG9wLCAvL+aIquWPlueahOahhuS4iui+uei3nVxyXG4gICAgICAgICAgICAgICAgX2ltZ19sZWZ0OiB0aGlzLmRhdGEuX2ltZ19sZWZ0IC0gdGhpcy5kYXRhLmN1dF9sZWZ0ICsgY3V0X2xlZnQsXHJcbiAgICAgICAgICAgICAgICBjdXRfbGVmdDogY3V0X2xlZnQsIC8v5oiq5Y+W55qE5qGG5bem6L656LedXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3NldEN1dENlbnRlcigpIHtcclxuICAgICAgICAgICAgbGV0IGN1dF90b3AgPSAodGhpcy5kYXRhLmluZm8ud2luZG93SGVpZ2h0IC0gdGhpcy5kYXRhLmhlaWdodCkgKiAwLjU7XHJcbiAgICAgICAgICAgIGxldCBjdXRfbGVmdCA9ICh0aGlzLmRhdGEuaW5mby53aW5kb3dXaWR0aCAtIHRoaXMuZGF0YS53aWR0aCkgKiAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBjdXRfdG9wOiBjdXRfdG9wLCAvL+aIquWPlueahOahhuS4iui+uei3nVxyXG4gICAgICAgICAgICAgICAgY3V0X2xlZnQ6IGN1dF9sZWZ0LCAvL+aIquWPlueahOahhuW3pui+uei3nVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruWJquijgeahhuWuveW6pi3ljbPlsIblup/lvINcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRXaWR0aCh3aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wdXRlQ3V0U2l6ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6+572u5Ymq6KOB5qGG6auY5bqmLeWNs+WwhuW6n+W8g1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldEhlaWdodChoZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wdXRlQ3V0U2l6ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5piv5ZCm6ZSB5a6a5peL6L2sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0RGlzYWJsZVJvdGF0ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZGlzYWJsZV9yb3RhdGUgPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYr+WQpumZkOWItuenu+WKqFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldExpbWl0TW92ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgX2N1dF9hbmltYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW1pdF9tb3ZlOiAhIXZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yid5aeL5YyW5Zu+54mH77yM5YyF5ous5L2N572u44CB5aSn5bCP44CB5peL6L2s6KeS5bqmXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW1nUmVzZXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAwLFxyXG4gICAgICAgICAgICAgICAgX2ltZ190b3A6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIF9pbWdfbGVmdDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAvIDIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliqDovb3vvIjmm7TmjaLvvInlm77niYdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdXNoSW1nKHNyYykge1xyXG4gICAgICAgICAgICBpZiAoc3JjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYzogc3JjXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8v5Y+R546w5piv5omL5Yqo6LWL5YC855u05o6l6L+U5Zue77yM5Lqk57uZd2F0Y2jlpITnkIZcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZ2V0SW1hZ2VJbmZv5o6l5Y+j5Lyg5YWlIHNyYzogJycg5Lya5a+86Ie05YaF5a2Y5rOE5ryPXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5pbWdTcmMpIHJldHVybjtcclxuICAgICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcclxuICAgICAgICAgICAgICAgIHNyYzogdGhpcy5kYXRhLmltZ1NyYyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuaW1hZ2VPYmplY3QgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lm77niYfpnZ7mnKzlnLDot6/lvoTpnIDopoHmjaLmiJDmnKzlnLDot6/lvoRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmltZ1NyYy5zZWFyY2goL3RtcC8pID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdTcmM6IHJlcy5wYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+acgOWQjuWbvueJh+WwuuWvuFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltZ0NvbXB1dGVTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5saW1pdF9tb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6ZmQ5Yi256e75Yqo77yM5LiN55WZ56m655m95aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltZ01hcmdpbkRldGVjdGlvblNjYWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nU3JjOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlTG9hZChlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2ltYWdlbG9hZCcsIHRoaXMuZGF0YS5pbWFnZU9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6+572u5Zu+54mH5pS+5aSn57yp5bCPXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0U2NhbGUoc2NhbGUpIHtcclxuICAgICAgICAgICAgaWYgKCFzY2FsZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IHNjYWxlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAhdGhpcy5kYXRhLl9jYW52YXNfb3ZlcmZsb3cgJiYgdGhpcy5fZHJhdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6+572u5Zu+54mH5peL6L2s6KeS5bqmXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0QW5nbGUoYW5nbGUpIHtcclxuICAgICAgICAgICAgaWYgKCFhbmdsZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgX2N1dF9hbmltYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbmdsZTogYW5nbGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ltZ01hcmdpbkRldGVjdGlvblNjYWxlKCk7XHJcbiAgICAgICAgICAgICF0aGlzLmRhdGEuX2NhbnZhc19vdmVyZmxvdyAmJiB0aGlzLl9kcmF3KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfaW5pdENhbnZhcygpIHtcclxuICAgICAgICAgICAgLy/liJ3lp4vljJZjYW52YXNcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuY3R4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dChcImltYWdlLWNyb3BwZXJcIiwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOagueaNruW8gOWPkeiAheiuvue9rueahOWbvueJh+ebruagh+WwuuWvuOiuoeeul+WunumZheWwuuWvuFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9pbml0SW1hZ2VTaXplKCkge1xyXG4gICAgICAgICAgICAvL+WkhOeQhuWuvemrmOeJueauiuWNleS9jSAlPnB4XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuSU5JVF9JTUdXSURUSCAmJiB0eXBlb2YgdGhpcy5kYXRhLklOSVRfSU1HV0lEVEggPT0gXCJzdHJpbmdcIiAmJiB0aGlzLmRhdGEuSU5JVF9JTUdXSURUSC5pbmRleE9mKFwiJVwiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5kYXRhLklOSVRfSU1HV0lEVEgucmVwbGFjZShcIiVcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuSU5JVF9JTUdXSURUSCA9IHRoaXMuZGF0YS5pbWdfd2lkdGggPSB0aGlzLmRhdGEuaW5mby53aW5kb3dXaWR0aCAvIDEwMCAqIHdpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuSU5JVF9JTUdIRUlHSFQgJiYgdHlwZW9mIHRoaXMuZGF0YS5JTklUX0lNR0hFSUdIVCA9PSBcInN0cmluZ1wiICYmIHRoaXMuZGF0YS5JTklUX0lNR0hFSUdIVC5pbmRleE9mKFwiJVwiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuZGF0YS5pbWdfaGVpZ2h0LnJlcGxhY2UoXCIlXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLklOSVRfSU1HSEVJR0hUID0gdGhpcy5kYXRhLmltZ19oZWlnaHQgPSB0aGlzLmRhdGEuaW5mby53aW5kb3dIZWlnaHQgLyAxMDAgKiBoZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOajgOa1i+WJquijgeahhuS9jee9ruaYr+WQpuWcqOWFgeiuuOeahOiMg+WbtOWGhSjlsY/luZXlhoUpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX2N1dERldGVjdGlvblBvc2l0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgX2N1dERldGVjdGlvblBvc2l0aW9uVG9wID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5qOA5rWL5LiK6L656Led5piv5ZCm5Zyo6IyD5Zu05YaFXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jdXRfdG9wIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3V0X3RvcDogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jdXRfdG9wID4gdGhpcy5kYXRhLmluZm8ud2luZG93SGVpZ2h0IC0gdGhpcy5kYXRhLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3V0X3RvcDogdGhpcy5kYXRhLmluZm8ud2luZG93SGVpZ2h0IC0gdGhpcy5kYXRhLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgX2N1dERldGVjdGlvblBvc2l0aW9uTGVmdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ajgOa1i+W3pui+uei3neaYr+WQpuWcqOiMg+WbtOWGhVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY3V0X2xlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXRfbGVmdDogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jdXRfbGVmdCA+IHRoaXMuZGF0YS5pbmZvLndpbmRvd1dpZHRoIC0gdGhpcy5kYXRhLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXRfbGVmdDogdGhpcy5kYXRhLmluZm8ud2luZG93V2lkdGggLSB0aGlzLmRhdGEud2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy/oo4HliarmoYblnZDmoIflpITnkIbvvIjlpoLmnpzlj6rlhpnkuIDkuKrlj4LmlbDliJnlj6bkuIDkuKrpu5jorqTkuLow77yM6YO95LiN5YaZ6buY6K6k5bGF5Lit77yJXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY3V0X3RvcCA9PSBudWxsICYmIHRoaXMuZGF0YS5jdXRfbGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDdXRDZW50ZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY3V0X3RvcCAhPSBudWxsICYmIHRoaXMuZGF0YS5jdXRfbGVmdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBfY3V0RGV0ZWN0aW9uUG9zaXRpb25Ub3AoKTtcclxuICAgICAgICAgICAgICAgIF9jdXREZXRlY3Rpb25Qb3NpdGlvbkxlZnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY3V0X3RvcCAhPSBudWxsICYmIHRoaXMuZGF0YS5jdXRfbGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBfY3V0RGV0ZWN0aW9uUG9zaXRpb25Ub3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3V0X2xlZnQ6ICh0aGlzLmRhdGEuaW5mby53aW5kb3dXaWR0aCAtIHRoaXMuZGF0YS53aWR0aCkgLyAyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY3V0X3RvcCA9PSBudWxsICYmIHRoaXMuZGF0YS5jdXRfbGVmdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBfY3V0RGV0ZWN0aW9uUG9zaXRpb25MZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1dF90b3A6ICh0aGlzLmRhdGEuaW5mby53aW5kb3dIZWlnaHQgLSB0aGlzLmRhdGEuaGVpZ2h0KSAvIDJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmo4DmtYtjYW52YXPkvY3nva7mmK/lkKblnKjlhYHorrjnmoTojIPlm7TlhoUo5bGP5bmV5YaFKeWmguaenOWcqOWxj+W5leWkluWImeS4jeW8gOWQr+WunuaXtua4suafk1xyXG4gICAgICAgICAqIOWmguaenOWPquWGmeS4gOS4quWPguaVsOWImeWPpuS4gOS4qum7mOiupOS4ujDvvIzpg73kuI3lhpnpu5jorqTotoXlh7rlsY/luZXlpJZcclxuICAgICAgICAgKi9cclxuICAgICAgICBfY2FudmFzRGV0ZWN0aW9uUG9zaXRpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzX3RvcCA9PSBudWxsICYmIHRoaXMuZGF0YS5jYW52YXNfbGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX2NhbnZhc19vdmVyZmxvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXNfdG9wOiAtNTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXNfbGVmdDogLTUwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW52YXNfdG9wICE9IG51bGwgJiYgdGhpcy5kYXRhLmNhbnZhc19sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzX3RvcCA8IC10aGlzLmRhdGEuaGVpZ2h0IHx8IHRoaXMuZGF0YS5jYW52YXNfdG9wID4gdGhpcy5kYXRhLmluZm8ud2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLl9jYW52YXNfb3ZlcmZsb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX2NhbnZhc19vdmVyZmxvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW52YXNfdG9wICE9IG51bGwgJiYgdGhpcy5kYXRhLmNhbnZhc19sZWZ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzX2xlZnQ6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW52YXNfdG9wID09IG51bGwgJiYgdGhpcy5kYXRhLmNhbnZhc19sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzX3RvcDogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNhbnZhc19sZWZ0IDwgLXRoaXMuZGF0YS53aWR0aCB8fCB0aGlzLmRhdGEuY2FudmFzX2xlZnQgPiB0aGlzLmRhdGEuaW5mby53aW5kb3dXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5fY2FudmFzX292ZXJmbG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLl9jYW52YXNfb3ZlcmZsb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Zu+54mH6L6557yY5qOA5rWLLeS9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9pbWdNYXJnaW5EZXRlY3Rpb25Qb3NpdGlvbihzY2FsZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5saW1pdF9tb3ZlKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gdGhpcy5kYXRhLl9pbWdfbGVmdDtcclxuICAgICAgICAgICAgbGV0IHRvcCA9IHRoaXMuZGF0YS5faW1nX3RvcDtcclxuICAgICAgICAgICAgdmFyIHNjYWxlID0gc2NhbGUgfHwgdGhpcy5kYXRhLnNjYWxlO1xyXG4gICAgICAgICAgICBsZXQgaW1nX3dpZHRoID0gdGhpcy5kYXRhLmltZ193aWR0aDtcclxuICAgICAgICAgICAgbGV0IGltZ19oZWlnaHQgPSB0aGlzLmRhdGEuaW1nX2hlaWdodDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5hbmdsZSAvIDkwICUgMikge1xyXG4gICAgICAgICAgICAgICAgaW1nX3dpZHRoID0gdGhpcy5kYXRhLmltZ19oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpbWdfaGVpZ2h0ID0gdGhpcy5kYXRhLmltZ193aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5kYXRhLmN1dF9sZWZ0ICsgaW1nX3dpZHRoICogc2NhbGUgLyAyID49IGxlZnQgPyBsZWZ0IDogdGhpcy5kYXRhLmN1dF9sZWZ0ICsgaW1nX3dpZHRoICogc2NhbGUgLyAyO1xyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5kYXRhLmN1dF9sZWZ0ICsgdGhpcy5kYXRhLndpZHRoIC0gaW1nX3dpZHRoICogc2NhbGUgLyAyIDw9IGxlZnQgPyBsZWZ0IDogdGhpcy5kYXRhLmN1dF9sZWZ0ICsgdGhpcy5kYXRhLndpZHRoIC0gaW1nX3dpZHRoICogc2NhbGUgLyAyO1xyXG4gICAgICAgICAgICB0b3AgPSB0aGlzLmRhdGEuY3V0X3RvcCArIGltZ19oZWlnaHQgKiBzY2FsZSAvIDIgPj0gdG9wID8gdG9wIDogdGhpcy5kYXRhLmN1dF90b3AgKyBpbWdfaGVpZ2h0ICogc2NhbGUgLyAyO1xyXG4gICAgICAgICAgICB0b3AgPSB0aGlzLmRhdGEuY3V0X3RvcCArIHRoaXMuZGF0YS5oZWlnaHQgLSBpbWdfaGVpZ2h0ICogc2NhbGUgLyAyIDw9IHRvcCA/IHRvcCA6IHRoaXMuZGF0YS5jdXRfdG9wICsgdGhpcy5kYXRhLmhlaWdodCAtIGltZ19oZWlnaHQgKiBzY2FsZSAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBfaW1nX2xlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICBfaW1nX3RvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IHNjYWxlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlm77niYfovrnnvJjmo4DmtYst57yp5pS+XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX2ltZ01hcmdpbkRldGVjdGlvblNjYWxlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5saW1pdF9tb3ZlKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMuZGF0YS5zY2FsZTtcclxuICAgICAgICAgICAgbGV0IGltZ193aWR0aCA9IHRoaXMuZGF0YS5pbWdfd2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBpbWdfaGVpZ2h0ID0gdGhpcy5kYXRhLmltZ19oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYW5nbGUgLyA5MCAlIDIpIHtcclxuICAgICAgICAgICAgICAgIGltZ193aWR0aCA9IHRoaXMuZGF0YS5pbWdfaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaW1nX2hlaWdodCA9IHRoaXMuZGF0YS5pbWdfd2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGltZ193aWR0aCAqIHNjYWxlIDwgdGhpcy5kYXRhLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZSA9IHRoaXMuZGF0YS53aWR0aCAvIGltZ193aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW1nX2hlaWdodCAqIHNjYWxlIDwgdGhpcy5kYXRhLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1heChzY2FsZSwgdGhpcy5kYXRhLmhlaWdodCAvIGltZ19oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2ltZ01hcmdpbkRldGVjdGlvblBvc2l0aW9uKHNjYWxlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9zZXREYXRhKG9iaikge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhW2tleV0gIT0gb2JqW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6h566X5Zu+54mH5bC65a+4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX2ltZ0NvbXB1dGVTaXplKCkge1xyXG4gICAgICAgICAgICBsZXQgaW1nX3dpZHRoID0gdGhpcy5kYXRhLmltZ193aWR0aCxcclxuICAgICAgICAgICAgICAgIGltZ19oZWlnaHQgPSB0aGlzLmRhdGEuaW1nX2hlaWdodDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuSU5JVF9JTUdIRUlHSFQgJiYgIXRoaXMuZGF0YS5JTklUX0lNR1dJRFRIKSB7XHJcbiAgICAgICAgICAgICAgICAvL+m7mOiupOaMieWbvueJh+acgOWwj+i+uSA9IOWvueW6lOijgeWJquahhuWwuuWvuFxyXG4gICAgICAgICAgICAgICAgaW1nX3dpZHRoID0gdGhpcy5kYXRhLmltYWdlT2JqZWN0LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgaW1nX2hlaWdodCA9IHRoaXMuZGF0YS5pbWFnZU9iamVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nX3dpZHRoIC8gaW1nX2hlaWdodCA+IHRoaXMuZGF0YS53aWR0aCAvIHRoaXMuZGF0YS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdfaGVpZ2h0ID0gdGhpcy5kYXRhLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBpbWdfd2lkdGggPSB0aGlzLmRhdGEuaW1hZ2VPYmplY3Qud2lkdGggLyB0aGlzLmRhdGEuaW1hZ2VPYmplY3QuaGVpZ2h0ICogaW1nX2hlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nX3dpZHRoID0gdGhpcy5kYXRhLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ19oZWlnaHQgPSB0aGlzLmRhdGEuaW1hZ2VPYmplY3QuaGVpZ2h0IC8gdGhpcy5kYXRhLmltYWdlT2JqZWN0LndpZHRoICogaW1nX3dpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5JTklUX0lNR0hFSUdIVCAmJiAhdGhpcy5kYXRhLklOSVRfSU1HV0lEVEgpIHtcclxuICAgICAgICAgICAgICAgIGltZ193aWR0aCA9IHRoaXMuZGF0YS5pbWFnZU9iamVjdC53aWR0aCAvIHRoaXMuZGF0YS5pbWFnZU9iamVjdC5oZWlnaHQgKiB0aGlzLmRhdGEuSU5JVF9JTUdIRUlHSFQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZGF0YS5JTklUX0lNR0hFSUdIVCAmJiB0aGlzLmRhdGEuSU5JVF9JTUdXSURUSCkge1xyXG4gICAgICAgICAgICAgICAgaW1nX2hlaWdodCA9IHRoaXMuZGF0YS5pbWFnZU9iamVjdC5oZWlnaHQgLyB0aGlzLmRhdGEuaW1hZ2VPYmplY3Qud2lkdGggKiB0aGlzLmRhdGEuSU5JVF9JTUdXSURUSDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaW1nX3dpZHRoOiBpbWdfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBpbWdfaGVpZ2h0OiBpbWdfaGVpZ2h0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/mlLnlj5jmiKrlj5bmoYblpKflsI9cclxuICAgICAgICBfY29tcHV0ZUN1dFNpemUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEud2lkdGggPiB0aGlzLmRhdGEuaW5mby53aW5kb3dXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5kYXRhLmluZm8ud2luZG93V2lkdGgsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEud2lkdGggKyB0aGlzLmRhdGEuY3V0X2xlZnQgPiB0aGlzLmRhdGEuaW5mby53aW5kb3dXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBjdXRfbGVmdDogdGhpcy5kYXRhLmluZm8ud2luZG93V2lkdGggLSB0aGlzLmRhdGEuY3V0X2xlZnQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWlnaHQgPiB0aGlzLmRhdGEuaW5mby53aW5kb3dIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmRhdGEuaW5mby53aW5kb3dIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuaGVpZ2h0ICsgdGhpcy5kYXRhLmN1dF90b3AgPiB0aGlzLmRhdGEuaW5mby53aW5kb3dIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3V0X3RvcDogdGhpcy5kYXRhLmluZm8ud2luZG93SGVpZ2h0IC0gdGhpcy5kYXRhLmN1dF90b3AsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSF0aGlzLmRhdGEuX2NhbnZhc19vdmVyZmxvdyAmJiB0aGlzLl9kcmF3KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+W8gOWni+inpuaRuFxyXG4gICAgICAgIF9zdGFydChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuX2ZsYWdfaW1nX2VuZHRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WNleaMh+aLluWKqFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLl90b3VjaF9pbWdfcmVsYXRpdmVbMF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuZGF0YS5faW1nX2xlZnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IChldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLmRhdGEuX2ltZ190b3ApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+WPjOaMh+aUvuWkp1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5hYnMoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gZXZlbnQudG91Y2hlc1sxXS5jbGllbnRYKTtcclxuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmFicyhldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSBldmVudC50b3VjaGVzWzFdLmNsaWVudFkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLl90b3VjaF9pbWdfcmVsYXRpdmUgPSBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IChldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLmRhdGEuX2ltZ19sZWZ0KSxcclxuICAgICAgICAgICAgICAgICAgICB5OiAoZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5kYXRhLl9pbWdfdG9wKVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IChldmVudC50b3VjaGVzWzFdLmNsaWVudFggLSB0aGlzLmRhdGEuX2ltZ19sZWZ0KSxcclxuICAgICAgICAgICAgICAgICAgICB5OiAoZXZlbnQudG91Y2hlc1sxXS5jbGllbnRZIC0gdGhpcy5kYXRhLl9pbWdfdG9wKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX2h5cG90ZW51c2VfbGVuZ3RoID0gTWF0aC5zcXJ0KE1hdGgucG93KHdpZHRoLCAyKSArIE1hdGgucG93KGhlaWdodCwgMikpO1xyXG4gICAgICAgICAgICB9IXRoaXMuZGF0YS5fY2FudmFzX292ZXJmbG93ICYmIHRoaXMuX2RyYXcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9tb3ZlX3Rocm90dGxlKCkge1xyXG4gICAgICAgICAgICAvL+WuieWNk+mcgOimgeiKgua1gVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmluZm8ucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kYXRhLk1PVkVfVEhST1RUTEUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLk1PVkVfVEhST1RUTEUgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuTU9WRV9USFJPVFRMRV9GTEFHID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDAgLyA0MClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuTU9WRV9USFJPVFRMRV9GTEFHO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLk1PVkVfVEhST1RUTEVfRkxBRyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIF9tb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuX2ZsYWdfaW1nX2VuZHRvdWNoIHx8ICF0aGlzLmRhdGEuTU9WRV9USFJPVFRMRV9GTEFHKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5NT1ZFX1RIUk9UVExFX0ZMQUcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZV90aHJvdHRsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9tb3ZlRHVyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WNleaMh+aLluWKqFxyXG4gICAgICAgICAgICAgICAgbGV0IGxlZnQgPSAoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5kYXRhLl90b3VjaF9pbWdfcmVsYXRpdmVbMF0ueCksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuZGF0YS5fdG91Y2hfaW1nX3JlbGF0aXZlWzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgLy/lm77lg4/ovrnnvJjmo4DmtYss6Ziy5q2i5oiq5Y+W5Yiw56m655m9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX2ltZ19sZWZ0ID0gbGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5faW1nX3RvcCA9IHRvcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ltZ01hcmdpbkRldGVjdGlvblBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIF9pbWdfbGVmdDogdGhpcy5kYXRhLl9pbWdfbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICBfaW1nX3RvcDogdGhpcy5kYXRhLl9pbWdfdG9wXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5Y+M5oyH5pS+5aSnXHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAoTWF0aC5hYnMoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gZXZlbnQudG91Y2hlc1sxXS5jbGllbnRYKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gKE1hdGguYWJzKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIGV2ZW50LnRvdWNoZXNbMV0uY2xpZW50WSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3cod2lkdGgsIDIpICsgTWF0aC5wb3coaGVpZ2h0LCAyKSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSB0aGlzLmRhdGEuc2NhbGUgKiAoaHlwb3RlbnVzZSAvIHRoaXMuZGF0YS5faHlwb3RlbnVzZV9sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfZGVnID0gMDtcclxuICAgICAgICAgICAgICAgIHNjYWxlID0gc2NhbGUgPD0gdGhpcy5kYXRhLm1pbl9zY2FsZSA/IHRoaXMuZGF0YS5taW5fc2NhbGUgOiBzY2FsZTtcclxuICAgICAgICAgICAgICAgIHNjYWxlID0gc2NhbGUgPj0gdGhpcy5kYXRhLm1heF9zY2FsZSA/IHRoaXMuZGF0YS5tYXhfc2NhbGUgOiBzY2FsZTtcclxuICAgICAgICAgICAgICAgIC8v5Zu+5YOP6L6557yY5qOA5rWLLOmYsuatouaIquWPluWIsOepuueZvVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbWdNYXJnaW5EZXRlY3Rpb25TY2FsZSgpO1xyXG4gICAgICAgICAgICAgICAgLy/lj4zmjIfml4vovawo5aaC5p6c5rKh56aB55So5peL6L2sKVxyXG4gICAgICAgICAgICAgICAgbGV0IF90b3VjaF9pbWdfcmVsYXRpdmUgPSBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IChldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLmRhdGEuX2ltZ19sZWZ0KSxcclxuICAgICAgICAgICAgICAgICAgICB5OiAoZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5kYXRhLl9pbWdfdG9wKVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IChldmVudC50b3VjaGVzWzFdLmNsaWVudFggLSB0aGlzLmRhdGEuX2ltZ19sZWZ0KSxcclxuICAgICAgICAgICAgICAgICAgICB5OiAoZXZlbnQudG91Y2hlc1sxXS5jbGllbnRZIC0gdGhpcy5kYXRhLl9pbWdfdG9wKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlX3JvdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdF9hdGFuID0gMTgwIC8gTWF0aC5QSSAqIE1hdGguYXRhbjIoX3RvdWNoX2ltZ19yZWxhdGl2ZVswXS55LCBfdG91Y2hfaW1nX3JlbGF0aXZlWzBdLngpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdF9hdGFuX29sZCA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLmF0YW4yKHRoaXMuZGF0YS5fdG91Y2hfaW1nX3JlbGF0aXZlWzBdLnksIHRoaXMuZGF0YS5fdG91Y2hfaW1nX3JlbGF0aXZlWzBdLngpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWNvbmRfYXRhbiA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLmF0YW4yKF90b3VjaF9pbWdfcmVsYXRpdmVbMV0ueSwgX3RvdWNoX2ltZ19yZWxhdGl2ZVsxXS54KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2Vjb25kX2F0YW5fb2xkID0gMTgwIC8gTWF0aC5QSSAqIE1hdGguYXRhbjIodGhpcy5kYXRhLl90b3VjaF9pbWdfcmVsYXRpdmVbMV0ueSwgdGhpcy5kYXRhLl90b3VjaF9pbWdfcmVsYXRpdmVbMV0ueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3ml4vovaznmoTop5LluqZcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RfZGVnID0gZmlyc3RfYXRhbiAtIGZpcnN0X2F0YW5fb2xkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRfZGVnID0gc2Vjb25kX2F0YW4gLSBzZWNvbmRfYXRhbl9vbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0X2RlZyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfZGVnID0gZmlyc3RfZGVnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Vjb25kX2RlZyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfZGVnID0gc2Vjb25kX2RlZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX3RvdWNoX2ltZ19yZWxhdGl2ZSA9IF90b3VjaF9pbWdfcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX2h5cG90ZW51c2VfbGVuZ3RoID0gTWF0aC5zcXJ0KE1hdGgucG93KHdpZHRoLCAyKSArIE1hdGgucG93KGhlaWdodCwgMikpO1xyXG4gICAgICAgICAgICAgICAgLy/mm7TmlrDop4blm75cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IHRoaXMuZGF0YS5hbmdsZSArIGN1cnJlbnRfZGVnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiB0aGlzLmRhdGEuc2NhbGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IXRoaXMuZGF0YS5fY2FudmFzX292ZXJmbG93ICYmIHRoaXMuX2RyYXcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v57uT5p2f5pON5L2cXHJcbiAgICAgICAgX2VuZChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuX2ZsYWdfaW1nX2VuZHRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZVN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v54K55Ye75Lit6Ze05Ymq6KOB5qGG5aSE55CGXHJcbiAgICAgICAgX2NsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmltZ1NyYykge1xyXG4gICAgICAgICAgICAgICAgLy/osIPotbfkuIrkvKBcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZHJhdygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGV2ZW50LmRldGFpbCA/IGV2ZW50LmRldGFpbC54IDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBldmVudC5kZXRhaWwgPyBldmVudC5kZXRhaWwueSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIGlmICgoeCA+PSB0aGlzLmRhdGEuY3V0X2xlZnQgJiYgeCA8PSAodGhpcy5kYXRhLmN1dF9sZWZ0ICsgdGhpcy5kYXRhLndpZHRoKSkgJiYgKHkgPj0gdGhpcy5kYXRhLmN1dF90b3AgJiYgeSA8PSAodGhpcy5kYXRhLmN1dF90b3AgKyB0aGlzLmRhdGEuaGVpZ2h0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eUn+aIkOWbvueJh+W5tuWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuZGF0YS53aWR0aCAqIHRoaXMuZGF0YS5leHBvcnRfc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogTWF0aC5yb3VuZCh0aGlzLmRhdGEuaGVpZ2h0ICogdGhpcy5kYXRhLmV4cG9ydF9zY2FsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RXaWR0aDogdGhpcy5kYXRhLndpZHRoICogdGhpcy5kYXRhLmV4cG9ydF9zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdEhlaWdodDogTWF0aC5yb3VuZCh0aGlzLmRhdGEuaGVpZ2h0KSAqIHRoaXMuZGF0YS5leHBvcnRfc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVUeXBlOiAncG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eTogdGhpcy5kYXRhLnF1YWxpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc0lkOiB0aGlzLmRhdGEuZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCd0YXBjdXQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXMudGVtcEZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRhdGEud2lkdGggKiB0aGlzLmRhdGEuZXhwb3J0X3NjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5kYXRhLmhlaWdodCAqIHRoaXMuZGF0YS5leHBvcnRfc2NhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+a4suafk1xyXG4gICAgICAgIF9kcmF3KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmltZ1NyYykgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgZHJhdyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5Zu+54mH5a6e6ZmF5aSn5bCPXHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nX3dpZHRoID0gdGhpcy5kYXRhLmltZ193aWR0aCAqIHRoaXMuZGF0YS5zY2FsZSAqIHRoaXMuZGF0YS5leHBvcnRfc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nX2hlaWdodCA9IHRoaXMuZGF0YS5pbWdfaGVpZ2h0ICogdGhpcy5kYXRhLnNjYWxlICogdGhpcy5kYXRhLmV4cG9ydF9zY2FsZTtcclxuICAgICAgICAgICAgICAgIC8vY2FudmFz5ZKM5Zu+54mH55qE55u45a+56Led56a7XHJcbiAgICAgICAgICAgICAgICB2YXIgeHBvcyA9IHRoaXMuZGF0YS5faW1nX2xlZnQgLSB0aGlzLmRhdGEuY3V0X2xlZnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgeXBvcyA9IHRoaXMuZGF0YS5faW1nX3RvcCAtIHRoaXMuZGF0YS5jdXRfdG9wO1xyXG4gICAgICAgICAgICAgICAgLy/ml4vovaznlLvluINcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jdHgudHJhbnNsYXRlKHhwb3MgKiB0aGlzLmRhdGEuZXhwb3J0X3NjYWxlLCB5cG9zICogdGhpcy5kYXRhLmV4cG9ydF9zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY3R4LnJvdGF0ZSh0aGlzLmRhdGEuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jdHguZHJhd0ltYWdlKHRoaXMuZGF0YS5pbWdTcmMsIC1pbWdfd2lkdGggLyAyLCAtaW1nX2hlaWdodCAvIDIsIGltZ193aWR0aCwgaW1nX2hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY3R4LmRyYXcoZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jdHgud2lkdGggIT0gdGhpcy5kYXRhLndpZHRoIHx8IHRoaXMuZGF0YS5jdHguaGVpZ2h0ICE9IHRoaXMuZGF0YS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8v5LyY5YyW5ouW5Yqo6KOB5Ymq5qGG77yM5omA5Lul5b+F6aG75oqK5a696auY6K6+572u5pS+5Zyo56a755So5oi36Kem5Y+R5riy5p+T5pyA6L+R55qE5Zyw5pa5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIF9jYW52YXNfaGVpZ2h0OiB0aGlzLmRhdGEuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIF9jYW52YXNfd2lkdGg6IHRoaXMuZGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W7tui/nzQw5q+r56eS6Ziy5q2i54K55Ye76L+H5b+r5Ye6546w5ouJ5Ly45oiW6KOB5Ymq6L+H5aSaXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA0MCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/oo4HliarmoYblpITnkIZcclxuICAgICAgICBfY3V0VG91Y2hNb3ZlKGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5fZmxhZ19jdXRfdG91Y2ggJiYgdGhpcy5kYXRhLk1PVkVfVEhST1RUTEVfRkxBRykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlX3JhdGlvICYmICh0aGlzLmRhdGEuZGlzYWJsZV93aWR0aCB8fCB0aGlzLmRhdGEuZGlzYWJsZV9oZWlnaHQpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvL+iKgua1gVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLk1PVkVfVEhST1RUTEVfRkxBRyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZV90aHJvdHRsZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5kYXRhLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuZGF0YS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY3V0X3RvcCA9IHRoaXMuZGF0YS5jdXRfdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1dF9sZWZ0ID0gdGhpcy5kYXRhLmN1dF9sZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVfY29ycmVjdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB3aWR0aCA8PSB0aGlzLmRhdGEubWF4X3dpZHRoID8gd2lkdGggPj0gdGhpcy5kYXRhLm1pbl93aWR0aCA/IHdpZHRoIDogdGhpcy5kYXRhLm1pbl93aWR0aCA6IHRoaXMuZGF0YS5tYXhfd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCA8PSB0aGlzLmRhdGEubWF4X2hlaWdodCA/IGhlaWdodCA+PSB0aGlzLmRhdGEubWluX2hlaWdodCA/IGhlaWdodCA6IHRoaXMuZGF0YS5taW5faGVpZ2h0IDogdGhpcy5kYXRhLm1heF9oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplX2luc3BlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgod2lkdGggPiB0aGlzLmRhdGEubWF4X3dpZHRoIHx8IHdpZHRoIDwgdGhpcy5kYXRhLm1pbl93aWR0aCB8fCBoZWlnaHQgPiB0aGlzLmRhdGEubWF4X2hlaWdodCB8fCBoZWlnaHQgPCB0aGlzLmRhdGEubWluX2hlaWdodCkgJiYgdGhpcy5kYXRhLmRpc2FibGVfcmF0aW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVfY29ycmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZV9jb3JyZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB0aGlzLmRhdGEuQ1VUX1NUQVJULmhlaWdodCArICgodGhpcy5kYXRhLkNVVF9TVEFSVC5jb3JuZXIgPiAxICYmIHRoaXMuZGF0YS5DVVRfU1RBUlQuY29ybmVyIDwgNCA/IDEgOiAtMSkgKiAodGhpcy5kYXRhLkNVVF9TVEFSVC55IC0gZS50b3VjaGVzWzBdLmNsaWVudFkpKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLkNVVF9TVEFSVC5jb3JuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5kYXRhLkNVVF9TVEFSVC53aWR0aCArIHRoaXMuZGF0YS5DVVRfU1RBUlQueCAtIGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVfcmF0aW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gKHRoaXMuZGF0YS53aWR0aCAvIHRoaXMuZGF0YS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaXplX2luc3BlY3QoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXRfbGVmdCA9IHRoaXMuZGF0YS5DVVRfU1RBUlQuY3V0X2xlZnQgLSAod2lkdGggLSB0aGlzLmRhdGEuQ1VUX1NUQVJULndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5kYXRhLkNVVF9TVEFSVC53aWR0aCArIHRoaXMuZGF0YS5DVVRfU1RBUlQueCAtIGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVfcmF0aW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gKHRoaXMuZGF0YS53aWR0aCAvIHRoaXMuZGF0YS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaXplX2luc3BlY3QoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXRfdG9wID0gdGhpcy5kYXRhLkNVVF9TVEFSVC5jdXRfdG9wIC0gKGhlaWdodCAtIHRoaXMuZGF0YS5DVVRfU1RBUlQuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXRfbGVmdCA9IHRoaXMuZGF0YS5DVVRfU1RBUlQuY3V0X2xlZnQgLSAod2lkdGggLSB0aGlzLmRhdGEuQ1VUX1NUQVJULndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLmRhdGEuQ1VUX1NUQVJULndpZHRoIC0gdGhpcy5kYXRhLkNVVF9TVEFSVC54ICsgZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZV9yYXRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyAodGhpcy5kYXRhLndpZHRoIC8gdGhpcy5kYXRhLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNpemVfaW5zcGVjdCgpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1dF90b3AgPSB0aGlzLmRhdGEuQ1VUX1NUQVJULmN1dF90b3AgLSAoaGVpZ2h0IC0gdGhpcy5kYXRhLkNVVF9TVEFSVC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLmRhdGEuQ1VUX1NUQVJULndpZHRoIC0gdGhpcy5kYXRhLkNVVF9TVEFSVC54ICsgZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZV9yYXRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyAodGhpcy5kYXRhLndpZHRoIC8gdGhpcy5kYXRhLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNpemVfaW5zcGVjdCgpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlX3dpZHRoICYmICF0aGlzLmRhdGEuZGlzYWJsZV9oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1dF9sZWZ0OiBjdXRfbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1dF90b3A6IGN1dF90b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlX3dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXRfbGVmdDogY3V0X2xlZnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5kYXRhLmRpc2FibGVfaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1dF90b3A6IGN1dF90b3BcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW1nTWFyZ2luRGV0ZWN0aW9uU2NhbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2N1dFRvdWNoU3RhcnQoZSkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICAgICAgICAgIGxldCBjdXRib3hfdG9wNCA9IHRoaXMuZGF0YS5jdXRfdG9wICsgdGhpcy5kYXRhLmhlaWdodCAtIDMwO1xyXG4gICAgICAgICAgICBsZXQgY3V0Ym94X2JvdHRvbTQgPSB0aGlzLmRhdGEuY3V0X3RvcCArIHRoaXMuZGF0YS5oZWlnaHQgKyAyMDtcclxuICAgICAgICAgICAgbGV0IGN1dGJveF9sZWZ0NCA9IHRoaXMuZGF0YS5jdXRfbGVmdCArIHRoaXMuZGF0YS53aWR0aCAtIDMwO1xyXG4gICAgICAgICAgICBsZXQgY3V0Ym94X3JpZ2h0NCA9IHRoaXMuZGF0YS5jdXRfbGVmdCArIHRoaXMuZGF0YS53aWR0aCArIDMwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1dGJveF90b3AzID0gdGhpcy5kYXRhLmN1dF90b3AgLSAzMDtcclxuICAgICAgICAgICAgbGV0IGN1dGJveF9ib3R0b20zID0gdGhpcy5kYXRhLmN1dF90b3AgKyAzMDtcclxuICAgICAgICAgICAgbGV0IGN1dGJveF9sZWZ0MyA9IHRoaXMuZGF0YS5jdXRfbGVmdCArIHRoaXMuZGF0YS53aWR0aCAtIDMwO1xyXG4gICAgICAgICAgICBsZXQgY3V0Ym94X3JpZ2h0MyA9IHRoaXMuZGF0YS5jdXRfbGVmdCArIHRoaXMuZGF0YS53aWR0aCArIDMwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1dGJveF90b3AyID0gdGhpcy5kYXRhLmN1dF90b3AgLSAzMDtcclxuICAgICAgICAgICAgbGV0IGN1dGJveF9ib3R0b20yID0gdGhpcy5kYXRhLmN1dF90b3AgKyAzMDtcclxuICAgICAgICAgICAgbGV0IGN1dGJveF9sZWZ0MiA9IHRoaXMuZGF0YS5jdXRfbGVmdCAtIDMwO1xyXG4gICAgICAgICAgICBsZXQgY3V0Ym94X3JpZ2h0MiA9IHRoaXMuZGF0YS5jdXRfbGVmdCArIDMwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1dGJveF90b3AxID0gdGhpcy5kYXRhLmN1dF90b3AgKyB0aGlzLmRhdGEuaGVpZ2h0IC0gMzA7XHJcbiAgICAgICAgICAgIGxldCBjdXRib3hfYm90dG9tMSA9IHRoaXMuZGF0YS5jdXRfdG9wICsgdGhpcy5kYXRhLmhlaWdodCArIDMwO1xyXG4gICAgICAgICAgICBsZXQgY3V0Ym94X2xlZnQxID0gdGhpcy5kYXRhLmN1dF9sZWZ0IC0gMzA7XHJcbiAgICAgICAgICAgIGxldCBjdXRib3hfcmlnaHQxID0gdGhpcy5kYXRhLmN1dF9sZWZ0ICsgMzA7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IGN1dGJveF9sZWZ0NCAmJiBjdXJyZW50WCA8IGN1dGJveF9yaWdodDQgJiYgY3VycmVudFkgPiBjdXRib3hfdG9wNCAmJiBjdXJyZW50WSA8IGN1dGJveF9ib3R0b200KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlRHVyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX2ZsYWdfY3V0X3RvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5fZmxhZ19pbWdfZW5kdG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLkNVVF9TVEFSVCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5kYXRhLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5kYXRhLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjdXJyZW50WCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBjdXJyZW50WSxcclxuICAgICAgICAgICAgICAgICAgICBjb3JuZXI6IDRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50WCA+IGN1dGJveF9sZWZ0MyAmJiBjdXJyZW50WCA8IGN1dGJveF9yaWdodDMgJiYgY3VycmVudFkgPiBjdXRib3hfdG9wMyAmJiBjdXJyZW50WSA8IGN1dGJveF9ib3R0b20zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlRHVyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX2ZsYWdfY3V0X3RvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5fZmxhZ19pbWdfZW5kdG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLkNVVF9TVEFSVCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5kYXRhLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5kYXRhLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjdXJyZW50WCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBjdXJyZW50WSxcclxuICAgICAgICAgICAgICAgICAgICBjdXRfdG9wOiB0aGlzLmRhdGEuY3V0X3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBjdXRfbGVmdDogdGhpcy5kYXRhLmN1dF9sZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcm5lcjogM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRYID4gY3V0Ym94X2xlZnQyICYmIGN1cnJlbnRYIDwgY3V0Ym94X3JpZ2h0MiAmJiBjdXJyZW50WSA+IGN1dGJveF90b3AyICYmIGN1cnJlbnRZIDwgY3V0Ym94X2JvdHRvbTIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVEdXJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5fZmxhZ19jdXRfdG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLl9mbGFnX2ltZ19lbmR0b3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuQ1VUX1NUQVJUID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRhdGEud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmRhdGEuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGN1dF90b3A6IHRoaXMuZGF0YS5jdXRfdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1dF9sZWZ0OiB0aGlzLmRhdGEuY3V0X2xlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogY3VycmVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY3VycmVudFksXHJcbiAgICAgICAgICAgICAgICAgICAgY29ybmVyOiAyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFggPiBjdXRib3hfbGVmdDEgJiYgY3VycmVudFggPCBjdXRib3hfcmlnaHQxICYmIGN1cnJlbnRZID4gY3V0Ym94X3RvcDEgJiYgY3VycmVudFkgPCBjdXRib3hfYm90dG9tMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUR1cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLl9mbGFnX2N1dF90b3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuX2ZsYWdfaW1nX2VuZHRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5DVVRfU1RBUlQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuZGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZGF0YS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY3V0X3RvcDogdGhpcy5kYXRhLmN1dF90b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgY3V0X2xlZnQ6IHRoaXMuZGF0YS5jdXRfbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBjdXJyZW50WCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBjdXJyZW50WSxcclxuICAgICAgICAgICAgICAgICAgICBjb3JuZXI6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2N1dFRvdWNoRW5kKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZVN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLl9mbGFnX2N1dF90b3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/lgZzmraLnp7vliqjml7bpnIDopoHlgZrnmoTmk43kvZxcclxuICAgICAgICBfbW92ZVN0b3AoKSB7XHJcbiAgICAgICAgICAgIC8v5riF56m65LmL5YmN55qE6Ieq5Yqo5bGF5Lit5bu26L+f5Ye95pWw5bm25re75Yqg5pyA5paw55qEXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRhdGEuVElNRV9DVVRfQ0VOVEVSKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLlRJTUVfQ1VUX0NFTlRFUiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/liqjnlLvlkK/liqhcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLl9jdXRfYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2N1dF9hbmltYXRpb246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3V0Q2VudGVyKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIC8v5riF56m65LmL5YmN55qE6IOM5pmv5Y+Y5YyW5bu26L+f5Ye95pWw5bm25re75Yqg5pyA5paw55qEXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRhdGEuVElNRV9CRyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5USU1FX0JHID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLl9mbGFnX2JyaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mbGFnX2JyaWdodDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v56e75Yqo5LitXHJcbiAgICAgICAgX21vdmVEdXJpbmcoKSB7XHJcbiAgICAgICAgICAgIC8v5riF56m65LmL5YmN55qE6Ieq5Yqo5bGF5Lit5bu26L+f5Ye95pWwXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRhdGEuVElNRV9DVVRfQ0VOVEVSKTtcclxuICAgICAgICAgICAgLy/muIXnqbrkuYvliY3nmoTog4zmma/lj5jljJblu7bov5/lh73mlbBcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGF0YS5USU1FX0JHKTtcclxuICAgICAgICAgICAgLy/pq5jkuq7og4zmma9cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuX2ZsYWdfYnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIF9mbGFnX2JyaWdodDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v55uR5ZCs5ZmoXHJcbiAgICAgICAgX3dhdGNoZXIoKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmUodGhpcy5kYXRhLCB2LCB0aGlzLmRhdGEud2F0Y2hbdl0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX29ic2VydmUob2JqLCBrZXksIHdhdGNoRnVuKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2V0OiAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB3YXRjaEZ1biAmJiB3YXRjaEZ1bih2YWwsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsICYmICdfaW1nX3RvcHxpbWdfbGVmdHx8d2lkdGh8aGVpZ2h0fG1pbl93aWR0aHxtYXhfd2lkdGh8bWluX2hlaWdodHxtYXhfaGVpZ2h0fGV4cG9ydF9zY2FsZXxjdXRfdG9wfGN1dF9sZWZ0fGNhbnZhc190b3B8Y2FudmFzX2xlZnR8aW1nX3dpZHRofGltZ19oZWlnaHR8c2NhbGV8YW5nbGV8bWluX3NjYWxlfG1heF9zY2FsZScuaW5kZXhPZihrZXkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQodmFsKS50b0ZpeGVkKDMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIiAmJiB2YWwuaW5kZXhPZihcIiVcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9wcmV2ZW50VG91Y2hNb3ZlKCkge31cclxuICAgIH1cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJySW5kZXgpO1xyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge307XHJcbn07XHJcbiJdfQ==