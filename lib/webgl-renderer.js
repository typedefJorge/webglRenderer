(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("webgl-renderer", [], factory);
	else if(typeof exports === 'object')
		exports["webgl-renderer"] = factory();
	else
		root["webgl-renderer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shape = (function () {
    function Shape(rgbColor) {
        this.rgbColor = rgbColor;
        this.vertexSize = 2;
        this.colorSize = 3;
    }
    Shape.prototype.addXYAndColorToFloat32Array = function (array, index, x, y) {
        array[index] = x;
        array[index + 1] = y;
        array[index + 2] = this.rgbColor.red;
        array[index + 3] = this.rgbColor.green;
        array[index + 4] = this.rgbColor.blue;
    };
    return Shape;
}());
exports.Shape = Shape;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Float32Vector = (function () {
    function Float32Vector(arr) {
        this.arr = arr;
        this.size = arr.length;
    }
    Float32Vector.prototype.addNumber = function (number) {
        var newSize = this.size + 1;
        if (newSize >= this.arr.length) {
            var oldArr = this.arr;
            this.arr = new Float32Array(newSize * 2);
            this.arr.set(oldArr);
        }
        this.arr[this.size] = number;
        this.size = newSize;
    };
    Float32Vector.prototype.addArray = function (arr) {
        var newSize = this.size + arr.length;
        if (newSize >= this.arr.length) {
            var oldArr = this.arr;
            this.arr = new Float32Array(newSize * 2);
            this.arr.set(oldArr);
        }
        this.arr.set(arr, this.size);
        this.size = newSize;
    };
    return Float32Vector;
}());
exports.Float32Vector = Float32Vector;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BoundingRectangle = (function () {
    function BoundingRectangle(point1, point2) {
        if (this.isTopLeftBottomRight(point1, point2)) {
            this.topLeft = point1;
            this.topRight = { x: point2.x, y: point1.y };
            this.bottomRight = point2;
            this.bottomLeft = { x: point1.x, y: point2.y };
        }
        else if (this.isBottomRightTopLeft(point1, point2)) {
            this.topLeft = point2;
            this.topRight = { x: point1.x, y: point2.y };
            this.bottomRight = point1;
            this.bottomLeft = { x: point2.x, y: point1.y };
        }
        else if (this.isBottomLeftTopRight(point1, point2)) {
            this.topLeft = { x: point1.x, y: point2.y };
            this.topRight = point2;
            this.bottomRight = { x: point2.x, y: point1.y };
            this.bottomLeft = point1;
        }
        else {
            this.topLeft = { x: point2.x, y: point1.y };
            this.topRight = point1;
            this.bottomRight = { x: point1.x, y: point2.y };
            this.bottomLeft = point2;
        }
    }
    BoundingRectangle.prototype.isTopLeftBottomRight = function (point1, point2) {
        return point1.x <= point2.x && point1.y >= point2.y;
    };
    BoundingRectangle.prototype.isBottomRightTopLeft = function (point1, point2) {
        return point1.x >= point2.x && point1.y <= point2.y;
    };
    BoundingRectangle.prototype.isBottomLeftTopRight = function (point1, point2) {
        return point1.x <= point2.x && point1.y <= point2.y;
    };
    return BoundingRectangle;
}());
exports.BoundingRectangle = BoundingRectangle;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Midpoint = (function () {
    function Midpoint() {
    }
    Midpoint.between = function (point1, point2) {
        var midX = (point1.x + point2.x) / 2;
        var midY = (point1.y + point2.y) / 2;
        return { x: midX, y: midY };
    };
    return Midpoint;
}());
exports.Midpoint = Midpoint;
var ThirdPoints = (function () {
    function ThirdPoints() {
    }
    ThirdPoints.between = function (point1, point2) {
        var largerX = Math.max(point1.x, point2.x);
        var smallerX = Math.min(point1.x, point2.x);
        var largerY = Math.max(point1.y, point2.y);
        var smallerY = Math.min(point1.y, point2.y);
        var thirdX = (largerX - smallerX) / 3;
        var thirdY = (largerY - smallerY) / 3;
        var firstThird = { x: smallerX + thirdX, y: smallerY + thirdY };
        var secondThird = { x: firstThird.x + thirdX, y: firstThird.y + thirdY };
        return { first: firstThird, second: secondThird };
    };
    return ThirdPoints;
}());
exports.ThirdPoints = ThirdPoints;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rgbColor_1 = __webpack_require__(18);
var ColorMapper = (function () {
    function ColorMapper() {
    }
    ColorMapper.colorToRGBColor = function (color) {
        switch (color) {
            case "red":
                return new rgbColor_1.RGBColor(1.0, 0.0, 0.0);
            case "orange":
                return new rgbColor_1.RGBColor(1.0, 0.271, 0.0);
            case "yellow":
                return new rgbColor_1.RGBColor(1.0, 1.0, 0.0);
            case "green":
                return new rgbColor_1.RGBColor(0.0, 1.0, 0.0);
            case "cyan":
                return new rgbColor_1.RGBColor(0.0, 1.0, 1.0);
            case "blue":
                return new rgbColor_1.RGBColor(0.0, 0.0, 1.0);
            case "indigo":
                return new rgbColor_1.RGBColor(0.294, 0.0, 0.510);
            case "fuchsia":
                return new rgbColor_1.RGBColor(1.0, 0.0, 1.0);
            case "white":
                return new rgbColor_1.RGBColor(1.0, 1.0, 1.0);
            default: throw Error("could not find color " + color);
        }
    };
    return ColorMapper;
}());
exports.ColorMapper = ColorMapper;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Precision;
(function (Precision) {
    Precision[Precision["Low"] = 0] = "Low";
    Precision[Precision["High"] = 1] = "High";
})(Precision = exports.Precision || (exports.Precision = {}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(0);
var vector_1 = __webpack_require__(1);
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(point, rgbColor, gl) {
        var _this = _super.call(this, rgbColor) || this;
        var array = new Float32Array(5);
        _this.addXYAndColorToFloat32Array(array, 0, point.x, point.y);
        _this.verticies = new vector_1.Float32Vector(array);
        _this.numberOfVerticies = 1;
        _this.glRenderMode = gl.LINE_STRIP;
        return _this;
    }
    Line.prototype.addVertex = function (vertex) {
        var array = new Float32Array(5);
        this.addXYAndColorToFloat32Array(array, 0, vertex.x, vertex.y);
        this.verticies.addArray(array);
        this.numberOfVerticies++;
    };
    return Line;
}(shape_1.Shape));
exports.Line = Line;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ellipse_1 = __webpack_require__(12);
var triangle_1 = __webpack_require__(16);
var rectangle_1 = __webpack_require__(15);
var hexagon_1 = __webpack_require__(13);
var octogon_1 = __webpack_require__(14);
var precision_1 = __webpack_require__(5);
var ShapeFactory = (function () {
    function ShapeFactory() {
    }
    ShapeFactory.createShape = function (point1, point2, shapeMode, rgbColor, gl) {
        switch (shapeMode) {
            case "ellipses":
                return this.createEllipse(point1, point2, rgbColor, gl);
            case "triangles":
                return this.createTriangle(point1, point2, rgbColor, gl);
            case "rectangles":
                return this.createRectangle(point1, point2, rgbColor, gl);
            case "hexagons":
                return this.createHexagon(point1, point2, rgbColor, gl);
            case "octogons":
                return this.createOctogon(point1, point2, rgbColor, gl);
            default:
                throw Error("cannot recognize shape type " + shapeMode);
        }
    };
    ShapeFactory.createEllipse = function (point1, point2, rgbColor, gl) {
        return new ellipse_1.Ellipse(point1, point2, rgbColor, gl, precision_1.Precision.High);
    };
    ShapeFactory.createTriangle = function (point1, point2, rgbColor, gl) {
        return new triangle_1.Triangle(point1, point2, rgbColor, gl);
    };
    ShapeFactory.createRectangle = function (point1, point2, rgbColor, gl) {
        return new rectangle_1.Rectangle(point1, point2, rgbColor, gl);
    };
    ;
    ShapeFactory.createHexagon = function (point1, point2, rgbColor, gl) {
        return new hexagon_1.Hexagon(point1, point2, rgbColor, gl);
    };
    ShapeFactory.createOctogon = function (point1, point2, rgbColor, gl) {
        return new octogon_1.Octogon(point1, point2, rgbColor, gl);
    };
    return ShapeFactory;
}());
exports.ShapeFactory = ShapeFactory;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var renderModeMapper_1 = __webpack_require__(17);
var vertexBuffer_1 = __webpack_require__(19);
var drawingMode_1 = __webpack_require__(11);
var colorMapper_1 = __webpack_require__(4);
var WebGLRenderer = (function () {
    function WebGLRenderer(canvasWidth, canvasHeight, gl) {
        this.vertexShaderSource = "    attribute vec3 a_position;\n" +
            "    attribute float a_pointSize;\n" +
            "    attribute vec4 a_color;\n" +
            "    varying vec4 v_color;\n" +
            "    void main(void) {\n" +
            "        gl_Position = vec4(a_position, 1.0);\n" +
            "        gl_PointSize = 10.0;\n" +
            "        v_color = a_color;\n" +
            "    }\n";
        this.fragmentShaderSource = "    precision mediump float;\n" +
            "    uniform vec4 u_fragColor;" +
            "    varying vec4 v_color;\n" +
            "    void main(void) {\n" +
            "        gl_FragColor = v_color;\n" +
            "    }\n";
        this.gl = gl;
        this.glRenderMode = this.gl.POINTS;
        this.shapeMode = "points";
        this.drawingMode = drawingMode_1.DrawingMode.Verticies;
        this.setViewPortDimensions(canvasWidth, canvasHeight);
        this.initShaders();
        this.pointsVector = new vertexBuffer_1.VertexBuffer(this.gl.POINTS, new Float32Array(0), this.gl);
        this.linesVector = new vertexBuffer_1.VertexBuffer(this.gl.LINES, new Float32Array(0), this.gl);
        this.lineStripVector = new vertexBuffer_1.VertexBuffer(this.gl.LINE_STRIP, new Float32Array(0), this.gl);
        this.lineLoopVector = new vertexBuffer_1.VertexBuffer(this.gl.LINE_LOOP, new Float32Array(0), this.gl);
        this.trianglesVector = new vertexBuffer_1.VertexBuffer(this.gl.TRIANGLES, new Float32Array(0), this.gl);
        this.triangleStripVector = new vertexBuffer_1.VertexBuffer(this.gl.TRIANGLE_STRIP, new Float32Array(0), this.gl);
        this.triangleFanVector = new vertexBuffer_1.VertexBuffer(this.gl.TRIANGLE_FAN, new Float32Array(0), this.gl);
        this.vertexBuffers = [
            this.pointsVector,
            this.linesVector,
            this.lineStripVector,
            this.lineLoopVector,
            this.trianglesVector,
            this.triangleStripVector,
            this.triangleFanVector
        ];
        this.shapeScene = [];
    }
    WebGLRenderer.prototype.setViewPortDimensions = function (newWidth, newHeight) {
        this.gl.viewport(0, 0, newWidth, newHeight);
    };
    Object.defineProperty(WebGLRenderer.prototype, "renderMode", {
        get: function () {
            return this.renderModeStr;
        },
        set: function (renderMode) {
            this.drawingMode = drawingMode_1.DrawingMode.Verticies;
            this.renderModeStr = renderMode;
            this.glRenderMode = renderModeMapper_1.RenderModeMapper.renderModeToWebGlConstant(renderMode, this.gl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebGLRenderer.prototype, "shape", {
        get: function () {
            return this.shapeMode;
        },
        set: function (newShapeMode) {
            this.drawingMode = drawingMode_1.DrawingMode.Shapes;
            this.shapeMode = newShapeMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebGLRenderer.prototype, "color", {
        get: function () {
            return this.colorStr;
        },
        set: function (color) {
            this.colorStr = color;
            this.rgbColor = colorMapper_1.ColorMapper.colorToRGBColor(color);
        },
        enumerable: true,
        configurable: true
    });
    WebGLRenderer.prototype.getRGBColor = function () {
        return this.rgbColor;
    };
    WebGLRenderer.prototype.addXYPointToScene = function (x, y) {
        if (this.drawingMode !== drawingMode_1.DrawingMode.Verticies) {
            return;
        }
        switch (this.glRenderMode) {
            case this.gl.POINTS:
                this.addXYAndColorToVertexBuffer(this.pointsVector.verticies, x, y);
                break;
            case this.gl.LINES:
                this.addXYAndColorToVertexBuffer(this.linesVector.verticies, x, y);
                break;
            case this.gl.LINE_STRIP:
                this.addXYAndColorToVertexBuffer(this.lineStripVector.verticies, x, y);
                break;
            case this.gl.LINE_LOOP:
                this.addXYAndColorToVertexBuffer(this.lineLoopVector.verticies, x, y);
                break;
            case this.gl.TRIANGLES:
                this.addXYAndColorToVertexBuffer(this.trianglesVector.verticies, x, y);
                break;
            case this.gl.TRIANGLE_STRIP:
                this.addXYAndColorToVertexBuffer(this.triangleStripVector.verticies, x, y);
                break;
            case this.gl.TRIANGLE_FAN:
                this.addXYAndColorToVertexBuffer(this.triangleFanVector.verticies, x, y);
                break;
        }
    };
    WebGLRenderer.prototype.addShapeToScene = function (shape) {
        this.shapeScene.push(shape);
    };
    WebGLRenderer.prototype.draw = function () {
        this.gl.clearColor(0.09, 0.09, 0.09, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        for (var _i = 0, _a = this.vertexBuffers; _i < _a.length; _i++) {
            var vb = _a[_i];
            if (vb.verticies.size > 0) {
                this.drawGlArray(vb.verticies, vb.renderMode);
            }
        }
        if (this.shapeScene.length > 0) {
            for (var _b = 0, _c = this.shapeScene; _b < _c.length; _b++) {
                var shape = _c[_b];
                this.drawGlArray(shape.verticies, shape.glRenderMode, shape.vertexSize, shape.colorSize);
            }
        }
    };
    WebGLRenderer.prototype.drawGlArray = function (vector, renderMode, vertexSize, colorSize) {
        if (vertexSize === void 0) { vertexSize = 2; }
        if (colorSize === void 0) { colorSize = 3; }
        var a_position = this.gl.getAttribLocation(this.shaderProgram, "a_position");
        var a_color = this.gl.getAttribLocation(this.shaderProgram, "a_color");
        var floatSize = vector.arr.BYTES_PER_ELEMENT;
        var vertexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vector.arr, this.gl.STATIC_DRAW);
        this.gl.vertexAttribPointer(a_position, vertexSize, this.gl.FLOAT, false, floatSize * 5, 0);
        this.gl.enableVertexAttribArray(a_position);
        this.gl.vertexAttribPointer(a_color, colorSize, this.gl.FLOAT, false, floatSize * 5, floatSize * 2);
        this.gl.enableVertexAttribArray(a_color);
        this.gl.drawArrays(renderMode, 0, (vector.size / (vertexSize + colorSize)));
    };
    WebGLRenderer.prototype.addXYAndColorToVertexBuffer = function (vertexBuffer, x, y) {
        vertexBuffer.addArray(new Float32Array([x, y, this.rgbColor.red, this.rgbColor.green, this.rgbColor.blue]));
    };
    WebGLRenderer.prototype.initShaders = function () {
        var fragmentShader = this.createShader(this.fragmentShaderSource, "fragment");
        var vertexShader = this.createShader(this.vertexShaderSource, "vertex");
        var shader = this.gl.createProgram();
        if (shader === null) {
            throw Error("Could not create shader program");
        }
        this.shaderProgram = shader;
        this.gl.attachShader(this.shaderProgram, vertexShader);
        this.gl.attachShader(this.shaderProgram, fragmentShader);
        this.gl.linkProgram(this.shaderProgram);
        if (!this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS)) {
            throw Error("Could not initialise shaders");
        }
        this.gl.useProgram(this.shaderProgram);
    };
    WebGLRenderer.prototype.createShader = function (str, type) {
        var shader;
        if (type === "fragment") {
            shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        }
        else if (type === "vertex") {
            shader = this.gl.createShader(this.gl.VERTEX_SHADER);
        }
        else {
            return null;
        }
        this.gl.shaderSource(shader, str);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            alert(this.gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    };
    return WebGLRenderer;
}());
exports.WebGLRenderer = WebGLRenderer;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContextWrangler = (function () {
    function ContextWrangler() {
    }
    ContextWrangler.getContext = function (canvas) {
        var gl;
        try {
            gl = canvas.getContext("webgl", {
                alpha: false,
                antialias: false,
                depth: false
            });
        }
        catch (e) {
            var msg = "Error creating WebGL Context!: " + e.toString();
            throw Error(msg);
        }
        if (gl === null) {
            var msg = "Error creating WebGL Context!, gl === null";
            throw Error(msg);
        }
        return gl;
    };
    return ContextWrangler;
}());
exports.ContextWrangler = ContextWrangler;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var webglRenderer_1 = __webpack_require__(8);
exports.WebGLRenderer = webglRenderer_1.WebGLRenderer;
var contextWrangler_1 = __webpack_require__(9);
exports.ContextWrangler = contextWrangler_1.ContextWrangler;
var colorMapper_1 = __webpack_require__(4);
exports.ColorMapper = colorMapper_1.ColorMapper;
var line_1 = __webpack_require__(6);
exports.Line = line_1.Line;
var shape_1 = __webpack_require__(0);
exports.Shape = shape_1.Shape;
var shapeFactory_1 = __webpack_require__(7);
exports.ShapeFactory = shapeFactory_1.ShapeFactory;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DrawingMode;
(function (DrawingMode) {
    DrawingMode[DrawingMode["Shapes"] = 0] = "Shapes";
    DrawingMode[DrawingMode["Verticies"] = 1] = "Verticies";
})(DrawingMode = exports.DrawingMode || (exports.DrawingMode = {}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(0);
var vector_1 = __webpack_require__(1);
var boundingRectangle_1 = __webpack_require__(2);
var midpoint_1 = __webpack_require__(3);
var precision_1 = __webpack_require__(5);
var Ellipse = (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(point1, point2, rgbColor, gl, precision) {
        var _this = _super.call(this, rgbColor) || this;
        var boundingRect = new boundingRectangle_1.BoundingRectangle(point1, point2);
        _this.horizontalRadius = (boundingRect.topRight.x - boundingRect.topLeft.x) / 2;
        _this.verticalRadius = (boundingRect.topLeft.y - boundingRect.bottomLeft.y) / 2;
        if (precision === precision_1.Precision.High) {
            _this.numberOfInnerVerticies = 400;
            _this.numberOfVerticies = 403;
        }
        else if (precision === precision_1.Precision.Low) {
            _this.numberOfInnerVerticies = 8;
            _this.numberOfVerticies = 11;
        }
        _this.center = midpoint_1.Midpoint.between(boundingRect.topLeft, boundingRect.bottomRight);
        var vertexArray = _this.populateVerticies(boundingRect);
        _this.verticies = new vector_1.Float32Vector(vertexArray);
        _this.glRenderMode = gl.TRIANGLE_FAN;
        return _this;
    }
    Ellipse.prototype.populateVerticies = function (boundingRect) {
        var arr = new Float32Array(this.numberOfVerticies * 5);
        var x = boundingRect.topLeft.x;
        var xIncrement = (this.horizontalRadius * 2) / ((this.numberOfVerticies - 1) / 2);
        this.addXYAndColorToFloat32Array(arr, 0, x, boundingRect.topLeft.y - this.verticalRadius);
        var symmetryInsertionOffset = ((this.numberOfInnerVerticies / 2) * 5) + 5;
        var endPointX = boundingRect.topRight.x;
        var endPointY = boundingRect.topRight.y - this.verticalRadius;
        this.addXYAndColorToFloat32Array(arr, symmetryInsertionOffset, endPointX, endPointY);
        this.addXYAndColorToFloat32Array(arr, arr.length - 5, endPointX, endPointY);
        var insertionIndex = 5;
        for (var i = 0; i < this.numberOfInnerVerticies / 2; i++) {
            x += xIncrement;
            var y = this.getYDistanceFromCenterForX(x);
            this.addXYAndColorToFloat32Array(arr, insertionIndex, x, y + this.center.y);
            this.addXYAndColorToFloat32Array(arr, insertionIndex + symmetryInsertionOffset, x, this.center.y - y);
            insertionIndex += 5;
        }
        return arr;
    };
    Ellipse.prototype.getYDistanceFromCenterForX = function (x) {
        var verticalRadiusSquared = Math.pow(this.verticalRadius, 2);
        return Math.sqrt(verticalRadiusSquared -
            ((verticalRadiusSquared * Math.pow((x - this.center.x), 2)) / Math.pow(this.horizontalRadius, 2)));
    };
    return Ellipse;
}(shape_1.Shape));
exports.Ellipse = Ellipse;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(0);
var vector_1 = __webpack_require__(1);
var boundingRectangle_1 = __webpack_require__(2);
var midpoint_1 = __webpack_require__(3);
var Hexagon = (function (_super) {
    __extends(Hexagon, _super);
    function Hexagon(point1, point2, rgbColor, gl) {
        var _this = _super.call(this, rgbColor) || this;
        var boundingRect = new boundingRectangle_1.BoundingRectangle(point1, point2);
        var vertexArray = _this.populateVerticies(boundingRect);
        _this.verticies = new vector_1.Float32Vector(vertexArray);
        _this.numberOfVerticies = 6;
        _this.glRenderMode = gl.TRIANGLE_FAN;
        return _this;
    }
    Hexagon.prototype.populateVerticies = function (boundingRect) {
        var arr = new Float32Array(30);
        var _a = midpoint_1.ThirdPoints.between(boundingRect.topLeft, boundingRect.topRight), first = _a.first, second = _a.second;
        this.addXYAndColorToFloat32Array(arr, 0, first.x, first.y);
        this.addXYAndColorToFloat32Array(arr, 5, second.x, second.y);
        var mid = midpoint_1.Midpoint.between(boundingRect.topRight, boundingRect.bottomRight);
        this.addXYAndColorToFloat32Array(arr, 10, mid.x, mid.y);
        (_b = midpoint_1.ThirdPoints.between(boundingRect.bottomRight, boundingRect.bottomLeft), first = _b.first, second = _b.second);
        this.addXYAndColorToFloat32Array(arr, 15, second.x, second.y);
        this.addXYAndColorToFloat32Array(arr, 20, first.x, first.y);
        mid = midpoint_1.Midpoint.between(boundingRect.bottomLeft, boundingRect.topLeft);
        this.addXYAndColorToFloat32Array(arr, 25, mid.x, mid.y);
        return arr;
        var _b;
    };
    return Hexagon;
}(shape_1.Shape));
exports.Hexagon = Hexagon;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(0);
var vector_1 = __webpack_require__(1);
var boundingRectangle_1 = __webpack_require__(2);
var midpoint_1 = __webpack_require__(3);
var Octogon = (function (_super) {
    __extends(Octogon, _super);
    function Octogon(point1, point2, rgbColor, gl) {
        var _this = _super.call(this, rgbColor) || this;
        var boundingRect = new boundingRectangle_1.BoundingRectangle(point1, point2);
        var vertexArray = _this.populateVerticies(boundingRect);
        _this.verticies = new vector_1.Float32Vector(vertexArray);
        _this.numberOfVerticies = 8;
        _this.glRenderMode = gl.TRIANGLE_FAN;
        return _this;
    }
    Octogon.prototype.populateVerticies = function (boundingRect) {
        var arr = new Float32Array(40);
        var _a = midpoint_1.ThirdPoints.between(boundingRect.topLeft, boundingRect.topRight), first = _a.first, second = _a.second;
        this.addXYAndColorToFloat32Array(arr, 0, first.x, first.y);
        this.addXYAndColorToFloat32Array(arr, 5, second.x, second.y);
        (_b = midpoint_1.ThirdPoints.between(boundingRect.topRight, boundingRect.bottomRight), first = _b.first, second = _b.second);
        this.addXYAndColorToFloat32Array(arr, 10, second.x, second.y);
        this.addXYAndColorToFloat32Array(arr, 15, first.x, first.y);
        (_c = midpoint_1.ThirdPoints.between(boundingRect.bottomRight, boundingRect.bottomLeft), first = _c.first, second = _c.second);
        this.addXYAndColorToFloat32Array(arr, 20, second.x, second.y);
        this.addXYAndColorToFloat32Array(arr, 25, first.x, first.y);
        (_d = midpoint_1.ThirdPoints.between(boundingRect.bottomLeft, boundingRect.topLeft), first = _d.first, second = _d.second);
        this.addXYAndColorToFloat32Array(arr, 30, first.x, first.y);
        this.addXYAndColorToFloat32Array(arr, 35, second.x, second.y);
        return arr;
        var _b, _c, _d;
    };
    return Octogon;
}(shape_1.Shape));
exports.Octogon = Octogon;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(0);
var vector_1 = __webpack_require__(1);
var boundingRectangle_1 = __webpack_require__(2);
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(point1, point2, rgbColor, gl) {
        var _this = _super.call(this, rgbColor) || this;
        var boundingRect = new boundingRectangle_1.BoundingRectangle(point1, point2);
        var array = new Float32Array(20);
        _this.addXYAndColorToFloat32Array(array, 0, boundingRect.topLeft.x, boundingRect.topLeft.y);
        _this.addXYAndColorToFloat32Array(array, 5, boundingRect.topRight.x, boundingRect.topRight.y);
        _this.addXYAndColorToFloat32Array(array, 10, boundingRect.bottomLeft.x, boundingRect.bottomLeft.y);
        _this.addXYAndColorToFloat32Array(array, 15, boundingRect.bottomRight.x, boundingRect.bottomRight.y);
        _this.verticies = new vector_1.Float32Vector(array);
        _this.numberOfVerticies = 4;
        _this.glRenderMode = gl.TRIANGLE_STRIP;
        return _this;
    }
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(0);
var vector_1 = __webpack_require__(1);
var boundingRectangle_1 = __webpack_require__(2);
var midpoint_1 = __webpack_require__(3);
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle(point1, point2, rgbColor, gl) {
        var _this = _super.call(this, rgbColor) || this;
        var boundingRect = new boundingRectangle_1.BoundingRectangle(point1, point2);
        var topPoint = midpoint_1.Midpoint.between(boundingRect.topLeft, boundingRect.topRight);
        var array = new Float32Array(15);
        _this.addXYAndColorToFloat32Array(array, 0, boundingRect.bottomLeft.x, boundingRect.bottomLeft.y);
        _this.addXYAndColorToFloat32Array(array, 5, topPoint.x, topPoint.y);
        _this.addXYAndColorToFloat32Array(array, 10, boundingRect.bottomRight.x, boundingRect.bottomRight.y);
        _this.verticies = new vector_1.Float32Vector(array);
        _this.numberOfVerticies = 3;
        _this.glRenderMode = gl.TRIANGLES;
        return _this;
    }
    return Triangle;
}(shape_1.Shape));
exports.Triangle = Triangle;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RenderModeMapper = (function () {
    function RenderModeMapper() {
    }
    RenderModeMapper.renderModeToWebGlConstant = function (mode, gl) {
        switch (mode) {
            case "points":
                return gl.POINTS;
            case "lines":
                return gl.LINES;
            case "lineStrip":
                return gl.LINE_STRIP;
            case "lineLoop":
                return gl.LINE_LOOP;
            case "triangles":
                return gl.TRIANGLES;
            case "triangleStrip":
                return gl.TRIANGLE_STRIP;
            case "triangleFan":
                return gl.TRIANGLE_FAN;
            default: throw Error("could not find renderMode named " + mode);
        }
    };
    return RenderModeMapper;
}());
exports.RenderModeMapper = RenderModeMapper;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RGBColor = (function () {
    function RGBColor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    return RGBColor;
}());
exports.RGBColor = RGBColor;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __webpack_require__(1);
var VertexBuffer = (function () {
    function VertexBuffer(renderMode, vertexArray, gl) {
        if (this.renderModeValidator(renderMode, gl)) {
            this.renderMode = renderMode;
            this.verticies = new vector_1.Float32Vector(vertexArray);
        }
        else {
            throw Error("Cannot initialize vertex buffer of unrecognized gl render mode");
        }
    }
    VertexBuffer.prototype.renderModeValidator = function (renderMode, gl) {
        switch (renderMode) {
            case gl.POINTS:
                return true;
            case gl.LINES:
                return true;
            case gl.LINE_STRIP:
                return true;
            case gl.LINE_LOOP:
                return true;
            case gl.TRIANGLES:
                return true;
            case gl.TRIANGLE_STRIP:
                return true;
            case gl.TRIANGLE_FAN:
                return true;
        }
        return false;
    };
    return VertexBuffer;
}());
exports.VertexBuffer = VertexBuffer;


/***/ })
/******/ ]);
});
//# sourceMappingURL=webgl-renderer.js.map