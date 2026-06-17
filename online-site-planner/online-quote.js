(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("app/main.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var MouseButton_1 = require("./MouseButton");
var Option_1 = require("./Option");
var Ray3D_1 = require("./math/Ray3D");
var Vector2D_1 = require("./math/Vector2D");
var AppModel_1 = require("./model/AppModel");
var Vector3D_1 = require("./math/Vector3D");
var RenderScene_1 = require("./model/RenderScene");
var FloatingAskValuesAtHelper_1 = require("./ui/FloatingAskValuesAtHelper");
var FloatingLengthAngleHelper_1 = require("./ui/FloatingLengthAngleHelper");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        sodium.Transaction.run(function () {
            var sceneCtxOp = Option_1.Option.none();
            var worldSpaceOverlay = function (canvasCtx) { };
            var screenSpaceOverlay = function (canvasCtx) { };
            var canvas = document.getElementById("canvas");
            var canvasCtx = canvas.getContext("2d");
            var renderScene2 = function () {
                canvasCtx.fillStyle = "#FFFFFF";
                canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                {
                    canvasCtx.save();
                    canvasCtx.translate(0.5 * canvas.width, 0.5 * canvas.height);
                    canvasCtx.scale(1.0, -1.0);
                    RenderScene_1.renderScene(canvasCtx, sceneCtxOp);
                    worldSpaceOverlay(canvasCtx);
                    canvasCtx.restore();
                }
                screenSpaceOverlay(canvasCtx);
            };
            renderScene2();
            function fixCanvasAndCamera() {
                var canvasParent = canvas.parentElement;
                canvas.width = canvasParent.clientWidth;
                canvas.height = canvasParent.clientHeight;
                renderScene2();
            }
            fixCanvasAndCamera();
            window.addEventListener("resize", function (ev) {
                fixCanvasAndCamera();
            });
            var ssDrawLine = new sodium.StreamSink();
            {
                var btnDrawLine = document.getElementById("btnDrawLine");
                btnDrawLine.addEventListener("click", function () {
                    ssDrawLine.send(sodium.Unit.UNIT);
                });
            }
            var ssDrawCircle = new sodium.StreamSink();
            {
                var btnDrawCircle = document.getElementById("btnDrawCircle");
                btnDrawCircle.addEventListener("click", function () {
                    ssDrawCircle.send(sodium.Unit.UNIT);
                });
            }
            var ssFillet = new sodium.StreamSink();
            {
                var btnFillet = document.getElementById("btnFillet");
                btnFillet.addEventListener("click", function () {
                    ssFillet.send(sodium.Unit.UNIT);
                });
            }
            var cScreenPosToWorldRayOp = new sodium.Cell(function (screenPt) {
                return Option_1.Option.some(Ray3D_1.Ray3D.create(Vector3D_1.Vector3D.create(screenPt.x - 0.5 * canvas.width, -screenPt.y + 0.5 * canvas.height, 100.0), Vector3D_1.Vector3D.negUnitZ));
            });
            var cProjectWorldPointToScreenOp = new sodium.Cell(function (worldPt) {
                return Option_1.Option.some(Vector2D_1.Vector2D.create(worldPt.x + 0.5 * canvas.width, -worldPt.y + 0.5 * canvas.height));
            });
            var csMousePosOp = new sodium.CellSink(Option_1.Option.none());
            var ssMousePressed = new sodium.StreamSink();
            { // inputs
                canvas.addEventListener("mousemove", function (evt) {
                    var e = evt || window.event;
                    var x = e.offsetX;
                    var y = e.offsetY;
                    csMousePosOp.send(Option_1.Option.some(Vector2D_1.Vector2D.create(x, y)));
                });
                canvas.addEventListener("mouseout", function (evt) {
                    csMousePosOp.send(Option_1.Option.none());
                });
                canvas.addEventListener("mousedown", function (evt) {
                    var e = evt || window.event;
                    var cleanup = ssMousePressed.listen(function () { });
                    switch (evt.button) {
                        case 0:
                            ssMousePressed.send(MouseButton_1.MouseButton.Left);
                            break;
                        case 1:
                            ssMousePressed.send(MouseButton_1.MouseButton.Middle);
                            break;
                        case 2:
                            ssMousePressed.send(MouseButton_1.MouseButton.Right);
                            break;
                        default:
                            break;
                    }
                    cleanup();
                });
                // avoid crash of send without listen
                csMousePosOp.listen(function (unused) { });
                ssMousePressed.listen(function (unused) { });
            }
            var slReplyValueChanged = new sodium.StreamLoop();
            var slReplyValueEntered = new sodium.StreamLoop();
            var slLengthAngleEntered = new sodium.StreamLoop();
            // model
            var appModel = new AppModel_1.AppModel({
                cMousePosOp: csMousePosOp,
                sMousePressed: ssMousePressed,
                cScreenPointToWorldRayOp: cScreenPosToWorldRayOp,
                cProjectWorldPointToScreenOp: cProjectWorldPointToScreenOp,
                sReplyValueChanged: slReplyValueChanged,
                sReplyValueEntered: slReplyValueEntered,
                sLengthAngleEntered: slLengthAngleEntered,
                sDrawLine: ssDrawLine,
                sDrawCircle: ssDrawCircle,
                sFillet: ssFillet
            });
            var floatingAskValuesAtHelper = new FloatingAskValuesAtHelper_1.FloatingAskValuesAtHelper(canvas.parentElement, appModel.cAskValuesAt);
            slReplyValueChanged.loop(floatingAskValuesAtHelper.sReplyValueChanged);
            slReplyValueEntered.loop(floatingAskValuesAtHelper.sReplyValueEntered);
            var floatingLengthAngleHelper = new FloatingLengthAngleHelper_1.FloatingLengthAngleHelper(canvas.parentElement, appModel.cFloatingLengthAngles);
            slLengthAngleEntered.loop(floatingLengthAngleHelper.sLengthAngleEntered);
            appModel.cSceneCtxOp.lift3(appModel.cWorldSpaceOverlay, appModel.cScreenSpaceOverlay, function (sceneCtxOp2, worldSpaceOverlay2, screenSpaceOverlay2) { return function () {
                sceneCtxOp = sceneCtxOp2;
                worldSpaceOverlay = worldSpaceOverlay2;
                screenSpaceOverlay = screenSpaceOverlay2;
                renderScene2();
            }; }).listen(function (x) { return x(); });
            _this._appModel = appModel;
        });
    }
    App.debug = false;
    return App;
}());
window.onload = function () {
    sodium.Transaction.run(function () {
        var app = new App();
        window['app'] = app;
        window['appLoaded']();
    });
};
//# sourceMappingURL=main.js.map
});
___scope___.file("app/MouseButton.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
//# sourceMappingURL=MouseButton.js.map
});
___scope___.file("app/Option.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option = /** @class */ (function () {
    function Option(a) {
        this._a = a;
    }
    Object.defineProperty(Option.prototype, "is_some", {
        get: function () {
            return this._a !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "is_none", {
        get: function () {
            return !this.is_some;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "isSome", {
        get: function () {
            return this._a !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "isNone", {
        get: function () {
            return !this.isSome;
        },
        enumerable: true,
        configurable: true
    });
    Option.prototype.fromSome = function () {
        return this._a;
    };
    Option.prototype.orElse = function (aOp) {
        if (this.is_some) {
            return this;
        }
        else {
            return aOp;
        }
    };
    Option.prototype.orElse_ = function (aOpFn) {
        if (this.is_some) {
            return this;
        }
        else {
            return aOpFn();
        }
    };
    Option.prototype.orSome = function (a) {
        if (this.is_some) {
            return this.fromSome();
        }
        else {
            return a;
        }
    };
    Option.prototype.orSome_ = function (fn) {
        if (this.is_some) {
            return this.fromSome();
        }
        else {
            return fn();
        }
    };
    Option.some = function (a) {
        return new Option(a);
    };
    Option.none = function () {
        return Option._none;
    };
    Option.prototype.filter = function (pred) {
        if (this.is_some) {
            var a = this.fromSome();
            if (pred(a)) {
                return this;
            }
            else {
                return Option.none();
            }
        }
        else {
            return Option.none();
        }
    };
    Option.prototype.map = function (f) {
        if (this.is_some) {
            return Option.some(f(this.fromSome()));
        }
        else {
            return Option.none();
        }
    };
    Option.prototype.bind = function (f) {
        if (this.is_some) {
            return f(this.fromSome());
        }
        else {
            return Option.none();
        }
    };
    Option.join = function (aOpOp) {
        if (aOpOp.isSome) {
            return aOpOp.fromSome();
        }
        else {
            return Option.none();
        }
    };
    Option.prototype.lift2 = function (bOp, fn) {
        if (this.is_some && bOp.is_some) {
            return Option.some(fn(this.fromSome(), bOp.fromSome()));
        }
        else {
            return Option.none();
        }
    };
    Option.prototype.lift3 = function (bOp, cOp, fn) {
        if (this.is_some && bOp.is_some && cOp.is_some) {
            return Option.some(fn(this.fromSome(), bOp.fromSome(), cOp.fromSome()));
        }
        else {
            return Option.none();
        }
    };
    Option.prototype.lift4 = function (bOp, cOp, dOp, fn) {
        if (this.is_some && bOp.is_some && cOp.is_some && dOp.is_some) {
            return Option.some(fn(this.fromSome(), bOp.fromSome(), cOp.fromSome(), dOp.fromSome()));
        }
        else {
            return Option.none();
        }
    };
    Option.prototype.lift5 = function (bOp, cOp, dOp, eOp, fn) {
        if (this.is_some && bOp.is_some && cOp.is_some && dOp.is_some && eOp.is_some) {
            return Option.some(fn(this.fromSome(), bOp.fromSome(), cOp.fromSome(), dOp.fromSome(), eOp.fromSome()));
        }
        else {
            return Option.none();
        }
    };
    Option.prototype.lift6 = function (bOp, cOp, dOp, eOp, fOp, fn) {
        if (this.is_some && bOp.is_some && cOp.is_some && dOp.is_some && eOp.is_some) {
            return Option.some(fn(this.fromSome(), bOp.fromSome(), cOp.fromSome(), dOp.fromSome(), eOp.fromSome(), fOp.fromSome()));
        }
        else {
            return Option.none();
        }
    };
    Option._none = new Option();
    return Option;
}());
exports.Option = Option;
//# sourceMappingURL=Option.js.map
});
___scope___.file("app/math/Ray3D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option_1 = require("../Option");
var Ray3D = /** @class */ (function () {
    function Ray3D(origin, direction) {
        this._origin = origin;
        this._direction = direction;
    }
    Ray3D.create = function (origin, direction) {
        return new Ray3D(origin, direction);
    };
    Object.defineProperty(Ray3D.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ray3D.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        enumerable: true,
        configurable: true
    });
    Ray3D.prototype.positionFromTime = function (t) {
        return this.origin.add(this.direction.scale(t));
    };
    Ray3D.prototype.closestTimeToPoint = function (p) {
        return this.direction.dot(p.sub(this.origin)) / this.direction.dot(this.direction);
    };
    Ray3D.prototype.closestPoint = function (p) {
        var t = this.closestTimeToPoint(p);
        return this.direction.scale(t).add(this.origin);
    };
    Ray3D.prototype.distanceFromPoint = function (p) {
        return this.closestPoint(p).distance(p);
    };
    Ray3D.prototype.collisionTimeWithPlane = function (plane) {
        // (ro + rd.t).n + d = 0
        // ro.n + rd.n.t + d = 0
        // rd.n.t = -(ro.n + d)
        // t = -(ro.n + d) / (rd.n)
        var t = -(this.origin.dot(plane.n) + plane.d) / (this.direction.dot(plane.n));
        if (!isFinite(t)) {
            return Option_1.Option.none();
        }
        return Option_1.Option.some(t);
    };
    Ray3D.prototype.collisionWithPlane = function (plane) {
        var _this = this;
        return this.collisionTimeWithPlane(plane).map(function (t) { return _this.positionFromTime(t); });
    };
    Ray3D.closestTimeOnRay1ToRay2 = function (ray1, ray2) {
        var ro1 = ray1.origin;
        var rd1 = ray1.direction;
        var ro2 = ray2.origin;
        var rd2 = ray2.direction;
        var a = rd1.sub(rd2.scale(rd1.dot(rd2) / rd2.dot(rd2)));
        var b = ro1.sub(ro2).sub(rd2.scale(ro1.sub(ro2).dot(rd2) / rd2.dot(rd2)));
        var t = -a.dot(b) / a.dot(a);
        if ( /* isNaN */isNaN(t) || /* isInfinite */ (function (value) { return Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value; })(t)) {
            return Option_1.Option.none();
        }
        return Option_1.Option.some(t);
    };
    Ray3D.prototype.closestTimeOnThisRayWithOtherRay = function (otherRay) {
        return Ray3D.closestTimeOnRay1ToRay2(this, otherRay);
    };
    Ray3D.prototype.toString = function () {
        return "(origin: " + this.origin.toString() + ", direction: " + this.direction.toString() + ")";
    };
    return Ray3D;
}());
exports.Ray3D = Ray3D;
//# sourceMappingURL=Ray3D.js.map
});
___scope___.file("app/math/Vector2D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3D_1 = require("./Vector3D");
var Vector2D = /** @class */ (function () {
    function Vector2D(x, y) {
        this._x = x;
        this._y = y;
    }
    Vector2D.create = function (x, y) {
        return new Vector2D(x, y);
    };
    Vector2D.prototype.toVector3D = function () {
        return Vector3D_1.Vector3D.create(this.x, this.y, 0.0);
    };
    Object.defineProperty(Vector2D.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Vector2D.prototype.dot = function (rhs) {
        return this.x * rhs.x + this.y * rhs.y;
    };
    Vector2D.prototype.add = function (rhs) {
        return Vector2D.create(this.x + rhs.x, this.y + rhs.y);
    };
    Vector2D.prototype.sub = function (rhs) {
        return Vector2D.create(this.x - rhs.x, this.y - rhs.y);
    };
    Vector2D.prototype.scale = function (a) {
        return Vector2D.create(this.x * a, this.y * a);
    };
    Vector2D.prototype.cross = function (rhs) {
        return this.x * rhs.y - this.y * rhs.x;
    };
    Vector2D.prototype.normalize = function () {
        return this.scale(1.0 / this.length());
    };
    Vector2D.prototype.lengthSquared = function () {
        return this.dot(this);
    };
    Vector2D.prototype.length = function () {
        return Math.sqrt(this.lengthSquared());
    };
    Vector2D.prototype.distanceSquared = function (rhs) {
        var dx = rhs.x - this.x;
        var dy = rhs.y - this.y;
        return dx * dx + dy * dy;
    };
    Vector2D.prototype.distance = function (rhs) {
        return Math.sqrt(this.distanceSquared(rhs));
    };
    Vector2D.prototype.toString = function () {
        return "(" + /* toString */ ('' + (this.x)) + ", " + /* toString */ ('' + (this.y)) + ")";
    };
    Vector2D.zero = Vector2D.create(0.0, 0.0);
    Vector2D.unitX = Vector2D.create(1.0, 0.0);
    Vector2D.unitY = Vector2D.create(0.0, 1.0);
    Vector2D.negUnitX = Vector2D.create(-1.0, 0.0);
    Vector2D.negUnitY = Vector2D.create(0.0, -1.0);
    return Vector2D;
}());
exports.Vector2D = Vector2D;
//# sourceMappingURL=Vector2D.js.map
});
___scope___.file("app/math/Vector3D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2D_1 = require("./Vector2D");
var Vector3D = /** @class */ (function () {
    function Vector3D(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    Vector3D.zero_$LI$ = function () { if (Vector3D.zero == null)
        Vector3D.zero = Vector3D.create(0, 0, 0); return Vector3D.zero; };
    ;
    Vector3D.unitX_$LI$ = function () { if (Vector3D.unitX == null)
        Vector3D.unitX = Vector3D.create(1, 0, 0); return Vector3D.unitX; };
    ;
    Vector3D.unitY_$LI$ = function () { if (Vector3D.unitY == null)
        Vector3D.unitY = Vector3D.create(0, 1, 0); return Vector3D.unitY; };
    ;
    Vector3D.unitZ_$LI$ = function () { if (Vector3D.unitZ == null)
        Vector3D.unitZ = Vector3D.create(0, 0, 1); return Vector3D.unitZ; };
    ;
    Vector3D.negUnitX_$LI$ = function () { if (Vector3D.negUnitX == null)
        Vector3D.negUnitX = Vector3D.create(-1, 0, 0); return Vector3D.negUnitX; };
    ;
    Vector3D.negUnitY_$LI$ = function () { if (Vector3D.negUnitY == null)
        Vector3D.negUnitY = Vector3D.create(0, -1, 0); return Vector3D.negUnitY; };
    ;
    Vector3D.negUnitZ_$LI$ = function () { if (Vector3D.negUnitZ == null)
        Vector3D.negUnitZ = Vector3D.create(0, 0, -1); return Vector3D.negUnitZ; };
    ;
    Vector3D.create = function (x, y, z) {
        return new Vector3D(x, y, z);
    };
    Vector3D.prototype.xyToVector2D = function () {
        return Vector2D_1.Vector2D.create(this.x, this.y);
    };
    Vector3D.prototype.allFinite = function () {
        return Number.isFinite(this.x) && Number.isFinite(this.y) && Number.isFinite(this.z);
    };
    Object.defineProperty(Vector3D.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3D.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3D.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: true,
        configurable: true
    });
    Vector3D.prototype.getX = function () {
        return this._x;
    };
    Vector3D.prototype.getY = function () {
        return this._y;
    };
    Vector3D.prototype.getZ = function () {
        return this._z;
    };
    Vector3D.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    Vector3D.prototype.add = function (v) {
        return Vector3D.create(this.x + v.x, this.y + v.y, this.z + v.z);
    };
    Vector3D.prototype.sub = function (v) {
        return Vector3D.create(this.x - v.x, this.y - v.y, this.z - v.z);
    };
    Vector3D.prototype.scale = function (a) {
        return Vector3D.create(this.x * a, this.y * a, this.z * a);
    };
    Vector3D.prototype.cross = function (v) {
        return Vector3D.create(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    };
    Vector3D.prototype.normalize = function () {
        var a = this.length();
        return Vector3D.create(this.x / a, this.y / a, this.z / a);
    };
    Vector3D.prototype.lengthSquared = function () {
        return this.dot(this);
    };
    Vector3D.prototype.length = function () {
        return Math.sqrt(this.lengthSquared());
    };
    Vector3D.prototype.distanceSquared = function (v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        var dz = this.z - v.z;
        return dx * dx + dy * dy + dz * dz;
    };
    Vector3D.prototype.distance = function (v) {
        return Math.sqrt(this.distanceSquared(v));
    };
    /**
     *
     * @return {string}
     */
    Vector3D.prototype.toString = function () {
        return "(" + /* toString */ ('' + (this.x)) + ", " + /* toString */ ('' + (this.y)) + ", " + /* toString */ ('' + (this.z)) + ")";
    };
    return Vector3D;
}());
exports.Vector3D = Vector3D;
Vector3D.negUnitZ_$LI$();
Vector3D.negUnitY_$LI$();
Vector3D.negUnitX_$LI$();
Vector3D.unitZ_$LI$();
Vector3D.unitY_$LI$();
Vector3D.unitX_$LI$();
Vector3D.zero_$LI$();
//# sourceMappingURL=Vector3D.js.map
});
___scope___.file("app/model/AppModel.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var MouseButton_1 = require("../MouseButton");
var Option_1 = require("../Option");
var DrawCircleMode_1 = require("../modes/DrawCircleMode");
var DrawLineMode_1 = require("../modes/DrawLineMode");
var FilletLinesMode_1 = require("../modes/FilletLinesMode");
var IdleMode_1 = require("../modes/IdleMode");
var MutableEcsScene_1 = require("../ecs/MutableEcsScene");
var AppModel = /** @class */ (function () {
    function AppModel(params) {
        var _this = this;
        sodium.Transaction.run(function () {
            var scene = new MutableEcsScene_1.MutableEcsScene();
            var sceneCtx = scene.sceneContext();
            var csSceneCtxOp = new sodium.CellSink(Option_1.Option.some(sceneCtx));
            var slMode = new sodium.StreamLoop();
            var cMode = slMode.hold(new IdleMode_1.IdleMode());
            var sUpdate = sodium.Cell.switchS(cMode.map(function (mode) { return mode.sUpdate; }));
            var sFinished = sodium.Cell.switchS(cMode.map(function (mode) { return mode.sFinished; }));
            var cWorldSpaceOverlay = sodium.Cell.switchC(cMode.map(function (mode) { return mode.cWorldSpaceOverlay; }));
            var cScreenSpaceOverlay = sodium.Cell.switchC(cMode.map(function (mode) { return mode.cScreenSpaceOverlay; }));
            var cFloatingLengthAngles = sodium.Cell.switchC(cMode.map(function (mode) { return mode.cFloatingLengthAngles; }));
            var cAskValuesAt = sodium.Cell.switchC(cMode.map(function (mode) { return mode.cAskValuesAt; }));
            sUpdate.listen(function (update) {
                update(sceneCtx);
                window.setTimeout(function () {
                    csSceneCtxOp.send(Option_1.Option.some(sceneCtx));
                });
            });
            var sMouseLeftPressed = params.sMousePressed
                .filter(function (mouseBtn) { return mouseBtn == MouseButton_1.MouseButton.Left; });
            var cScale = new sodium.Cell(1.0);
            slMode.loop(params.sDrawLine
                .map(function (unused) {
                return new DrawLineMode_1.DrawLineMode({
                    cSceneCtxOp: csSceneCtxOp,
                    cMousePosOp: params.cMousePosOp,
                    sMousePressed: sMouseLeftPressed,
                    cScreenPointToWorldRayOp: params.cScreenPointToWorldRayOp,
                    cProjectWorldPointToScreenOp: params.cProjectWorldPointToScreenOp,
                    sReplyValueEntered: new sodium.Stream(),
                    sLengthAngleEntered: params.sLengthAngleEntered,
                    cScale: cScale
                });
            })
                .orElse(params.sDrawCircle
                .map(function (unused) {
                return new DrawCircleMode_1.DrawCircleMode({
                    cSceneCtxOp: csSceneCtxOp,
                    cMousePosOp: params.cMousePosOp,
                    sMousePressed: sMouseLeftPressed,
                    cScreenPointToWorldRayOp: params.cScreenPointToWorldRayOp,
                    cProjectWorldPointToScreenOp: params.cProjectWorldPointToScreenOp,
                    sReplyValueEntered: params.sReplyValueEntered,
                    cScale: cScale
                });
            }))
                .orElse(params.sFillet
                .map(function (unused) {
                return new FilletLinesMode_1.FilletLinesMode({
                    cSceneCtxOp: csSceneCtxOp,
                    cMousePosOp: params.cMousePosOp,
                    sMousePressed: sMouseLeftPressed,
                    cScreenPointToWorldRayOp: params.cScreenPointToWorldRayOp,
                    cProjectWorldPointToScreenOp: params.cProjectWorldPointToScreenOp,
                    sReplyValueChanged: params.sReplyValueChanged,
                    sReplyValueEntered: params.sReplyValueEntered,
                    cScale: cScale
                });
            }))
                .orElse(sFinished.map(function (unused) { return new IdleMode_1.IdleMode(); })));
            _this._cSceneCtxOp = csSceneCtxOp;
            _this._cWorldSpaceOverlay = cWorldSpaceOverlay;
            _this._cScreenSpaceOverlay = cScreenSpaceOverlay;
            _this._cFloatingLengthAngles = cFloatingLengthAngles;
            _this._cAskValuesAt = cAskValuesAt;
        });
    }
    Object.defineProperty(AppModel.prototype, "cSceneCtxOp", {
        get: function () {
            return this._cSceneCtxOp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModel.prototype, "cWorldSpaceOverlay", {
        get: function () {
            return this._cWorldSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModel.prototype, "cScreenSpaceOverlay", {
        get: function () {
            return this._cScreenSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModel.prototype, "cFloatingLengthAngles", {
        get: function () {
            return this._cFloatingLengthAngles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModel.prototype, "cAskValuesAt", {
        get: function () {
            return this._cAskValuesAt;
        },
        enumerable: true,
        configurable: true
    });
    return AppModel;
}());
exports.AppModel = AppModel;
//# sourceMappingURL=AppModel.js.map
});
___scope___.file("app/modes/DrawCircleMode.js", function(exports, require, module, __filename, __dirname){

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
var sodium = require("sodiumjs");
var DrawCircleModel_1 = require("./DrawCircleModel");
var Mode_1 = require("./Mode");
var Axes2DComponent_1 = require("../ecs/components/Axes2DComponent");
var Line3DComponent_1 = require("../ecs/components/Line3DComponent");
var Axes2D_1 = require("../math/Axes2D");
var Axes3D_1 = require("../math/Axes3D");
var ArrayUtil_1 = require("../ArrayUtil");
var Complex_1 = require("../math/Complex");
var DrawCircleMode = /** @class */ (function (_super) {
    __extends(DrawCircleMode, _super);
    function DrawCircleMode(params) {
        var _this = _super.call(this) || this;
        sodium.Transaction.run(function () {
            var slReset = new sodium.StreamLoop();
            var cLines = params.cSceneCtxOp.map(function (sceneCtxOp) {
                return sceneCtxOp
                    .map(function (sceneCtx) {
                    return ArrayUtil_1.arrayBind(sceneCtx
                        .entitiesWithAllComponents([Line3DComponent_1.Line3DComponent.ecsComponent.type()]), function (lineId) {
                        return sceneCtx
                            .getComponent(lineId, Line3DComponent_1.Line3DComponent.ecsComponent)
                            .map(function (x) { return [x.line]; })
                            .orSome([]);
                    });
                })
                    .orSome([]);
            });
            var cPoints = cLines.map(function (lines) {
                return ArrayUtil_1.arrayBind(lines, function (line) { return [line.v1, line.v2]; });
            });
            var drawCircleModel = new DrawCircleModel_1.DrawCircleModel(new sodium.Cell(Axes3D_1.Axes3D.identity), params.cMousePosOp, params.sMousePressed, cPoints, params.cScreenPointToWorldRayOp, params.cProjectWorldPointToScreenOp, params.sReplyValueEntered, params.cScale, new sodium.Cell(DrawCircleModel_1.DrawCircleModel.InsertStyle.Radius));
            var sUpdate = drawCircleModel
                .sInsertCircle()
                .map(function (circle) {
                return function (sceneCtx) {
                    var o = circle._1.origin;
                    var u = circle._1.u;
                    var axes = Axes2D_1.Axes2D.create(o.xyToVector2D(), Complex_1.Complex.xy(u.xyToVector2D().normalize()));
                    sceneCtx.createEntity([
                        Axes2DComponent_1.Axes2DComponent.create(axes),
                        circle._2
                    ]);
                };
            });
            var sFinished = sUpdate.mapTo(sodium.Unit.UNIT);
            slReset.loop(sUpdate.mapTo(sodium.Unit.UNIT));
            _this._sUpdate = sUpdate;
            _this._sFinished = sFinished;
            _this._cWorldSpaceOverlay = drawCircleModel.cWorldSpaceOverlay;
            _this._cScreenSpaceOverlay = drawCircleModel.cScreenSpaceOverlay;
            _this._cAskValuesAt =
                drawCircleModel
                    .sAskValuesAt()
                    .orElse(drawCircleModel.sHideAskValuesAt().mapTo([]))
                    .hold([]);
        });
        return _this;
    }
    Object.defineProperty(DrawCircleMode.prototype, "sFinished", {
        get: function () {
            return this._sFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawCircleMode.prototype, "sUpdate", {
        get: function () {
            return this._sUpdate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawCircleMode.prototype, "cWorldSpaceOverlay", {
        get: function () {
            return this._cWorldSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawCircleMode.prototype, "cScreenSpaceOverlay", {
        get: function () {
            return this._cScreenSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawCircleMode.prototype, "cAskValuesAt", {
        get: function () {
            return this._cAskValuesAt;
        },
        enumerable: true,
        configurable: true
    });
    return DrawCircleMode;
}(Mode_1.Mode));
exports.DrawCircleMode = DrawCircleMode;
//# sourceMappingURL=DrawCircleMode.js.map
});
___scope___.file("app/modes/DrawCircleModel.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var AskValueAtParams_1 = require("./AskValueAtParams");
var ArrayUtil_1 = require("../ArrayUtil");
var Lazy_1 = require("../Lazy");
var Option_1 = require("../Option");
var SodiumUtil = require("../SodiumUtil");
var Tuples_1 = require("../Tuples");
var CircleComponent_1 = require("../ecs/components/CircleComponent");
var Axes3D_1 = require("../math/Axes3D");
var Plane3D_1 = require("../math/Plane3D");
var Vector2D_1 = require("../math/Vector2D");
var DrawCircleModel = /** @class */ (function () {
    function DrawCircleModel(cWorkingAxes, cMousePosOp, sMousePressed, cGivenSnapPoints, cScreenPointToWorldRayOp, cProjectWorldPointToScreenOp, sReplyValueEntered, cScale, cInsertStyle) {
        var _this = this;
        this.__sAskValuesAt = null;
        this.__sHideAskValuesAt = null;
        this.__sInsertCircle = null;
        sodium.Transaction.run(function () {
            var slReset = (new sodium.StreamLoop());
            var cWorkingPlane = cWorkingAxes.map(function (workingAxes) {
                return Plane3D_1.Plane3D.fromKnownPtAndNormal(workingAxes.origin, workingAxes.w);
            });
            var cMouseWorkingPlanePosOp = cWorkingPlane.lift3(cMousePosOp, cScreenPointToWorldRayOp, function (workingPlane, mousePosOp, screenPointToWorldRayOp) {
                return mousePosOp
                    .bind(screenPointToWorldRayOp)
                    .bind(function (mouseRay) { return mouseRay.collisionWithPlane(workingPlane); });
            });
            var cSnapPoints = cWorkingPlane.lift(cGivenSnapPoints, function (workingPlane, givenSnapPoints) {
                return givenSnapPoints.map(function (p) { return workingPlane.closestPoint(p); });
            });
            var cSnapPointUnderMouseOp = cMousePosOp.lift3(cSnapPoints, cProjectWorldPointToScreenOp, function (mousePosOp, snapPoints, projectWorldPointToScreenOp) { return Lazy_1.Lazy.create(function () {
                return mousePosOp.bind(function (mousePos) {
                    return ArrayUtil_1.arrayReduce(ArrayUtil_1.arrayBind(snapPoints, function (snapPoint) {
                        return projectWorldPointToScreenOp(snapPoint)
                            .map(function (pt) {
                            var screenDistSquared = pt.distanceSquared(mousePos);
                            if (screenDistSquared > DrawCircleModel.SNAP_SCREEN_DIST * DrawCircleModel.SNAP_SCREEN_DIST) {
                                return [];
                            }
                            return [Tuples_1.T2.of(snapPoint, screenDistSquared)];
                        })
                            .orSome([]);
                    }), function (arg0, arg1) { return arg0._2 < arg1._2 ? arg0 : arg1; })
                        .map(function (x) { return x._1; });
                });
            }); });
            var slFirstPointOp = (new sodium.StreamLoop());
            var cFirstPointOp = slFirstPointOp.hold(Option_1.Option.none());
            slFirstPointOp.loop(SodiumUtil
                .streamFilterOption(sMousePressed
                .gate(cFirstPointOp.map(function (x) { return x.isNone; }))
                .snapshot1(cSnapPointUnderMouseOp)
                .snapshot(cMouseWorkingPlanePosOp, function (snapPointUnderMouseOp, mouseWorkingPlanePosOp) {
                return snapPointUnderMouseOp.get().orElse(mouseWorkingPlanePosOp);
            }))
                .map(function (arg0) { return Option_1.Option.some(arg0); })
                .orElse(slReset.mapTo(Option_1.Option.none())));
            var cSnapDirections = cWorkingAxes.map(function (workingAxes) { /* asList */ return [workingAxes.u, workingAxes.v]; });
            var cSnapDirectionPointUnderMouseOp = cMousePosOp.lift5(cMouseWorkingPlanePosOp, cFirstPointOp, cSnapDirections, cProjectWorldPointToScreenOp, function (mousePosOp, mouseWorkingPlanePosOp, firstPointOp, snapDirections, projectWorldPointToScreenOp) { return Lazy_1.Lazy.create(function () {
                return Option_1.Option.join(mousePosOp.lift3(mouseWorkingPlanePosOp, firstPointOp, function (mousePos, mouseWorkingPlanePos, firstPoint) {
                    return ArrayUtil_1.arrayReduce(ArrayUtil_1.arrayBind(snapDirections, function (snapDirection) {
                        var pt = firstPoint.add(snapDirection.scale(mouseWorkingPlanePos.sub(firstPoint).dot(snapDirection)));
                        return projectWorldPointToScreenOp(pt)
                            .map(function (pt2) {
                            var screenDistSquared = pt2.distanceSquared(mousePos);
                            if (screenDistSquared > DrawCircleModel.SNAP_SCREEN_DIST * DrawCircleModel.SNAP_SCREEN_DIST) {
                                return [];
                            }
                            return [Tuples_1.T2.of(pt, screenDistSquared)];
                        })
                            .orSome([]);
                    }), function (arg0, arg1) { return arg0._2 < arg1._2 ? arg0 : arg1; })
                        .map(function (x) { return x._1; });
                }));
            }); });
            var cMovingSecondPointOp = cFirstPointOp.lift4(cSnapPointUnderMouseOp, cSnapDirectionPointUnderMouseOp, cMouseWorkingPlanePosOp, function (firstPointOp, snapPointUnderMouseOp, snapDirectionPointUnderMouseOp, mouseWorkingPlanePosOp) {
                return firstPointOp.isNone ? Option_1.Option.none() : snapPointUnderMouseOp.get().orElse_(function () { return snapDirectionPointUnderMouseOp.get(); }).orElse(mouseWorkingPlanePosOp);
            });
            var cMovingCircleOp = cWorkingAxes.lift4(cInsertStyle, cFirstPointOp, cMovingSecondPointOp, function (workingAxes, insertStyle, firstPointOp, movingSecondPointOp) {
                return firstPointOp.lift2(movingSecondPointOp, function (firstPoint, movingSecondPoint) {
                    switch ((insertStyle)) {
                        case DrawCircleModel.InsertStyle.Radius:
                            return Tuples_1.T2.of(Axes3D_1.Axes3D.create(firstPoint, workingAxes.orientation), CircleComponent_1.CircleComponent.withRadius(firstPoint.distance(movingSecondPoint)));
                        case DrawCircleModel.InsertStyle.Diameter:
                            return Tuples_1.T2.of(Axes3D_1.Axes3D.create(firstPoint.add(movingSecondPoint).scale(0.5), workingAxes.orientation), CircleComponent_1.CircleComponent.withRadius(0.5 * firstPoint.distance(movingSecondPoint)));
                        default:
                            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.IllegalStateException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                    }
                });
            });
            var sInitMovingCircleOp = SodiumUtil.streamFilterOption(sodium.Operational
                .updates(cMovingCircleOp)
                .collect(Option_1.Option.none(), function (newValue, oldValue) {
                var result;
                if (newValue.isSome != oldValue.isSome) {
                    result = Option_1.Option.some(newValue);
                }
                else {
                    result = Option_1.Option.none();
                }
                return new sodium.Tuple2(result, newValue);
            }));
            _this.__sAskValuesAt =
                SodiumUtil
                    .streamFilterOption(sInitMovingCircleOp)
                    .snapshot3(cInsertStyle, cScale, function (initCircle, initInsertStyle, initScale) {
                    var initValue;
                    switch ((initInsertStyle)) {
                        case DrawCircleModel.InsertStyle.Radius:
                            initValue = initCircle._2.radius() / initScale;
                            break;
                        case DrawCircleModel.InsertStyle.Diameter:
                            initValue = 2.0 * initCircle._2.radius() / initScale;
                            break;
                        default:
                            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.IllegalStateException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                    }
                    return /* singletonList */ [
                        new AskValueAtParams_1.AskValueAtParams({
                            id: 1,
                            cLabelOp: cInsertStyle.map(function (insertStyle) {
                                switch ((insertStyle)) {
                                    case DrawCircleModel.InsertStyle.Radius:
                                        return Option_1.Option.some("Radius:");
                                    case DrawCircleModel.InsertStyle.Diameter:
                                        return Option_1.Option.some("Diameter:");
                                    default:
                                        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.IllegalStateException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                                }
                            }),
                            cPosition: cMousePosOp.lift3(cMovingSecondPointOp, cProjectWorldPointToScreenOp, function (mousePosOp, movingSecondPointOp, projectWorldPointToScreenOp) {
                                return movingSecondPointOp
                                    .bind(projectWorldPointToScreenOp)
                                    .orElse(mousePosOp)
                                    .map(function (pos) { return pos.add(Vector2D_1.Vector2D.create(0.0, -20.0)); })
                                    .orSome(Vector2D_1.Vector2D.zero);
                            }),
                            initialValue: initValue,
                            sSetValue: SodiumUtil.streamFilterOption(sodium.Operational.updates(cMovingCircleOp.lift3(cInsertStyle, cScale, function (movingCircleOp, insertStyle, scale) {
                                return movingCircleOp.map(function (movingCircle) {
                                    switch ((insertStyle)) {
                                        case DrawCircleModel.InsertStyle.Radius:
                                            return movingCircle._2.radius() / scale;
                                        case DrawCircleModel.InsertStyle.Diameter:
                                            return 2.0 * movingCircle._2.radius() / scale;
                                        default:
                                            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.IllegalStateException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                                    }
                                });
                            })))
                        })
                    ];
                });
            _this.__sHideAskValuesAt = sInitMovingCircleOp.filter(function (x) { return x.isNone; }).mapTo(sodium.Unit.UNIT);
            _this.__sInsertCircle =
                SodiumUtil
                    .streamFilterOption(sReplyValueEntered.snapshot6(cWorkingAxes, cInsertStyle, cFirstPointOp, cMovingSecondPointOp, cScale, function (replyValueEntered, workingAxes, insertStyle, firstPointOp, movingSecondPointOp, scale) {
                    return firstPointOp.lift2(movingSecondPointOp, function (firstPoint, movingSecondPoint) {
                        switch ((insertStyle)) {
                            case DrawCircleModel.InsertStyle.Radius:
                                return Tuples_1.T2.of(Axes3D_1.Axes3D.Builder.fromOriginOrientation().setOrigin(firstPoint).setOrientation(workingAxes.orientation).build(), CircleComponent_1.CircleComponent.withRadius(replyValueEntered._2 * scale));
                            case DrawCircleModel.InsertStyle.Diameter:
                                {
                                    var secondPoint = movingSecondPoint.sub(firstPoint).normalize().scale(replyValueEntered._2 * scale);
                                    return Tuples_1.T2.of(Axes3D_1.Axes3D.Builder.fromOriginOrientation().setOrigin(firstPoint.add(secondPoint).scale(0.5)).setOrientation(workingAxes.orientation).build(), CircleComponent_1.CircleComponent.withRadius(0.5 * replyValueEntered._2 * scale));
                                }
                                ;
                            default:
                                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.IllegalStateException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                        }
                    });
                }))
                    .orElse(SodiumUtil.streamFilterOption(sMousePressed.snapshot1(cMovingCircleOp)));
            slReset.loop(_this.__sInsertCircle.mapTo(sodium.Unit.UNIT));
            _this._cWorldSpaceOverlay =
                cMovingCircleOp.map(function (movingCircleOp) {
                    return function (canvasCtx) {
                        if (movingCircleOp.isNone) {
                            return;
                        }
                        var movingCircle = movingCircleOp.fromSome();
                        canvasCtx.save();
                        canvasCtx.fillStyle = "#0000FF";
                        canvasCtx.beginPath();
                        canvasCtx.arc(movingCircle._1.origin.x, movingCircle._1.origin.y, movingCircle._2.radius(), 0.0, 2.0 * Math.PI);
                        canvasCtx.stroke();
                        canvasCtx.restore();
                    };
                });
            _this._cScreenSpaceOverlay =
                cSnapPointUnderMouseOp.lift4(cFirstPointOp, cSnapDirectionPointUnderMouseOp, cProjectWorldPointToScreenOp, function (snapPointUnderMouseOp, firstPointOp, snapDirectionPointUnderMouseOp, projectWorldPointToScreenOp) {
                    return function (canvasCtx) {
                        var projectedSnapPointUnderMouseOp = snapPointUnderMouseOp.get().bind(projectWorldPointToScreenOp);
                        var projectedFirstPointOp = firstPointOp.bind(projectWorldPointToScreenOp);
                        var projectedSnapDirectionPointUnderMouseOp = snapDirectionPointUnderMouseOp.get().bind(projectWorldPointToScreenOp);
                        if (projectedSnapPointUnderMouseOp.isSome) {
                            canvasCtx.save();
                            var projectedSnapPointUnderMouse = projectedSnapDirectionPointUnderMouseOp.fromSome();
                            canvasCtx.fillStyle = "#0000FF";
                            canvasCtx.beginPath();
                            canvasCtx.arc(projectedSnapPointUnderMouse.x, projectedSnapPointUnderMouse.y, DrawCircleModel.SNAP_PT_RADIUS, 0.0, 2.0 * Math.PI);
                            canvasCtx.fill();
                            canvasCtx.restore();
                        }
                        if (projectedFirstPointOp.isSome) {
                            var projectedFirstPoint = projectedFirstPointOp.fromSome();
                            canvasCtx.save();
                            canvasCtx.fillStyle = "#00FF00";
                            canvasCtx.beginPath();
                            canvasCtx.arc(projectedFirstPoint.x, projectedFirstPoint.y, DrawCircleModel.SNAP_PT_RADIUS, 0.0, 2.0 * Math.PI);
                            canvasCtx.fill();
                            canvasCtx.restore();
                        }
                        if (projectedSnapDirectionPointUnderMouseOp.isSome) {
                            var projectedSnapDirectionPointUnderMouse = projectedSnapDirectionPointUnderMouseOp.fromSome();
                            canvasCtx.save();
                            canvasCtx.fillStyle = "#0000FF";
                            canvasCtx.beginPath();
                            canvasCtx.arc(projectedSnapDirectionPointUnderMouse.x, projectedSnapDirectionPointUnderMouse.y, DrawCircleModel.SNAP_PT_RADIUS, 0.0, 2.0 * Math.PI);
                            canvasCtx.fill();
                            canvasCtx.restore();
                        }
                    };
                });
        });
    }
    Object.defineProperty(DrawCircleModel.prototype, "cWorldSpaceOverlay", {
        get: function () {
            return this._cWorldSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawCircleModel.prototype, "cScreenSpaceOverlay", {
        get: function () {
            return this._cScreenSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    DrawCircleModel.prototype.sAskValuesAt = function () {
        return this.__sAskValuesAt;
    };
    DrawCircleModel.prototype.sHideAskValuesAt = function () {
        return this.__sHideAskValuesAt;
    };
    DrawCircleModel.prototype.sInsertCircle = function () {
        return this.__sInsertCircle;
    };
    DrawCircleModel.SNAP_SCREEN_DIST = 15.0;
    DrawCircleModel.SNAP_PT_RADIUS = 5.0;
    return DrawCircleModel;
}());
exports.DrawCircleModel = DrawCircleModel;
DrawCircleModel["__class"] = "DrawCircleModel";
(function (DrawCircleModel) {
    var InsertStyle;
    (function (InsertStyle) {
        InsertStyle[InsertStyle["Radius"] = 0] = "Radius";
        InsertStyle[InsertStyle["Diameter"] = 1] = "Diameter";
    })(InsertStyle = DrawCircleModel.InsertStyle || (DrawCircleModel.InsertStyle = {}));
})(DrawCircleModel = exports.DrawCircleModel || (exports.DrawCircleModel = {}));
exports.DrawCircleModel = DrawCircleModel;
//# sourceMappingURL=DrawCircleModel.js.map
});
___scope___.file("app/modes/AskValueAtParams.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AskValueAtParams = /** @class */ (function () {
    function AskValueAtParams(params) {
        this._id = params.id;
        this._cLabelOp = params.cLabelOp;
        this._cPosition = params.cPosition;
        this._initialValue = params.initialValue;
        this._sSetValue = params.sSetValue;
    }
    Object.defineProperty(AskValueAtParams.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AskValueAtParams.prototype, "cLabelOp", {
        get: function () {
            return this._cLabelOp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AskValueAtParams.prototype, "cPosition", {
        get: function () {
            return this._cPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AskValueAtParams.prototype, "initialValue", {
        get: function () {
            return this._initialValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AskValueAtParams.prototype, "sSetValue", {
        get: function () {
            return this._sSetValue;
        },
        enumerable: true,
        configurable: true
    });
    return AskValueAtParams;
}());
exports.AskValueAtParams = AskValueAtParams;
AskValueAtParams["__class"] = "AskValueAtParams";
//# sourceMappingURL=AskValueAtParams.js.map
});
___scope___.file("app/ArrayUtil.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option_1 = require("./Option");
function arrayIntRange(fromInc, toExc) {
    var result = [];
    for (var i = fromInc; i < toExc; ++i) {
        result.push(i);
    }
    return result;
}
exports.arrayIntRange = arrayIntRange;
function arrayBind(x, f) {
    return arrayJoin(x.map(f));
}
exports.arrayBind = arrayBind;
function arrayJoin(x) {
    return [].concat.apply([], x);
}
exports.arrayJoin = arrayJoin;
function arrayIncludes(array, elem) {
    for (var i = 0; i < array.length; ++i) {
        if (array[i] == elem) {
            return true;
        }
    }
    return false;
}
exports.arrayIncludes = arrayIncludes;
function arrayReduce(array, fn) {
    if (array.length == 0) {
        return Option_1.Option.none();
    }
    var accum = array[0];
    for (var i = 1; i < array.length; ++i) {
        accum = fn(accum, array[i]);
    }
    return Option_1.Option.some(accum);
}
exports.arrayReduce = arrayReduce;
function arraySomes(array) {
    var result = [];
    array.forEach(function (aOp) {
        if (aOp.isSome) {
            result.push(aOp.fromSome());
        }
    });
    return result;
}
exports.arraySomes = arraySomes;
//# sourceMappingURL=ArrayUtil.js.map
});
___scope___.file("app/Lazy.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option_1 = require("./Option");
var Lazy = /** @class */ (function () {
    function Lazy(calcOp, cacheOp) {
        this._calcOp = calcOp;
        this._cacheOp = cacheOp;
    }
    Lazy.create = function (calc) {
        return new Lazy(Option_1.Option.some(calc), Option_1.Option.none());
    };
    Lazy.pure = function (a) {
        return new Lazy(Option_1.Option.none(), Option_1.Option.some(a));
    };
    Lazy.prototype.get = function () {
        if (this._cacheOp.is_some) {
            return this._cacheOp.fromSome();
        }
        else {
            var result = this._calcOp.fromSome()();
            this._cacheOp = Option_1.Option.some(result);
            this._calcOp = Option_1.Option.none();
            return result;
        }
    };
    Lazy.prototype.map = function (fn) {
        var _this = this;
        return Lazy.create(function () { return fn(_this.get()); });
    };
    Lazy.prototype.lift2 = function (lb, fn) {
        var _this = this;
        return Lazy.create(function () { return fn(_this.get(), lb.get()); });
    };
    Lazy.prototype.lift3 = function (lb, lc, fn) {
        var _this = this;
        return Lazy.create(function () { return fn(_this.get(), lb.get(), lc.get()); });
    };
    Lazy.prototype.lift4 = function (lb, lc, ld, fn) {
        var _this = this;
        return Lazy.create(function () { return fn(_this.get(), lb.get(), lc.get(), ld.get()); });
    };
    Lazy.prototype.lift5 = function (lb, lc, ld, le, fn) {
        var _this = this;
        return Lazy.create(function () { return fn(_this.get(), lb.get(), lc.get(), ld.get(), le.get()); });
    };
    Lazy.prototype.lift6 = function (lb, lc, ld, le, lf, fn) {
        var _this = this;
        return Lazy.create(function () { return fn(_this.get(), lb.get(), lc.get(), ld.get(), le.get(), lf.get()); });
    };
    return Lazy;
}());
exports.Lazy = Lazy;
//# sourceMappingURL=Lazy.js.map
});
___scope___.file("app/SodiumUtil.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var SodiumUtil = require("./SodiumUtil");
var Option_1 = require("./Option");
function fixDeps(deps) {
    var deps2 = deps || [];
    if (deps2.length == 0) {
        return deps2;
    }
    deps2 = deps2.slice(0);
    for (var i = deps2.length - 1; i >= 0; --i) {
        if (deps2[i] == undefined) {
            deps2.splice(i, 1);
        }
    }
    return deps2;
}
function cellLift2(ca, cb, fn, deps) {
    var deps2 = fixDeps(deps);
    return ca.lift(cb, sodium.lambda2(function (a, b) { return function () { return fn(a, b); }; }, deps2)).map(function (x) { return x(); });
}
exports.cellLift2 = cellLift2;
function cellLift3(ca, cb, cc, fn, deps) {
    var deps2 = fixDeps(deps);
    return ca.lift3(cb, cc, sodium.lambda3(function (a, b, c) { return function () { return fn(a, b, c); }; }, deps2)).map(function (x) { return x(); });
}
exports.cellLift3 = cellLift3;
function cellLiftArray(ca) {
    return arrayOfCellToCellOfArray(ca, 0, ca.length).map(sodium.lambda1(function (x) { return x; }, ca));
}
exports.cellLiftArray = cellLiftArray;
function streamFilterOption(sa) {
    return sa.filter(function (a) { return a.is_some; }).map(function (a) { return a.fromSome(); });
}
exports.streamFilterOption = streamFilterOption;
function cellCalm(eqFn, ca) {
    return sodium.Transaction.run(function () {
        return streamFilterOption(sodium.Operational
            .updates(ca)
            .collectLazy(ca.sampleLazy(), function (newA, oldA) {
            var result;
            if (eqFn(newA, oldA)) {
                result = Option_1.Option.none();
            }
            else {
                result = Option_1.Option.some(newA);
            }
            return new sodium.Tuple2(result, newA);
        }))
            .holdLazy(ca.sampleLazy());
    });
}
exports.cellCalm = cellCalm;
function cellPartialCalm(partialEqFn, ca) {
    // the implementation happens to be identical to cellCalm<A>, even though intent is different.
    return cellCalm(partialEqFn, ca);
}
exports.cellPartialCalm = cellPartialCalm;
function safeCellLoop(cla, ca) {
    return sodium.Transaction.run(function () {
        var ssa = new sodium.StreamSink();
        cla.loop(ssa.holdLazy(cla.sampleLazy()));
        return sodium.Operational.updates(ca).listen(function (a) { return window.setTimeout(function () { return ssa.send(a); }); });
    });
}
exports.safeCellLoop = safeCellLoop;
function safeStreamLoop(sla, sa) {
    return sodium.Transaction.run(function () {
        var ssa = new sodium.StreamSink();
        sla.loop(ssa);
        var cleanups = [
            ssa.listen(function () { }),
            sa.listen(function (a) { return window.setTimeout(function () { return ssa.send(a); }); })
        ];
        return function () { return cleanups.forEach(function (cleanup) { return cleanup(); }); };
    });
}
exports.safeStreamLoop = safeStreamLoop;
/**
 * High order dependency tracking. If any newly created sodium objects within a value of a cell of a sodium object
 * happen to accumulate state, this method will keep the accumulation of state up to date.
 */
function cellTrace(ca, extractor) {
    var cKeepAlive = sodium.Cell.switchC(ca.map(function (a) {
        return cellLiftArray(extractor(a).map(function (x) {
            if (x instanceof sodium.Stream) {
                return x.hold({});
            }
            else {
                return x;
            }
        }));
    }));
    return ca.map(sodium.lambda1(function (a) { return a; }, [cKeepAlive]));
}
exports.cellTrace = cellTrace;
function arrayOfCellToCellOfArray(list, fromIdx, toIdx) {
    if (toIdx - fromIdx == 0) {
        return new sodium.Cell([]);
    }
    else if (toIdx - fromIdx == 1) {
        return list[fromIdx].map(function (a) { return [a]; });
    }
    else {
        var pivot = fromIdx + Math.floor((toIdx - fromIdx) / 2);
        return SodiumUtil.cellLift2(arrayOfCellToCellOfArray(list, fromIdx, pivot), arrayOfCellToCellOfArray(list, pivot, toIdx), function (list1, list2) { return list1.concat(list2); });
    }
}
//# sourceMappingURL=SodiumUtil.js.map
});
___scope___.file("app/Tuples.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var T2 = /** @class */ (function () {
    function T2(a, b) {
        this._a = a;
        this._b = b;
    }
    T2.of = function (a, b) {
        return new T2(a, b);
    };
    Object.defineProperty(T2.prototype, "_1", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T2.prototype, "_2", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    return T2;
}());
exports.T2 = T2;
var T3 = /** @class */ (function () {
    function T3(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    T3.of = function (a, b, c) {
        return new T3(a, b, c);
    };
    Object.defineProperty(T3.prototype, "_1", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T3.prototype, "_2", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T3.prototype, "_3", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    return T3;
}());
exports.T3 = T3;
var T4 = /** @class */ (function () {
    function T4(a, b, c, d) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
    T4.of = function (a, b, c, d) {
        return new T4(a, b, c, d);
    };
    Object.defineProperty(T4.prototype, "_1", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T4.prototype, "_2", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T4.prototype, "_3", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T4.prototype, "_4", {
        get: function () {
            return this._d;
        },
        enumerable: true,
        configurable: true
    });
    return T4;
}());
exports.T4 = T4;
var T5 = /** @class */ (function () {
    function T5(a, b, c, d, e) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
        this._e = e;
    }
    T5.of = function (a, b, c, d, e) {
        return new T5(a, b, c, d, e);
    };
    Object.defineProperty(T5.prototype, "_1", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T5.prototype, "_2", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T5.prototype, "_3", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T5.prototype, "_4", {
        get: function () {
            return this._d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T5.prototype, "_5", {
        get: function () {
            return this._e;
        },
        enumerable: true,
        configurable: true
    });
    return T5;
}());
exports.T5 = T5;
var T6 = /** @class */ (function () {
    function T6(a, b, c, d, e, f) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
        this._e = e;
        this._f = f;
    }
    T6.of = function (a, b, c, d, e, f) {
        return new T6(a, b, c, d, e, f);
    };
    Object.defineProperty(T6.prototype, "_1", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T6.prototype, "_2", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T6.prototype, "_3", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T6.prototype, "_4", {
        get: function () {
            return this._d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T6.prototype, "_5", {
        get: function () {
            return this._e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(T6.prototype, "_6", {
        get: function () {
            return this._f;
        },
        enumerable: true,
        configurable: true
    });
    return T6;
}());
exports.T6 = T6;
//# sourceMappingURL=Tuples.js.map
});
___scope___.file("app/ecs/components/CircleComponent.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("../EcsComponent");
var EcsComponentType_1 = require("../EcsComponentType");
var EcsComponentValue_1 = require("../EcsComponentValue");
var CircleComponent = /** @class */ (function () {
    function CircleComponent(radius) {
        this._radius = 0;
        this._radius = radius;
    }
    CircleComponent.withRadius = function (radius) {
        return new CircleComponent(radius);
    };
    CircleComponent.prototype.radius = function () {
        return this._radius;
    };
    /**
     *
     * @return {EcsComponentValue}
     */
    CircleComponent.prototype.ecsComponentValue = function () {
        return EcsComponentValue_1.EcsComponentValue.of(CircleComponent.ecsComponent_$LI$(), this);
    };
    CircleComponent.ecsComponent_$LI$ = function () { if (CircleComponent.ecsComponent == null)
        CircleComponent.ecsComponent = EcsComponent_1.EcsComponent.of(EcsComponentType_1.EcsComponentType.of("CircleComponent")); return CircleComponent.ecsComponent; };
    ;
    return CircleComponent;
}());
exports.CircleComponent = CircleComponent;
CircleComponent["__class"] = "CircleComponent";
CircleComponent["__interfaces"] = ["IsEcsComponentValue"];
CircleComponent.ecsComponent_$LI$();
//# sourceMappingURL=CircleComponent.js.map
});
___scope___.file("app/ecs/EcsComponent.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent = /** @class */ (function () {
    function EcsComponent(type) {
        this._type = null;
        this._type = type;
    }
    EcsComponent.of = function (type) {
        return (new EcsComponent(type));
    };
    EcsComponent.prototype.type = function () {
        return this._type;
    };
    return EcsComponent;
}());
exports.EcsComponent = EcsComponent;
EcsComponent["__class"] = "EcsComponent";
//# sourceMappingURL=EcsComponent.js.map
});
___scope___.file("app/ecs/EcsComponentType.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponentType = /** @class */ (function () {
    function EcsComponentType(typeName) {
        this._typeName = null;
        this._typeName = typeName;
    }
    EcsComponentType.of = function (typeName) {
        return new EcsComponentType(typeName);
    };
    EcsComponentType.prototype.typeName = function () {
        return this._typeName;
    };
    /**
     *
     * @param {*} obj
     * @return {boolean}
     */
    EcsComponentType.prototype.equals = function (obj) {
        if (obj == null) {
            return false;
        }
        if (!(obj != null && obj instanceof EcsComponentType)) {
            return false;
        }
        var other = obj;
        return /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
            return o1.equals(o2);
        }
        else {
            return o1 === o2;
        } })(this._typeName, other._typeName);
    };
    /**
     *
     * @return {number}
     */
    EcsComponentType.prototype.hashCode = function () {
        return /* hashCode */ (function (o) { if (o.hashCode) {
            return o.hashCode();
        }
        else {
            return o.toString();
        } })(this._typeName);
    };
    return EcsComponentType;
}());
exports.EcsComponentType = EcsComponentType;
EcsComponentType["__class"] = "EcsComponentType";
//# sourceMappingURL=EcsComponentType.js.map
});
___scope___.file("app/ecs/EcsComponentValue.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("./EcsComponent");
var Option_1 = require("../Option");
var EcsComponentValue = /** @class */ (function () {
    function EcsComponentValue(ecsComponentValuePair) {
        this._ecsComponentValuePair = null;
        this._ecsComponentValuePair = ecsComponentValuePair;
    }
    EcsComponentValue.of$com_shedmasta_core_ecs2_EcsComponentValue_EcsComponentValuePair = function (ecsComponentValuePair) {
        return new EcsComponentValue(ecsComponentValuePair);
    };
    EcsComponentValue.of$com_shedmasta_core_ecs2_EcsComponent$java_lang_Object = function (ecsComponent, value) {
        return new EcsComponentValue(EcsComponentValue.EcsComponentValuePair.create(ecsComponent, value));
    };
    EcsComponentValue.of = function (ecsComponent, value) {
        if (((ecsComponent != null && ecsComponent instanceof EcsComponent_1.EcsComponent) || ecsComponent === null) && ((value != null) || value === null)) {
            return EcsComponentValue.of$com_shedmasta_core_ecs2_EcsComponent$java_lang_Object(ecsComponent, value);
        }
        else if (((ecsComponent != null && ecsComponent instanceof EcsComponentValue.EcsComponentValuePair) || ecsComponent === null) && value === undefined) {
            return EcsComponentValue.of$com_shedmasta_core_ecs2_EcsComponentValue_EcsComponentValuePair(ecsComponent);
        }
        else
            throw new Error('invalid overload');
    };
    EcsComponentValue.prototype.ecsComponent = function () {
        return this._ecsComponentValuePair.ecsComponent();
    };
    EcsComponentValue.prototype.value$ = function () {
        return this._ecsComponentValuePair.value();
    };
    EcsComponentValue.prototype.value$com_shedmasta_core_ecs2_EcsComponent = function (ecsComponent) {
        return this._ecsComponentValuePair.ecsComponent().type().equals(ecsComponent.type()) ? Option_1.Option.some(this.value()) : Option_1.Option.none();
    };
    EcsComponentValue.prototype.value = function (ecsComponent) {
        if (((ecsComponent != null && ecsComponent instanceof EcsComponent_1.EcsComponent) || ecsComponent === null)) {
            return this.value$com_shedmasta_core_ecs2_EcsComponent(ecsComponent);
        }
        else if (ecsComponent === undefined) {
            return this.value$();
        }
        else
            throw new Error('invalid overload');
    };
    EcsComponentValue.prototype.ecsComponentValuePair = function () {
        return this._ecsComponentValuePair;
    };
    /**
     *
     * @return {EcsComponentValue}
     */
    EcsComponentValue.prototype.ecsComponentValue = function () {
        return this;
    };
    return EcsComponentValue;
}());
exports.EcsComponentValue = EcsComponentValue;
EcsComponentValue["__class"] = "EcsComponentValue";
EcsComponentValue["__interfaces"] = ["IsEcsComponentValue"];
(function (EcsComponentValue) {
    var EcsComponentValuePair = /** @class */ (function () {
        function EcsComponentValuePair(ecsComponent, value) {
            this._ecsComponent = null;
            this._value = null;
            this._ecsComponent = ecsComponent;
            this._value = value;
        }
        EcsComponentValuePair.create = function (ecsComponent, value) {
            return (new EcsComponentValue.EcsComponentValuePair(ecsComponent, value));
        };
        EcsComponentValuePair.prototype.ecsComponent = function () {
            return this._ecsComponent;
        };
        EcsComponentValuePair.prototype.value = function () {
            return this._value;
        };
        return EcsComponentValuePair;
    }());
    EcsComponentValue.EcsComponentValuePair = EcsComponentValuePair;
    EcsComponentValuePair["__class"] = "EcsComponentValue.EcsComponentValuePair";
})(EcsComponentValue = exports.EcsComponentValue || (exports.EcsComponentValue = {}));
exports.EcsComponentValue = EcsComponentValue;
//# sourceMappingURL=EcsComponentValue.js.map
});
___scope___.file("app/math/Axes3D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3D_1 = require("./Vector3D");
var Quaternion_1 = require("./Quaternion");
var Axes3D = /** @class */ (function () {
    function Axes3D(origin, orientation) {
        this._origin = origin;
        this._orientation = orientation;
    }
    Axes3D.identity_$LI$ = function () { if (Axes3D.identity == null)
        Axes3D.identity = Axes3D.Builder.fromOriginOrientation().setOrigin(Vector3D_1.Vector3D.zero_$LI$()).setOrientation(Quaternion_1.Quaternion.identity_$LI$()).build(); return Axes3D.identity; };
    ;
    Axes3D.create = function (origin, orientation) {
        return new Axes3D(origin, orientation);
    };
    Object.defineProperty(Axes3D.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axes3D.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axes3D.prototype, "o", {
        get: function () {
            return this.origin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axes3D.prototype, "u", {
        get: function () {
            return this.orientation.rotate$Vector3D(Vector3D_1.Vector3D.unitX_$LI$());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axes3D.prototype, "v", {
        get: function () {
            return this.orientation.rotate$Vector3D(Vector3D_1.Vector3D.unitY_$LI$());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axes3D.prototype, "w", {
        get: function () {
            return this.orientation.rotate$Vector3D(Vector3D_1.Vector3D.unitZ_$LI$());
        },
        enumerable: true,
        configurable: true
    });
    Axes3D.prototype.pointToThisSpace = function (p) {
        return this.orientation.conjugate().rotate$Vector3D(p.sub(this.origin));
    };
    Axes3D.prototype.vectorToThisSpace = function (v) {
        return this.orientation.conjugate().rotate$Vector3D(v);
    };
    Axes3D.prototype.toThisSpace = function (axes) {
        return Axes3D.Builder.fromOriginOrientation().setOrigin(this.pointToThisSpace(axes.origin)).setOrientation(this.orientation.conjugate().times(axes.orientation)).build();
    };
    Axes3D.prototype.pointFromThisSpace = function (p) {
        return this.orientation.rotate$Vector3D(p).add(this.origin);
    };
    Axes3D.prototype.vectorFromThisSpace = function (v) {
        return this.orientation.rotate$Vector3D(v);
    };
    Axes3D.prototype.fromThisSpace = function (axes) {
        return Axes3D.Builder.fromOriginOrientation().setOrigin(this.pointFromThisSpace(axes.origin)).setOrientation(this.orientation.times(axes.orientation)).build();
    };
    Axes3D.prototype.invert = function () {
        return Axes3D.Builder.fromOriginOrientation().setOrigin(this.orientation.conjugate().rotate$Vector3D(this.origin.scale(-1.0))).setOrientation(this.orientation.conjugate()).build();
    };
    Axes3D.prototype.times = function (axes) {
        return this.fromThisSpace(axes);
    };
    /**
     *
     * @return {string}
     */
    Axes3D.prototype.toString = function () {
        return "(origin:" + this.origin.toString() + ", orientation: " + this.orientation.toString() + ")";
    };
    return Axes3D;
}());
exports.Axes3D = Axes3D;
Axes3D["__class"] = "Axes3D";
(function (Axes3D) {
    var FromOriginOrientationBuilder = /** @class */ (function () {
        function FromOriginOrientationBuilder() {
            this.originX = 0;
            this.originY = 0;
            this.originZ = 0;
            this.orientation = null;
        }
        /**
         *
         * @param {Vector3D} origin
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOrigin = function (origin) {
            this.originX = origin.getX();
            this.originY = origin.getY();
            this.originZ = origin.getZ();
            return this;
        };
        /**
         *
         * @param {number} originX
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOriginX = function (originX) {
            this.originX = originX;
            return this;
        };
        /**
         *
         * @param {number} originX
         * @param {number} originY
         * @param {number} originZ
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOriginXYZ = function (originX, originY, originZ) {
            this.originX = originX;
            this.originY = originY;
            this.originZ = originZ;
            return this;
        };
        /**
         *
         * @param {number} originY
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOriginY = function (originY) {
            this.originY = originY;
            return this;
        };
        /**
         *
         * @param {number} originZ
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOriginZ = function (originZ) {
            this.originZ = originZ;
            return this;
        };
        /**
         *
         * @param {Quaternion} orientation
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOrientation = function (orientation) {
            this.orientation = orientation;
            return this;
        };
        /**
         *
         * @return {Axes3D}
         */
        FromOriginOrientationBuilder.prototype.build = function () {
            return new Axes3D(Vector3D_1.Vector3D.create(this.originX, this.originY, this.originZ), this.orientation);
        };
        return FromOriginOrientationBuilder;
    }());
    Axes3D.FromOriginOrientationBuilder = FromOriginOrientationBuilder;
    FromOriginOrientationBuilder["__class"] = "Axes3D.FromOriginOrientationBuilder";
    FromOriginOrientationBuilder["__interfaces"] = ["Axes3D.FromOriginOrientationSetOriginYStep", "Axes3D.FromOriginOrientationSetOrientationStep", "Axes3D.FromOriginOrientationSetOriginXStep", "Axes3D.BuildStep", "Axes3D.FromOriginOrientationSetOriginZStep"];
    var Builder = /** @class */ (function () {
        function Builder() {
        }
        Builder.fromOriginOrientation = function () {
            return new Axes3D.FromOriginOrientationBuilder();
        };
        return Builder;
    }());
    Axes3D.Builder = Builder;
    Builder["__class"] = "Axes3D.Builder";
})(Axes3D = exports.Axes3D || (exports.Axes3D = {}));
exports.Axes3D = Axes3D;
Axes3D.identity_$LI$();
//# sourceMappingURL=Axes3D.js.map
});
___scope___.file("app/math/Quaternion.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3D_1 = require("./Vector3D");
var Quaternion = /** @class */ (function () {
    function Quaternion(w, x, y, z) {
        this._w = w;
        this._x = x;
        this._y = y;
        this._z = z;
    }
    Quaternion.identity_$LI$ = function () { if (Quaternion.identity == null)
        Quaternion.identity = Quaternion.Builder.fromWXYZ().setWXYZ(1, 0, 0, 0).build(); return Quaternion.identity; };
    ;
    Quaternion.fromAxisAngle = function (axis, angle) {
        return Quaternion.Builder.fromAxisAngle().setAxis(axis).setAngle(angle).build();
    };
    Quaternion.fromUV = function (u, v) {
        return Quaternion.Builder.fromUVW().setU(u).setV(v).setW(u.cross(v)).build();
    };
    Quaternion.fromVW = function (v, w) {
        return Quaternion.Builder.fromUVW().setU(v.cross(w)).setV(v).setW(w).build();
    };
    Quaternion.fromWU = function (w, u) {
        return Quaternion.Builder.fromUVW().setU(u).setV(w.cross(u)).setW(w).build();
    };
    Object.defineProperty(Quaternion.prototype, "w", {
        get: function () {
            return this._w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: true,
        configurable: true
    });
    Quaternion.prototype.getLengthSquared = function () {
        return this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    };
    Quaternion.prototype.getLength = function () {
        return Math.sqrt(this.getLengthSquared());
    };
    Quaternion.prototype.normalize = function () {
        var length = this.getLength();
        return new Quaternion(this.w / length, this.x / length, this.y / length, this.z / length);
    };
    Quaternion.prototype.times = function (rhs) {
        var lhs = this;
        return new Quaternion(lhs.w * rhs.w - lhs.x * rhs.x - lhs.y * rhs.y - lhs.z * rhs.z, lhs.w * rhs.x + lhs.x * rhs.w + lhs.y * rhs.z - lhs.z * rhs.y, lhs.w * rhs.y - lhs.x * rhs.z + lhs.y * rhs.w + lhs.z * rhs.x, lhs.w * rhs.z + lhs.x * rhs.y - lhs.y * rhs.x + lhs.z * rhs.w);
    };
    Quaternion.prototype.dotProduct = function (rhs) {
        var lhs = this;
        return lhs.w * rhs.w + lhs.x * rhs.x + lhs.y * rhs.y + lhs.z * rhs.z;
    };
    Quaternion.prototype.conjugate = function () {
        return new Quaternion(this.w, -this.x, -this.y, -this.z);
    };
    Quaternion.prototype.rotate$Quaternion = function (p) {
        return this.times(p).times(this.conjugate());
    };
    Quaternion.prototype.rotate = function (p) {
        if (((p != null && p instanceof Quaternion) || p === null)) {
            return this.rotate$Quaternion(p);
        }
        else if (((p != null && p instanceof Vector3D_1.Vector3D) || p === null)) {
            return this.rotate$Vector3D(p);
        }
        else
            throw new Error('invalid overload');
    };
    Quaternion.prototype.rotate$Vector3D = function (p) {
        var pPrime = this.times(Quaternion.Builder.fromWXYZ().setWXYZ(0, p.getX(), p.getY(), p.getZ()).build()).times(this.conjugate());
        return Vector3D_1.Vector3D.create(pPrime.x, pPrime.y, pPrime.z);
    };
    Quaternion.prototype.slerp = function (target, t, allowFlip) {
        var a = this;
        var b = target;
        var cosAngle = a.dotProduct(b);
        var c1;
        var c2;
        if ((1.0 - Math.abs(cosAngle)) < 0.01) {
            c1 = 1.0 - t;
            c2 = t;
        }
        else {
            var angle = Math.acos(Math.abs(cosAngle));
            var sinAngle = Math.sin(angle);
            c1 = Math.sin(angle * (1.0 - t)) / sinAngle;
            c2 = Math.sin(angle * t) / sinAngle;
        }
        if (allowFlip && (cosAngle < 0.0)) {
            c1 = -c1;
        }
        return new Quaternion(c1 * a.w + c2 * b.w, c1 * a.x + c2 * b.x, c1 * a.y + c2 * b.y, c1 * a.z + c2 * b.z);
    };
    /**
     *
     * @return {string}
     */
    Quaternion.prototype.toString = function () {
        return "Quaternion " + this.w + " " + this.x + " " + this.y + " " + this.z;
    };
    return Quaternion;
}());
exports.Quaternion = Quaternion;
Quaternion["__class"] = "Quaternion";
(function (Quaternion) {
    var FromWXYZBuilder = /** @class */ (function () {
        function FromWXYZBuilder() {
            this.w = 0;
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        /**
         *
         * @param {number} w
         * @return {*}
         */
        FromWXYZBuilder.prototype.setW = function (w) {
            this.w = w;
            return this;
        };
        /**
         *
         * @param {number} w
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @return {*}
         */
        FromWXYZBuilder.prototype.setWXYZ = function (w, x, y, z) {
            this.w = w;
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        };
        /**
         *
         * @param {number} x
         * @return {*}
         */
        FromWXYZBuilder.prototype.setX = function (x) {
            this.x = x;
            return this;
        };
        /**
         *
         * @param {number} y
         * @return {*}
         */
        FromWXYZBuilder.prototype.setY = function (y) {
            this.y = y;
            return this;
        };
        /**
         *
         * @param {number} z
         * @return {*}
         */
        FromWXYZBuilder.prototype.setZ = function (z) {
            this.z = z;
            return this;
        };
        /**
         *
         * @return {Quaternion}
         */
        FromWXYZBuilder.prototype.build = function () {
            return new Quaternion(this.w, this.x, this.y, this.z);
        };
        return FromWXYZBuilder;
    }());
    Quaternion.FromWXYZBuilder = FromWXYZBuilder;
    FromWXYZBuilder["__class"] = "Quaternion.FromWXYZBuilder";
    FromWXYZBuilder["__interfaces"] = ["Quaternion.BuildStep", "Quaternion.FromWXYZSetWStep", "Quaternion.FromWXYZSetXStep", "Quaternion.FromWXYZSetZStep", "Quaternion.FromWXYZSetYStep"];
    var FromAxisAngleBuilder = /** @class */ (function () {
        function FromAxisAngleBuilder() {
            this.axisX = 0;
            this.axisY = 0;
            this.axisZ = 0;
            this.angle = 0;
        }
        /**
         *
         * @param {number} axisX
         * @return {*}
         */
        FromAxisAngleBuilder.prototype.setAxisX = function (axisX) {
            this.axisX = axisX;
            return this;
        };
        /**
         *
         * @param {number} axisX
         * @param {number} axisY
         * @param {number} axisZ
         * @return {*}
         */
        FromAxisAngleBuilder.prototype.setAxisXYZ = function (axisX, axisY, axisZ) {
            this.axisX = axisX;
            this.axisY = axisY;
            this.axisZ = axisZ;
            return this;
        };
        /**
         *
         * @param {Vector3D} axis
         * @return {*}
         */
        FromAxisAngleBuilder.prototype.setAxis = function (axis) {
            this.axisX = axis.getX();
            this.axisY = axis.getY();
            this.axisZ = axis.getZ();
            return this;
        };
        /**
         *
         * @param {number} axisY
         * @return {*}
         */
        FromAxisAngleBuilder.prototype.setAxisY = function (axisY) {
            this.axisY = axisY;
            return this;
        };
        /**
         *
         * @param {number} axisZ
         * @return {*}
         */
        FromAxisAngleBuilder.prototype.setAxisZ = function (axisZ) {
            this.axisZ = axisZ;
            return this;
        };
        /**
         *
         * @param {number} angle
         * @return {*}
         */
        FromAxisAngleBuilder.prototype.setAngle = function (angle) {
            this.angle = angle;
            return this;
        };
        /**
         *
         * @return {Quaternion}
         */
        FromAxisAngleBuilder.prototype.build = function () {
            var len = Math.sqrt(this.axisX * this.axisX + this.axisY * this.axisY + this.axisZ * this.axisZ);
            this.axisX /= len;
            this.axisY /= len;
            this.axisZ /= len;
            var ca = Math.cos(/* toRadians */ (function (x) { return x * Math.PI / 180; })(0.5 * this.angle));
            var sa = Math.sin(/* toRadians */ (function (x) { return x * Math.PI / 180; })(0.5 * this.angle));
            return new Quaternion(ca, sa * this.axisX, sa * this.axisY, sa * this.axisZ);
        };
        return FromAxisAngleBuilder;
    }());
    Quaternion.FromAxisAngleBuilder = FromAxisAngleBuilder;
    FromAxisAngleBuilder["__class"] = "Quaternion.FromAxisAngleBuilder";
    FromAxisAngleBuilder["__interfaces"] = ["Quaternion.FromAxisAngleSetAxisYStep", "Quaternion.FromAxisAngleSetAngleStep", "Quaternion.FromAxisAngleSetAxisXStep", "Quaternion.BuildStep", "Quaternion.FromAxisAngleSetAxisZStep"];
    var FromUVWBuilder = /** @class */ (function () {
        function FromUVWBuilder() {
            this.u = null;
            this.v = null;
            this.w = null;
        }
        /**
         *
         * @param {Vector3D} u
         * @return {*}
         */
        FromUVWBuilder.prototype.setU = function (u) {
            this.u = u;
            return this;
        };
        /**
         *
         * @param {Vector3D} v
         * @return {*}
         */
        FromUVWBuilder.prototype.setV = function (v) {
            this.v = v;
            return this;
        };
        /**
         *
         * @param {Vector3D} w
         * @return {*}
         */
        FromUVWBuilder.prototype.setW = function (w) {
            this.w = w;
            return this;
        };
        /**
         *
         * @return {Quaternion}
         */
        FromUVWBuilder.prototype.build = function () {
            var m00 = this.u.getX();
            var m10 = this.u.getY();
            var m20 = this.u.getZ();
            var m01 = this.v.getX();
            var m11 = this.v.getY();
            var m21 = this.v.getZ();
            var m02 = this.w.getX();
            var m12 = this.w.getY();
            var m22 = this.w.getZ();
            var tr = m00 + m11 + m22;
            var qw;
            var qx;
            var qy;
            var qz;
            if (tr > 0) {
                var S = Math.sqrt(tr + 1.0) * 2;
                qw = 0.25 * S;
                qx = (m21 - m12) / S;
                qy = (m02 - m20) / S;
                qz = (m10 - m01) / S;
            }
            else if ((function (lhs, rhs) { return lhs && rhs; })((m00 > m11), (m00 > m22))) {
                var S = Math.sqrt(1.0 + m00 - m11 - m22) * 2;
                qw = (m21 - m12) / S;
                qx = 0.25 * S;
                qy = (m01 + m10) / S;
                qz = (m02 + m20) / S;
            }
            else if (m11 > m22) {
                var S = Math.sqrt(1.0 + m11 - m00 - m22) * 2;
                qw = (m02 - m20) / S;
                qx = (m01 + m10) / S;
                qy = 0.25 * S;
                qz = (m12 + m21) / S;
            }
            else {
                var S = Math.sqrt(1.0 + m22 - m00 - m11) * 2;
                qw = (m10 - m01) / S;
                qx = (m02 + m20) / S;
                qy = (m12 + m21) / S;
                qz = 0.25 * S;
            }
            return new Quaternion(qw, qx, qy, qz);
        };
        return FromUVWBuilder;
    }());
    Quaternion.FromUVWBuilder = FromUVWBuilder;
    FromUVWBuilder["__class"] = "Quaternion.FromUVWBuilder";
    FromUVWBuilder["__interfaces"] = ["Quaternion.FromUVWSetUStep", "Quaternion.BuildStep", "Quaternion.FromUVWSetWStep", "Quaternion.FromUVWSetVStep"];
    var Builder = /** @class */ (function () {
        function Builder() {
        }
        Builder.fromWXYZ = function () {
            return new Quaternion.FromWXYZBuilder();
        };
        Builder.fromAxisAngle = function () {
            return new Quaternion.FromAxisAngleBuilder();
        };
        Builder.fromUVW = function () {
            return new Quaternion.FromUVWBuilder();
        };
        return Builder;
    }());
    Quaternion.Builder = Builder;
    Builder["__class"] = "Quaternion.Builder";
})(Quaternion = exports.Quaternion || (exports.Quaternion = {}));
exports.Quaternion = Quaternion;
Quaternion.identity_$LI$();
//# sourceMappingURL=Quaternion.js.map
});
___scope___.file("app/math/Plane3D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3D_1 = require("./Vector3D");
var Option_1 = require("../Option");
var Plane3D = /** @class */ (function () {
    function Plane3D(n, d) {
        this._n = n;
        this._d = d;
    }
    Plane3D.create = function (n, d) {
        return new Plane3D(n, d);
    };
    Plane3D.fromKnownPtAndNormal = function (knownPt, normal) {
        return Plane3D.create(normal, -normal.dot(knownPt));
    };
    Object.defineProperty(Plane3D.prototype, "n", {
        get: function () {
            return this._n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plane3D.prototype, "d", {
        get: function () {
            return this._d;
        },
        enumerable: true,
        configurable: true
    });
    Plane3D.prototype.moveInNormalDirection = function (dist) {
        return new Plane3D(this.n, this.d - dist * this.n.length());
    };
    Plane3D.prototype.closestPoint = function (p) {
        var t = -(this.d + p.dot(this.n)) / this.n.dot(this.n);
        return p.add(this.n.scale(t));
    };
    Plane3D.prototype.threePlaneIntersection = function (p2, p3) {
        var p1 = this;
        var x1 = p1.closestPoint(Vector3D_1.Vector3D.zero_$LI$());
        var x2 = p2.closestPoint(Vector3D_1.Vector3D.zero_$LI$());
        var x3 = p3.closestPoint(Vector3D_1.Vector3D.zero_$LI$());
        var n1 = p1.n;
        var n2 = p2.n;
        var n3 = p3.n;
        var x = n2.cross(n3).scale(x1.dot(n1)).add(n3.cross(n1).scale(x2.dot(n2))).add(n1.cross(n2).scale(x3.dot(n3)));
        var n1x = n1.getX();
        var n1y = n1.getY();
        var n1z = n1.getZ();
        var n2x = n2.getX();
        var n2y = n2.getY();
        var n2z = n2.getZ();
        var n3x = n3.getX();
        var n3y = n3.getY();
        var n3z = n3.getZ();
        var det = n1x * (n2y * n3z - n3y * n2z) + n2x * (n3y * n1z - n1y * n3z) + n3x * (n1y * n2z - n2y * n1z);
        if (Math.abs(det) < 0.001) {
            return Option_1.Option.none();
        }
        return Option_1.Option.some(x.scale(1.0 / det));
    };
    Plane3D.prototype.fromSpace = function (space) {
        var knownPoint = this.closestPoint(Vector3D_1.Vector3D.zero_$LI$());
        var newN = space.vectorFromThisSpace(this.n);
        var newKnownPoint = space.pointFromThisSpace(knownPoint);
        return Plane3D.fromKnownPtAndNormal(newKnownPoint, newN);
    };
    Plane3D.prototype.toSpace = function (space) {
        var knownPoint = this.closestPoint(Vector3D_1.Vector3D.zero_$LI$());
        var newN = space.vectorToThisSpace(this.n);
        var newKnownPoint = space.pointToThisSpace(knownPoint);
        return Plane3D.fromKnownPtAndNormal(newKnownPoint, newN);
    };
    return Plane3D;
}());
exports.Plane3D = Plane3D;
//# sourceMappingURL=Plane3D.js.map
});
___scope___.file("app/modes/Mode.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var Mode = /** @class */ (function () {
    function Mode() {
    }
    Object.defineProperty(Mode.prototype, "sUpdate", {
        get: function () {
            return new sodium.Stream();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mode.prototype, "sFinished", {
        get: function () {
            return new sodium.Stream();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mode.prototype, "cWorldSpaceOverlay", {
        get: function () {
            return new sodium.Cell(function (canvasCtx) { });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mode.prototype, "cScreenSpaceOverlay", {
        get: function () {
            return new sodium.Cell(function (canvasCtx) { });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mode.prototype, "cFloatingLengthAngles", {
        get: function () {
            return new sodium.Cell([]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mode.prototype, "cAskValuesAt", {
        get: function () {
            return new sodium.Cell([]);
        },
        enumerable: true,
        configurable: true
    });
    return Mode;
}());
exports.Mode = Mode;
//# sourceMappingURL=Mode.js.map
});
___scope___.file("app/ecs/components/Axes2DComponent.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("../EcsComponent");
var EcsComponentType_1 = require("../EcsComponentType");
var EcsComponentValue_1 = require("../EcsComponentValue");
var Axes2DComponent = /** @class */ (function () {
    function Axes2DComponent(axes2D) {
        this._axes2D = axes2D;
    }
    Axes2DComponent.create = function (axes2D) {
        return new Axes2DComponent(axes2D);
    };
    Axes2DComponent.prototype.axes2D = function () {
        return this._axes2D;
    };
    /**
     *
     * @return {com.shedmasta.core.ecs2.EcsComponentValue}
     */
    Axes2DComponent.prototype.ecsComponentValue = function () {
        return EcsComponentValue_1.EcsComponentValue.of(Axes2DComponent.ecsComponent_$LI$(), this);
    };
    Axes2DComponent.ecsComponent_$LI$ = function () { if (Axes2DComponent.ecsComponent == null)
        Axes2DComponent.ecsComponent = EcsComponent_1.EcsComponent.of(EcsComponentType_1.EcsComponentType.of("Axes2D")); return Axes2DComponent.ecsComponent; };
    ;
    return Axes2DComponent;
}());
exports.Axes2DComponent = Axes2DComponent;
Axes2DComponent["__class"] = "Axes2DComponent";
Axes2DComponent["__interfaces"] = ["IsEcsComponentValue"];
Axes2DComponent.ecsComponent_$LI$();
//# sourceMappingURL=Axes2DComponent.js.map
});
___scope___.file("app/ecs/components/Line3DComponent.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("../EcsComponent");
var EcsComponentType_1 = require("../EcsComponentType");
var EcsComponentValue_1 = require("../EcsComponentValue");
var Line3DComponent = /** @class */ (function () {
    function Line3DComponent(line) {
        this._line = null;
        this._line = line;
    }
    Line3DComponent.of = function (line) {
        return new Line3DComponent(line);
    };
    Object.defineProperty(Line3DComponent.prototype, "line", {
        get: function () {
            return this._line;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @return {EcsComponentValue}
     */
    Line3DComponent.prototype.ecsComponentValue = function () {
        return EcsComponentValue_1.EcsComponentValue.of(Line3DComponent.ecsComponent_$LI$(), this);
    };
    Line3DComponent.ecsComponent_$LI$ = function () { if (Line3DComponent.ecsComponent == null)
        Line3DComponent.ecsComponent = EcsComponent_1.EcsComponent.of(EcsComponentType_1.EcsComponentType.of("Line3DComponent")); return Line3DComponent.ecsComponent; };
    ;
    return Line3DComponent;
}());
exports.Line3DComponent = Line3DComponent;
Line3DComponent["__class"] = "Line3DComponent";
Line3DComponent["__interfaces"] = ["IsEcsComponentValue"];
Line3DComponent.ecsComponent_$LI$();
//# sourceMappingURL=Line3DComponent.js.map
});
___scope___.file("app/math/Axes2D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2D_1 = require("./Vector2D");
var Complex_1 = require("./Complex");
/**
 *
 * @author Clinton
 * @class
 */
var Axes2D = /** @class */ (function () {
    function Axes2D(origin, orientation) {
        this._origin = null;
        this._orientation = null;
        this._origin = origin;
        this._orientation = orientation;
    }
    Axes2D.identity_$LI$ = function () { if (Axes2D.identity == null)
        Axes2D.identity = new Axes2D(Vector2D_1.Vector2D.create(0.0, 0.0), Complex_1.Complex.rot0_$LI$()); return Axes2D.identity; };
    ;
    Axes2D.create = function (origin, orientation) {
        return new Axes2D(origin, orientation);
    };
    Object.defineProperty(Axes2D.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axes2D.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        enumerable: true,
        configurable: true
    });
    Axes2D.prototype.getOrigin = function () {
        return this._origin;
    };
    Axes2D.prototype.getOrientation = function () {
        return this._orientation;
    };
    Axes2D.prototype.pointFromSpace = function (p) {
        return this._orientation.rotate(p).add(this._origin);
    };
    Axes2D.prototype.pointToSpace = function (p) {
        return this._orientation.conjugate().rotate(p.sub(this._origin));
    };
    Axes2D.prototype.vectorFromSpace = function (v) {
        return this._orientation.rotate(v);
    };
    Axes2D.prototype.vectorToSpace = function (v) {
        return this._orientation.conjugate().rotate(v);
    };
    Axes2D.prototype.axesFromSpace = function (a) {
        return Axes2D.Builder.fromOriginOrientation().setOrigin(this.pointFromSpace(a.getOrigin())).setOrientation(a.getOrientation().times(this._orientation)).build();
    };
    Axes2D.prototype.axesToSpace = function (a) {
        return Axes2D.Builder.fromOriginOrientation().setOrigin(this.pointToSpace(a.getOrigin())).setOrientation(this.getOrientation().conjugate().times(a.getOrientation())).build();
    };
    return Axes2D;
}());
exports.Axes2D = Axes2D;
Axes2D["__class"] = "Axes2D";
(function (Axes2D) {
    var FromOriginOrientationBuilder = /** @class */ (function () {
        function FromOriginOrientationBuilder() {
            this.originX = 0;
            this.originY = 0;
            this.orientation = null;
        }
        /**
         *
         * @param {number} originX
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOriginX = function (originX) {
            this.originX = originX;
            return this;
        };
        /**
         *
         * @param {number} originX
         * @param {number} originY
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOriginXY = function (originX, originY) {
            this.originX = originX;
            this.originY = originY;
            return this;
        };
        /**
         *
         * @param {Vector2D} origin
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOrigin = function (origin) {
            this.originX = origin.x;
            this.originY = origin.y;
            return this;
        };
        /**
         *
         * @param {number} originY
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOriginY = function (originY) {
            this.originY = originY;
            return this;
        };
        /**
         *
         * @param {Complex} orientation
         * @return {*}
         */
        FromOriginOrientationBuilder.prototype.setOrientation = function (orientation) {
            this.orientation = orientation;
            return this;
        };
        /**
         *
         * @return {Axes2D}
         */
        FromOriginOrientationBuilder.prototype.build = function () {
            return new Axes2D(Vector2D_1.Vector2D.create(this.originX, this.originY), this.orientation);
        };
        return FromOriginOrientationBuilder;
    }());
    Axes2D.FromOriginOrientationBuilder = FromOriginOrientationBuilder;
    FromOriginOrientationBuilder["__class"] = "Axes2D.FromOriginOrientationBuilder";
    FromOriginOrientationBuilder["__interfaces"] = ["Axes2D.FromOriginOrientationSetOrientationStep", "Axes2D.FromOriginOrientationSetOriginYStep", "Axes2D.BuildStep", "Axes2D.FromOriginOrientationSetOriginXStep"];
    var Builder = /** @class */ (function () {
        function Builder() {
        }
        Builder.fromOriginOrientation = function () {
            return new Axes2D.FromOriginOrientationBuilder();
        };
        return Builder;
    }());
    Axes2D.Builder = Builder;
    Builder["__class"] = "Axes2D.Builder";
})(Axes2D = exports.Axes2D || (exports.Axes2D = {}));
exports.Axes2D = Axes2D;
Axes2D.identity_$LI$();
//# sourceMappingURL=Axes2D.js.map
});
___scope___.file("app/math/Complex.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2D_1 = require("./Vector2D");
/**
 *
 * @author Clinton
 * @class
 */
var Complex = /** @class */ (function () {
    function Complex(x, y) {
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    Complex.rot0_$LI$ = function () { if (Complex.rot0 == null)
        Complex.rot0 = new Complex(1, 0); return Complex.rot0; };
    ;
    Complex.xy = function (xy) {
        return new Complex(xy.x, xy.y);
    };
    Object.defineProperty(Complex.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Complex.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Complex.prototype.getX = function () {
        return this._x;
    };
    Complex.prototype.getY = function () {
        return this._y;
    };
    Complex.prototype.getLengthSquared = function () {
        return this._x * this._x + this._y * this._y;
    };
    Complex.prototype.getLength = function () {
        return Math.sqrt(this.getLengthSquared());
    };
    Complex.prototype.normalize = function () {
        var length = this.getLength();
        return new Complex(this._x / length, this._y / length);
    };
    Complex.prototype.times = function (rhs) {
        var lhs = this;
        return new Complex(lhs._x * rhs._x - lhs._y * rhs._y, lhs._x * rhs._y + lhs._y * rhs._x);
    };
    Complex.prototype.conjugate = function () {
        return new Complex(this._x, -this._y);
    };
    Complex.prototype.rotate = function (p) {
        var uX = this._x;
        var uY = this._y;
        var vX = -uY;
        var vY = uX;
        return Vector2D_1.Vector2D.create(p.x * uX + p.y * vX, p.x * uY + p.y * vY);
    };
    Complex.prototype.getU = function () {
        return Vector2D_1.Vector2D.create(this._x, this._y);
    };
    Complex.prototype.getV = function () {
        return Vector2D_1.Vector2D.create(-this._y, this._x);
    };
    Complex.prototype.getAngle = function () {
        return /* toDegrees */ (function (x) { return x * 180 / Math.PI; })(Math.atan2(this._y, this._x));
    };
    return Complex;
}());
exports.Complex = Complex;
Complex["__class"] = "Complex";
(function (Complex) {
    var FromXYBuilder = /** @class */ (function () {
        function FromXYBuilder() {
            this.x = 0;
            this.y = 0;
        }
        /**
         *
         * @param {number} x
         * @return {*}
         */
        FromXYBuilder.prototype.setX = function (x) {
            this.x = x;
            return this;
        };
        /**
         *
         * @param {number} x
         * @param {number} y
         * @return {*}
         */
        FromXYBuilder.prototype.setXY = function (x, y) {
            this.x = x;
            this.y = y;
            return this;
        };
        /**
         *
         * @param {Vector2D} xy
         * @return {*}
         */
        FromXYBuilder.prototype.set = function (xy) {
            this.x = xy.x;
            this.y = xy.y;
            return this;
        };
        /**
         *
         * @param {number} y
         * @return {*}
         */
        FromXYBuilder.prototype.setY = function (y) {
            this.y = y;
            return this;
        };
        /**
         *
         * @return {Complex}
         */
        FromXYBuilder.prototype.build = function () {
            return new Complex(this.x, this.y);
        };
        return FromXYBuilder;
    }());
    Complex.FromXYBuilder = FromXYBuilder;
    FromXYBuilder["__class"] = "Complex.FromXYBuilder";
    FromXYBuilder["__interfaces"] = ["Complex.FromXYSetXStep", "Complex.FromXYSetYStep", "Complex.BuildStep"];
    var FromAngleBuilder = /** @class */ (function () {
        function FromAngleBuilder() {
            this.angle = 0;
        }
        /**
         *
         * @param {number} angle
         * @return {*}
         */
        FromAngleBuilder.prototype.setAngle = function (angle) {
            this.angle = angle;
            return this;
        };
        /**
         *
         * @return {Complex}
         */
        FromAngleBuilder.prototype.build = function () {
            return new Complex(Math.cos(/* toRadians */ (function (x) { return x * Math.PI / 180; })(this.angle)), Math.sin(/* toRadians */ (function (x) { return x * Math.PI / 180; })(this.angle)));
        };
        return FromAngleBuilder;
    }());
    Complex.FromAngleBuilder = FromAngleBuilder;
    FromAngleBuilder["__class"] = "Complex.FromAngleBuilder";
    FromAngleBuilder["__interfaces"] = ["Complex.FromAngleSetAngleStep", "Complex.BuildStep"];
    var Builder = /** @class */ (function () {
        function Builder() {
        }
        Builder.fromXY = function () {
            return new Complex.FromXYBuilder();
        };
        Builder.fromAngle = function () {
            return new Complex.FromAngleBuilder();
        };
        return Builder;
    }());
    Complex.Builder = Builder;
    Builder["__class"] = "Complex.Builder";
})(Complex = exports.Complex || (exports.Complex = {}));
exports.Complex = Complex;
Complex.rot0_$LI$();
//# sourceMappingURL=Complex.js.map
});
___scope___.file("app/modes/DrawLineMode.js", function(exports, require, module, __filename, __dirname){

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
var sodium = require("sodiumjs");
var DrawPolylineModel_1 = require("./DrawPolylineModel");
var Mode_1 = require("./Mode");
var Option_1 = require("../Option");
var Line3DComponent_1 = require("../ecs/components/Line3DComponent");
var Axes3D_1 = require("../math/Axes3D");
var ArrayUtil_1 = require("../ArrayUtil");
var DrawLineMode = /** @class */ (function (_super) {
    __extends(DrawLineMode, _super);
    function DrawLineMode(params) {
        var _this = _super.call(this) || this;
        sodium.Transaction.run(function () {
            var slReset = new sodium.StreamLoop();
            var cLines = params.cSceneCtxOp.map(function (sceneCtxOp) {
                return sceneCtxOp
                    .map(function (sceneCtx) {
                    return ArrayUtil_1.arrayBind(sceneCtx
                        .entitiesWithAllComponents([Line3DComponent_1.Line3DComponent.ecsComponent.type()]), function (lineId) {
                        return sceneCtx
                            .getComponent(lineId, Line3DComponent_1.Line3DComponent.ecsComponent)
                            .map(function (x) { return [x.line]; })
                            .orSome([]);
                    });
                })
                    .orSome([]);
            });
            var cPoints = cLines.map(function (lines) {
                return ArrayUtil_1.arrayBind(lines, function (line) { return [line.v1, line.v2]; });
            });
            var drawPolylineModel = new DrawPolylineModel_1.DrawPolylineModel(new sodium.Cell(Axes3D_1.Axes3D.identity), params.cMousePosOp, params.sMousePressed, cPoints, cLines, Option_1.Option.none(), params.cScreenPointToWorldRayOp, params.cProjectWorldPointToScreenOp, params.sReplyValueEntered, params.sLengthAngleEntered, slReset, params.cScale);
            var sUpdate = drawPolylineModel
                .sInsertLine()
                .map(function (line) {
                return function (sceneCtx) {
                    sceneCtx.createEntity([
                        Line3DComponent_1.Line3DComponent.of(line)
                    ]);
                };
            });
            var sFinished = sUpdate.mapTo(sodium.Unit.UNIT);
            slReset.loop(sUpdate.mapTo(sodium.Unit.UNIT));
            _this._sUpdate = sUpdate;
            _this._sFinished = sFinished;
            _this._cWorldSpaceOverlay = drawPolylineModel.cWorldSpaceOverlay;
            _this._cScreenSpaceOverlay = drawPolylineModel.cScreenSpaceOverlay;
            _this._cFloatingLengthAngles = drawPolylineModel.cFloatingLengthAngles();
        });
        return _this;
    }
    Object.defineProperty(DrawLineMode.prototype, "sFinished", {
        get: function () {
            return this._sFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawLineMode.prototype, "sUpdate", {
        get: function () {
            return this._sUpdate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawLineMode.prototype, "cWorldSpaceOverlay", {
        get: function () {
            return this._cWorldSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawLineMode.prototype, "cScreenSpaceOverlay", {
        get: function () {
            return this._cScreenSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawLineMode.prototype, "cFloatingLengthAngles", {
        get: function () {
            return this._cFloatingLengthAngles;
        },
        enumerable: true,
        configurable: true
    });
    return DrawLineMode;
}(Mode_1.Mode));
exports.DrawLineMode = DrawLineMode;
//# sourceMappingURL=DrawLineMode.js.map
});
___scope___.file("app/modes/DrawPolylineModel.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var AskValueAtParams_1 = require("./AskValueAtParams");
var FloatingLengthAngle_1 = require("./FloatingLengthAngle");
var ArrayUtil_1 = require("../ArrayUtil");
var Lazy_1 = require("../Lazy");
var Option_1 = require("../Option");
var SodiumUtil = require("../SodiumUtil");
var Tuples_1 = require("../Tuples");
var Line3D_1 = require("../math/Line3D");
var Plane3D_1 = require("../math/Plane3D");
var Ray2D_1 = require("../math/Ray2D");
var Ray3D_1 = require("../math/Ray3D");
var Vector2D_1 = require("../math/Vector2D");
var Vector3D_1 = require("../math/Vector3D");
var DrawPolylineModel = /** @class */ (function () {
    function DrawPolylineModel(cWorkingAxes, cMousePosOp, sMousePressed, cGivenSnapPoints, cGivenLines, cGivenIntersectionPtUnderMouseOpOp, cScreenPointToWorldRayOp, cProjectWorldPointToScreenOp, sReplyValueEntered, sLengthAngleEntered, sReset, cScale) {
        var _this = this;
        this.__cCurrentPolyline = null;
        this.__sInsertLine = null;
        this.__sAskValuesAt = null;
        this.__sHideAskValuesAt = null;
        this.__cFloatingLengthAngles = null;
        sodium.Transaction.run(function () {
            var cWorkingPlane = cWorkingAxes.map(function (workingAxes) { return Plane3D_1.Plane3D.fromKnownPtAndNormal(workingAxes.origin, workingAxes.w); });
            var cMouseWorkingPlanePosOp = cWorkingPlane.lift3(cMousePosOp, cScreenPointToWorldRayOp, function (workingPlane, mousePosOp, screenPointToWorldRayOp) {
                return mousePosOp
                    .bind(screenPointToWorldRayOp)
                    .bind(function (mouseRay) {
                    return mouseRay.collisionWithPlane(workingPlane);
                });
            });
            var clLastPointOp = (new sodium.CellLoop());
            var cLinePerpPointSnaps = cWorkingPlane.lift3(cGivenLines, clLastPointOp, function (workingPlane, lines, lastPointOp) {
                return lastPointOp.map(function (lastPoint) {
                    return ArrayUtil_1.arrayBind(lines, function (line) {
                        var lineRay = Ray3D_1.Ray3D.create(line.getV1(), line.getV2().sub(line.getV1()));
                        var u = line.getV2().sub(line.getV1()).normalize();
                        var w = workingPlane.n;
                        var v = w.cross(u).normalize();
                        var linePlane = Plane3D_1.Plane3D.fromKnownPtAndNormal(line.getV1(), v);
                        var lastPointRay = Ray3D_1.Ray3D.create(lastPoint, v);
                        var ptOp = lastPointRay.collisionWithPlane(linePlane);
                        if (ptOp.isNone) {
                            return [];
                        }
                        var pt = ptOp.fromSome();
                        var t = lineRay.closestTimeToPoint(pt);
                        if (t < 0.0 || t > 1.0) {
                            return [];
                        }
                        return [pt];
                    });
                }).orSome([]);
            });
            var cLineMidPointSnaps = cGivenLines.map(function (lines) {
                return lines.map(function (line) {
                    return line.getV1().add(line.getV2()).scale(0.5);
                });
            });
            var cLineIntersectionPointSnaps = cWorkingPlane.lift(cGivenLines, function (workingPlane, lines) {
                return Lazy_1.Lazy.create(function () {
                    return ArrayUtil_1.arrayBind(ArrayUtil_1.arrayIntRange(0, lines.length - 1), function (i) {
                        var lineI = lines[i];
                        var lineIPlane;
                        var lineIRay = Ray3D_1.Ray3D.create(lineI.getV1(), lineI.getV2().sub(lineI.getV1()));
                        {
                            var u = lineI.getV2().sub(lineI.getV1());
                            var w = workingPlane.n;
                            var v = w.cross(u).normalize();
                            lineIPlane = Plane3D_1.Plane3D.fromKnownPtAndNormal(lineI.getV1(), v);
                        }
                        ;
                        return ArrayUtil_1.arrayBind(ArrayUtil_1.arrayIntRange(i + 1, lines.length), function (j) {
                            var epsilion = 0.001;
                            var lineJ = lines[j];
                            var lineJRay = Ray3D_1.Ray3D.create(lineJ.getV1(), lineJ.getV2().sub(lineJ.getV1()));
                            var tOp = lineJRay.collisionTimeWithPlane(lineIPlane);
                            if (tOp.isNone) {
                                return [];
                            }
                            var t = tOp.fromSome();
                            if (t < 0.0 || t > 1.0) {
                                return [];
                            }
                            var pt = lineJRay.positionFromTime(t);
                            var t2 = lineIRay.closestTimeToPoint(pt);
                            if (t2 < 0.0 || t2 > 1.0) {
                                return [];
                            }
                            var pt2 = lineIRay.positionFromTime(t2);
                            if (pt.distance(pt2) > epsilion) {
                                return [];
                            }
                            return [pt.add(pt2).scale(0.5)];
                        });
                    });
                });
            });
            var cGivenOrCalculatedIntersectionPoints = cGivenIntersectionPtUnderMouseOpOp
                .map(function (cGivenIntersectionPtUnderMouseOp) {
                return cGivenIntersectionPtUnderMouseOp.map(function (ptOp) {
                    return Lazy_1.Lazy.pure(ptOp
                        .map(function (pt) { return [pt]; })
                        .orSome([]));
                });
            })
                .orSome(cLineIntersectionPointSnaps);
            var cSnapPoints = cGivenSnapPoints.lift4(cLinePerpPointSnaps, cLineMidPointSnaps, cGivenOrCalculatedIntersectionPoints, function (snapPoints, linePerpPointSnaps, lineMidPointSnaps, givenOrCalculatedIntersectionPoints) {
                var allSnapPoints = ([]);
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(allSnapPoints, snapPoints);
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(allSnapPoints, linePerpPointSnaps);
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(allSnapPoints, lineMidPointSnaps);
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(allSnapPoints, givenOrCalculatedIntersectionPoints.get());
                return allSnapPoints;
            });
            var cSnapPointUnderMouseOp = cMousePosOp.lift3(cSnapPoints, cProjectWorldPointToScreenOp, function (mousePosOp, snapPoints, projectWorldPointToScreenOp) {
                return mousePosOp
                    .bind(function (mousePos) {
                    return ArrayUtil_1.arrayReduce(ArrayUtil_1.arrayBind(snapPoints, function (snapPoint) {
                        return projectWorldPointToScreenOp(snapPoint)
                            .map(function (snapPoint2) {
                            var screenDistSquared = mousePos.distanceSquared(snapPoint2);
                            if (screenDistSquared > DrawPolylineModel.SNAP_SCREEN_DIST * DrawPolylineModel.SNAP_SCREEN_DIST) {
                                return [];
                            }
                            return [Tuples_1.T2.of(snapPoint, screenDistSquared)];
                        })
                            .orSome([]);
                    }), function (arg0, arg1) { return arg0._2 < arg1._2 ? arg0 : arg1; })
                        .map(function (x) { return x._1; });
                });
            });
            var cAlongEdgeSnapPointUnderMouseOp = cMousePosOp.lift5(cGivenLines, cSnapPointUnderMouseOp, cProjectWorldPointToScreenOp, cScreenPointToWorldRayOp, function (mousePosOp, lines, snapPointUnderMouseOp, projectWorldPointToScreenOp, screenPointToWorldRayOp) {
                return snapPointUnderMouseOp.isSome ?
                    Option_1.Option.none() :
                    mousePosOp.bind(function (mousePos) {
                        return ArrayUtil_1.arrayReduce(ArrayUtil_1.arrayBind(lines, function (line) {
                            return projectWorldPointToScreenOp(line.getV1())
                                .lift2(projectWorldPointToScreenOp(line.getV2()), function (pt1, pt2) {
                                var projectedLineRay = Ray2D_1.Ray2D.fromOriginDirection(pt1, pt2.sub(pt1));
                                var t = projectedLineRay.closestTimeToPoint(mousePos);
                                var t2 = Math.max(0.0, Math.min(1.0, t));
                                var pt = projectedLineRay.pointFromTime(t2);
                                var rayThroughPtOp = screenPointToWorldRayOp(pt);
                                if (rayThroughPtOp.isNone) {
                                    return [];
                                }
                                var rayThroughPt = rayThroughPtOp.fromSome();
                                var lineRay = Ray3D_1.Ray3D.create(line.getV1(), line.getV2().sub(line.getV1()));
                                var t3Op = lineRay.closestTimeOnThisRayWithOtherRay(rayThroughPt);
                                if (t3Op.isNone) {
                                    return [];
                                }
                                var t3 = t3Op.fromSome();
                                var pt3 = lineRay.positionFromTime(t3);
                                var distanceSquared = pt.distanceSquared(mousePos);
                                if (distanceSquared > DrawPolylineModel.SNAP_SCREEN_DIST * DrawPolylineModel.SNAP_SCREEN_DIST) {
                                    return [];
                                }
                                return [Tuples_1.T2.of(pt3, distanceSquared)];
                            })
                                .orSome([]);
                        }), function (arg0, arg1) { return arg0._2 < arg1._2 ? arg0 : arg1; })
                            .map(function (x) { return x._1; });
                    });
            });
            var slInsertFirstPoint = (new sodium.StreamLoop());
            var cFirstPointOp = slInsertFirstPoint.map(function (arg0) { return Option_1.Option.some(arg0); }).orElse(sReset.mapTo(Option_1.Option.none())).hold(Option_1.Option.none());
            var slInsertLine = (new sodium.StreamLoop());
            var slLastPointOp = (new sodium.StreamLoop());
            var cLastPointOp = slLastPointOp.hold(Option_1.Option.none());
            clLastPointOp.loop(cLastPointOp);
            slLastPointOp.loop(slInsertFirstPoint.orElse(slInsertLine).map(function (arg0) { return Option_1.Option.some(arg0); }).orElse(sReset.mapTo(Option_1.Option.none())));
            slInsertFirstPoint.loop(SodiumUtil.streamFilterOption(sMousePressed
                .gate(cLastPointOp.map(function (x) { return x.isNone; }))
                .snapshot1(cSnapPointUnderMouseOp)
                .snapshot3(cAlongEdgeSnapPointUnderMouseOp, cMouseWorkingPlanePosOp, function (snapPointUnderMouseOp, alongEdgeSnapPointUnderMouseOp, mouseWorkingPlanePosOp) {
                return snapPointUnderMouseOp
                    .orElse(alongEdgeSnapPointUnderMouseOp)
                    .orElse(mouseWorkingPlanePosOp);
            })));
            var cLinesUnderFromPoint = cGivenLines.lift(cLastPointOp, function (lines, lastPointOp) {
                return lastPointOp
                    .map(function (lastPoint) {
                    return lines
                        .filter(function (line) {
                        var epsilon = 0.001;
                        var lineRay = Ray3D_1.Ray3D.create(line.getV1(), line.getV2().sub(line.getV1()));
                        var t = lineRay.closestTimeToPoint(lastPoint);
                        var t2 = Math.max(0.0, Math.min(1.0, t));
                        var pt = lineRay.positionFromTime(t2);
                        return pt.distance(lastPoint) <= epsilon;
                    });
                })
                    .orSome([]);
            });
            var cSnapDirections = cWorkingPlane.lift(cLinesUnderFromPoint, function (workingPlane, linesUnderFromPoint) {
                return ArrayUtil_1.arrayJoin([
                    [Vector3D_1.Vector3D.unitX_$LI$(), Vector3D_1.Vector3D.unitY_$LI$()],
                    linesUnderFromPoint.map(function (line) {
                        var u = line.getV2().sub(line.getV1());
                        var w = workingPlane.n;
                        var v = w.cross(u).normalize();
                        return v;
                    })
                ]);
            });
            var c_directionSnapPt_isFromFirst_isFromLast_op = cSnapPointUnderMouseOp
                .lift6(cFirstPointOp, cLastPointOp, cSnapDirections, cMousePosOp, cMouseWorkingPlanePosOp, function (arg0, arg1, arg2, arg3, arg4, arg5) {
                return Tuples_1.T6.of(arg0, arg1, arg2, arg3, arg4, arg5);
            })
                .lift(cProjectWorldPointToScreenOp, function (arg0, arg1) {
                return Tuples_1.T2.of(arg0, arg1);
            })
                .map(function (x) {
                var snapPointUnderMouseOp = x._1._1;
                var firstPointOp = x._1._2;
                var lastPointOp = x._1._3;
                var snapDirections = x._1._4;
                var mousePosOp = x._1._5;
                var mouseWorkingPlanePosOp = x._1._6;
                var projectWorldPointToScreenOp = x._2;
                if (snapPointUnderMouseOp.isSome) {
                    return Option_1.Option.none();
                }
                if (mousePosOp.isNone) {
                    return Option_1.Option.none();
                }
                var mousePos = mousePosOp.fromSome();
                if (mouseWorkingPlanePosOp.isNone) {
                    return Option_1.Option.none();
                }
                var mouseWorkingPlanePos = mouseWorkingPlanePosOp.fromSome();
                var calcDirectionSnapPtFromPointOp = function (fromPoint) {
                    return ArrayUtil_1.arrayReduce(ArrayUtil_1.arrayBind(snapDirections, function (snapDirection) {
                        var snapDirectionRay = Ray3D_1.Ray3D.create(fromPoint, snapDirection);
                        var pt = snapDirectionRay.closestPoint(mouseWorkingPlanePos);
                        return projectWorldPointToScreenOp(pt)
                            .map(function (pt2) {
                            var screenDistSquared = pt2.distanceSquared(mousePos);
                            if (screenDistSquared > DrawPolylineModel.SNAP_SCREEN_DIST * DrawPolylineModel.SNAP_SCREEN_DIST) {
                                return [];
                            }
                            return [Tuples_1.T2.of(Tuples_1.T2.of(pt, snapDirectionRay), screenDistSquared)];
                        })
                            .orSome([]);
                    }), function (arg0, arg1) { return arg0._2 < arg1._2 ? arg0 : arg1; })
                        .map(function (x) { return x._1; });
                };
                var directionSnapPtFromFirstPointOp = firstPointOp.bind(calcDirectionSnapPtFromPointOp);
                var directionSnapPtFromLastPointOp = lastPointOp.bind(calcDirectionSnapPtFromPointOp);
                if (directionSnapPtFromFirstPointOp.isSome) {
                    var directionSnapPtFromFirstPoint = directionSnapPtFromFirstPointOp.fromSome();
                    if (directionSnapPtFromLastPointOp.isSome) {
                        var directionSnapPtFromLastPoint = directionSnapPtFromLastPointOp.fromSome();
                        var intersectingPointOp = void 0;
                        {
                            var tOp = directionSnapPtFromFirstPoint._2.closestTimeOnThisRayWithOtherRay(directionSnapPtFromLastPoint._2);
                            if (tOp.isNone) {
                                intersectingPointOp = Option_1.Option.none();
                            }
                            else {
                                var epsilon = 0.001;
                                var t = tOp.fromSome();
                                var pt = directionSnapPtFromFirstPoint._2.positionFromTime(t);
                                var pt2 = directionSnapPtFromLastPoint._2.closestPoint(pt);
                                if (pt.distance(pt2) <= epsilon) {
                                    intersectingPointOp = Option_1.Option.some(pt.add(pt2).scale(0.5));
                                }
                                else {
                                    intersectingPointOp = Option_1.Option.none();
                                }
                            }
                        }
                        ;
                        if (intersectingPointOp.isSome) {
                            var intersectingPoint = intersectingPointOp.fromSome();
                            return Option_1.Option.some(Tuples_1.T3.of(intersectingPoint, true, true));
                        }
                        return Option_1.Option.some(Tuples_1.T3.of(directionSnapPtFromFirstPoint._1, true, false));
                    }
                    else {
                        return Option_1.Option.some(Tuples_1.T3.of(directionSnapPtFromFirstPoint._1, true, false));
                    }
                }
                else {
                    if (directionSnapPtFromLastPointOp.isSome) {
                        var directionSnapPtFromLastPoint = directionSnapPtFromLastPointOp.fromSome();
                        return Option_1.Option.some(Tuples_1.T3.of(directionSnapPtFromLastPoint._1, false, true));
                    }
                    else {
                        return Option_1.Option.none();
                    }
                }
            });
            var cDirectionSnapPointOp = c_directionSnapPt_isFromFirst_isFromLast_op
                .map(function (directionSnapPt_isFromFirst_isFromLast_op) {
                return directionSnapPt_isFromFirst_isFromLast_op.map(function (x) { return x._1; });
            });
            var cMovingNextPointOp = cSnapPointUnderMouseOp.lift4(cDirectionSnapPointOp, cAlongEdgeSnapPointUnderMouseOp, cMouseWorkingPlanePosOp, function (snapPointUnderMouseOp, directionSnapPointOp, alongEdgeSnapPointUnderMouseOp, mouseWorkingPlanePosOp) {
                return snapPointUnderMouseOp
                    .orElse(directionSnapPointOp)
                    .orElse(alongEdgeSnapPointUnderMouseOp)
                    .orElse(mouseWorkingPlanePosOp);
            });
            var cMovingNextLineOp = cLastPointOp.lift(cMovingNextPointOp, function (lastPointOp, movingNextPointOp) {
                return lastPointOp.lift2(movingNextPointOp, function (lastPoint, movingNextPoint) {
                    return Line3D_1.Line3D.create(lastPoint, movingNextPoint);
                });
            });
            var cIsSnappingToDirection = cSnapPointUnderMouseOp.lift(c_directionSnapPt_isFromFirst_isFromLast_op, function (snapPointUnderMouseOp, directionSnapPt_isFromFirst_isFromLast_op) {
                if (snapPointUnderMouseOp.isSome) {
                    return false;
                }
                if (directionSnapPt_isFromFirst_isFromLast_op.isNone) {
                    return false;
                }
                var directionSnapPt_isFromFirst_isFromLast = directionSnapPt_isFromFirst_isFromLast_op.fromSome();
                return directionSnapPt_isFromFirst_isFromLast._3;
            });
            var cDirectionalSnapDottedLines = cSnapPointUnderMouseOp.lift4(c_directionSnapPt_isFromFirst_isFromLast_op, cFirstPointOp, cLastPointOp, function (snapPointUnderMouseOp, directionSnapPt_isFromFirst_isFromLast_op, firstPointOp, lastPointOp) {
                if (snapPointUnderMouseOp.isSome) {
                    return /* emptyList */ [];
                }
                if (directionSnapPt_isFromFirst_isFromLast_op.isNone) {
                    return /* emptyList */ [];
                }
                var directionSnapPt_isFromFirst_isFromLast = directionSnapPt_isFromFirst_isFromLast_op.fromSome();
                var result = ([]);
                if (directionSnapPt_isFromFirst_isFromLast._2) {
                    if (firstPointOp.isSome) {
                        var firstPoint = firstPointOp.fromSome();
                        /* add */ (result.push(Line3D_1.Line3D.create(directionSnapPt_isFromFirst_isFromLast._1, firstPoint)) > 0);
                    }
                }
                if (directionSnapPt_isFromFirst_isFromLast._3) {
                    if (lastPointOp.isSome) {
                        var lastPoint = lastPointOp.fromSome();
                        /* add */ (result.push(Line3D_1.Line3D.create(directionSnapPt_isFromFirst_isFromLast._1, lastPoint)) > 0);
                    }
                }
                return result;
            });
            var sInitLineOp = SodiumUtil.streamFilterOption(sodium.Operational
                .value(cMovingNextLineOp)
                .collect(Option_1.Option.none(), function (nextLineOp, lastLineOp) {
                var change;
                if (lastLineOp.isSome != nextLineOp.isSome) {
                    change = Option_1.Option.some(nextLineOp);
                }
                else {
                    change = Option_1.Option.none();
                }
                return new sodium.Tuple2(change, nextLineOp);
            }));
            slInsertLine.loop(SodiumUtil
                .streamFilterOption(sReplyValueEntered.snapshot3(cMovingNextLineOp, cScale, function (replyValueEntered, movingNextLineOp, scale) {
                return movingNextLineOp.bind(function (movingNextLine) {
                    var u = movingNextLine.getV2().sub(movingNextLine.getV1()).normalize();
                    if (!u.allFinite()) {
                        return Option_1.Option.none();
                    }
                    return Option_1.Option.some(movingNextLine.getV1().add(u.scale(replyValueEntered._2 * scale)));
                });
            }))
                .orElse(SodiumUtil.streamFilterOption(sLengthAngleEntered.snapshot4(cMovingNextLineOp, cScale, cWorkingAxes, function (lengthAngleEntered, movingNextLineOp, scale, workingAxes) {
                return movingNextLineOp.bind(function (movingNextLine) {
                    var u = movingNextLine.getV2().sub(movingNextLine.getV1()).normalize();
                    if (!u.allFinite()) {
                        return Option_1.Option.none();
                    }
                    var ca = Math.cos(/* toRadians */ (function (x) { return x * Math.PI / 180; })(lengthAngleEntered._3));
                    var sa = Math.sin(/* toRadians */ (function (x) { return x * Math.PI / 180; })(lengthAngleEntered._3));
                    var pt = workingAxes.pointFromThisSpace(movingNextLine.getV1().add(Vector3D_1.Vector3D.create(lengthAngleEntered._2 * ca * scale, lengthAngleEntered._2 * sa * scale, 0.0)));
                    return Option_1.Option.some(pt);
                });
            })))
                .orElse(SodiumUtil.streamFilterOption(sMousePressed.snapshot1(cMovingNextPointOp))));
            _this.__cFloatingLengthAngles =
                sInitLineOp
                    .snapshot3(cScale, cWorkingAxes, function (initLineOp, initScale, initWorkingAxes) {
                    return initLineOp
                        .map(function (initLine) {
                        var angle;
                        {
                            var line2 = initLine.toSpace(initWorkingAxes);
                            var delta = line2.getV2().sub(line2.getV1());
                            angle = /* toDegrees */ (function (x) { return x * 180 / Math.PI; })(Math.atan2(delta.getY(), delta.getX()));
                        }
                        ;
                        return /* singletonList */ [
                            new FloatingLengthAngle_1.FloatingLengthAngle(1, initLine.getLength() / initScale, angle, SodiumUtil
                                .streamFilterOption(sodium.Operational.updates(cMovingNextLineOp))
                                .snapshot(cScale, function (line, scale) { return line.getLength() / scale; }), SodiumUtil
                                .streamFilterOption(sodium.Operational.updates(cMovingNextLineOp))
                                .snapshot(cWorkingAxes, function (line, workingAxes) {
                                var line2 = line.toSpace(workingAxes);
                                var delta = line2.getV2().sub(line2.getV1());
                                return /* toDegrees */ (function (x) { return x * 180 / Math.PI; })(Math.atan2(delta.getY(), delta.getX()));
                            }), cMousePosOp
                                .map(function (mousePosOp) {
                                return mousePosOp.map(function (mousePos) { return mousePos.add(Vector2D_1.Vector2D.create(0.0, -20.0)); });
                            }))
                        ];
                    })
                        .orSome([]);
                })
                    .hold([]);
            _this.__sAskValuesAt =
                SodiumUtil
                    .streamFilterOption(sInitLineOp)
                    .snapshot(cScale, function (initLine, initScale) { /* singletonList */ return [
                    new AskValueAtParams_1.AskValueAtParams({
                        id: 1,
                        cLabelOp: new sodium.Cell(Option_1.Option.some("Length (mm):")),
                        cPosition: cMovingNextPointOp.lift3(cProjectWorldPointToScreenOp, cMousePosOp, function (movingNextPointOp, projectWorldPointToScreenOp, mousePosOp) {
                            return movingNextPointOp
                                .bind(projectWorldPointToScreenOp)
                                .map(function (pt) { return pt.add(Vector2D_1.Vector2D.create(10.0, -10.0)); })
                                .orElse(mousePosOp)
                                .orSome(Vector2D_1.Vector2D.zero);
                        }),
                        initialValue: initLine.getLength() / initScale,
                        sSetValue: SodiumUtil
                            .streamFilterOption(sodium.Operational.updates(cMovingNextLineOp))
                            .snapshot(cScale, function (line, scale) { return line.getLength() / scale; })
                    })
                ]; });
            _this.__sHideAskValuesAt = sInitLineOp.filter(function (x) { return x.isNone; }).mapTo(sodium.Unit.UNIT);
            _this.__sInsertLine =
                SodiumUtil.streamFilterOption(slInsertLine.snapshot(cLastPointOp, function (pt2, pt1Op) {
                    return pt1Op.map(function (pt1) { return Line3D_1.Line3D.create(pt1, pt2); });
                }));
            var slCurrentPolyline = (new sodium.StreamLoop());
            _this.__cCurrentPolyline = slCurrentPolyline.hold(/* emptyList */ []);
            slCurrentPolyline.loop(slInsertFirstPoint
                .orElse(slInsertLine)
                .snapshot(_this.__cCurrentPolyline, function (pt, currentPolyline) {
                var currentPolyline2 = ([]);
                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(currentPolyline2, currentPolyline);
                /* add */ (currentPolyline2.push(pt) > 0);
                return currentPolyline2;
            }).orElse(sReset.mapTo(/* emptyList */ [])));
            _this._cWorldSpaceOverlay =
                _this.__cCurrentPolyline.lift6(cFirstPointOp, cLastPointOp, cMovingNextLineOp, cIsSnappingToDirection, cDirectionalSnapDottedLines, function (polyline, firstPointOp, lastPointOp, movingNextLineOp, isSnappingToDirection, directionalSnapDottedLines) {
                    return function (canvasCtx) {
                        canvasCtx.save();
                        canvasCtx.strokeStyle = "#0000FF";
                        if (polyline.length >= 2) {
                            canvasCtx.beginPath();
                            canvasCtx.moveTo(polyline[0].x, polyline[0].y);
                            for (var i = 1; i < polyline.length; ++i) {
                                canvasCtx.lineTo(polyline[i].x, polyline[i].y);
                            }
                            canvasCtx.stroke();
                        }
                        if (movingNextLineOp.isSome) {
                            var movingNextLine = movingNextLineOp.fromSome();
                            if (isSnappingToDirection) {
                                canvasCtx.save();
                                canvasCtx.lineWidth = 2.0;
                            }
                            canvasCtx.beginPath();
                            canvasCtx.moveTo(movingNextLine.v1.x, movingNextLine.v1.y);
                            canvasCtx.lineTo(movingNextLine.v2.x, movingNextLine.v2.y);
                            canvasCtx.stroke();
                            if (isSnappingToDirection) {
                                canvasCtx.restore();
                            }
                        }
                        if (directionalSnapDottedLines.length != 0) {
                            canvasCtx.save();
                            canvasCtx.setLineDash([5, 10]);
                            canvasCtx.beginPath();
                            for (var i = 0; i < directionalSnapDottedLines.length; ++i) {
                                canvasCtx.moveTo(directionalSnapDottedLines[i].v1.x, directionalSnapDottedLines[i].v1.y);
                                canvasCtx.lineTo(directionalSnapDottedLines[i].v2.x, directionalSnapDottedLines[i].v2.y);
                            }
                            canvasCtx.stroke();
                            canvasCtx.restore();
                        }
                        canvasCtx.restore();
                    };
                });
            _this._cScreenSpaceOverlay =
                cSnapPointUnderMouseOp.lift3(cAlongEdgeSnapPointUnderMouseOp, cProjectWorldPointToScreenOp, function (snapPointUnderMouseOp, alongEdgeSnapPointUnderMouseOp, projectWorldPointToScreenOp) {
                    var projectedSnapPointUnderMouseOp = snapPointUnderMouseOp.bind(projectWorldPointToScreenOp);
                    var projectedAlongEdgeSnapPointUnderMouseOp = alongEdgeSnapPointUnderMouseOp.bind(projectWorldPointToScreenOp);
                    return function (canvasCtx) {
                        if (projectedSnapPointUnderMouseOp.isSome) {
                            canvasCtx.save();
                            canvasCtx.fillStyle = "#00FF00";
                            var pt = projectedSnapPointUnderMouseOp.fromSome();
                            canvasCtx.beginPath();
                            canvasCtx.arc(pt.x, pt.y, DrawPolylineModel.SNAP_PT_RADIUS, 0, 2.0 * Math.PI);
                            canvasCtx.fill();
                            canvasCtx.restore();
                        }
                        else if (projectedAlongEdgeSnapPointUnderMouseOp.isSome) {
                            canvasCtx.save();
                            canvasCtx.fillStyle = "#0000FF";
                            var pt = projectedAlongEdgeSnapPointUnderMouseOp.fromSome();
                            canvasCtx.beginPath();
                            canvasCtx.arc(pt.x, pt.y, DrawPolylineModel.SNAP_PT_RADIUS, 0, 2.0 * Math.PI);
                            canvasCtx.fill();
                            canvasCtx.restore();
                        }
                    };
                });
        });
    }
    Object.defineProperty(DrawPolylineModel.prototype, "cWorldSpaceOverlay", {
        get: function () {
            return this._cWorldSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawPolylineModel.prototype, "cScreenSpaceOverlay", {
        get: function () {
            return this._cScreenSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    DrawPolylineModel.prototype.cCurrentPolyline = function () {
        return this.__cCurrentPolyline;
    };
    DrawPolylineModel.prototype.sInsertLine = function () {
        return this.__sInsertLine;
    };
    DrawPolylineModel.prototype.sAskValuesAt = function () {
        return this.__sAskValuesAt;
    };
    DrawPolylineModel.prototype.sHideAskValuesAt = function () {
        return this.__sHideAskValuesAt;
    };
    DrawPolylineModel.prototype.cFloatingLengthAngles = function () {
        return this.__cFloatingLengthAngles;
    };
    DrawPolylineModel.SNAP_SCREEN_DIST = 15.0;
    DrawPolylineModel.SNAP_PT_RADIUS = 5.0;
    return DrawPolylineModel;
}());
exports.DrawPolylineModel = DrawPolylineModel;
DrawPolylineModel["__class"] = "com.shedmasta.core.cadmodes.DrawPolylineModel";
//# sourceMappingURL=DrawPolylineModel.js.map
});
___scope___.file("app/modes/FloatingLengthAngle.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FloatingLengthAngle = /** @class */ (function () {
    function FloatingLengthAngle(id, initLength, initAngle, sSetLength, sSetAngle, cPositionOp) {
        this._id = 0;
        this._initLength = 0;
        this._initAngle = 0;
        this._sSetLength = null;
        this._sSetAngle = null;
        this._cPositionOp = null;
        this._id = id;
        this._initLength = initLength;
        this._initAngle = initAngle;
        this._sSetLength = sSetLength;
        this._sSetAngle = sSetAngle;
        this._cPositionOp = cPositionOp;
    }
    Object.defineProperty(FloatingLengthAngle.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatingLengthAngle.prototype, "initLength", {
        get: function () {
            return this._initLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatingLengthAngle.prototype, "initAngle", {
        get: function () {
            return this._initAngle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatingLengthAngle.prototype, "sSetLength", {
        get: function () {
            return this._sSetLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatingLengthAngle.prototype, "sSetAngle", {
        get: function () {
            return this._sSetAngle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatingLengthAngle.prototype, "cPositionOp", {
        get: function () {
            return this._cPositionOp;
        },
        enumerable: true,
        configurable: true
    });
    return FloatingLengthAngle;
}());
exports.FloatingLengthAngle = FloatingLengthAngle;
FloatingLengthAngle["__class"] = "FloatingLengthAngle";
//# sourceMappingURL=FloatingLengthAngle.js.map
});
___scope___.file("app/math/Line3D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ray3D_1 = require("./Ray3D");
var Vector3D_1 = require("./Vector3D");
var Option_1 = require("../Option");
/**
 *
 * @author Clinton
 * @class
 */
var Line3D = /** @class */ (function () {
    function Line3D(v1, v2) {
        this._v1 = null;
        this._v2 = null;
        this._v1 = v1;
        this._v2 = v2;
    }
    Line3D.create = function (v1, v2) {
        return new Line3D(v1, v2);
    };
    Object.defineProperty(Line3D.prototype, "v1", {
        get: function () {
            return this._v1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line3D.prototype, "v2", {
        get: function () {
            return this._v2;
        },
        enumerable: true,
        configurable: true
    });
    Line3D.prototype.getV1 = function () {
        return this._v1;
    };
    Line3D.prototype.getV2 = function () {
        return this._v2;
    };
    Line3D.prototype.getLengthSquared = function () {
        var d = this._v2.sub(this._v1);
        return d.dot(d);
    };
    Line3D.prototype.getLength = function () {
        return Math.sqrt(this.getLengthSquared());
    };
    Line3D.prototype.fromSpace = function (space) {
        return Line3D.create(space.pointFromThisSpace(this._v1), space.pointFromThisSpace(this._v2));
    };
    Line3D.prototype.toSpace = function (space) {
        return Line3D.create(space.pointToThisSpace(this._v1), space.pointToThisSpace(this._v2));
    };
    Line3D.prototype.lineLineIntersection = function (line) {
        var line1 = this;
        var line2 = line;
        var r1 = Ray3D_1.Ray3D.create(line1.getV1(), line1.getV2().sub(line1.getV1()));
        var r2 = Ray3D_1.Ray3D.create(line2.getV1(), line2.getV2().sub(line2.getV1()));
        return Option_1.Option.join(r1.closestTimeOnThisRayWithOtherRay(r2).lift2(r2.closestTimeOnThisRayWithOtherRay(r1), function (t1, t2) {
            if (t1 < 0.0 || t1 > 1.0) {
                return Option_1.Option.none();
            }
            if (t2 < 0.0 || t2 > 1.0) {
                return Option_1.Option.none();
            }
            var p1 = r1.positionFromTime(t1);
            var p2 = r2.positionFromTime(t2);
            if (p1.distanceSquared(p2) <= 0.001 * 0.001) {
                return Option_1.Option.some(p1.add(p2).scale(0.5));
            }
            else {
                return Option_1.Option.none();
            }
        }));
    };
    return Line3D;
}());
exports.Line3D = Line3D;
Line3D["__class"] = "Line3D";
(function (Line3D) {
    var Builder = /** @class */ (function () {
        function Builder() {
            this.v1 = null;
            this.v2 = null;
        }
        Builder.create = function () {
            return new Line3D.Builder();
        };
        Builder.prototype.set = function (other) {
            this.v1 = other._v1;
            this.v2 = other._v2;
            return this;
        };
        Builder.prototype.setV1$com_sm_fp_data_math_Vector3D = function (v1) {
            this.v1 = v1;
            return this;
        };
        Builder.prototype.setV1$double$double$double = function (x, y, z) {
            this.v1 = Vector3D_1.Vector3D.create(x, y, z);
            return this;
        };
        Builder.prototype.setV1 = function (x, y, z) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof z === 'number') || z === null)) {
                return this.setV1$double$double$double(x, y, z);
            }
            else if (((x != null && x instanceof Vector3D_1.Vector3D) || x === null) && y === undefined && z === undefined) {
                return this.setV1$com_sm_fp_data_math_Vector3D(x);
            }
            else
                throw new Error('invalid overload');
        };
        Builder.prototype.setV2$com_sm_fp_data_math_Vector3D = function (v2) {
            this.v2 = v2;
            return this;
        };
        Builder.prototype.setV2$double$double$double = function (x, y, z) {
            this.v2 = Vector3D_1.Vector3D.create(x, y, z);
            return this;
        };
        Builder.prototype.setV2 = function (x, y, z) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof z === 'number') || z === null)) {
                return this.setV2$double$double$double(x, y, z);
            }
            else if (((x != null && x instanceof Vector3D_1.Vector3D) || x === null) && y === undefined && z === undefined) {
                return this.setV2$com_sm_fp_data_math_Vector3D(x);
            }
            else
                throw new Error('invalid overload');
        };
        Builder.prototype.build = function () {
            return Line3D.create(this.v1, this.v2);
        };
        return Builder;
    }());
    Line3D.Builder = Builder;
    Builder["__class"] = "Line3D.Builder";
})(Line3D = exports.Line3D || (exports.Line3D = {}));
exports.Line3D = Line3D;
//# sourceMappingURL=Line3D.js.map
});
___scope___.file("app/math/Ray2D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2D_1 = require("./Vector2D");
var Option_1 = require("../Option");
/**
 *
 * @author Clinton
 * @class
 */
var Ray2D = /** @class */ (function () {
    function Ray2D(origin, direction) {
        this._origin = null;
        this._direction = null;
        this._origin = origin;
        this._direction = direction;
    }
    Ray2D.fromOriginDirection = function (origin, direction) {
        return new Ray2D(origin, direction);
    };
    Object.defineProperty(Ray2D.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ray2D.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        enumerable: true,
        configurable: true
    });
    Ray2D.prototype.intersectionTime = function (plane) {
        var t = -(plane.getD() + this._origin.dot(plane.getN())) / (this._direction.dot(plane.getN()));
        if ( /* isNaN */isNaN(t) || /* isInfinite */ (function (value) { return Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value; })(t)) {
            return Option_1.Option.none();
        }
        return Option_1.Option.some(t);
    };
    Ray2D.prototype.closestTimeToPoint = function (point) {
        var t = point.sub(this.origin).dot(this.direction) / this.direction.dot(this.direction);
        return t;
    };
    Ray2D.prototype.pointFromTime = function (time) {
        return Vector2D_1.Vector2D.create(this._origin.x + this._direction.x * time, this._origin.y + this._direction.y * time);
    };
    Ray2D.prototype.intersectionPoint = function (plane) {
        var _this = this;
        return this.intersectionTime(plane).map(function (t) { return _this.pointFromTime(t); });
    };
    return Ray2D;
}());
exports.Ray2D = Ray2D;
Ray2D["__class"] = "Ray2D";
(function (Ray2D) {
    var Builder = /** @class */ (function () {
        function Builder() {
            this.origin = null;
            this.direction = null;
        }
        Builder.originAndDirection = function () {
            return new Ray2D.Builder();
        };
        /**
         *
         * @param {Vector2D} origin
         * @return {*}
         */
        Builder.prototype.setOrigin = function (origin) {
            this.origin = origin;
            return this;
        };
        /**
         *
         * @param {Vector2D} direction
         * @return {*}
         */
        Builder.prototype.setDirection = function (direction) {
            this.direction = direction;
            return this;
        };
        /**
         *
         * @return {Ray2D}
         */
        Builder.prototype.build = function () {
            return new Ray2D(this.origin, this.direction);
        };
        return Builder;
    }());
    Ray2D.Builder = Builder;
    Builder["__class"] = "Ray2D.Builder";
    Builder["__interfaces"] = ["Ray2D.SetDirectionStep", "Ray2D.BuildStep", "Ray2D.SetOriginStep"];
})(Ray2D = exports.Ray2D || (exports.Ray2D = {}));
exports.Ray2D = Ray2D;
//# sourceMappingURL=Ray2D.js.map
});
___scope___.file("app/modes/FilletLinesMode.js", function(exports, require, module, __filename, __dirname){

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
var sodium = require("sodiumjs");
var FilletLinesModel_1 = require("./FilletLinesModel");
var ArrayUtil_1 = require("../ArrayUtil");
var Mode_1 = require("./Mode");
var Tuples_1 = require("../Tuples");
var ArcComponent_1 = require("../ecs/components/ArcComponent");
var Axes2DComponent_1 = require("../ecs/components/Axes2DComponent");
var Line3DComponent_1 = require("../ecs/components/Line3DComponent");
var Axes2D_1 = require("../math/Axes2D");
var Axes3D_1 = require("../math/Axes3D");
var Complex_1 = require("../math/Complex");
var Quaternion_1 = require("../math/Quaternion");
var Vector2D_1 = require("../math/Vector2D");
var Vector3D_1 = require("../math/Vector3D");
var FilletLinesMode = /** @class */ (function (_super) {
    __extends(FilletLinesMode, _super);
    function FilletLinesMode(params) {
        var _this = _super.call(this) || this;
        sodium.Transaction.run(function () {
            var slReset = new sodium.StreamLoop();
            var cLines = params.cSceneCtxOp.map(function (sceneCtxOp) {
                return sceneCtxOp
                    .map(function (sceneCtx) {
                    return ArrayUtil_1.arrayBind(sceneCtx
                        .entitiesWithAllComponents([Line3DComponent_1.Line3DComponent.ecsComponent.type()]), function (lineId) {
                        return sceneCtx
                            .getComponent(lineId, Line3DComponent_1.Line3DComponent.ecsComponent)
                            .map(function (x) { return [Tuples_1.T2.of(lineId, x.line)]; })
                            .orSome([]);
                    });
                })
                    .orSome([]);
            });
            var filletLinesModel = new FilletLinesModel_1.FilletLinesModel(params.cMousePosOp, params.sMousePressed, cLines, params.cScreenPointToWorldRayOp, params.cProjectWorldPointToScreenOp, params.sReplyValueChanged, params.sReplyValueEntered, params.cScale);
            var sUpdate = filletLinesModel.sPerformFillet().map(function (performFillet) {
                return function (sceneCtx) {
                    var line1Axes = Axes2D_1.Axes2D.identity_$LI$();
                    var line2Axes = Axes2D_1.Axes2D.identity_$LI$();
                    var line1Axes2;
                    var line2Axes2;
                    {
                        var o = line1Axes.getOrigin();
                        var u = line1Axes.getOrientation().getU();
                        line1Axes2 = Axes3D_1.Axes3D.Builder.fromOriginOrientation().setOrigin(Vector3D_1.Vector3D.create(o.x, o.y, 0.0)).setOrientation(Quaternion_1.Quaternion.fromWU(Vector3D_1.Vector3D.unitZ_$LI$(), Vector3D_1.Vector3D.create(u.x, u.y, 0.0))).build();
                    }
                    ;
                    {
                        var o = line2Axes.getOrigin();
                        var u = line2Axes.getOrientation().getU();
                        line2Axes2 = Axes3D_1.Axes3D.Builder.fromOriginOrientation().setOrigin(Vector3D_1.Vector3D.create(o.x, o.y, 0.0)).setOrientation(Quaternion_1.Quaternion.fromWU(Vector3D_1.Vector3D.unitZ_$LI$(), Vector3D_1.Vector3D.create(u.x, u.y, 0.0))).build();
                    }
                    ;
                    var parentWorldAxes = Axes2D_1.Axes2D.identity_$LI$();
                    sceneCtx.setComponents(performFillet._1._1._1, [Line3DComponent_1.Line3DComponent.of(performFillet._1._1._2.toSpace(line1Axes2))]);
                    sceneCtx.setComponents(performFillet._1._2._1, [Line3DComponent_1.Line3DComponent.of(performFillet._1._2._2.toSpace(line2Axes2))]);
                    var axes_partialCircle_op = performFillet._2;
                    if (axes_partialCircle_op.isSome) {
                        var axes_partialCircle = axes_partialCircle_op.fromSome();
                        var axes = axes_partialCircle._1;
                        var axes2 = void 0;
                        var flipAngle = axes.w.getZ() < 0.0;
                        {
                            var o = axes.origin;
                            var u = flipAngle ? axes.u.scale(-1.0) : axes.u;
                            axes2 = Axes2D_1.Axes2D.Builder.fromOriginOrientation().setOrigin(Vector2D_1.Vector2D.create(o.getX(), o.getY())).setOrientation(Complex_1.Complex.xy(Vector2D_1.Vector2D.create(u.getX(), u.getY()).normalize())).build();
                        }
                        ;
                        var axesLocal = parentWorldAxes.axesToSpace(axes2);
                        var partialCircle = axes_partialCircle._2;
                        var partialCircle2 = void 0;
                        if (flipAngle) {
                            partialCircle2 = new ArcComponent_1.ArcComponent(partialCircle.radius(), 180.0 - partialCircle.startAngle(), -partialCircle.extent());
                        }
                        else {
                            partialCircle2 = partialCircle;
                        }
                        sceneCtx.createEntity([Axes2DComponent_1.Axes2DComponent.create(axesLocal), partialCircle2]);
                    }
                };
            });
            var sFinished = sUpdate.mapTo(sodium.Unit.UNIT);
            slReset.loop(sUpdate.mapTo(sodium.Unit.UNIT));
            _this._sUpdate = sUpdate;
            _this._sFinished = sFinished;
            _this._cWorldSpaceOverlay = filletLinesModel.cWorldSpaceOverlay;
            _this._cScreenSpaceOverlay = filletLinesModel.cScreenSpaceOverlay;
            _this._cAskValuesAt = filletLinesModel.sAskValuesAt().orElse(filletLinesModel.sHideAskValuesAt().mapTo([])).hold([]);
        });
        return _this;
    }
    Object.defineProperty(FilletLinesMode.prototype, "sFinished", {
        get: function () {
            return this._sFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilletLinesMode.prototype, "sUpdate", {
        get: function () {
            return this._sUpdate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilletLinesMode.prototype, "cWorldSpaceOverlay", {
        get: function () {
            return this._cWorldSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilletLinesMode.prototype, "cScreenSpaceOverlay", {
        get: function () {
            return this._cScreenSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilletLinesMode.prototype, "cAskValuesAt", {
        get: function () {
            return this._cAskValuesAt;
        },
        enumerable: true,
        configurable: true
    });
    return FilletLinesMode;
}(Mode_1.Mode));
exports.FilletLinesMode = FilletLinesMode;
//# sourceMappingURL=FilletLinesMode.js.map
});
___scope___.file("app/modes/FilletLinesModel.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var AskValueAtParams_1 = require("./AskValueAtParams");
var ArrayUtil_1 = require("../ArrayUtil");
var Lazy_1 = require("../Lazy");
var Option_1 = require("../Option");
var SodiumUtil = require("../SodiumUtil");
var Tuples_1 = require("../Tuples");
var Vectors_1 = require("../Vectors");
var ArcComponent_1 = require("../ecs/components/ArcComponent");
var Axes3D_1 = require("../math/Axes3D");
var Line2D_1 = require("../math/Line2D");
var Line3D_1 = require("../math/Line3D");
var Util_1 = require("../math/Util");
var Plane3D_1 = require("../math/Plane3D");
var Quaternion_1 = require("../math/Quaternion");
var Ray2D_1 = require("../math/Ray2D");
var Ray3D_1 = require("../math/Ray3D");
var Vector2D_1 = require("../math/Vector2D");
var Vector3D_1 = require("../math/Vector3D");
var FilletLinesModel = /** @class */ (function () {
    function FilletLinesModel(cMousePosOp, sMousePressed, cLines, cScreenPointToWorldRayOp, cProjectWorldPointToScreenOp, sReplyValueChanged, sReplyValueEntered, cScale) {
        var _this = this;
        this.__sAskValuesAt = null;
        this.__sHideAskValuesAt = null;
        this.__sPerformFillet = null;
        sodium.Transaction.run(function () {
            var slReset = (new sodium.StreamLoop());
            var cMouseRayOp = cMousePosOp.lift(cScreenPointToWorldRayOp, function (mousePosOp, screenPointToWorldRayOp) { return mousePosOp.bind(screenPointToWorldRayOp); });
            var cProjectedLines = cLines.lift(cProjectWorldPointToScreenOp, function (lines, projectWorldPointToScreenOp) {
                return ArrayUtil_1.arrayBind(lines, function (line) {
                    return projectWorldPointToScreenOp(line._2.getV1())
                        .lift2(projectWorldPointToScreenOp(line._2.getV2()), function (pt1, pt2) { return [Tuples_1.T3.of(line._1, line._2, Line2D_1.Line2D.create(pt1, pt2))]; })
                        .orSome([]);
                });
            });
            var cProjectedLineUnderMouseOp = cMousePosOp.lift3(cMouseRayOp, cProjectedLines, function (mousePosOp, mouseRayOp, projectedLines) { return Lazy_1.Lazy.create(function () {
                return Option_1.Option.join(mousePosOp.lift2(mouseRayOp, function (mousePos, mouseRay) {
                    return ArrayUtil_1.arrayReduce(ArrayUtil_1.arrayBind(projectedLines, function (projectedLine) {
                        var lineRay = Ray2D_1.Ray2D.fromOriginDirection(projectedLine._3.v1, projectedLine._3.v2.sub(projectedLine._3.v1));
                        var t = lineRay.closestTimeToPoint(mousePos);
                        var t2 = Math.max(0.0, Math.min(1.0, t));
                        var pt = lineRay.pointFromTime(t2);
                        var distanceSquared = mousePos.distanceSquared(pt);
                        if (distanceSquared > FilletLinesModel.SNAP_SCREEN_DIST * FilletLinesModel.SNAP_SCREEN_DIST) {
                            return [];
                        }
                        var pt2;
                        {
                            var lineRay2 = Ray3D_1.Ray3D.create(projectedLine._2.v1, projectedLine._2.v2.sub(projectedLine._2.v1));
                            var t3Op = lineRay2.closestTimeOnThisRayWithOtherRay(mouseRay);
                            if (t3Op.isNone) {
                                return [];
                            }
                            var t3 = t3Op.fromSome();
                            var t4 = Math.max(0.0, Math.min(1.0, t3));
                            pt2 = lineRay2.positionFromTime(t4);
                        }
                        ;
                        return [Tuples_1.T2.of(Tuples_1.T4.of(projectedLine._1, projectedLine._2, projectedLine._3, pt2), distanceSquared)];
                    }), function (arg0, arg1) { return arg0._2 < arg1._2 ? arg0 : arg1; })
                        .map(function (x) { return x._1; });
                }));
            }); });
            var slSelectedFirstLineOp = (new sodium.StreamLoop());
            var cSelectedFirstLineOp = slSelectedFirstLineOp.hold(Option_1.Option.none());
            var slSelectedSecondLineOp = (new sodium.StreamLoop());
            var cSelectedSecondLineOp = slSelectedSecondLineOp.hold(Option_1.Option.none());
            var cSelectableProjectedLineUnderMouseOp = cSelectedFirstLineOp.lift3(cSelectedSecondLineOp, cProjectedLineUnderMouseOp, function (selectedFirstLineOp, selectedSecondLineOp, projectedLineUnderMouseOp) { return Lazy_1.Lazy.create(function () {
                if (selectedFirstLineOp.isSome && selectedSecondLineOp.isSome) {
                    return Option_1.Option.none();
                }
                var projectedLineUnderMouseOp2 = projectedLineUnderMouseOp.get();
                if (projectedLineUnderMouseOp2.isNone) {
                    return Option_1.Option.none();
                }
                var projectedLineUnderMouse = projectedLineUnderMouseOp2.fromSome();
                if (selectedFirstLineOp.isSome) {
                    var selectedFirstLine = selectedFirstLineOp.fromSome();
                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(selectedFirstLine._1, projectedLineUnderMouse._1)) {
                        return Option_1.Option.none();
                    }
                }
                if (selectedSecondLineOp.isSome) {
                    var selectedSecondLine = selectedSecondLineOp.fromSome();
                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(selectedSecondLine._1, projectedLineUnderMouse._1)) {
                        return Option_1.Option.none();
                    }
                }
                return Option_1.Option.some(projectedLineUnderMouse);
            }); });
            slSelectedFirstLineOp.loop(SodiumUtil
                .streamFilterOption(sMousePressed
                .gate(cSelectedFirstLineOp.map(function (x) { return x.isNone; }))
                .snapshot1(cSelectableProjectedLineUnderMouseOp)
                .map(function (selectableProjectedLineUnderMouseOp) {
                return selectableProjectedLineUnderMouseOp.get().map(function (selectableProjectedLineUnderMouse) {
                    return Tuples_1.T3.of(selectableProjectedLineUnderMouse._1, selectableProjectedLineUnderMouse._2, selectableProjectedLineUnderMouse._4);
                });
            }))
                .map(function (arg0) { return Option_1.Option.some(arg0); })
                .orElse(slReset.mapTo(Option_1.Option.none())));
            slSelectedSecondLineOp.loop(SodiumUtil
                .streamFilterOption(sMousePressed
                .gate(cSelectedFirstLineOp.map(function (x) { return x.isSome; }))
                .gate(cSelectedSecondLineOp.map(function (x) { return x.isNone; }))
                .snapshot1(cSelectableProjectedLineUnderMouseOp)
                .map(function (selectableProjectedLineUnderMouseOp) {
                return selectableProjectedLineUnderMouseOp.get()
                    .map(function (selectableProjectedLineUnderMouse) {
                    return Tuples_1.T3.of(selectableProjectedLineUnderMouse._1, selectableProjectedLineUnderMouse._2, selectableProjectedLineUnderMouse._4);
                });
            }))
                .map(function (arg0) { return Option_1.Option.some(arg0); })
                .orElse(slReset.mapTo(Option_1.Option.none())));
            var cIntersectionPointOp = cSelectedFirstLineOp.lift(cSelectedSecondLineOp, function (selectedFirstLineOp, selectedSecondLineOp) {
                return Option_1.Option.join(selectedFirstLineOp.lift2(selectedSecondLineOp, function (selectedFirstLine, selectedSecondLine) {
                    var line1 = selectedFirstLine._2;
                    var line2 = selectedSecondLine._2;
                    var ray1 = Ray3D_1.Ray3D.create(line1.getV1(), line1.getV2().sub(line1.getV1()));
                    var ray2 = Ray3D_1.Ray3D.create(line2.getV1(), line2.getV2().sub(line2.getV1()));
                    var t1Op = ray1.closestTimeOnThisRayWithOtherRay(ray2);
                    if (t1Op.isNone) {
                        return Option_1.Option.none();
                    }
                    var t1 = t1Op.fromSome();
                    var t2Op = ray2.closestTimeOnThisRayWithOtherRay(ray1);
                    if (t2Op.isNone) {
                        return Option_1.Option.none();
                    }
                    var t2 = t2Op.fromSome();
                    return Option_1.Option.some(ray1.positionFromTime(t1).add(ray2.positionFromTime(t2)).scale(0.5));
                }));
            });
            var cSelectedLinesAreParallel = cSelectedFirstLineOp.lift(cSelectedSecondLineOp, function (firstLineOp, secondLineOp) {
                return firstLineOp
                    .lift2(secondLineOp, function (firstLine, secondLine) {
                    var epsilon = 0.001;
                    var u1 = firstLine._2.getV2().sub(firstLine._2.getV1()).normalize();
                    var u2 = secondLine._2.getV2().sub(secondLine._2.getV1()).normalize();
                    return Math.abs(1.0 - Math.abs(u1.dot(u2))) <= epsilon;
                })
                    .orSome(false);
            });
            var cCircleRadiusToCirclePositionOpOp = cSelectedFirstLineOp.lift3(cSelectedSecondLineOp, cSelectedLinesAreParallel, function (selectedFirstLineOp, selectedSecondLineOp, selectedLinesAreParallel) {
                return selectedLinesAreParallel ?
                    Option_1.Option.none() :
                    selectedFirstLineOp.lift2(selectedSecondLineOp, function (selectedFirstLine, selectedSecondLine) {
                        var u1 = selectedFirstLine._2.getV2().sub(selectedFirstLine._2.getV1()).normalize();
                        var u2 = selectedSecondLine._2.getV2().sub(selectedSecondLine._2.getV1()).normalize();
                        var n = u1.cross(u2).normalize();
                        var o1 = selectedFirstLine._3;
                        var o2 = selectedSecondLine._3;
                        var dir1;
                        {
                            var _dir1 = n.cross(u1);
                            dir1 = o2.sub(o1).dot(_dir1) < 0.0 ? _dir1.scale(-1.0) : _dir1;
                        }
                        ;
                        var dir2;
                        {
                            var _dir2 = n.cross(u2);
                            dir2 = o1.sub(o2).dot(_dir2) < 0.0 ? _dir2.scale(-1.0) : _dir2;
                        }
                        ;
                        return function (radius) {
                            var line1MovedPt1 = selectedFirstLine._2.getV1().add(dir1.scale(radius));
                            var line2MovedPt1 = selectedSecondLine._2.getV1().add(dir2.scale(radius));
                            var ray1 = Ray3D_1.Ray3D.create(line1MovedPt1, selectedFirstLine._2.getV2().sub(selectedFirstLine._2.getV1()));
                            var ray2 = Ray3D_1.Ray3D.create(line2MovedPt1, selectedSecondLine._2.getV2().sub(selectedSecondLine._2.getV1()));
                            var plane1 = Plane3D_1.Plane3D.fromKnownPtAndNormal(line1MovedPt1, dir1);
                            var plane2 = Plane3D_1.Plane3D.fromKnownPtAndNormal(line2MovedPt1, dir2);
                            return ray1.collisionWithPlane(plane2)
                                .lift2(ray2.collisionWithPlane(plane1), function (pt1, pt2) {
                                return pt1.add(pt2).scale(0.5);
                            });
                        };
                    });
            });
            var cParallelLineCircleRadiusOp = cSelectedFirstLineOp.lift3(cSelectedSecondLineOp, cSelectedLinesAreParallel, function (selectedFirstLineOp, selectedSecondLineOp, selectedLinesAreParallel) {
                if (!selectedLinesAreParallel) {
                    return Option_1.Option.none();
                }
                return selectedFirstLineOp.lift2(selectedSecondLineOp, function (selectedFirstLine, selectedSecondLine) {
                    var line1 = selectedFirstLine._2;
                    var line2 = selectedSecondLine._2;
                    var ray1 = Ray3D_1.Ray3D.create(line1.getV1(), line1.getV2().sub(line1.getV1()));
                    var pt = line2.getV1().add(line2.getV2()).scale(0.5);
                    return 0.5 * ray1.closestPoint(pt).distance(pt);
                });
            });
            var cIntersectingLineCircleRadiusOp = SodiumUtil
                .streamFilterOption(sReplyValueChanged.map(function (x) { return x._2; }))
                .map(function (x) { return Option_1.Option.some(x); })
                .orElse(slReset.mapTo(Option_1.Option.some(0.0)))
                .hold(Option_1.Option.some(0.0))
                .lift(cScale, function (radiusOp, scale) { return radiusOp.map(function (radius) { return radius * scale; }); });
            var cCircleRadiusOp = sodium.Cell.switchC(cSelectedLinesAreParallel
                .map(sodium.lambda1(function (selectedLinesAreParallel) {
                return selectedLinesAreParallel ?
                    cParallelLineCircleRadiusOp :
                    cIntersectingLineCircleRadiusOp;
            }, [cParallelLineCircleRadiusOp, cIntersectingLineCircleRadiusOp])));
            var cParallelLinePartialCircleWithNewPointsOp = cMouseRayOp.lift4(cSelectedFirstLineOp, cSelectedSecondLineOp, cParallelLineCircleRadiusOp, function (mouseRayOp, selectedFirstLineOp, selectedSecondLineOp, parallelLineCircleRadiusOp) {
                return mouseRayOp.lift4(selectedFirstLineOp, selectedSecondLineOp, parallelLineCircleRadiusOp, function (mouseRay, selectedFirstLine, selectedSecondLine, circleRadius) {
                    var line1 = selectedFirstLine._2;
                    var line2 = selectedSecondLine._2;
                    var ray1 = Ray3D_1.Ray3D.create(line1.getV1(), line1.getV2().sub(line1.getV1()));
                    var ray2 = Ray3D_1.Ray3D.create(line2.getV1(), line2.getV2().sub(line2.getV1()));
                    var midPt1 = line1.getV1().add(line1.getV2()).scale(0.5);
                    var midPt2 = line2.getV1().add(line2.getV2()).scale(0.5);
                    var midPtDelta = midPt2.sub(midPt1);
                    var o = midPt1.add(midPt2).scale(0.5);
                    var u = line1.getV2().sub(line1.getV1()).normalize();
                    var v = midPtDelta.sub(u.scale(u.dot(midPtDelta))).normalize();
                    var w = u.cross(v);
                    var ray = Ray3D_1.Ray3D.create(o, u);
                    var pt1;
                    var pt2;
                    {
                        var t1 = ray.closestTimeToPoint(line1.getV1());
                        var t2 = ray.closestTimeToPoint(line1.getV2());
                        var t3 = ray.closestTimeToPoint(line2.getV1());
                        var t4 = ray.closestTimeToPoint(line2.getV2());
                        var tMin = Math.min(Math.min(t1, t2), Math.min(t3, t4));
                        var tMax = Math.max(Math.max(t1, t2), Math.max(t3, t4));
                        pt1 = ray.positionFromTime(tMin);
                        pt2 = ray.positionFromTime(tMax);
                    }
                    ;
                    var circleO;
                    var startAngle;
                    if (mouseRay.closestPoint(pt1).distanceSquared(pt1) < mouseRay.closestPoint(pt2).distanceSquared(pt2)) {
                        circleO = pt1;
                        startAngle = 90.0;
                    }
                    else {
                        circleO = pt2;
                        startAngle = 270.0;
                    }
                    var newPoint1 = ray1.closestPoint(circleO);
                    var newPoint2 = ray2.closestPoint(circleO);
                    var circleAxes = Axes3D_1.Axes3D.Builder.fromOriginOrientation().setOrigin(circleO).setOrientation(Quaternion_1.Quaternion.fromWU(w, u)).build();
                    return Tuples_1.T4.of(circleAxes, new ArcComponent_1.ArcComponent(circleRadius, startAngle, 180.0), newPoint1, newPoint2);
                });
            });
            var cIntersectingPartialCircleWithNewPointsOp = cSelectedFirstLineOp.lift4(cSelectedSecondLineOp, cCircleRadiusOp, cCircleRadiusToCirclePositionOpOp, function (selectedFirstLineOp, selectedSecondLineOp, circleRadiusOp, circleRadiusToCirclePositionOpOp) {
                return Option_1.Option.join(selectedFirstLineOp.lift4(selectedSecondLineOp, circleRadiusOp, circleRadiusToCirclePositionOpOp, function (selectedFirstLine, selectedSecondLine, circleRadius, circleRadiusToCirclePositionOp) {
                    return circleRadiusToCirclePositionOp(circleRadius)
                        .map(function (circlePosition) {
                        var u1 = selectedFirstLine._2.getV2().sub(selectedFirstLine._2.getV1()).normalize();
                        var u2 = selectedSecondLine._2.getV2().sub(selectedSecondLine._2.getV1()).normalize();
                        var circleW = u1.cross(u2).normalize();
                        var circleV;
                        {
                            var testX = Math.abs(circleW.getX());
                            var testY = Math.abs(circleW.getY());
                            var testZ = Math.abs(circleW.getZ());
                            var useVec = void 0;
                            if (testX <= testY) {
                                if (testX <= testZ) {
                                    useVec = Vector3D_1.Vector3D.unitX_$LI$();
                                }
                                else {
                                    useVec = Vector3D_1.Vector3D.unitZ_$LI$();
                                }
                            }
                            else {
                                if (testY <= testZ) {
                                    useVec = Vector3D_1.Vector3D.unitY_$LI$();
                                }
                                else {
                                    useVec = Vector3D_1.Vector3D.unitZ_$LI$();
                                }
                            }
                            circleV = circleW.cross(useVec).normalize();
                        }
                        ;
                        var circleAxes = Axes3D_1.Axes3D.Builder.fromOriginOrientation().setOrigin(circlePosition).setOrientation(Quaternion_1.Quaternion.fromVW(circleV, circleW)).build();
                        var startAngle;
                        var extent;
                        var newPoint1;
                        var newPoint2;
                        {
                            var ray1 = Ray3D_1.Ray3D.create(selectedFirstLine._2.getV1(), selectedFirstLine._2.getV2().sub(selectedFirstLine._2.getV1()));
                            var ray2 = Ray3D_1.Ray3D.create(selectedSecondLine._2.getV1(), selectedSecondLine._2.getV2().sub(selectedSecondLine._2.getV1()));
                            newPoint1 = ray1.closestPoint(circlePosition);
                            newPoint2 = ray2.closestPoint(circlePosition);
                            var pt12 = circleAxes.pointToThisSpace(newPoint1);
                            var pt22 = circleAxes.pointToThisSpace(newPoint2);
                            var angle1 = (function (x) { return x * 180 / Math.PI; })(Math.atan2(pt12.getY(), pt12.getX()));
                            var angle2 = (function (x) { return x * 180 / Math.PI; })(Math.atan2(pt22.getY(), pt22.getX()));
                            var angleDiff = angle2 - angle1;
                            if (angleDiff < 0.0) {
                                angleDiff += 360.0;
                            }
                            if (angleDiff <= 180.0) {
                                startAngle = angle1;
                                extent = angleDiff;
                            }
                            else {
                                startAngle = angle2;
                                extent = 360.0 - angleDiff;
                            }
                        }
                        ;
                        return Tuples_1.T4.of(circleAxes, new ArcComponent_1.ArcComponent(circleRadius, startAngle, extent), newPoint1, newPoint2);
                    });
                }));
            });
            var cPartialCircleWithNewPointsOp = sodium.Cell.switchC(cSelectedLinesAreParallel.map(sodium.lambda1(function (selectedLinesAreParallel) {
                return selectedLinesAreParallel ?
                    cParallelLinePartialCircleWithNewPointsOp :
                    cIntersectingPartialCircleWithNewPointsOp;
            }, [cParallelLinePartialCircleWithNewPointsOp, cIntersectingPartialCircleWithNewPointsOp])));
            var cPartialCircleOp = cPartialCircleWithNewPointsOp.map(function (partialCircleWithNewPointsOp) {
                return partialCircleWithNewPointsOp.map(function (partialCircleWithNewPoints) {
                    return Tuples_1.T2.of(partialCircleWithNewPoints._1, partialCircleWithNewPoints._2);
                });
            });
            var cNewFirstLineNewSecondLineOp = cSelectedFirstLineOp.lift5(cSelectedSecondLineOp, cPartialCircleWithNewPointsOp, cIntersectionPointOp, cSelectedLinesAreParallel, function (selectedFirstLineOp, selectedSecondLineOp, partialCircleWithNewPointsOp, intersectionPointOp, selectedLinesAreParallel) {
                var intersectionPointToUseOp = selectedLinesAreParallel ?
                    partialCircleWithNewPointsOp
                        .map(function (partialCircleWithNewPoints) {
                        return partialCircleWithNewPoints._3.add(partialCircleWithNewPoints._4).scale(0.5);
                    }) :
                    intersectionPointOp;
                return selectedFirstLineOp.lift4(selectedSecondLineOp, partialCircleWithNewPointsOp, intersectionPointToUseOp, function (selectedFirstLine, selectedSecondLine, partialCircleWithNewPoints, intersectionPoint) {
                    var newFirstLine;
                    {
                        var line1Ray = Ray3D_1.Ray3D.create(selectedFirstLine._2.getV1(), selectedFirstLine._2.getV2().sub(selectedFirstLine._2.getV1()));
                        if (line1Ray.closestTimeToPoint(selectedFirstLine._3) < line1Ray.closestTimeToPoint(intersectionPoint)) {
                            newFirstLine = Line3D_1.Line3D.create(selectedFirstLine._2.getV1(), partialCircleWithNewPoints._3);
                        }
                        else {
                            newFirstLine = Line3D_1.Line3D.create(partialCircleWithNewPoints._3, selectedFirstLine._2.getV2());
                        }
                    }
                    ;
                    var newSecondLine;
                    {
                        var line2Ray = Ray3D_1.Ray3D.create(selectedSecondLine._2.getV1(), selectedSecondLine._2.getV2().sub(selectedSecondLine._2.getV1()));
                        if (line2Ray.closestTimeToPoint(selectedSecondLine._3) < line2Ray.closestTimeToPoint(intersectionPoint)) {
                            newSecondLine = Line3D_1.Line3D.create(selectedSecondLine._2.getV1(), partialCircleWithNewPoints._4);
                        }
                        else {
                            newSecondLine = Line3D_1.Line3D.create(partialCircleWithNewPoints._4, selectedSecondLine._2.getV2());
                        }
                    }
                    ;
                    return Vectors_1.V2.of(newFirstLine, newSecondLine);
                });
            });
            var sAskRadius = SodiumUtil.streamFilterOption(sodium.Operational
                .updates(cCircleRadiusToCirclePositionOpOp)
                .collect(false, function (circleRadiusToCirclePositionOpOp, wasSome) {
                var result;
                var isSome = circleRadiusToCirclePositionOpOp.isSome;
                if (isSome != wasSome) {
                    result = Option_1.Option.some(isSome);
                }
                else {
                    result = Option_1.Option.none();
                }
                return new sodium.Tuple2(result, isSome);
            }));
            var cMessage = cSelectedFirstLineOp.lift3(cSelectedSecondLineOp, cSelectedLinesAreParallel, function (selectedFirstLineOp, selectedSecondLineOp, selectedLinesAreParallel) {
                if (selectedFirstLineOp.isNone) {
                    return "Select the first line that will form the fillet.";
                }
                else if (selectedSecondLineOp.isNone) {
                    return "Select the second line that will form the fillet.";
                }
                else if (selectedLinesAreParallel) {
                    return "Select the side to place the fillet on.";
                }
                else {
                    return "Enter the radius of the fillet.";
                }
            });
            var cWorldSpaceOverlay = cPartialCircleOp.lift(cNewFirstLineNewSecondLineOp, function (partialCircleOp, newFirstLineNewSecondLineOp) {
                return function (canvasCtx) {
                    if (partialCircleOp.isSome) {
                        var partialCircle = partialCircleOp.fromSome();
                        var o = partialCircle._1.origin;
                        var u = partialCircle._1.u;
                        var v = partialCircle._1.v;
                        var flipAngle = partialCircle._1.w.getZ() < 0.0;
                        var partialCircle2 = void 0;
                        var u2 = void 0;
                        if (flipAngle) {
                            u2 = u.scale(-1.0);
                            partialCircle2 = new ArcComponent_1.ArcComponent(partialCircle._2.radius(), 180.0 - partialCircle._2.startAngle(), -partialCircle._2.extent());
                        }
                        else {
                            u2 = u;
                            partialCircle2 = partialCircle._2;
                        }
                        canvasCtx.save();
                        canvasCtx.strokeStyle = "#0000FF";
                        canvasCtx.translate(o.x, o.y);
                        canvasCtx.rotate(Math.atan2(u2.y, u2.x));
                        canvasCtx.beginPath();
                        canvasCtx.arc(0.0, 0.0, partialCircle2.radius(), Util_1.toRadians(partialCircle2.startAngle()), Util_1.toRadians(partialCircle2.startAngle() + partialCircle2.extent()), partialCircle2.extent() < 0.0);
                        canvasCtx.stroke();
                        canvasCtx.restore();
                    }
                    if (newFirstLineNewSecondLineOp.isSome) {
                        canvasCtx.save();
                        canvasCtx.strokeStyle = "#0000FF";
                        var newFirstLineNewSecondLine = newFirstLineNewSecondLineOp.fromSome();
                        var lines = [newFirstLineNewSecondLine._1, newFirstLineNewSecondLine._2];
                        canvasCtx.beginPath();
                        for (var i = 0; i < lines.length; ++i) {
                            canvasCtx.moveTo(lines[i].v1.x, lines[i].v1.y);
                            canvasCtx.lineTo(lines[i].v2.x, lines[i].v2.y);
                        }
                        canvasCtx.stroke();
                        canvasCtx.restore();
                    }
                };
            });
            var cScreenSpaceOverlay = cMessage.lift5(cSelectableProjectedLineUnderMouseOp, cSelectedFirstLineOp, cSelectedSecondLineOp, cProjectWorldPointToScreenOp, function (message, selectableProjectedLineUnderMouseOp, selectedFirstLineOp, selectedSecondLineOp, projectWorldPointToScreenOp) {
                return function (canvasCtx) {
                    var projectedSelectedLines = ArrayUtil_1.arrayBind([
                        selectedFirstLineOp,
                        selectedSecondLineOp
                    ], function (selectedLineOp) {
                        return selectedLineOp
                            .bind(function (selectedLine) {
                            return projectWorldPointToScreenOp(selectedLine._2.v1).lift2(projectWorldPointToScreenOp(selectedLine._2.v2), function (pt1, pt2) {
                                return Line2D_1.Line2D.create(pt1, pt2);
                            });
                        })
                            .map(function (x) { return [x]; })
                            .orSome([]);
                    });
                    canvasCtx.save();
                    canvasCtx.fillStyle = "#0000FF";
                    canvasCtx.beginPath();
                    canvasCtx.fillText(message, 20, 20);
                    canvasCtx.restore();
                    if (selectableProjectedLineUnderMouseOp.get().isSome) {
                        var selectableProjectedLineUnderMouse = selectableProjectedLineUnderMouseOp.get().fromSome();
                        var line = selectableProjectedLineUnderMouse._3;
                        canvasCtx.save();
                        canvasCtx.strokeStyle = "#0000FF";
                        canvasCtx.beginPath();
                        canvasCtx.moveTo(line.v1.x, line.v1.y);
                        canvasCtx.lineTo(line.v2.x, line.v2.y);
                        canvasCtx.stroke();
                        canvasCtx.restore();
                    }
                    if (projectedSelectedLines.length != 0) {
                        canvasCtx.save();
                        canvasCtx.strokeStyle = "#0000FF";
                        canvasCtx.beginPath();
                        for (var i = 0; i < projectedSelectedLines.length; ++i) {
                            var line = projectedSelectedLines[i];
                            canvasCtx.moveTo(line.v1.x, line.v1.y);
                            canvasCtx.lineTo(line.v2.x, line.v2.y);
                        }
                        canvasCtx.stroke();
                        canvasCtx.restore();
                    }
                };
            });
            _this.__sAskValuesAt =
                sAskRadius
                    .filter(function (arg0) { return true == arg0; })
                    .map(function (unused) { /* singletonList */ return [
                    new AskValueAtParams_1.AskValueAtParams({
                        id: 1,
                        cLabelOp: new sodium.Cell(Option_1.Option.some("Radius:")),
                        cPosition: cMousePosOp.lift4(cSelectedFirstLineOp, cSelectedSecondLineOp, cProjectWorldPointToScreenOp, function (mousePosOp, selectedFirstLineOp, selectedSecondLineOp, projectWorldPointToScreenOp) {
                            return Option_1.Option
                                .join(selectedFirstLineOp.lift2(selectedSecondLineOp, function (selectedFirstLine, selectedSecondLine) {
                                var pt = selectedFirstLine._2.getV1().add(selectedFirstLine._2.getV2()).scale(0.5).add(selectedSecondLine._2.getV1().add(selectedSecondLine._2.getV2()).scale(0.5)).scale(0.5);
                                return projectWorldPointToScreenOp(pt);
                            }))
                                .orElse(mousePosOp.map(function (mousePos) { return mousePos.add(Vector2D_1.Vector2D.create(0.0, -20.0)); }))
                                .orSome(Vector2D_1.Vector2D.zero);
                        }),
                        initialValue: 0.0,
                        sSetValue: new sodium.Stream()
                    })
                ]; });
            _this.__sHideAskValuesAt = sAskRadius.filter(function (arg0) { return false == arg0; }).mapTo(sodium.Unit.UNIT);
            _this.__sPerformFillet =
                SodiumUtil
                    .streamFilterOption(sReplyValueEntered.snapshot5(cSelectedFirstLineOp, cSelectedSecondLineOp, cNewFirstLineNewSecondLineOp, cPartialCircleOp, function (replyValueEntered, selectedFirstLineOp, selectedSecondLineOp, newFirstLineSecondLineOp, partialCircleOp) {
                    return replyValueEntered._2 === 0.0 ?
                        selectedFirstLineOp.lift3(selectedSecondLineOp, newFirstLineSecondLineOp, function (selectedFirstLine, selectedSecondLine, newFirstLineSecondLine) {
                            return Tuples_1.T2.of(Vectors_1.V2.of(Tuples_1.T2.of(selectedFirstLine._1, newFirstLineSecondLine._1), Tuples_1.T2.of(selectedSecondLine._1, newFirstLineSecondLine._2)), Option_1.Option.none());
                        }) :
                        selectedFirstLineOp.lift4(selectedSecondLineOp, newFirstLineSecondLineOp, partialCircleOp, function (selectedFirstLine, selectedSecondLine, newFirstLineSecondLine, partialCircle) {
                            return Tuples_1.T2.of(Vectors_1.V2.of(Tuples_1.T2.of(selectedFirstLine._1, newFirstLineSecondLine._1), Tuples_1.T2.of(selectedSecondLine._1, newFirstLineSecondLine._2)), Option_1.Option.some(partialCircle));
                        });
                }))
                    .orElse(SodiumUtil.streamFilterOption(sMousePressed
                    .gate(cSelectedLinesAreParallel)
                    .snapshot1(cSelectedFirstLineOp)
                    .snapshot4(cSelectedSecondLineOp, cNewFirstLineNewSecondLineOp, cPartialCircleOp, function (selectedFirstLineOp, selectedSecondLineOp, newFirstLineSecondLineOp, partialCircleOp) {
                    return selectedFirstLineOp
                        .lift4(selectedSecondLineOp, newFirstLineSecondLineOp, partialCircleOp, function (selectedFirstLine, selectedSecondLine, newFirstLineSecondLine, partialCircle) {
                        return Tuples_1.T2.of(Vectors_1.V2.of(Tuples_1.T2.of(selectedFirstLine._1, newFirstLineSecondLine._1), Tuples_1.T2.of(selectedSecondLine._1, newFirstLineSecondLine._2)), Option_1.Option.some(partialCircle));
                    });
                })));
            slReset.loop(_this.__sPerformFillet.mapTo(sodium.Unit.UNIT));
            _this._cWorldSpaceOverlay = cWorldSpaceOverlay;
            _this._cScreenSpaceOverlay = cScreenSpaceOverlay;
        });
    }
    Object.defineProperty(FilletLinesModel.prototype, "cWorldSpaceOverlay", {
        get: function () {
            return this._cWorldSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilletLinesModel.prototype, "cScreenSpaceOverlay", {
        get: function () {
            return this._cScreenSpaceOverlay;
        },
        enumerable: true,
        configurable: true
    });
    FilletLinesModel.prototype.sAskValuesAt = function () {
        return this.__sAskValuesAt;
    };
    FilletLinesModel.prototype.sHideAskValuesAt = function () {
        return this.__sHideAskValuesAt;
    };
    FilletLinesModel.prototype.sPerformFillet = function () {
        return this.__sPerformFillet;
    };
    FilletLinesModel.SNAP_SCREEN_DIST = 15.0;
    return FilletLinesModel;
}());
exports.FilletLinesModel = FilletLinesModel;
FilletLinesModel["__class"] = "com.shedmasta.core.cadmodes.FilletLinesModel";
//# sourceMappingURL=FilletLinesModel.js.map
});
___scope___.file("app/Vectors.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var V2 = /** @class */ (function () {
    function V2(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(V2.prototype, "_1", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V2.prototype, "_2", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    V2.of = function (a, b) {
        return new V2(a, b);
    };
    return V2;
}());
exports.V2 = V2;
//# sourceMappingURL=Vectors.js.map
});
___scope___.file("app/ecs/components/ArcComponent.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("../EcsComponent");
var EcsComponentType_1 = require("../EcsComponentType");
var EcsComponentValue_1 = require("../EcsComponentValue");
var ArcComponent = /** @class */ (function () {
    function ArcComponent(radius, startAngle, extent) {
        this._radius = 0;
        this._startAngle = 0;
        this._extent = 0;
        this._radius = radius;
        this._startAngle = startAngle;
        this._extent = extent;
    }
    ArcComponent.prototype.radius = function () {
        return this._radius;
    };
    ArcComponent.prototype.startAngle = function () {
        return this._startAngle;
    };
    ArcComponent.prototype.extent = function () {
        return this._extent;
    };
    /**
     *
     * @return {com.shedmasta.core.ecs2.EcsComponentValue}
     */
    ArcComponent.prototype.ecsComponentValue = function () {
        return EcsComponentValue_1.EcsComponentValue.of(ArcComponent.ecsComponent_$LI$(), this);
    };
    ArcComponent.ecsComponent_$LI$ = function () { if (ArcComponent.ecsComponent == null)
        ArcComponent.ecsComponent = EcsComponent_1.EcsComponent.of(EcsComponentType_1.EcsComponentType.of("ArcComponent")); return ArcComponent.ecsComponent; };
    ;
    return ArcComponent;
}());
exports.ArcComponent = ArcComponent;
ArcComponent["__class"] = "ArcComponent";
ArcComponent["__interfaces"] = ["IsEcsComponentValue"];
ArcComponent.ecsComponent_$LI$();
//# sourceMappingURL=ArcComponent.js.map
});
___scope___.file("app/math/Line2D.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Line2D = /** @class */ (function () {
    function Line2D(v1, v2) {
        this._v1 = v1;
        this._v2 = v2;
    }
    Object.defineProperty(Line2D.prototype, "v1", {
        get: function () {
            return this._v1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line2D.prototype, "v2", {
        get: function () {
            return this._v2;
        },
        enumerable: true,
        configurable: true
    });
    Line2D.create = function (v1, v2) {
        return new Line2D(v1, v2);
    };
    Line2D.prototype.length = function () {
        return this.v1.distance(this.v2);
    };
    Line2D.prototype.lengthSquared = function () {
        return this.v1.distanceSquared(this.v2);
    };
    return Line2D;
}());
exports.Line2D = Line2D;
//# sourceMappingURL=Line2D.js.map
});
___scope___.file("app/math/Util.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toRadians(degrees) {
    return degrees * Math.PI / 180.0;
}
exports.toRadians = toRadians;
//# sourceMappingURL=Util.js.map
});
___scope___.file("app/modes/IdleMode.js", function(exports, require, module, __filename, __dirname){

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
var Mode_1 = require("./Mode");
var IdleMode = /** @class */ (function (_super) {
    __extends(IdleMode, _super);
    function IdleMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IdleMode;
}(Mode_1.Mode));
exports.IdleMode = IdleMode;
//# sourceMappingURL=IdleMode.js.map
});
___scope___.file("app/ecs/MutableEcsScene.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("./EcsComponent");
var EcsComponentType_1 = require("./EcsComponentType");
var EcsComponentValue_1 = require("./EcsComponentValue");
var ChildComponent_1 = require("./components/ChildComponent");
var NameComponent_1 = require("./components/NameComponent");
var LabelComponent_1 = require("./components/LabelComponent");
var Option_1 = require("../Option");
var Collections = require("typescript-collections");
var MutableEcsScene = /** @class */ (function () {
    function MutableEcsScene() {
        /*private*/ this.freeIds = [];
        this.entities = new Map();
        this.nextId = 0;
    }
    MutableEcsScene.create = function () {
        return new MutableEcsScene();
    };
    MutableEcsScene.prototype.sceneContext = function () {
        return new MutableEcsScene.MutableEcsSceneEcsSceneContext(this);
    };
    return MutableEcsScene;
}());
exports.MutableEcsScene = MutableEcsScene;
MutableEcsScene["__class"] = "MutableEcsScene";
(function (MutableEcsScene) {
    var MutableEcsSceneEcsSceneContext = /** @class */ (function () {
        function MutableEcsSceneEcsSceneContext(scene) {
            this.scene = scene;
        }
        MutableEcsSceneEcsSceneContext.prototype.getComponent = function (entityId, ecsComponent) {
            var entity = this.scene.entities.get(entityId);
            if (!entity) {
                return Option_1.Option.none();
            }
            var component = entity.getValue(ecsComponent.type().typeName());
            if (!component) {
                return Option_1.Option.none();
            }
            return Option_1.Option.some(component);
        };
        MutableEcsSceneEcsSceneContext.prototype.locateNamedEntityWithNoParent = function (name) {
            {
                var array122 = this.entitiesWithAllComponents([NameComponent_1.NameComponent.ecsComponent_$LI$().type()]);
                for (var index121 = 0; index121 < array122.length; index121++) {
                    var entityId = array122[index121];
                    {
                        if (this.getComponent(entityId, ChildComponent_1.ChildComponent.ecsComponent_$LI$()).isSome) {
                            continue;
                        }
                        {
                            var nameOp = this.getComponent(entityId, NameComponent_1.NameComponent.ecsComponent_$LI$());
                            if (nameOp.isSome) {
                                var x = nameOp.fromSome();
                                {
                                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(x.name(), name)) {
                                        return Option_1.Option.some(entityId);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return Option_1.Option.none();
        };
        MutableEcsSceneEcsSceneContext.prototype.locateOrCreateNamedEntityAndUpdateIfChanged = function (name, components) {
            var entityId = this.locateOrCreateNamedEntity(name);
            var componentTypesToKeep = components.map(function (x) { return x.ecsComponentValue().ecsComponent().type(); }).concat([NameComponent_1.NameComponent.ecsComponent_$LI$().type(), ChildComponent_1.ChildComponent.ecsComponent_$LI$().type()]);
            this.withEntity(entityId, function (eCtx) {
                (function (o) { return o.keepComponentsOfComponentTypes.apply(o, componentTypesToKeep); })(eCtx);
                (function (o) { return o.setComponentsIfChanged.apply(o, components); })(eCtx);
            });
        };
        MutableEcsSceneEcsSceneContext.prototype.locateOrCreateNamedEntityOfParent = function (parentId, name) {
            {
                var array126 = this.findChildrenOf(parentId);
                for (var index125 = 0; index125 < array126.length; index125++) {
                    var entityId = array126[index125];
                    {
                        {
                            var nameOp = this.getComponent(entityId, NameComponent_1.NameComponent.ecsComponent_$LI$()).map(function (x) { return x.name(); });
                            if (nameOp.isSome) {
                                var name2 = nameOp.fromSome();
                                {
                                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(name2, name)) {
                                        return entityId;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return this.createEntity([NameComponent_1.NameComponent.create(name), ChildComponent_1.ChildComponent.create(parentId)]);
        };
        MutableEcsSceneEcsSceneContext.prototype.locateOrCreateNamedEntityWithNoParent = function (name) {
            {
                var array130 = this.entitiesWithAllComponents([NameComponent_1.NameComponent.ecsComponent_$LI$().type()]);
                for (var index129 = 0; index129 < array130.length; index129++) {
                    var entityId = array130[index129];
                    {
                        if (this.getComponent(entityId, ChildComponent_1.ChildComponent.ecsComponent_$LI$()).isSome) {
                            continue;
                        }
                        {
                            var nameOp = this.getComponent(entityId, NameComponent_1.NameComponent.ecsComponent_$LI$()).map(function (x) { return x.name(); });
                            if (nameOp.isSome) {
                                var name2 = nameOp.fromSome();
                                {
                                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(name2, name)) {
                                        return entityId;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return this.createEntity([NameComponent_1.NameComponent.create(name)]);
        };
        MutableEcsSceneEcsSceneContext.prototype.setComponents = function (entityId, components) {
            return this.withEntity(entityId, function (entityContext) {
                return entityContext.setComponents(components);
            }).isSome;
        };
        MutableEcsSceneEcsSceneContext.prototype.findAllDecendantsOf = function (parentId) {
            var result = [];
            var queue = ([]);
            queue.push(parentId);
            while ((queue.length != 0)) {
                var entityId = queue.pop();
                {
                    var array134 = this.findChildrenOf(entityId);
                    for (var index133 = 0; index133 < array134.length; index133++) {
                        var childId = array134[index133];
                        {
                            queue.push(childId);
                            result.push(childId);
                        }
                    }
                }
            }
            ;
            return result;
        };
        MutableEcsSceneEcsSceneContext.prototype.findChildrenOf = function (parentId) {
            var entityIds = this.entitiesWithAllComponents([ChildComponent_1.ChildComponent.ecsComponent_$LI$().type()]);
            var result = [];
            for (var index135 = 0; index135 < entityIds.length; index135++) {
                var entityId = entityIds[index135];
                {
                    {
                        var childOp = this.getComponent(entityId, ChildComponent_1.ChildComponent.ecsComponent_$LI$());
                        if (childOp.isSome) {
                            var child = childOp.fromSome();
                            {
                                if (child.parentId() === parentId) {
                                    result.push(entityId);
                                }
                            }
                        }
                    }
                }
            }
            return result;
        };
        MutableEcsSceneEcsSceneContext.prototype.destroyChildrenOf = function (parentId) {
            {
                var array139 = this.findChildrenOf(parentId);
                for (var index138 = 0; index138 < array139.length; index138++) {
                    var entityId = array139[index138];
                    {
                        this.destroyEntity(entityId);
                    }
                }
            }
        };
        MutableEcsSceneEcsSceneContext.prototype.updateChildEntityArrayIfChanged = function (parentId, name, componentsArray) {
            var intPattern = /[0-9]+/;
            var visitedIndices = ([]);
            {
                var array141 = this.findChildrenOf(parentId);
                var _loop_1 = function (index140) {
                    var entityId = array141[index140];
                    {
                        {
                            var nameOp = this_1.getComponent(entityId, NameComponent_1.NameComponent.ecsComponent_$LI$()).map(function (x) { return x.name(); });
                            if (nameOp.isSome) {
                                var name2 = nameOp.fromSome();
                                {
                                    if ( /* startsWith */(function (str, searchString, position) {
                                        if (position === void 0) { position = 0; }
                                        return str.substr(position, searchString.length) === searchString;
                                    })(name2, name)) {
                                        var idxStr = name2.substring(name.length);
                                        if (intPattern.exec(idxStr)) {
                                            var idx_1 = parseInt(idxStr.substring(1, idxStr.length - 1));
                                            if (idx_1 < componentsArray.length) {
                                                this_1.withEntity(entityId, function (eCtx) {
                                                    var componentTypesToKeep = componentsArray[idx_1].map(function (x) { return x.ecsComponentValue().ecsComponent().type(); }).concat([NameComponent_1.NameComponent.ecsComponent_$LI$().type(), ChildComponent_1.ChildComponent.ecsComponent_$LI$().type(), LabelComponent_1.LabelComponent.ecsComponent_$LI$().type()]);
                                                    (function (o) { return o.keepComponentsOfComponentTypes.apply(o, componentTypesToKeep); })(eCtx);
                                                    (function (o) { return o.setComponentsIfChanged.apply(o, componentsArray[idx_1]); })(eCtx);
                                                });
                                                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                                    s.push(e);
                                                    return true;
                                                }
                                                else {
                                                    return false;
                                                } })(visitedIndices, idx_1);
                                            }
                                            else {
                                                this_1.destroyEntity(entityId);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                var this_1 = this;
                for (var index140 = 0; index140 < array141.length; index140++) {
                    _loop_1(index140);
                }
            }
            for (var idx = 0; idx < componentsArray.length; ++idx) {
                if (!(visitedIndices.indexOf((idx)) >= 0)) {
                    this.createEntity.apply(this, [
                        ChildComponent_1.ChildComponent.create(parentId), NameComponent_1.NameComponent.create(name + "[" + /* toString */ ('' + (idx)) + "]")
                    ].concat(componentsArray[idx]));
                }
            }
            ;
        };
        MutableEcsSceneEcsSceneContext.prototype.unsetComponents = function (entityId, componentTypes) {
            return this.withEntity(entityId, function (entityContext) {
                (function (o) { return o.unsetComponents.apply(o, componentTypes); })(entityContext);
            }).isSome;
        };
        MutableEcsSceneEcsSceneContext.prototype.locateNamedEntity = function (name) {
            {
                var array145 = this.entitiesWithAllComponents([NameComponent_1.NameComponent.ecsComponent_$LI$().type()]);
                for (var index144 = 0; index144 < array145.length; index144++) {
                    var entityId = array145[index144];
                    {
                        {
                            var nameOp = this.getComponent(entityId, NameComponent_1.NameComponent.ecsComponent_$LI$());
                            if (nameOp.isSome) {
                                var x = nameOp.fromSome();
                                {
                                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(x.name(), name)) {
                                        return Option_1.Option.some(entityId);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return Option_1.Option.none();
        };
        MutableEcsSceneEcsSceneContext.prototype.locateNamedEntityOfParent = function (parentId, name) {
            {
                var array149 = this.findChildrenOf(parentId);
                for (var index148 = 0; index148 < array149.length; index148++) {
                    var entityId = array149[index148];
                    {
                        {
                            var nameOp = this.getComponent(entityId, NameComponent_1.NameComponent.ecsComponent_$LI$()).map(function (x) { return x.name(); });
                            if (nameOp.isSome) {
                                var name2 = nameOp.fromSome();
                                {
                                    if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(name2, name)) {
                                        return Option_1.Option.some(entityId);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return Option_1.Option.none();
        };
        MutableEcsSceneEcsSceneContext.prototype.locateOrCreateNamedEntity = function (name) {
            {
                var entityIdOp = this.locateNamedEntity(name);
                if (entityIdOp.isSome) {
                    var entityId = entityIdOp.fromSome();
                    return entityId;
                }
            }
            return this.createEntity(EcsComponentValue_1.EcsComponentValue.of(NameComponent_1.NameComponent.ecsComponent_$LI$(), NameComponent_1.NameComponent.create(name)));
        };
        MutableEcsSceneEcsSceneContext.prototype.destroyParentAndChildrenOfParent = function (parentId) {
            this.destroyChildrenOf(parentId);
            this.destroyEntity(parentId);
        };
        MutableEcsSceneEcsSceneContext.prototype.updateChildEntityArrayUsingUpdaters = function (parentId, name, updatersArray) {
            var intPattern = /[0-9]+/;
            var visitedIndices = [];
            {
                var array155 = this.findChildrenOf(parentId);
                for (var index154 = 0; index154 < array155.length; index154++) {
                    var entityId = array155[index154];
                    {
                        {
                            var nameOp = this.getComponent(entityId, NameComponent_1.NameComponent.ecsComponent_$LI$()).map(function (x) { return x.name(); });
                            if (nameOp.isSome) {
                                var name2 = nameOp.fromSome();
                                {
                                    if ( /* startsWith */(function (str, searchString, position) {
                                        if (position === void 0) { position = 0; }
                                        return str.substr(position, searchString.length) === searchString;
                                    })(name2, name)) {
                                        var idxStr = name2.substring(name.length);
                                        if (intPattern.exec(idxStr)) {
                                            var idx = parseInt(idxStr.substring(1, idxStr.length - 1));
                                            if (idx < updatersArray.length) {
                                                updatersArray[idx](entityId, name2);
                                                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                                    s.push(e);
                                                    return true;
                                                }
                                                else {
                                                    return false;
                                                } })(visitedIndices, idx);
                                            }
                                            else {
                                                this.destroyEntity(entityId);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var idx = 0; idx < updatersArray.length; ++idx) {
                if (!(visitedIndices.indexOf((idx)) >= 0)) {
                    var name2 = name + "[" + /* toString */ ('' + (idx)) + "]";
                    var entityId = this.createEntity([EcsComponentValue_1.EcsComponentValue.of(ChildComponent_1.ChildComponent.ecsComponent_$LI$(), ChildComponent_1.ChildComponent.create(parentId)), EcsComponentValue_1.EcsComponentValue.of(NameComponent_1.NameComponent.ecsComponent_$LI$(), NameComponent_1.NameComponent.create(name + "[" + /* toString */ ('' + (idx)) + "]"))]);
                    updatersArray[idx](entityId, name2);
                }
            }
            ;
        };
        MutableEcsSceneEcsSceneContext.prototype.setComponentsIfChanged = function (entityId, components) {
            return this.withEntity(entityId, function (entityContext) {
                (function (o) { return o.setComponentsIfChanged.apply(o, components); })(entityContext);
            }).isSome;
        };
        MutableEcsSceneEcsSceneContext.prototype.findNamedEntityFromEntitiesAndUpdateIfChanged = function (entityIds, name, components) {
            var _this = this;
            this.locateNamedEntity(name).map(function (entityId) {
                _this.withEntity(entityId, function (eCtx) {
                    var components2 = components.concat([undefined]);
                    components2[components.length] = EcsComponentValue_1.EcsComponentValue.of(NameComponent_1.NameComponent.ecsComponent_$LI$(), NameComponent_1.NameComponent.create(name));
                    var components3 = components2;
                    eCtx.setComponentsIfChanged(components3);
                });
            }).orSome_(function () {
                var components2 = components.concat([undefined]);
                components2[components.length] = EcsComponentValue_1.EcsComponentValue.of(NameComponent_1.NameComponent.ecsComponent_$LI$(), NameComponent_1.NameComponent.create(name));
                var components3 = components2;
                _this.createEntity(components3);
            });
        };
        MutableEcsSceneEcsSceneContext.prototype.isEntityChildOf = function (entityId, parentId) {
            return this.getComponent(entityId, ChildComponent_1.ChildComponent.ecsComponent_$LI$()).map(function (x) { return x.parentId() === parentId; }).orSome(false);
        };
        /**
         *
         * @return {fj.data.List}
         */
        MutableEcsSceneEcsSceneContext.prototype.allEntities = function () {
            var it = this.scene.entities.keys();
            var result = [];
            var next;
            do {
                var next_1 = it.next();
                if (!next_1.done) {
                    result.push(next_1.value);
                }
            } while (!next.done);
            return result;
        };
        /**
         *
         * @param {Array} components
         * @return {number}
         */
        MutableEcsSceneEcsSceneContext.prototype.createEntity = function (components) {
            var id;
            do {
                id = /* isEmpty */ (this.scene.freeIds.length == 0) ? this.scene.nextId++ : /* remove */ this.scene.freeIds.splice(0, 1)[0];
            } while (this.scene.entities.has(id));
            var components2 = ({});
            for (var index158 = 0; index158 < components.length; index158++) {
                var component = components[index158];
                {
                    var component2 = component.ecsComponentValue();
                    /* put */ (components2[component2.ecsComponent().type().typeName()] = component2);
                }
            }
            var entity = new Collections.Dictionary(function (x) { return x; });
            for (var i = 0; i < components.length; ++i) {
                var componentValue = components[i].ecsComponentValue();
                entity.setValue(componentValue.ecsComponent().type().typeName(), componentValue.value$());
            }
            this.scene.entities.set(id, entity);
            return id;
        };
        /**
         *
         * @param {number} entityId
         */
        MutableEcsSceneEcsSceneContext.prototype.destroyEntity = function (entityId) {
            if (!(function (m, k) { if (m.entries == null)
                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return true;
                } return false; })(this.scene.entities, entityId)) {
                return;
            }
            /* remove */ (function (m, k) { if (m.entries == null)
                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return m.entries.splice(i, 1)[0];
                } })(this.scene.entities, entityId);
            /* add */ (this.scene.freeIds.push(entityId) > 0);
        };
        /**
         *
         * @param {number} entityId
         * @param {*} k
         * @return {fj.data.Option}
         */
        MutableEcsSceneEcsSceneContext.prototype.withEntity = function (entityId, k) {
            //let entity : any = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.scene.entities, entityId);
            var entity = this.scene.entities.get(entityId);
            if (!entity) {
                return Option_1.Option.none();
            }
            else {
                var entityCtx = new MutableEcsScene.MutableEcsSceneContextEcsEntityContext(entity);
                return Option_1.Option.some(k(entityCtx));
            }
        };
        /**
         *
         * @param {number} entityId
         * @param {*} k
         * @return {fj.data.Option}
         */
        MutableEcsSceneEcsSceneContext.prototype.withEntityReadOnly = function (entityId, k) {
            var entity = (function (m, k) { if (m.entries == null)
                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return m.entries[i].value;
                } return null; })(this.scene.entities, entityId);
            if (entity == null) {
                return Option_1.Option.none();
            }
            else {
                var entityCtx = new MutableEcsScene.MutableEcsSceneContextEcsEntityContext(entity);
                return Option_1.Option.some(k(entityCtx));
            }
        };
        /**
         *
         * @param {Array} componentTypes
         * @return {fj.data.List}
         */
        MutableEcsSceneEcsSceneContext.prototype.entitiesWithAllComponents = function (componentTypes) {
            var componentTypes2 = componentTypes.map(function (x) { return x.typeName(); });
            var componentTypesSet = {};
            for (var i = 0; i < componentTypes2.length; ++i) {
                componentTypesSet[componentTypes2[i]] = true;
            }
            var result = [];
            var it = this.scene.entities.entries();
            while (true) {
                var next = it.next();
                if (next.done) {
                    break;
                }
                var value = next.value;
                var entityId = value[0];
                var components = value[1];
                var allMatch = true;
                for (var i = 0; i < componentTypes2.length; ++i) {
                    var componentType = componentTypes2[i];
                    if (!components.containsKey(componentType)) {
                        allMatch = false;
                        break;
                    }
                }
                if (allMatch) {
                    result.push(entityId);
                }
            }
            return result;
        };
        /**
         *
         * @param {number} entityId
         * @param {Array} components
         */
        MutableEcsSceneEcsSceneContext.prototype.createEntityWithID = function (entityId, components) {
            var components2 = ({});
            for (var index159 = 0; index159 < components.length; index159++) {
                var component = components[index159];
                {
                    var component2 = component.ecsComponentValue();
                    /* put */ (components2[component2.ecsComponent().type().typeName()] = component2);
                }
            }
            /* put */ (function (m, k, v) { if (m.entries == null)
                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    m.entries[i].value = v;
                    return;
                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(this.scene.entities, entityId, components2);
        };
        return MutableEcsSceneEcsSceneContext;
    }());
    MutableEcsScene.MutableEcsSceneEcsSceneContext = MutableEcsSceneEcsSceneContext;
    MutableEcsSceneEcsSceneContext["__class"] = "MutableEcsScene.MutableEcsSceneEcsSceneContext";
    MutableEcsSceneEcsSceneContext["__interfaces"] = ["EcsSceneContext", "EcsReadOnlySceneContext"];
    var MutableEcsSceneContextEcsEntityContext = /** @class */ (function () {
        function MutableEcsSceneContextEcsEntityContext(entity) {
            this.entity = null;
            this.entity = entity;
        }
        MutableEcsSceneContextEcsEntityContext.prototype.keepComponentsOfComponentTypes = function (componentTypes) {
            var typeNames = ([]);
            for (var index170 = 0; index170 < componentTypes.length; index170++) {
                var componentType = componentTypes[index170];
                {
                    /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                        s.push(e);
                        return true;
                    }
                    else {
                        return false;
                    } })(typeNames, componentType.typeName());
                }
            }
            var componentTypesToRemove = this.getComponentTypes().filter((function (typeNames) {
                return function (x) { /* contains */ return !(typeNames.indexOf((x.typeName())) >= 0); };
            })(typeNames));
            this.unsetComponents.apply(this, componentTypesToRemove);
        };
        MutableEcsSceneContextEcsEntityContext.prototype.setComponentsIfChanged = function (components) {
            var componentsToSet = ([]);
            for (var index171 = 0; index171 < components.length; index171++) {
                var derivedComponentValue = components[index171];
                {
                    var component = derivedComponentValue.ecsComponentValue();
                    var component2Op = this.getComponent$com_shedmasta_core_ecs2_EcsComponentType(component.ecsComponentValue().ecsComponent().type());
                    var setIt = true;
                    if (setIt) {
                        /* add */ (componentsToSet.push(component) > 0);
                    }
                }
            }
            this.setComponents.apply(this, /* toArray */ (function (a1, a2) { if (a1.length >= a2.length) {
                a1.length = 0;
                a1.push.apply(a1, a2);
                return a1;
            }
            else {
                return a2.slice(0);
            } })([], componentsToSet));
        };
        /**
         *
         * @return {fj.data.List}
         */
        MutableEcsSceneContextEcsEntityContext.prototype.getComponentTypes = function () {
            return this.entity.keys().map(function (componentType) { return EcsComponentType_1.EcsComponentType.of(componentType); });
        };
        /**
         *
         * @param {EcsComponentType} componentType
         * @return {boolean}
         */
        MutableEcsSceneContextEcsEntityContext.prototype.hasComponent = function (componentType) {
            return /* containsKey */ this.entity.hasOwnProperty(componentType.typeName());
        };
        MutableEcsSceneContextEcsEntityContext.prototype.getComponent$com_shedmasta_core_ecs2_EcsComponentType = function (componentType) {
            var result = this.entity[componentType.typeName()];
            if (!result) {
                return Option_1.Option.none();
            }
            return Option_1.Option.some(EcsComponentValue_1.EcsComponentValue.of(EcsComponent_1.EcsComponent.of(componentType), result));
        };
        /**
         *
         * @param {EcsComponentType} componentType
         * @return {fj.data.Option}
         */
        MutableEcsSceneContextEcsEntityContext.prototype.getComponent = function (ecsComponent) {
            var result = this.entity.getValue(ecsComponent.type().typeName());
            if (!result) {
                return Option_1.Option.none();
            }
            return Option_1.Option.some(result);
        };
        /**
         *
         * @param {Array} components
         */
        MutableEcsSceneContextEcsEntityContext.prototype.setComponents = function (components) {
            for (var index172 = 0; index172 < components.length; index172++) {
                var component = components[index172];
                {
                    var component2 = component.ecsComponentValue();
                    this.entity.setValue(component2.ecsComponent().type().typeName(), component2.value());
                }
            }
        };
        /**
         *
         * @param {Array} componentTypes
         */
        MutableEcsSceneContextEcsEntityContext.prototype.unsetComponents = function (componentTypes) {
            for (var index173 = 0; index173 < componentTypes.length; index173++) {
                var componentType = componentTypes[index173];
                this.entity.remove(componentType.typeName());
            }
        };
        return MutableEcsSceneContextEcsEntityContext;
    }());
    MutableEcsScene.MutableEcsSceneContextEcsEntityContext = MutableEcsSceneContextEcsEntityContext;
    MutableEcsSceneContextEcsEntityContext["__class"] = "MutableEcsScene.MutableEcsSceneContextEcsEntityContext";
    MutableEcsSceneContextEcsEntityContext["__interfaces"] = ["EcsReadOnlyEntityContext", "EcsEntityContext"];
})(MutableEcsScene = exports.MutableEcsScene || (exports.MutableEcsScene = {}));
exports.MutableEcsScene = MutableEcsScene;
//# sourceMappingURL=MutableEcsScene.js.map
});
___scope___.file("app/ecs/components/ChildComponent.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("../EcsComponent");
var EcsComponentType_1 = require("../EcsComponentType");
var EcsComponentValue_1 = require("../EcsComponentValue");
var ChildComponent = /** @class */ (function () {
    function ChildComponent(parentId) {
        this._parentId = 0;
        this._parentId = parentId;
    }
    ChildComponent.create = function (parentId) {
        return new ChildComponent(parentId);
    };
    ChildComponent.prototype.parentId = function () {
        return this._parentId;
    };
    /**
     *
     * @return {com.shedmasta.core.ecs2.EcsComponentValue}
     */
    ChildComponent.prototype.ecsComponentValue = function () {
        return EcsComponentValue_1.EcsComponentValue.of(ChildComponent.ecsComponent_$LI$(), this);
    };
    ChildComponent.ecsComponent_$LI$ = function () { if (ChildComponent.ecsComponent == null)
        ChildComponent.ecsComponent = EcsComponent_1.EcsComponent.of(EcsComponentType_1.EcsComponentType.of("Child")); return ChildComponent.ecsComponent; };
    ;
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
ChildComponent["__class"] = "com.shedmasta.core.ecs2.components.ChildComponent";
ChildComponent["__interfaces"] = ["com.shedmasta.core.ecs2.IsEcsComponentValue"];
ChildComponent.ecsComponent_$LI$();
//# sourceMappingURL=ChildComponent.js.map
});
___scope___.file("app/ecs/components/NameComponent.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("../EcsComponent");
var EcsComponentType_1 = require("../EcsComponentType");
var EcsComponentValue_1 = require("../EcsComponentValue");
var NameComponent = /** @class */ (function () {
    function NameComponent(name) {
        this._name = null;
        this._name = name;
    }
    NameComponent.create = function (name) {
        return new NameComponent(name);
    };
    NameComponent.prototype.name = function () {
        return this._name;
    };
    /**
     *
     * @return {com.shedmasta.core.ecs2.EcsComponentValue}
     */
    NameComponent.prototype.ecsComponentValue = function () {
        return EcsComponentValue_1.EcsComponentValue.of(NameComponent.ecsComponent_$LI$(), this);
    };
    NameComponent.ecsComponent_$LI$ = function () { if (NameComponent.ecsComponent == null)
        NameComponent.ecsComponent = EcsComponent_1.EcsComponent.of(EcsComponentType_1.EcsComponentType.of("Name")); return NameComponent.ecsComponent; };
    ;
    return NameComponent;
}());
exports.NameComponent = NameComponent;
NameComponent["__class"] = "com.shedmasta.core.ecs2.components.NameComponent";
NameComponent["__interfaces"] = ["com.shedmasta.core.ecs2.IsEcsComponentValue"];
NameComponent.ecsComponent_$LI$();
//# sourceMappingURL=NameComponent.js.map
});
___scope___.file("app/ecs/components/LabelComponent.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsComponent_1 = require("../EcsComponent");
var EcsComponentType_1 = require("../EcsComponentType");
var EcsComponentValue_1 = require("../EcsComponentValue");
var LabelComponent = /** @class */ (function () {
    function LabelComponent(label) {
        this._label = null;
        this._label = label;
    }
    LabelComponent.create = function (label) {
        return new LabelComponent(label);
    };
    LabelComponent.prototype.label = function () {
        return this._label;
    };
    /**
     *
     * @return {com.shedmasta.core.ecs2.EcsComponentValue}
     */
    LabelComponent.prototype.ecsComponentValue = function () {
        return EcsComponentValue_1.EcsComponentValue.of(LabelComponent.ecsComponent_$LI$(), this);
    };
    LabelComponent.ecsComponent_$LI$ = function () { if (LabelComponent.ecsComponent == null)
        LabelComponent.ecsComponent = EcsComponent_1.EcsComponent.of(EcsComponentType_1.EcsComponentType.of("Label")); return LabelComponent.ecsComponent; };
    ;
    return LabelComponent;
}());
exports.LabelComponent = LabelComponent;
LabelComponent["__class"] = "LabelComponent";
LabelComponent["__interfaces"] = ["IsEcsComponentValue"];
LabelComponent.ecsComponent_$LI$();
//# sourceMappingURL=LabelComponent.js.map
});
___scope___.file("app/model/RenderScene.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EcsUtil = require("../ecs/EcsUtil");
var ArcComponent_1 = require("../ecs/components/ArcComponent");
var CircleComponent_1 = require("../ecs/components/CircleComponent");
var Line3DComponent_1 = require("../ecs/components/Line3DComponent");
var Util_1 = require("../math/Util");
function renderScene(canvasCtx, sceneCtxOp) {
    canvasCtx.strokeStyle = "#000000";
    if (sceneCtxOp.isNone) {
        return;
    }
    var sceneCtx = sceneCtxOp.fromSome();
    var lineIds = sceneCtx.entitiesWithAllComponents([Line3DComponent_1.Line3DComponent.ecsComponent.type()]);
    if (lineIds.length != 0) {
        canvasCtx.beginPath();
        lineIds.forEach(function (lineId) {
            var lineOp = sceneCtx.getComponent(lineId, Line3DComponent_1.Line3DComponent.ecsComponent).map(function (x) { return x.line; });
            if (lineOp.isSome) {
                var line = lineOp.fromSome();
                canvasCtx.moveTo(line.v1.x, line.v1.y);
                canvasCtx.lineTo(line.v2.x, line.v2.y);
            }
        });
        canvasCtx.stroke();
    }
    var circleIds = sceneCtx.entitiesWithAllComponents([CircleComponent_1.CircleComponent.ecsComponent.type()]);
    if (circleIds.length != 0) {
        circleIds.forEach(function (circleId) {
            var circleOp = sceneCtx.getComponent(circleId, CircleComponent_1.CircleComponent.ecsComponent);
            if (circleOp.isSome) {
                var circle = circleOp.fromSome();
                var axes = EcsUtil.entityAxes2D(sceneCtx, circleId);
                canvasCtx.beginPath();
                canvasCtx.arc(axes.origin.x, axes.origin.y, circle.radius(), 0.0, 2.0 * Math.PI);
                canvasCtx.stroke();
            }
        });
    }
    var arcIds = sceneCtx.entitiesWithAllComponents([ArcComponent_1.ArcComponent.ecsComponent.type()]);
    if (arcIds.length != 0) {
        arcIds.forEach(function (arcId) {
            var arcOp = sceneCtx.getComponent(arcId, ArcComponent_1.ArcComponent.ecsComponent);
            if (arcOp.isSome) {
                var arc = arcOp.fromSome();
                var axes = EcsUtil.entityAxes2D(sceneCtx, arcId);
                var o = axes.origin;
                var u = axes.orientation.getU();
                canvasCtx.save();
                canvasCtx.translate(o.x, o.y);
                canvasCtx.rotate(Math.atan2(u.y, u.x));
                canvasCtx.beginPath();
                canvasCtx.arc(0, 0, arc.radius(), Util_1.toRadians(arc.startAngle()), Util_1.toRadians(arc.startAngle() + arc.extent()), arc.extent() < 0.0);
                canvasCtx.stroke();
                canvasCtx.restore();
            }
        });
    }
}
exports.renderScene = renderScene;
//# sourceMappingURL=RenderScene.js.map
});
___scope___.file("app/ecs/EcsUtil.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Axes2DComponent_1 = require("./components/Axes2DComponent");
var ChildComponent_1 = require("./components/ChildComponent");
var ArrayUtil_1 = require("../ArrayUtil");
var Axes2D_1 = require("../math/Axes2D");
function entityAxes2D(sceneCtx, entityId) {
    var atEntityId = entityId;
    var visitedIds = [atEntityId];
    var currentAxes = entityLocalAxes2D(sceneCtx, entityId);
    while (true) {
        var parentIdOp = sceneCtx.getComponent(entityId, ChildComponent_1.ChildComponent.ecsComponent).map(function (x) { return x.parentId(); });
        if (parentIdOp.isNone) {
            break;
        }
        var parentId = parentIdOp.fromSome();
        if (ArrayUtil_1.arrayIncludes(visitedIds, parentId)) {
            break;
        }
        visitedIds.push(parentId);
        var parentAxes = entityLocalAxes2D(sceneCtx, parentId);
        currentAxes = parentAxes.axesFromSpace(currentAxes);
        atEntityId = parentId;
    }
    return currentAxes;
}
exports.entityAxes2D = entityAxes2D;
function entityLocalAxes2D(sceneCtx, entityId) {
    return sceneCtx.getComponent(entityId, Axes2DComponent_1.Axes2DComponent.ecsComponent).map(function (x) { return x.axes2D(); }).orSome(Axes2D_1.Axes2D.identity);
}
exports.entityLocalAxes2D = entityLocalAxes2D;
//# sourceMappingURL=EcsUtil.js.map
});
___scope___.file("app/ui/FloatingAskValuesAtHelper.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var Option_1 = require("../Option");
var Tuples_1 = require("../Tuples");
var ArrayUtil_1 = require("../ArrayUtil");
var FloatingAskValuesAtHelper = /** @class */ (function () {
    function FloatingAskValuesAtHelper(parentDiv, cAskValuesAt) {
        var _this = this;
        sodium.Transaction.run(function () {
            var cleanups = [];
            var handles = [];
            var ssHandlesChanged = new sodium.StreamSink();
            cleanups.push(cAskValuesAt.listen(function (askValuesAt) {
                handles.forEach(function (handle) {
                    parentDiv.removeChild(handle.div);
                    handle.disconnect();
                });
                handles = [];
                var _loop_1 = function (i) {
                    var handleCleanups = [];
                    var askValueAt = askValuesAt[i];
                    var div = document.createElement("div");
                    var lblValue = document.createTextNode("");
                    var txtValue = document.createElement("input");
                    txtValue.type = "text";
                    txtValue.value = '' + askValueAt.initialValue;
                    txtValue.focus();
                    txtValue.select();
                    var ssValueChanged = new sodium.StreamSink();
                    var ssValueEntered = new sodium.StreamSink();
                    var checkSendValueEntered = function () {
                        var value = parseFloat(txtValue.value);
                        if (!isNaN(value)) {
                            ssValueEntered.send(value);
                        }
                    };
                    txtValue.addEventListener("input", function () {
                        var value = parseFloat(txtValue.value);
                        ssValueChanged.send(isNaN(value) ? Option_1.Option.none() : Option_1.Option.some(value));
                    });
                    txtValue.addEventListener("keydown", function (evt) {
                        var enterKeyCode = 13;
                        var ev = evt || window.event;
                        if (ev.keyCode == enterKeyCode) {
                            ev.preventDefault();
                            checkSendValueEntered();
                        }
                    });
                    div.appendChild(lblValue);
                    div.appendChild(txtValue);
                    div.style.position = "absolute";
                    parentDiv.appendChild(div);
                    handleCleanups.push(askValueAt.cLabelOp.listen(function (labelOp) {
                        if (labelOp.isNone) {
                            lblValue.nodeValue = "";
                            return;
                        }
                        var label = labelOp.fromSome();
                        lblValue.nodeValue = label;
                    }));
                    handleCleanups.push(askValueAt.cPosition.listen(function (position) {
                        div.style.left = '' + position.x + "px";
                        div.style.top = '' + (position.y - div.clientHeight - 10.0) + "px";
                    }));
                    handleCleanups.push(askValueAt.sSetValue.listen(function (value) {
                        txtValue.value = '' + value;
                        txtValue.focus();
                        txtValue.select();
                    }));
                    handles.push(new AskValueAtHandle(askValueAt.id, div, ssValueChanged, ssValueEntered, handleCleanups));
                };
                for (var i = 0; i < askValuesAt.length; ++i) {
                    _loop_1(i);
                }
                window.setTimeout(function () { return ssHandlesChanged.send(sodium.Unit.UNIT); });
            }));
            var cHandles = ssHandlesChanged.map(function (unused) { return handles; }).hold([]);
            var sReplyValueChanged = sodium.Cell.switchS(cHandles.map(function (handles) {
                return ArrayUtil_1.arrayReduce(handles.map(function (handle) { return handle.sValueChanged.map(function (x) { return Tuples_1.T2.of(handle.id, x); }); }), function (a, b) { return a.orElse(b); }).orSome_(function () { return new sodium.Stream(); });
            }));
            var sReplyValueEntered = sodium.Cell.switchS(cHandles.map(function (handles) {
                return ArrayUtil_1.arrayReduce(handles.map(function (handle) { return handle.sValueEntered.map(function (x) { return Tuples_1.T2.of(handle.id, x); }); }), function (a, b) { return a.orElse(b); }).orSome_(function () { return new sodium.Stream(); });
            }));
            _this._sReplyValueChanged = sReplyValueChanged;
            _this._sReplyValueEntered = sReplyValueEntered;
            _this._disconnect = function () {
                handles.forEach(function (handle) { return handle.disconnect(); });
                cleanups.forEach(function (cleanup) { return cleanup(); });
                handles = [];
                cleanups = [];
            };
        });
    }
    Object.defineProperty(FloatingAskValuesAtHelper.prototype, "sReplyValueChanged", {
        get: function () {
            return this._sReplyValueChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatingAskValuesAtHelper.prototype, "sReplyValueEntered", {
        get: function () {
            return this._sReplyValueEntered;
        },
        enumerable: true,
        configurable: true
    });
    FloatingAskValuesAtHelper.prototype.disconnect = function () {
        this._disconnect();
    };
    return FloatingAskValuesAtHelper;
}());
exports.FloatingAskValuesAtHelper = FloatingAskValuesAtHelper;
var AskValueAtHandle = /** @class */ (function () {
    function AskValueAtHandle(id, div, sValueChanged, sValueEntered, handleCleanups) {
        this.id = id;
        this.div = div;
        this.sValueChanged = sValueChanged;
        this.sValueEntered = sValueEntered;
        this.handleCleanups = handleCleanups;
    }
    AskValueAtHandle.prototype.disconnect = function () {
        this.handleCleanups.forEach(function (cleanup) { return cleanup(); });
    };
    return AskValueAtHandle;
}());
//# sourceMappingURL=FloatingAskValuesAtHelper.js.map
});
___scope___.file("app/ui/FloatingLengthAngleHelper.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var Tuples_1 = require("../Tuples");
var ArrayUtil_1 = require("../ArrayUtil");
var FloatingLengthAngleHelper = /** @class */ (function () {
    function FloatingLengthAngleHelper(parentDiv, cFloatingLengthAngles) {
        var _this = this;
        sodium.Transaction.run(function () {
            var cleanups = [];
            var handles = [];
            var ssHandlesChanged = new sodium.StreamSink();
            cleanups.push(cFloatingLengthAngles.listen(function (floatingLengthAngles) {
                handles.forEach(function (handle) {
                    parentDiv.removeChild(handle.div);
                    handle.disconnect();
                });
                handles = [];
                var _loop_1 = function (i) {
                    var handleCleanups = [];
                    var floatingLengthAngle = floatingLengthAngles[i];
                    var div = document.createElement("div");
                    var txtLength = document.createElement("input");
                    var lengthFocused = true;
                    txtLength.type = "text";
                    txtLength.value = '' + floatingLengthAngle.initLength;
                    txtLength.focus();
                    var txtAngle = document.createElement("input");
                    txtAngle.type = "text";
                    txtAngle.value = '' + floatingLengthAngle.initAngle;
                    var ssHandleLengthAngleEntered = new sodium.StreamSink();
                    var checkSendLengthAngleEntered = function () {
                        var length = parseFloat(txtLength.value);
                        var angle = parseFloat(txtAngle.value);
                        if (!(isNaN(length) || isNaN(angle))) {
                            ssHandleLengthAngleEntered.send(Tuples_1.T2.of(length, angle));
                        }
                    };
                    txtLength.addEventListener("keydown", function (evt) {
                        var tabKeyCode = 9;
                        var enterKeyCode = 13;
                        var ev = evt || window.event;
                        if (ev.keyCode == tabKeyCode) {
                            ev.preventDefault();
                            lengthFocused = false;
                            txtAngle.focus();
                            txtAngle.select();
                        }
                        else if (ev.keyCode == enterKeyCode) {
                            ev.preventDefault();
                            checkSendLengthAngleEntered();
                        }
                    });
                    txtAngle.addEventListener("keydown", function (evt) {
                        var tabKeyCode = 9;
                        var enterKeyCode = 13;
                        var ev = evt || window.event;
                        if (ev.keyCode == tabKeyCode) {
                            ev.preventDefault();
                            lengthFocused = true;
                            txtLength.focus();
                            txtLength.select();
                        }
                        else if (ev.keyCode == enterKeyCode) {
                            ev.preventDefault();
                            checkSendLengthAngleEntered();
                        }
                    });
                    div.appendChild(document.createTextNode("Length:"));
                    div.appendChild(txtLength);
                    div.appendChild(document.createElement("br"));
                    div.appendChild(document.createTextNode("Angle:"));
                    div.appendChild(txtAngle);
                    div.style.position = "absolute";
                    parentDiv.appendChild(div);
                    handleCleanups.push(floatingLengthAngle.cPositionOp.listen(function (positionOp) {
                        if (positionOp.isNone) {
                            div.style.display = "none";
                            return;
                        }
                        var position = positionOp.fromSome();
                        div.style.display = "block";
                        div.style.left = '' + position.x + "px";
                        div.style.top = '' + (position.y - div.clientHeight - 10.0) + "px";
                    }));
                    handleCleanups.push(floatingLengthAngle.sSetLength.listen(function (length) {
                        txtLength.value = '' + length;
                        if (lengthFocused) {
                            txtLength.focus();
                            txtLength.select();
                        }
                    }));
                    handleCleanups.push(floatingLengthAngle.sSetAngle.listen(function (angle) {
                        txtAngle.value = '' + angle;
                        if (!lengthFocused) {
                            txtAngle.focus();
                            txtAngle.select();
                        }
                    }));
                    handles.push(new FloatingLengthAngleHandle(floatingLengthAngle.id, div, ssHandleLengthAngleEntered, handleCleanups));
                };
                for (var i = 0; i < floatingLengthAngles.length; ++i) {
                    _loop_1(i);
                }
                window.setTimeout(function () { return ssHandlesChanged.send(sodium.Unit.UNIT); });
            }));
            var cHandles = ssHandlesChanged.map(function (unused) { return handles; }).hold([]);
            var sLengthAngleEntered = sodium.Cell.switchS(cHandles.map(function (handles) {
                return ArrayUtil_1.arrayReduce(handles.map(function (handle) { return handle.sLengthAngleEntered.map(function (x) { return Tuples_1.T3.of(handle.id, x._1, x._2); }); }), function (a, b) { return a.orElse(b); }).orSome_(function () { return new sodium.Stream(); });
            }));
            _this._sLengthAngleEntered = sLengthAngleEntered;
            _this._disconnect = function () {
                handles.forEach(function (handle) { return handle.disconnect(); });
                cleanups.forEach(function (cleanup) { return cleanup(); });
                handles = [];
                cleanups = [];
            };
        });
    }
    Object.defineProperty(FloatingLengthAngleHelper.prototype, "sLengthAngleEntered", {
        get: function () {
            return this._sLengthAngleEntered;
        },
        enumerable: true,
        configurable: true
    });
    FloatingLengthAngleHelper.prototype.disconnect = function () {
        this._disconnect();
    };
    return FloatingLengthAngleHelper;
}());
exports.FloatingLengthAngleHelper = FloatingLengthAngleHelper;
var FloatingLengthAngleHandle = /** @class */ (function () {
    function FloatingLengthAngleHandle(id, div, sLengthAngleEntered, handleCleanups) {
        this.id = id;
        this.div = div;
        this.sLengthAngleEntered = sLengthAngleEntered;
        this.handleCleanups = handleCleanups;
    }
    FloatingLengthAngleHandle.prototype.disconnect = function () {
        this.handleCleanups.forEach(function (cleanup) { return cleanup(); });
    };
    return FloatingLengthAngleHandle;
}());
//# sourceMappingURL=FloatingLengthAngleHelper.js.map
});
return ___scope___.entry = "app/main.ts";
});
FuseBox.pkg("ramda", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

module.exports = R
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("sodiumjs", {"typescript-collections":"1.3.2"}, function(___scope___){
___scope___.file("dist/sodium.cjs.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Collections = require('typescript-collections');
var Z = require('sanctuary-type-classes');

var totalRegistrations = 0;
function getTotalRegistrations() {
    return totalRegistrations;
}
var Source = /** @class */ (function () {
    function Source(origin, register_) {
        this.registered = false;
        this.deregister_ = null;
        if (origin === null)
            throw new Error("null origin!");
        this.origin = origin;
        this.register_ = register_;
    }
    Source.prototype.register = function (target) {
        var _this = this;
        if (!this.registered) {
            this.registered = true;
            if (this.register_ !== null)
                this.deregister_ = this.register_();
            else {
                this.origin.increment(target);
                this.deregister_ = function () { return _this.origin.decrement(target); };
            }
        }
    };
    Source.prototype.deregister = function (target) {
        if (this.registered) {
            this.registered = false;
            if (this.deregister_ !== null)
                this.deregister_();
        }
    };
    return Source;
}());
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["gray"] = 1] = "gray";
    Color[Color["white"] = 2] = "white";
    Color[Color["purple"] = 3] = "purple";
})(Color || (Color = {}));
var roots = [];
var nextID = 0;
var verbose = false;
var Vertex = /** @class */ (function () {
    function Vertex(name, rank, sources) {
        this.targets = [];
        this.childrn = [];
        this.visited = false;
        // --------------------------------------------------------
        // Synchronous Cycle Collection algorithm presented in "Concurrent
        // Cycle Collection in Reference Counted Systems" by David F. Bacon
        // and V.T. Rajan.
        this.color = Color.black;
        this.buffered = false;
        this.refCountAdj = 0;
        this.name = name;
        this.rank = rank;
        this.sources = sources;
        this.id = nextID++;
    }
    Vertex.prototype.refCount = function () { return this.targets.length; };
    Vertex.prototype.register = function (target) {
        return this.increment(target);
    };
    Vertex.prototype.deregister = function (target) {
        if (verbose)
            console.log("deregister " + this.descr() + " => " + target.descr());
        this.decrement(target);
        //Transaction.post_(() => Transaction.post_(() => Vertex.collectCycles()));
        //window.setTimeout(() => Vertex.collectCycles(), 0);
    };
    Vertex.prototype.incRefCount = function (target) {
        var anyChanged = false;
        if (this.refCount() == 0) {
            for (var i = 0; i < this.sources.length; i++)
                this.sources[i].register(this);
        }
        this.targets.push(target);
        target.childrn.push(this);
        if (target.ensureBiggerThan(this.rank))
            anyChanged = true;
        totalRegistrations++;
        return anyChanged;
    };
    Vertex.prototype.decRefCount = function (target) {
        if (verbose)
            console.log("DEC " + this.descr());
        var matched = false;
        for (var i = target.childrn.length - 1; i >= 0; i--)
            if (target.childrn[i] === this) {
                target.childrn.splice(i, 1);
            }
        for (var i = 0; i < this.targets.length; i++)
            if (this.targets[i] === target) {
                this.targets.splice(i, 1);
                matched = true;
                break;
            }
        if (matched) {
            if (this.refCount() == 0) {
                for (var i = 0; i < this.sources.length; i++)
                    this.sources[i].deregister(this);
            }
            totalRegistrations--;
        }
    };
    Vertex.prototype.addSource = function (src) {
        this.sources.push(src);
        if (this.refCount() > 0)
            src.register(this);
    };
    Vertex.prototype.ensureBiggerThan = function (limit) {
        if (this.rank > limit || this.visited)
            return false;
        this.visited = true;
        this.rank = limit + 1;
        for (var i = 0; i < this.targets.length; i++)
            this.targets[i].ensureBiggerThan(this.rank);
        this.visited = false;
        return true;
    };
    Vertex.prototype.descr = function () {
        var colStr = null;
        switch (this.color) {
            case Color.black:
                colStr = "black";
                break;
            case Color.gray:
                colStr = "gray";
                break;
            case Color.white:
                colStr = "white";
                break;
            case Color.purple:
                colStr = "purple";
                break;
        }
        var str = this.id + " " + this.name + " [" + this.refCount() + "/" + this.refCountAdj + "] " + colStr + " ->";
        var chs = this.children();
        for (var i = 0; i < chs.length; i++) {
            str = str + " " + chs[i].id;
        }
        return str;
    };
    Vertex.prototype.children = function () { return this.childrn; };
    Vertex.prototype.increment = function (referrer) {
        return this.incRefCount(referrer);
    };
    Vertex.prototype.decrement = function (referrer) {
        this.decRefCount(referrer);
        if (this.refCount() == 0)
            this.release();
        else
            this.possibleRoots();
    };
    Vertex.prototype.release = function () {
        this.color = Color.black;
        if (!this.buffered)
            this.free();
    };
    Vertex.prototype.free = function () {
        while (this.targets.length > 0)
            this.decRefCount(this.targets[0]);
    };
    Vertex.prototype.possibleRoots = function () {
        if (this.color != Color.purple) {
            this.color = Color.purple;
            if (!this.buffered) {
                this.buffered = true;
                roots.push(this);
            }
        }
    };
    Vertex.collectCycles = function () {
        if (Vertex.collectingCycles) {
            return;
        }
        try {
            Vertex.collectingCycles = true;
            Vertex.markRoots();
            Vertex.scanRoots();
            Vertex.collectRoots();
        }
        finally {
            Vertex.collectingCycles = false;
        }
    };
    Vertex.markRoots = function () {
        var newRoots = [];
        for (var i = 0; i < roots.length; i++) {
            if (verbose)
                console.log("markRoots " + roots[i].descr()); // ###
            if (roots[i].color == Color.purple) {
                roots[i].markGray();
                newRoots.push(roots[i]);
            }
            else {
                roots[i].buffered = false;
                if (roots[i].color == Color.black && roots[i].refCount() == 0)
                    roots[i].free();
            }
        }
        roots = newRoots;
    };
    Vertex.scanRoots = function () {
        for (var i = 0; i < roots.length; i++)
            roots[i].scan();
    };
    Vertex.collectRoots = function () {
        for (var i = 0; i < roots.length; i++) {
            roots[i].buffered = false;
            roots[i].collectWhite();
        }
        roots = [];
    };
    Vertex.prototype.markGray = function () {
        if (this.color != Color.gray) {
            this.color = Color.gray;
            var chs = this.children();
            for (var i = 0; i < chs.length; i++) {
                chs[i].refCountAdj--;
                if (verbose)
                    console.log("markGray " + this.descr());
                chs[i].markGray();
            }
        }
    };
    Vertex.prototype.scan = function () {
        if (verbose)
            console.log("scan " + this.descr());
        if (this.color == Color.gray) {
            if (this.refCount() + this.refCountAdj > 0)
                this.scanBlack();
            else {
                this.color = Color.white;
                if (verbose)
                    console.log("scan WHITE " + this.descr());
                var chs = this.children();
                for (var i = 0; i < chs.length; i++)
                    chs[i].scan();
            }
        }
    };
    Vertex.prototype.scanBlack = function () {
        this.color = Color.black;
        var chs = this.children();
        for (var i = 0; i < chs.length; i++) {
            chs[i].refCountAdj++;
            if (verbose)
                console.log("scanBlack " + this.descr());
            if (chs[i].color != Color.black)
                chs[i].scanBlack();
        }
    };
    Vertex.prototype.collectWhite = function () {
        if (this.color == Color.white && !this.buffered) {
            if (verbose)
                console.log("collectWhite " + this.descr());
            this.color = Color.black;
            this.refCountAdj = 0;
            var chs = this.children();
            for (var i = 0; i < chs.length; i++)
                chs[i].collectWhite();
            this.free();
        }
    };
    Vertex.NULL = new Vertex("user", 1e12, []);
    Vertex.collectingCycles = false;
    return Vertex;
}());

var Lambda1 = /** @class */ (function () {
    function Lambda1(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda1;
}());
function lambda1(f, deps) {
    return new Lambda1(f, deps);
}
function Lambda1_deps(f) {
    if (f instanceof Lambda1)
        return f.deps;
    else
        return [];
}
function Lambda1_toFunction(f) {
    if (f instanceof Lambda1)
        return f.f;
    else
        return f;
}
var Lambda2 = /** @class */ (function () {
    function Lambda2(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda2;
}());
function lambda2(f, deps) {
    return new Lambda2(f, deps);
}
function Lambda2_deps(f) {
    if (f instanceof Lambda2)
        return f.deps;
    else
        return [];
}
function Lambda2_toFunction(f) {
    if (f instanceof Lambda2)
        return f.f;
    else
        return f;
}
var Lambda3 = /** @class */ (function () {
    function Lambda3(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda3;
}());
function lambda3(f, deps) {
    return new Lambda3(f, deps);
}
function Lambda3_deps(f) {
    if (f instanceof Lambda3)
        return f.deps;
    else
        return [];
}
function Lambda3_toFunction(f) {
    if (f instanceof Lambda3)
        return f.f;
    else
        return f;
}
var Lambda4 = /** @class */ (function () {
    function Lambda4(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda4;
}());
function lambda4(f, deps) {
    return new Lambda4(f, deps);
}
function Lambda4_deps(f) {
    if (f instanceof Lambda4)
        return f.deps;
    else
        return [];
}
function Lambda4_toFunction(f) {
    if (f instanceof Lambda4)
        return f.f;
    else
        return f;
}
var Lambda5 = /** @class */ (function () {
    function Lambda5(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda5;
}());
function lambda5(f, deps) {
    return new Lambda5(f, deps);
}
function Lambda5_deps(f) {
    if (f instanceof Lambda5)
        return f.deps;
    else
        return [];
}
function Lambda5_toFunction(f) {
    if (f instanceof Lambda5)
        return f.f;
    else
        return f;
}
var Lambda6 = /** @class */ (function () {
    function Lambda6(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda6;
}());
function lambda6(f, deps) {
    return new Lambda6(f, deps);
}
function Lambda6_deps(f) {
    if (f instanceof Lambda6)
        return f.deps;
    else
        return [];
}
function Lambda6_toFunction(f) {
    if (f instanceof Lambda6)
        return f.f;
    else
        return f;
}
function toSources(deps) {
    var ss = [];
    for (var i = 0; i < deps.length; i++) {
        var dep = deps[i];
        ss.push(new Source(dep.getVertex__(), null));
    }
    return ss;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Entry = /** @class */ (function () {
    function Entry(rank, action) {
        this.rank = rank;
        this.action = action;
        this.seq = Entry.nextSeq++;
    }
    Entry.prototype.toString = function () {
        return this.seq.toString();
    };
    Entry.nextSeq = 0;
    return Entry;
}());
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.inCallback = 0;
        this.toRegen = false;
        this.prioritizedQ = new Collections.PriorityQueue(function (a, b) {
            // Note: Low priority numbers are treated as "greater" according to this
            // comparison, so that the lowest numbers are highest priority and go first.
            if (a.rank.rank < b.rank.rank)
                return 1;
            if (a.rank.rank > b.rank.rank)
                return -1;
            if (a.seq < b.seq)
                return 1;
            if (a.seq > b.seq)
                return -1;
            return 0;
        });
        this.entries = new Collections.Set(function (a) { return a.toString(); });
        this.sampleQ = [];
        this.lastQ = [];
        this.postQ = null;
    }
    Transaction.prototype.requestRegen = function () {
        this.toRegen = true;
    };
    Transaction.prototype.prioritized = function (target, action) {
        var e = new Entry(target, action);
        this.prioritizedQ.enqueue(e);
        this.entries.add(e);
    };
    Transaction.prototype.sample = function (h) {
        this.sampleQ.push(h);
    };
    Transaction.prototype.last = function (h) {
        this.lastQ.push(h);
    };
    Transaction.post_ = function (action) {
        Transaction.run(function () { return Transaction.currentTransaction.post(0, action); });
    };
    /**
     * Add an action to run after all last() actions.
     */
    Transaction.prototype.post = function (childIx, action) {
        if (this.postQ == null)
            this.postQ = [];
        // If an entry exists already, combine the old one with the new one.
        while (this.postQ.length <= childIx)
            this.postQ.push(null);
        var existing = this.postQ[childIx], neu = existing === null ? action
            : function () {
                existing();
                action();
            };
        this.postQ[childIx] = neu;
    };
    // If the priority queue has entries in it when we modify any of the nodes'
    // ranks, then we need to re-generate it to make sure it's up-to-date.
    Transaction.prototype.checkRegen = function () {
        if (this.toRegen) {
            this.toRegen = false;
            this.prioritizedQ.clear();
            var es = this.entries.toArray();
            for (var i = 0; i < es.length; i++)
                this.prioritizedQ.enqueue(es[i]);
        }
    };
    Transaction.prototype.isActive = function () {
        return Transaction.currentTransaction ? true : false;
    };
    Transaction.prototype.close = function () {
        while (true) {
            while (true) {
                this.checkRegen();
                if (this.prioritizedQ.isEmpty())
                    break;
                var e = this.prioritizedQ.dequeue();
                this.entries.remove(e);
                e.action();
            }
            var sq = this.sampleQ;
            this.sampleQ = [];
            for (var i = 0; i < sq.length; i++)
                sq[i]();
            if (this.prioritizedQ.isEmpty() && this.sampleQ.length < 1)
                break;
        }
        for (var i = 0; i < this.lastQ.length; i++)
            this.lastQ[i]();
        this.lastQ = [];
        if (this.postQ != null) {
            for (var i = 0; i < this.postQ.length; i++) {
                if (this.postQ[i] != null) {
                    var parent_1 = Transaction.currentTransaction;
                    try {
                        if (i > 0) {
                            Transaction.currentTransaction = new Transaction();
                            try {
                                this.postQ[i]();
                                Transaction.currentTransaction.close();
                            }
                            catch (err) {
                                Transaction.currentTransaction.close();
                                throw err;
                            }
                        }
                        else {
                            Transaction.currentTransaction = null;
                            this.postQ[i]();
                        }
                        Transaction.currentTransaction = parent_1;
                    }
                    catch (err) {
                        Transaction.currentTransaction = parent_1;
                        throw err;
                    }
                }
            }
            this.postQ = null;
        }
    };
    /**
     * Add a runnable that will be executed whenever a transaction is started.
     * That runnable may start transactions itself, which will not cause the
     * hooks to be run recursively.
     *
     * The main use case of this is the implementation of a time/alarm system.
     */
    Transaction.onStart = function (r) {
        Transaction.onStartHooks.push(r);
    };
    Transaction.run = function (f) {
        var transWas = Transaction.currentTransaction;
        if (transWas === null) {
            if (!Transaction.runningOnStartHooks) {
                Transaction.runningOnStartHooks = true;
                try {
                    for (var i = 0; i < Transaction.onStartHooks.length; i++)
                        Transaction.onStartHooks[i]();
                }
                finally {
                    Transaction.runningOnStartHooks = false;
                }
            }
            Transaction.currentTransaction = new Transaction();
        }
        try {
            var a = f();
            if (transWas === null) {
                Transaction.currentTransaction.close();
                Transaction.currentTransaction = null;
            }
            return a;
        }
        catch (err) {
            if (transWas === null) {
                Transaction.currentTransaction.close();
                Transaction.currentTransaction = null;
            }
            throw err;
        }
    };
    Transaction.currentTransaction = null;
    Transaction.onStartHooks = [];
    Transaction.runningOnStartHooks = false;
    return Transaction;
}());

var CoalesceHandler = /** @class */ (function () {
    function CoalesceHandler(f, out) {
        this.f = Lambda2_toFunction(f);
        this.out = out;
        this.out.getVertex__().sources = this.out.getVertex__().sources.concat(toSources(Lambda2_deps(f)));
        this.accumValid = false;
    }
    CoalesceHandler.prototype.send_ = function (a) {
        var _this = this;
        if (this.accumValid)
            this.accum = this.f(this.accum, a);
        else {
            Transaction.currentTransaction.prioritized(this.out.getVertex__(), function () {
                _this.out.send_(_this.accum);
                _this.accumValid = false;
                _this.accum = null;
            });
            this.accum = a;
            this.accumValid = true;
        }
    };
    return CoalesceHandler;
}());

/**
 * A representation for a value that may not be available until the current
 * transaction is closed.
 */
var Lazy = /** @class */ (function () {
    function Lazy(f) {
        this.f = f;
    }
    /**
     * Get the value if available, throwing an exception if not.
     * In the general case this should only be used in subsequent transactions to
     * when the Lazy was obtained.
     */
    Lazy.prototype.get = function () {
        return this.f();
    };
    /**
     * Map the lazy value according to the specified function, so the returned Lazy reflects
     * the value of the function applied to the input Lazy's value.
     * @param f Function to apply to the contained value. It must be <em>referentially transparent</em>.
     */
    Lazy.prototype.map = function (f) {
        var _this = this;
        return new Lazy(function () { return f(_this.f()); });
    };
    /**
     * Lift a binary function into lazy values, so the returned Lazy reflects
     * the value of the function applied to the input Lazys' values.
     */
    Lazy.prototype.lift = function (b, f) {
        var _this = this;
        return new Lazy(function () { return f(_this.f(), b.f()); });
    };
    /**
     * Lift a ternary function into lazy values, so the returned Lazy reflects
     * the value of the function applied to the input Lazys' values.
     */
    Lazy.prototype.lift3 = function (b, c, f) {
        var _this = this;
        return new Lazy(function () { return f(_this.f(), b.f(), c.f()); });
    };
    /**
     * Lift a quaternary function into lazy values, so the returned Lazy reflects
     * the value of the function applied to the input Lazys' values.
     */
    Lazy.prototype.lift4 = function (b, c, d, f) {
        var _this = this;
        return new Lazy(function () { return f(_this.f(), b.f(), c.f(), d.f()); });
    };
    return Lazy;
}());

var Unit = /** @class */ (function () {
    function Unit() {
    }
    Unit.UNIT = new Unit();
    return Unit;
}());

var Operational = /** @class */ (function () {
    function Operational() {
    }
    /**
     * A stream that gives the updates/steps for a {@link Cell}.
     * <P>
     * This is an OPERATIONAL primitive, which is not part of the main Sodium
     * API. It breaks the property of non-detectability of cell steps/updates.
     * The rule with this primitive is that you should only use it in functions
     * that do not allow the caller to detect the cell updates.
     */
    Operational.updates = function (c) {
        /*  Don't think this is needed
        const out = new StreamWithSend<A>(null);
        out.setVertex__(new Vertex("updates", 0, [
                new Source(
                    c.getStream__().getVertex__(),
                    () => {
                        return c.getStream__().listen_(out.getVertex__(), (a : A) => {
                            out.send_(a);
                        }, false);
                    }
                ),
                new Source(
                    c.getVertex__(),
                    () => {
                        return () => { };
                    }
                )
            ]
        ));
        return out;
        */
        return c.getStream__();
    };
    /**
     * A stream that is guaranteed to fire once in the transaction where value() is invoked, giving
     * the current value of the cell, and thereafter behaves like {@link updates(Cell)},
     * firing for each update/step of the cell's value.
     * <P>
     * This is an OPERATIONAL primitive, which is not part of the main Sodium
     * API. It breaks the property of non-detectability of cell steps/updates.
     * The rule with this primitive is that you should only use it in functions
     * that do not allow the caller to detect the cell updates.
     */
    Operational.value = function (c) {
        return Transaction.run(function () {
            var sSpark = new StreamWithSend();
            Transaction.currentTransaction.prioritized(sSpark.getVertex__(), function () {
                sSpark.send_(Unit.UNIT);
            });
            var sInitial = sSpark.snapshot1(c);
            return Operational.updates(c).orElse(sInitial);
        });
    };
    /**
     * Push each event onto a new transaction guaranteed to come before the next externally
     * initiated transaction. Same as {@link split(Stream)} but it works on a single value.
     */
    Operational.defer = function (s) {
        return Operational.split(s.map(function (a) {
            return [a];
        }));
    };
    /**
     * Push each event in the list onto a newly created transaction guaranteed
     * to come before the next externally initiated transaction. Note that the semantics
     * are such that two different invocations of split() can put events into the same
     * new transaction, so the resulting stream's events could be simultaneous with
     * events output by split() or {@link defer(Stream)} invoked elsewhere in the code.
     */
    Operational.split = function (s) {
        var out = new StreamWithSend(null);
        out.setVertex__(new Vertex("split", 0, [
            new Source(s.getVertex__(), function () {
                return s.listen_(out.getVertex__(), function (as) {
                    var _loop_1 = function (i) {
                        Transaction.currentTransaction.post(i, function () {
                            Transaction.run(function () {
                                out.send_(as[i]);
                            });
                        });
                    };
                    for (var i = 0; i < as.length; i++) {
                        _loop_1(i);
                    }
                }, false);
            })
        ]));
        return out;
    };
    return Operational;
}());

var LazySample = /** @class */ (function () {
    function LazySample(cell) {
        this.hasValue = false;
        this.value = null;
        this.cell = cell;
    }
    return LazySample;
}());
var ApplyState = /** @class */ (function () {
    function ApplyState() {
        this.f = null;
        this.f_present = false;
        this.a = null;
        this.a_present = false;
    }
    return ApplyState;
}());
var Cell = /** @class */ (function () {
    function Cell(initValue, str) {
        var _this = this;
        this.value = initValue;
        if (!str) {
            this.str = new Stream();
            this.vertex = new Vertex("ConstCell", 0, []);
        }
        else
            Transaction.run(function () { return _this.setStream(str); });
    }
    Cell.prototype.setStream = function (str) {
        var _this = this;
        this.str = str;
        var me = this, src = new Source(str.getVertex__(), function () {
            return str.listen_(me.vertex, function (a) {
                if (me.valueUpdate == null) {
                    Transaction.currentTransaction.last(function () {
                        me.value = me.valueUpdate;
                        me.lazyInitValue = null;
                        me.valueUpdate = null;
                    });
                }
                me.valueUpdate = a;
            }, false);
        });
        this.vertex = new Vertex("Cell", 0, [src]);
        // We do a trick here of registering the source for the duration of the current
        // transaction so that we are guaranteed to catch any stream events that
        // occur in the same transaction.
        this.vertex.register(Vertex.NULL);
        Transaction.currentTransaction.last(function () {
            _this.vertex.deregister(Vertex.NULL);
        });
    };
    Cell.prototype.getVertex__ = function () {
        return this.vertex;
    };
    Cell.prototype.getStream__ = function () {
        return this.str;
    };
    /**
     * Sample the cell's current value.
     * <p>
     * It should generally be avoided in favour of {@link listen(Handler)} so you don't
     * miss any updates, but in many circumstances it makes sense.
     * <p>
     * NOTE: In the Java and other versions of Sodium, using sample() inside map(), filter() and
     * merge() is encouraged. In the Javascript/Typescript version, not so much, for the
     * following reason: The memory management is different in the Javascript version, and this
     * requires us to track all dependencies. In order for the use of sample() inside
     * a closure to be correct, the cell that was sample()d inside the closure would have to be
     * declared explicitly using the helpers lambda1(), lambda2(), etc. Because this is
     * something that can be got wrong, we don't encourage this kind of use of sample() in
     * Javascript. Better and simpler to use snapshot().
     * <p>
     * NOTE: If you need to sample() a cell, you have to make sure it's "alive" in terms of
     * memory management or it will ignore updates. To make a cell work correctly
     * with sample(), you have to ensure that it's being used. One way to guarantee this is
     * to register a dummy listener on the cell. It will also work to have it referenced
     * by something that is ultimately being listened to.
     */
    Cell.prototype.sample = function () {
        var _this = this;
        return Transaction.run(function () { return _this.sampleNoTrans__(); });
    };
    Cell.prototype.sampleNoTrans__ = function () {
        return this.value;
    };
    /**
     * A variant of {@link sample()} that works with {@link CellLoop}s when they haven't been looped yet.
     * It should be used in any code that's general enough that it could be passed a {@link CellLoop}.
     * @see Stream#holdLazy(Lazy) Stream.holdLazy()
     */
    Cell.prototype.sampleLazy = function () {
        var me = this;
        return Transaction.run(function () { return me.sampleLazyNoTrans__(); });
    };
    Cell.prototype.sampleLazyNoTrans__ = function () {
        var me = this, s = new LazySample(me);
        Transaction.currentTransaction.sample(function () {
            s.value = me.valueUpdate != null ? me.valueUpdate : me.sampleNoTrans__();
            s.hasValue = true;
            s.cell = null;
        });
        return new Lazy(function () {
            if (s.hasValue)
                return s.value;
            else
                return s.cell.sample();
        });
    };
    /**
     * Transform the cell's value according to the supplied function, so the returned Cell
     * always reflects the value of the function applied to the input Cell's value.
     * @param f Function to apply to convert the values. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.map = function (f) {
        var c = this;
        return Transaction.run(function () {
            return Operational.updates(c).map(f).holdLazy(c.sampleLazy().map(Lambda1_toFunction(f)));
        });
    };
    /**
     * Lift a binary function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift = function (b, fn0) {
        var fn = Lambda2_toFunction(fn0), cf = this.map(function (aa) { return function (bb) { return fn(aa, bb); }; });
        return Cell.apply(cf, b, toSources(Lambda2_deps(fn0)));
    };
    /**
     * Lift a ternary function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift3 = function (b, c, fn0) {
        var fn = Lambda3_toFunction(fn0), mf = function (aa) { return function (bb) { return function (cc) { return fn(aa, bb, cc); }; }; }, cf = this.map(mf);
        return Cell.apply(Cell.apply(cf, b), c, toSources(Lambda3_deps(fn0)));
    };
    /**
     * Lift a quaternary function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift4 = function (b, c, d, fn0) {
        var fn = Lambda4_toFunction(fn0), mf = function (aa) { return function (bb) { return function (cc) { return function (dd) { return fn(aa, bb, cc, dd); }; }; }; }, cf = this.map(mf);
        return Cell.apply(Cell.apply(Cell.apply(cf, b), c), d, toSources(Lambda4_deps(fn0)));
    };
    /**
     * Lift a 5-argument function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift5 = function (b, c, d, e, fn0) {
        var fn = Lambda5_toFunction(fn0), mf = function (aa) { return function (bb) { return function (cc) { return function (dd) { return function (ee) { return fn(aa, bb, cc, dd, ee); }; }; }; }; }, cf = this.map(mf);
        return Cell.apply(Cell.apply(Cell.apply(Cell.apply(cf, b), c), d), e, toSources(Lambda5_deps(fn0)));
    };
    /**
     * Lift a 6-argument function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift6 = function (b, c, d, e, f, fn0) {
        var fn = Lambda6_toFunction(fn0), mf = function (aa) { return function (bb) { return function (cc) { return function (dd) { return function (ee) { return function (ff) { return fn(aa, bb, cc, dd, ee, ff); }; }; }; }; }; }, cf = this.map(mf);
        return Cell.apply(Cell.apply(Cell.apply(Cell.apply(Cell.apply(cf, b), c), d), e), f, toSources(Lambda6_deps(fn0)));
    };
    /**
     * Apply a value inside a cell to a function inside a cell. This is the
     * primitive for all function lifting.
     */
    Cell.apply = function (cf, ca, sources) {
        return Transaction.run(function () {
            var state = new ApplyState(), out = new StreamWithSend(), cf_value = Operational.value(cf), ca_value = Operational.value(ca), src1 = new Source(cf_value.getVertex__(), function () {
                return cf_value.listen_(out.getVertex__(), function (f) {
                    state.f = f;
                    state.f_present = true;
                    if (state.a_present)
                        out.send_(state.f(state.a));
                }, false);
            }), src2 = new Source(ca_value.getVertex__(), function () {
                return ca_value.listen_(out.getVertex__(), function (a) {
                    state.a = a;
                    state.a_present = true;
                    if (state.f_present)
                        out.send_(state.f(state.a));
                }, false);
            });
            out.setVertex__(new Vertex("apply", 0, [src1, src2].concat(sources ? sources : [])));
            return out.coalesce__(function (l, r) { return r; }).holdLazy(new Lazy(function () {
                return cf.sampleNoTrans__()(ca.sampleNoTrans__());
            }));
        });
    };
    /**
     * Unwrap a cell inside another cell to give a time-varying cell implementation.
     */
    Cell.switchC = function (cca) {
        return Transaction.run(function () {
            var za = cca.sampleLazy().map(function (ba) { return ba.sample(); }), out = new StreamWithSend();
            var last_ca = null;
            var cca_value = Operational.value(cca), src = new Source(cca_value.getVertex__(), function () {
                var kill2 = last_ca === null ? null :
                    Operational.value(last_ca).listen_(out.getVertex__(), function (a) { return out.send_(a); }, false);
                var kill1 = cca_value.listen_(out.getVertex__(), function (ca) {
                    // Note: If any switch takes place during a transaction, then the
                    // coalesce__() below will always cause a sample to be fetched
                    // from the one we just switched to. So anything from the old input cell
                    // that might have happened during this transaction will be suppressed.
                    last_ca = ca;
                    if (kill2 !== null)
                        kill2();
                    kill2 = Operational.value(ca).listen_(out.getVertex__(), function (a) { return out.send_(a); }, false);
                }, false);
                return function () { kill1(); kill2(); };
            });
            out.setVertex__(new Vertex("switchC", 0, [src]));
            return out.coalesce__(function (l, r) { return r; }).holdLazy(za);
        });
    };
    /**
     * Unwrap a stream inside a cell to give a time-varying stream implementation.
     */
    Cell.switchS = function (csa) {
        return Transaction.run(function () {
            var out = new StreamWithSend(), h2 = function (a) {
                out.send_(a);
            }, src = new Source(csa.getVertex__(), function () {
                var kill2 = csa.sampleNoTrans__().listen_(out.getVertex__(), h2, false);
                var kill1 = csa.getStream__().listen_(out.getVertex__(), function (sa) {
                    kill2();
                    kill2 = sa.listen_(out.getVertex__(), h2, true);
                }, false);
                return function () { kill1(); kill2(); };
            });
            out.setVertex__(new Vertex("switchS", 0, [src]));
            return out;
        });
    };
    /**
     * Listen for updates to the value of this cell. This is the observer pattern. The
     * returned {@link Listener} has a {@link Listener#unlisten()} method to cause the
     * listener to be removed. This is an OPERATIONAL mechanism is for interfacing between
     * the world of I/O and for FRP.
     * @param h The handler to execute when there's a new value.
     *   You should make no assumptions about what thread you are called on, and the
     *   handler should not block. You are not allowed to use {@link CellSink#send(Object)}
     *   or {@link StreamSink#send(Object)} in the handler.
     *   An exception will be thrown, because you are not meant to use this to create
     *   your own primitives.
     */
    Cell.prototype.listen = function (h) {
        var _this = this;
        return Transaction.run(function () {
            return Operational.value(_this).listen(h);
        });
    };
    /**
     * Fantasy-land Algebraic Data Type Compatability.
     * Cell satisfies the Functor, Apply, Applicative categories
     * @see {@link https://github.com/fantasyland/fantasy-land} for more info
     */
    //of :: Applicative f => a -> f a
    Cell['fantasy-land/of'] = function (a) {
        return new Cell(a);
    };
    //map :: Functor f => f a ~> (a -> b) -> f b
    Cell.prototype['fantasy-land/map'] = function (f) {
        return this.map(f);
    };
    //ap :: Apply f => f a ~> f (a -> b) -> f b
    Cell.prototype['fantasy-land/ap'] = function (cf) {
        return Cell.apply(cf, this);
    };
    return Cell;
}());

var Listener = /** @class */ (function () {
    function Listener(h, target) {
        this.h = h;
        this.target = target;
    }
    return Listener;
}());

var LazyCell = /** @class */ (function (_super) {
    __extends(LazyCell, _super);
    function LazyCell(lazyInitValue, str) {
        var _this = _super.call(this, null, null) || this;
        Transaction.run(function () {
            if (str)
                _this.setStream(str);
            _this.lazyInitValue = lazyInitValue;
        });
        return _this;
    }
    LazyCell.prototype.sampleNoTrans__ = function () {
        if (this.value == null && this.lazyInitValue != null) {
            this.value = this.lazyInitValue.get();
            this.lazyInitValue = null;
        }
        return this.value;
    };
    return LazyCell;
}(Cell));

var Stream = /** @class */ (function () {
    function Stream(vertex) {
        this.listeners = [];
        this.firings = [];
        this.vertex = vertex ? vertex : new Vertex("Stream", 0, []);
    }
    Stream.prototype.getVertex__ = function () {
        return this.vertex;
    };
    /**
     * Transform the stream's event values according to the supplied function, so the returned
     * Stream's event values reflect the value of the function applied to the input
     * Stream's event values.
     * @param f Function to apply to convert the values. It may construct FRP logic or use
     *    {@link Cell#sample()} in which case it is equivalent to {@link Stream#snapshot(Cell)}ing the
     *    cell. Apart from this the function must be <em>referentially transparent</em>.
     */
    Stream.prototype.map = function (f) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda1_toFunction(f);
        out.vertex = new Vertex("map", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a));
                }, false);
            })
        ].concat(toSources(Lambda1_deps(f))));
        return out;
    };
    /**
     * Transform the stream's event values into the specified constant value.
     * @param b Constant value.
     */
    Stream.prototype.mapTo = function (b) {
        var _this = this;
        var out = new StreamWithSend(null);
        out.vertex = new Vertex("mapTo", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(b);
                }, false);
            })
        ]);
        return out;
    };
    /**
     * Variant of {@link Stream#merge(Stream, Lambda2)} that merges two streams and will drop an event
     * in the simultaneous case.
     * <p>
     * In the case where two events are simultaneous (i.e. both
     * within the same transaction), the event from <em>this</em> will take precedence, and
     * the event from <em>s</em> will be dropped.
     * If you want to specify your own combining function, use {@link Stream#merge(Stream, Lambda2)}.
     * s1.orElse(s2) is equivalent to s1.merge(s2, (l, r) -&gt; l).
     * <p>
     * The name orElse() is used instead of merge() to make it really clear that care should
     * be taken, because events can be dropped.
     */
    Stream.prototype.orElse = function (s) {
        return this.merge(s, function (left, right) {
            return left;
        });
    };
    Stream.prototype.merge_ = function (s) {
        var _this = this;
        var out = new StreamWithSend();
        var left = new Vertex("merge", 0, []);
        left.sources.push(new Source(this.vertex, function () {
            return _this.listen_(left, function (a) {
                out.send_(a);
            }, false);
        }));
        out.vertex.sources = out.vertex.sources.concat([
            new Source(left, function () {
                left.register(out.vertex);
                return function () { left.deregister(out.vertex); };
            }),
            new Source(s.vertex, function () {
                return s.listen_(out.vertex, function (a) {
                    out.send_(a);
                }, false);
            })
        ]);
        return out;
    };
    Stream.prototype.coalesce__ = function (f) {
        var _this = this;
        var out = new StreamWithSend();
        var coalescer = new CoalesceHandler(f, out);
        out.vertex.sources = out.vertex.sources.concat([
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    coalescer.send_(a);
                }, false);
            })
        ]).concat(toSources(Lambda2_deps(f)));
        return out;
    };
    /**
     * Merge two streams of the same type into one, so that events on either input appear
     * on the returned stream.
     * <p>
     * If the events are simultaneous (that is, one event from this and one from <em>s</em>
     * occurring in the same transaction), combine them into one using the specified combining function
     * so that the returned stream is guaranteed only ever to have one event per transaction.
     * The event from <em>this</em> will appear at the left input of the combining function, and
     * the event from <em>s</em> will appear at the right.
     * @param f Function to combine the values. It may construct FRP logic or use
     *    {@link Cell#sample()}. Apart from this the function must be <em>referentially transparent</em>.
     */
    Stream.prototype.merge = function (s, f) {
        var _this = this;
        return Transaction.run(function () {
            return _this.merge_(s).coalesce__(f);
        });
    };
    /**
     * Return a stream that only outputs events for which the predicate returns true.
     */
    Stream.prototype.filter = function (f) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda1_toFunction(f);
        out.vertex = new Vertex("filter", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    if (ff(a))
                        out.send_(a);
                }, false);
            })
        ].concat(toSources(Lambda1_deps(f))));
        return out;
    };
    /**
     * Return a stream that only outputs events that have present
     * values, discarding null values.
     */
    Stream.prototype.filterNotNull = function () {
        var _this = this;
        var out = new StreamWithSend(null);
        out.vertex = new Vertex("filterNotNull", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    if (a !== null)
                        out.send_(a);
                }, false);
            })
        ]);
        return out;
    };
    /**
     * Return a stream that only outputs events from the input stream
     * when the specified cell's value is true.
     */
    Stream.prototype.gate = function (c) {
        return this.snapshot(c, function (a, pred) {
            return pred ? a : null;
        }).filterNotNull();
    };
    /**
     * Variant of {@link snapshot(Cell, Lambda2)} that captures the cell's value
     * at the time of the event firing, ignoring the stream's value.
     */
    Stream.prototype.snapshot1 = function (c) {
        var _this = this;
        var out = new StreamWithSend(null);
        out.vertex = new Vertex("snapshot1", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(c.sampleNoTrans__());
                }, false);
            }),
            new Source(c.getVertex__(), null)
        ]);
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cell at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, {@link Stream#snapshot(Cell, Lambda2)}
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot = function (b, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda2_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null)
        ].concat(toSources(Lambda2_deps(f_))));
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cells at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, snapshot()
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot3 = function (b, c, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda3_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__(), c.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null),
            new Source(c.getVertex__(), null)
        ].concat(toSources(Lambda3_deps(f_))));
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cells at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, snapshot()
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot4 = function (b, c, d, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda4_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__(), c.sampleNoTrans__(), d.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null),
            new Source(c.getVertex__(), null),
            new Source(d.getVertex__(), null)
        ].concat(toSources(Lambda4_deps(f_))));
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cells at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, snapshot()
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot5 = function (b, c, d, e, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda5_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__(), c.sampleNoTrans__(), d.sampleNoTrans__(), e.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null),
            new Source(c.getVertex__(), null),
            new Source(d.getVertex__(), null),
            new Source(e.getVertex__(), null)
        ].concat(toSources(Lambda5_deps(f_))));
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cells at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, snapshot()
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot6 = function (b, c, d, e, f, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda6_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__(), c.sampleNoTrans__(), d.sampleNoTrans__(), e.sampleNoTrans__(), f.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null),
            new Source(c.getVertex__(), null),
            new Source(d.getVertex__(), null),
            new Source(e.getVertex__(), null),
            new Source(f.getVertex__(), null)
        ].concat(toSources(Lambda6_deps(f_))));
        return out;
    };
    /**
     * Create a {@link Cell} with the specified initial value, that is updated
     * by this stream's event values.
     * <p>
     * There is an implicit delay: State updates caused by event firings don't become
     * visible as the cell's current value as viewed by {@link Stream#snapshot(Cell, Lambda2)}
     * until the following transaction. To put this another way,
     * {@link Stream#snapshot(Cell, Lambda2)} always sees the value of a cell as it was before
     * any state changes from the current transaction.
     */
    Stream.prototype.hold = function (initValue) {
        return new Cell(initValue, this);
    };
    /**
     * A variant of {@link hold(Object)} with an initial value captured by {@link Cell#sampleLazy()}.
     */
    Stream.prototype.holdLazy = function (initValue) {
        return new LazyCell(initValue, this);
    };
    /**
     * Transform an event with a generalized state loop (a Mealy machine). The function
     * is passed the input and the old state and returns the new state and output value.
     * @param f Function to apply to update the state. It may construct FRP logic or use
     *    {@link Cell#sample()} in which case it is equivalent to {@link Stream#snapshot(Cell)}ing the
     *    cell. Apart from this the function must be <em>referentially transparent</em>.
     */
    Stream.prototype.collect = function (initState, f) {
        return this.collectLazy(new Lazy(function () { return initState; }), f);
    };
    /**
     * A variant of {@link collect(Object, Lambda2)} that takes an initial state returned by
     * {@link Cell#sampleLazy()}.
     */
    Stream.prototype.collectLazy = function (initState, f) {
        var ea = this;
        return Transaction.run(function () {
            var es = new StreamLoop(), s = es.holdLazy(initState), ebs = ea.snapshot(s, f), eb = ebs.map(function (bs) { return bs.a; }), es_out = ebs.map(function (bs) { return bs.b; });
            es.loop(es_out);
            return eb;
        });
    };
    /**
     * Accumulate on input event, outputting the new state each time.
     * @param f Function to apply to update the state. It may construct FRP logic or use
     *    {@link Cell#sample()} in which case it is equivalent to {@link Stream#snapshot(Cell)}ing the
     *    cell. Apart from this the function must be <em>referentially transparent</em>.
     */
    Stream.prototype.accum = function (initState, f) {
        return this.accumLazy(new Lazy(function () { return initState; }), f);
    };
    /**
     * A variant of {@link accum(Object, Lambda2)} that takes an initial state returned by
     * {@link Cell#sampleLazy()}.
     */
    Stream.prototype.accumLazy = function (initState, f) {
        var ea = this;
        return Transaction.run(function () {
            var es = new StreamLoop(), s = es.holdLazy(initState), es_out = ea.snapshot(s, f);
            es.loop(es_out);
            return es_out.holdLazy(initState);
        });
    };
    /**
     * Return a stream that outputs only one value: the next event of the
     * input stream, starting from the transaction in which once() was invoked.
     */
    Stream.prototype.once = function () {
        /*
            return Transaction.run(() => {
                const ev = this,
                    out = new StreamWithSend<A>();
                let la : () => void = null;
                la = ev.listen_(out.vertex, (a : A) => {
                    if (la !== null) {
                        out.send_(a);
                        la();
                        la = null;
                    }
                }, false);
                return out;
            });
            */
        // We can't use the implementation above, beacuse deregistering
        // listeners triggers the exception
        // "send() was invoked before listeners were registered"
        // We can revisit this another time. For now we will use the less
        // efficient implementation below.
        var me = this;
        return Transaction.run(function () { return me.gate(me.mapTo(false).hold(true)); });
    };
    Stream.prototype.listen = function (h) {
        var _this = this;
        return Transaction.run(function () {
            return _this.listen_(Vertex.NULL, h, false);
        });
    };
    Stream.prototype.listen_ = function (target, h, suppressEarlierFirings) {
        var _this = this;
        if (this.vertex.register(target))
            Transaction.currentTransaction.requestRegen();
        var listener = new Listener(h, target);
        this.listeners.push(listener);
        if (!suppressEarlierFirings && this.firings.length != 0) {
            var firings_1 = this.firings.slice();
            Transaction.currentTransaction.prioritized(target, function () {
                // Anything sent already in this transaction must be sent now so that
                // there's no order dependency between send and listen.
                for (var i = 0; i < firings_1.length; i++)
                    h(firings_1[i]);
            });
        }
        return function () {
            var removed = false;
            for (var i = 0; i < _this.listeners.length; i++) {
                if (_this.listeners[i] == listener) {
                    _this.listeners.splice(i, 1);
                    removed = true;
                    break;
                }
            }
            if (removed)
                _this.vertex.deregister(target);
        };
    };
    /**
     * Fantasy-land Algebraic Data Type Compatability.
     * Stream satisfies the Functor and Monoid Categories (and hence Semigroup)
     * @see {@link https://github.com/fantasyland/fantasy-land} for more info
     */
    //map :: Functor f => f a ~> (a -> b) -> f b
    Stream.prototype['fantasy-land/map'] = function (f) {
        return this.map(f);
    };
    //concat :: Semigroup a => a ~> a -> a
    Stream.prototype['fantasy-land/concat'] = function (a) {
        return this.merge(a, function (left, right) {
            return (Z.Semigroup.test(left)) ? Z.concat(left, right) : left;
        });
    };
    //empty :: Monoid m => () -> m
    Stream.prototype['fantasy-land/empty'] = function () {
        return new Stream();
    };
    return Stream;
}());
var StreamWithSend = /** @class */ (function (_super) {
    __extends(StreamWithSend, _super);
    function StreamWithSend(vertex) {
        return _super.call(this, vertex) || this;
    }
    StreamWithSend.prototype.setVertex__ = function (vertex) {
        this.vertex = vertex;
    };
    StreamWithSend.prototype.send_ = function (a) {
        var _this = this;
        // We throw this error if we send into FRP logic that has been constructed
        // but nothing is listening to it yet. We need to do it this way because
        // it's the only way to manage memory in a language with no finalizers.
        //if (this.vertex.refCount() == 0)
        //    throw new Error("send() was invoked before listeners were registered");
        if (this.firings.length == 0)
            Transaction.currentTransaction.last(function () {
                _this.firings = [];
            });
        this.firings.push(a);
        var listeners = this.listeners.slice();
        var _loop_1 = function (i) {
            var h = listeners[i].h;
            Transaction.currentTransaction.prioritized(listeners[i].target, function () {
                Transaction.currentTransaction.inCallback++;
                try {
                    h(a);
                    Transaction.currentTransaction.inCallback--;
                }
                catch (err) {
                    Transaction.currentTransaction.inCallback--;
                    throw err;
                }
            });
        };
        for (var i = 0; i < listeners.length; i++) {
            _loop_1(i);
        }
    };
    return StreamWithSend;
}(Stream));
/**
 * A forward reference for a {@link Stream} equivalent to the Stream that is referenced.
 */
var StreamLoop = /** @class */ (function (_super) {
    __extends(StreamLoop, _super);
    function StreamLoop() {
        var _this = _super.call(this) || this;
        _this.assigned__ = false; // to do: Figure out how to hide this
        _this.vertex.name = "StreamLoop";
        if (Transaction.currentTransaction === null)
            throw new Error("StreamLoop/CellLoop must be used within an explicit transaction");
        return _this;
    }
    /**
     * Resolve the loop to specify what the StreamLoop was a forward reference to. It
     * must be invoked inside the same transaction as the place where the StreamLoop is used.
     * This requires you to create an explicit transaction with {@link Transaction#run(Lambda0)}
     * or {@link Transaction#runVoid(Runnable)}.
     */
    StreamLoop.prototype.loop = function (sa_out) {
        var _this = this;
        if (this.assigned__)
            throw new Error("StreamLoop looped more than once");
        this.assigned__ = true;
        this.vertex.addSource(new Source(sa_out.getVertex__(), function () {
            return sa_out.listen_(_this.vertex, function (a) {
                _this.send_(a);
            }, false);
        }));
    };
    return StreamLoop;
}(StreamWithSend));

/**
 * A stream that allows values to be pushed into it, acting as an interface between the
 * world of I/O and the world of FRP. Code that exports StreamSinks for read-only use
 * should downcast to {@link Stream}.
 */
var StreamSink = /** @class */ (function (_super) {
    __extends(StreamSink, _super);
    function StreamSink(f) {
        var _this = _super.call(this) || this;
        if (!f)
            f = (function (l, r) {
                throw new Error("send() called more than once per transaction, which isn't allowed. Did you want to combine the events? Then pass a combining function to your StreamSink constructor.");
            });
        _this.coalescer = new CoalesceHandler(f, _this);
        return _this;
    }
    StreamSink.prototype.send = function (a) {
        var _this = this;
        Transaction.run(function () {
            if (Transaction.currentTransaction.inCallback > 0)
                throw new Error("You are not allowed to use send() inside a Sodium callback");
            _this.coalescer.send_(a);
        });
    };
    return StreamSink;
}(StreamWithSend));

/**
 * A forward reference for a {@link Cell} equivalent to the Cell that is referenced.
 */
var CellLoop = /** @class */ (function (_super) {
    __extends(CellLoop, _super);
    function CellLoop() {
        return _super.call(this, null, new StreamLoop()) || this;
    }
    /**
     * Resolve the loop to specify what the CellLoop was a forward reference to. It
     * must be invoked inside the same transaction as the place where the CellLoop is used.
     * This requires you to create an explicit transaction with {@link Transaction#run(Lambda0)}
     * or {@link Transaction#runVoid(Runnable)}.
     */
    CellLoop.prototype.loop = function (a_out) {
        var me = this;
        Transaction.run(function () {
            me.getStream__().loop(a_out.getStream__());
            me.lazyInitValue = a_out.sampleLazy();
        });
    };
    CellLoop.prototype.sampleNoTrans__ = function () {
        if (!this.getStream__().assigned__)
            throw new Error("CellLoop sampled before it was looped");
        return _super.prototype.sampleNoTrans__.call(this);
    };
    return CellLoop;
}(LazyCell));

/**
 * A cell that allows values to be pushed into it, acting as an interface between the
 * world of I/O and the world of FRP. Code that exports CellSinks for read-only use
 * should downcast to {@link Cell}.
 */
var CellSink = /** @class */ (function (_super) {
    __extends(CellSink, _super);
    /**
     * Construct a writable cell with the specified initial value. If multiple values are
     * sent in the same transaction, the specified function is used to combine them.
     *
     * If the function is not supplied, then an exception will be thrown in this case.
     */
    function CellSink(initValue, f) {
        return _super.call(this, initValue, new StreamSink(f)) || this;
    }
    /**
     * Send a value, modifying the value of the cell. send(A) may not be used inside
     * handlers registered with {@link Stream#listen(Handler)} or {@link Cell#listen(Handler)}.
     * An exception will be thrown, because CellSink is for interfacing I/O to FRP only.
     * You are not meant to use this to define your own primitives.
     * @param a Value to push into the cell.
     */
    CellSink.prototype.send = function (a) {
        this.getStream__().send(a);
    };
    return CellSink;
}(Cell));

var Tuple2 = /** @class */ (function () {
    function Tuple2(a, b) {
        this.a = a;
        this.b = b;
    }
    return Tuple2;
}());

/**
 * An interface for implementations of FRP timer systems.
 */
var TimerSystemImpl = /** @class */ (function () {
    function TimerSystemImpl() {
    }
    return TimerSystemImpl;
}());
var nextSeq = 0;
var Event = /** @class */ (function () {
    function Event(t, sAlarm) {
        this.t = t;
        this.sAlarm = sAlarm;
        this.seq = ++nextSeq;
    }
    return Event;
}());
var TimerSystem = /** @class */ (function () {
    function TimerSystem(impl) {
        var _this = this;
        this.eventQueue = new Collections.BSTree(function (a, b) {
            if (a.t < b.t)
                return -1;
            if (a.t > b.t)
                return 1;
            if (a.seq < b.seq)
                return -1;
            if (a.seq > b.seq)
                return 1;
            return 0;
        });
        Transaction.run(function () {
            _this.impl = impl;
            _this.tMinimum = 0;
            var timeSnk = new CellSink(impl.now());
            _this.time = timeSnk;
            // A dummy listener to time to keep it alive even when there are no other listeners.
            _this.time.listen(function (t) { });
            Transaction.onStart(function () {
                // Ensure the time is always increasing from the FRP's point of view.
                var t = _this.tMinimum = Math.max(_this.tMinimum, impl.now());
                var _loop_1 = function () {
                    var ev = null;
                    if (!_this.eventQueue.isEmpty()) {
                        var mev = _this.eventQueue.minimum();
                        if (mev.t <= t) {
                            ev = mev;
                            // TO DO: Detect infinite loops!
                        }
                    }
                    if (ev != null) {
                        timeSnk.send(ev.t);
                        Transaction.run(function () { return ev.sAlarm.send_(ev.t); });
                    }
                    else
                        return "break";
                };
                // Pop and execute all events earlier than or equal to t (the current time).
                while (true) {
                    var state_1 = _loop_1();
                    if (state_1 === "break")
                        break;
                }
                timeSnk.send(t);
            });
        });
    }
    /**
     * A timer that fires at the specified time, which can be null, meaning
     * that the alarm is not set.
     */
    TimerSystem.prototype.at = function (tAlarm) {
        var _this = this;
        var current = null, cancelCurrent = null, active = false, tAl = null, sampled = false;
        var sAlarm = new StreamWithSend(null), updateTimer = function () {
            if (cancelCurrent !== null) {
                cancelCurrent();
                _this.eventQueue.remove(current);
            }
            cancelCurrent = null;
            current = null;
            if (active) {
                if (!sampled) {
                    sampled = true;
                    tAl = tAlarm.sampleNoTrans__();
                }
                if (tAl !== null) {
                    current = new Event(tAl, sAlarm);
                    _this.eventQueue.add(current);
                    cancelCurrent = _this.impl.setTimer(tAl, function () {
                        // Correction to ensure the clock time appears to be >= the
                        // alarm time. It can be a few milliseconds early, and
                        // this breaks things otherwise, because it doesn't think
                        // it's time to fire the alarm yet.
                        _this.tMinimum = Math.max(_this.tMinimum, tAl);
                        // Open and close a transaction to trigger queued
                        // events to run.
                        Transaction.run(function () { });
                    });
                }
            }
        };
        sAlarm.setVertex__(new Vertex("at", 0, [
            new Source(tAlarm.getVertex__(), function () {
                active = true;
                sampled = false;
                Transaction.currentTransaction.prioritized(sAlarm.getVertex__(), updateTimer);
                var kill = tAlarm.getStream__().listen_(sAlarm.getVertex__(), function (oAlarm) {
                    tAl = oAlarm;
                    sampled = true;
                    updateTimer();
                }, false);
                return function () {
                    active = false;
                    updateTimer();
                    kill();
                };
            })
        ]));
        return sAlarm;
    };
    return TimerSystem;
}());

/**
 * A timer system implementation using seconds as the time unit.
 */
var SecondsTimerSystem = /** @class */ (function (_super) {
    __extends(SecondsTimerSystem, _super);
    function SecondsTimerSystem() {
        return _super.call(this, new SecondsTimerSystemImpl()) || this;
    }
    return SecondsTimerSystem;
}(TimerSystem));
var SecondsTimerSystemImpl = /** @class */ (function (_super) {
    __extends(SecondsTimerSystemImpl, _super);
    function SecondsTimerSystemImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set a timer that will execute the specified callback at the specified time.
     * @return A function that can be used to cancel the timer.
     */
    SecondsTimerSystemImpl.prototype.setTimer = function (t, callback) {
        var timeout = setTimeout(callback, Math.max((t - this.now()) * 1000, 0));
        return function () { clearTimeout(timeout); };
    };
    /**
     * Return the current clock time.
     */
    SecondsTimerSystemImpl.prototype.now = function () {
        return Date.now() * 0.001;
    };
    return SecondsTimerSystemImpl;
}(TimerSystemImpl));

/**
 * A timer system implementation using milliseconds as the time unit.
 */
var MillisecondsTimerSystem = /** @class */ (function (_super) {
    __extends(MillisecondsTimerSystem, _super);
    function MillisecondsTimerSystem() {
        return _super.call(this, new MillisecondsTimerSystemImpl()) || this;
    }
    return MillisecondsTimerSystem;
}(TimerSystem));
var MillisecondsTimerSystemImpl = /** @class */ (function (_super) {
    __extends(MillisecondsTimerSystemImpl, _super);
    function MillisecondsTimerSystemImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set a timer that will execute the specified callback at the specified time.
     * @return A function that can be used to cancel the timer.
     */
    MillisecondsTimerSystemImpl.prototype.setTimer = function (t, callback) {
        var timeout = setTimeout(callback, Math.max(t - this.now(), 0));
        return function () { clearTimeout(timeout); };
    };
    /**
     * Return the current clock time.
     */
    MillisecondsTimerSystemImpl.prototype.now = function () {
        return Date.now();
    };
    return MillisecondsTimerSystemImpl;
}(TimerSystemImpl));

var IOAction = /** @class */ (function () {
    function IOAction() {
    }
    /*!
     * Convert a function that performs asynchronous I/O taking input A
     * and returning a value of type B into an I/O action of type
     * (sa : Stream<A>) => Stream<B>
     */
    IOAction.fromAsync = function (performIO) {
        return function (sa) {
            var out = new StreamWithSend(null);
            out.setVertex__(new Vertex("map", 0, [
                new Source(sa.getVertex__(), function () {
                    return sa.listen_(out.getVertex__(), function (a) {
                        performIO(a, function (b) {
                            Transaction.run(function () {
                                out.send_(b);
                            });
                        });
                    }, false);
                })
            ]));
            return out;
        };
    };
    return IOAction;
}());

exports.lambda1 = lambda1;
exports.lambda2 = lambda2;
exports.lambda3 = lambda3;
exports.lambda4 = lambda4;
exports.lambda5 = lambda5;
exports.lambda6 = lambda6;
exports.Stream = Stream;
exports.StreamLoop = StreamLoop;
exports.StreamSink = StreamSink;
exports.Cell = Cell;
exports.CellLoop = CellLoop;
exports.CellSink = CellSink;
exports.Transaction = Transaction;
exports.Tuple2 = Tuple2;
exports.Unit = Unit;
exports.Operational = Operational;
exports.getTotalRegistrations = getTotalRegistrations;
exports.Vertex = Vertex;
exports.TimerSystemImpl = TimerSystemImpl;
exports.TimerSystem = TimerSystem;
exports.SecondsTimerSystem = SecondsTimerSystem;
exports.MillisecondsTimerSystem = MillisecondsTimerSystem;
exports.IOAction = IOAction;
//# sourceMappingURL=sodium.cjs.js.map

});
return ___scope___.entry = "dist/sodium.cjs.js";
});
FuseBox.pkg("typescript-collections@1.3.2", {}, function(___scope___){
___scope___.file("dist/lib/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2013 Basarat Ali Syed. All Rights Reserved.
//
// Licensed under MIT open source license http://opensource.org/licenses/MIT
//
// Orginal javascript code was by Mauricio Santos
//
var _arrays = require("./arrays");
exports.arrays = _arrays;
var Bag_1 = require("./Bag");
exports.Bag = Bag_1.default;
var BSTree_1 = require("./BSTree");
exports.BSTree = BSTree_1.default;
var BSTreeKV_1 = require("./BSTreeKV");
exports.BSTreeKV = BSTreeKV_1.default;
var Dictionary_1 = require("./Dictionary");
exports.Dictionary = Dictionary_1.default;
var Heap_1 = require("./Heap");
exports.Heap = Heap_1.default;
var LinkedDictionary_1 = require("./LinkedDictionary");
exports.LinkedDictionary = LinkedDictionary_1.default;
var LinkedList_1 = require("./LinkedList");
exports.LinkedList = LinkedList_1.default;
var MultiDictionary_1 = require("./MultiDictionary");
exports.MultiDictionary = MultiDictionary_1.default;
var FactoryDictionary_1 = require("./FactoryDictionary");
exports.FactoryDictionary = FactoryDictionary_1.default;
var FactoryDictionary_2 = require("./FactoryDictionary");
exports.DefaultDictionary = FactoryDictionary_2.default;
var Queue_1 = require("./Queue");
exports.Queue = Queue_1.default;
var PriorityQueue_1 = require("./PriorityQueue");
exports.PriorityQueue = PriorityQueue_1.default;
var Set_1 = require("./Set");
exports.Set = Set_1.default;
var Stack_1 = require("./Stack");
exports.Stack = Stack_1.default;
var MultiRootTree_1 = require("./MultiRootTree");
exports.MultiRootTree = MultiRootTree_1.default;
var _util = require("./util");
exports.util = _util;
//# sourceMappingURL=index.js.map
});
___scope___.file("dist/lib/arrays.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
/**
 * Returns the position of the first occurrence of the specified item
 * within the specified array.4
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the position of the first occurrence of the specified element
 * within the specified array, or -1 if not found.
 */
function indexOf(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (equals(array[i], item)) {
            return i;
        }
    }
    return -1;
}
exports.indexOf = indexOf;
/**
 * Returns the position of the last occurrence of the specified element
 * within the specified array.
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the position of the last occurrence of the specified element
 * within the specified array or -1 if not found.
 */
function lastIndexOf(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        if (equals(array[i], item)) {
            return i;
        }
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
/**
 * Returns true if the specified array contains the specified element.
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function to
 * check equality between 2 elements.
 * @return {boolean} true if the specified array contains the specified element.
 */
function contains(array, item, equalsFunction) {
    return indexOf(array, item, equalsFunction) >= 0;
}
exports.contains = contains;
/**
 * Removes the first ocurrence of the specified element from the specified array.
 * @param {*} array the array in which to search element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function to
 * check equality between 2 elements.
 * @return {boolean} true if the array changed after this call.
 */
function remove(array, item, equalsFunction) {
    var index = indexOf(array, item, equalsFunction);
    if (index < 0) {
        return false;
    }
    array.splice(index, 1);
    return true;
}
exports.remove = remove;
/**
 * Returns the number of elements in the specified array equal
 * to the specified object.
 * @param {Array} array the array in which to determine the frequency of the element.
 * @param {Object} item the element whose frequency is to be determined.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the number of elements in the specified array
 * equal to the specified object.
 */
function frequency(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    var freq = 0;
    for (var i = 0; i < length; i++) {
        if (equals(array[i], item)) {
            freq++;
        }
    }
    return freq;
}
exports.frequency = frequency;
/**
 * Returns true if the two specified arrays are equal to one another.
 * Two arrays are considered equal if both arrays contain the same number
 * of elements, and all corresponding pairs of elements in the two
 * arrays are equal and are in the same order.
 * @param {Array} array1 one array to be tested for equality.
 * @param {Array} array2 the other array to be tested for equality.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between elemements in the arrays.
 * @return {boolean} true if the two arrays are equal
 */
function equals(array1, array2, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    if (array1.length !== array2.length) {
        return false;
    }
    var length = array1.length;
    for (var i = 0; i < length; i++) {
        if (!equals(array1[i], array2[i])) {
            return false;
        }
    }
    return true;
}
exports.equals = equals;
/**
 * Returns shallow a copy of the specified array.
 * @param {*} array the array to copy.
 * @return {Array} a copy of the specified array
 */
function copy(array) {
    return array.concat();
}
exports.copy = copy;
/**
 * Swaps the elements at the specified positions in the specified array.
 * @param {Array} array The array in which to swap elements.
 * @param {number} i the index of one element to be swapped.
 * @param {number} j the index of the other element to be swapped.
 * @return {boolean} true if the array is defined and the indexes are valid.
 */
function swap(array, i, j) {
    if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
        return false;
    }
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return true;
}
exports.swap = swap;
function toString(array) {
    return '[' + array.toString() + ']';
}
exports.toString = toString;
/**
 * Executes the provided function once for each element present in this array
 * starting from index 0 to length - 1.
 * @param {Array} array The array in which to iterate.
 * @param {function(Object):*} callback function to execute, it is
 * invoked with one argument: the element value, to break the iteration you can
 * optionally return false.
 */
function forEach(array, callback) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var ele = array_1[_i];
        if (callback(ele) === false) {
            return;
        }
    }
}
exports.forEach = forEach;
//# sourceMappingURL=arrays.js.map
});
___scope___.file("dist/lib/util.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _hasOwnProperty = Object.prototype.hasOwnProperty;
exports.has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
/**
 * Default function to compare element order.
 * @function
 */
function defaultCompare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a === b) {
        return 0;
    }
    else {
        return 1;
    }
}
exports.defaultCompare = defaultCompare;
/**
 * Default function to test equality.
 * @function
 */
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
/**
 * Default function to convert an object to a string.
 * @function
 */
function defaultToString(item) {
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return '$s' + item;
    }
    else {
        return '$o' + item.toString();
    }
}
exports.defaultToString = defaultToString;
/**
* Joins all the properies of the object using the provided join string
*/
function makeString(item, join) {
    if (join === void 0) { join = ','; }
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        var toret = '{';
        var first = true;
        for (var prop in item) {
            if (exports.has(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + prop + ':' + item[prop];
            }
        }
        return toret + '}';
    }
}
exports.makeString = makeString;
/**
 * Checks if the given argument is a function.
 * @function
 */
function isFunction(func) {
    return (typeof func) === 'function';
}
exports.isFunction = isFunction;
/**
 * Checks if the given argument is undefined.
 * @function
 */
function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
exports.isUndefined = isUndefined;
/**
 * Checks if the given argument is a string.
 * @function
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
exports.isString = isString;
/**
 * Reverses a compare function.
 * @function
 */
function reverseCompareFunction(compareFunction) {
    if (isUndefined(compareFunction) || !isFunction(compareFunction)) {
        return function (a, b) {
            if (a < b) {
                return 1;
            }
            else if (a === b) {
                return 0;
            }
            else {
                return -1;
            }
        };
    }
    else {
        return function (d, v) {
            return compareFunction(d, v) * -1;
        };
    }
}
exports.reverseCompareFunction = reverseCompareFunction;
/**
 * Returns an equal function given a compare function.
 * @function
 */
function compareToEquals(compareFunction) {
    return function (a, b) {
        return compareFunction(a, b) === 0;
    };
}
exports.compareToEquals = compareToEquals;
//# sourceMappingURL=util.js.map
});
___scope___.file("dist/lib/Bag.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary_1 = require("./Dictionary");
var Set_1 = require("./Set");
var Bag = /** @class */ (function () {
    /**
     * Creates an empty bag.
     * @class <p>A bag is a special kind of set in which members are
     * allowed to appear more than once.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to unique strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    function Bag(toStrFunction) {
        this.toStrF = toStrFunction || util.defaultToString;
        this.dictionary = new Dictionary_1.default(this.toStrF);
        this.nElements = 0;
    }
    /**
    * Adds nCopies of the specified object to this bag.
    * @param {Object} element element to add.
    * @param {number=} nCopies the number of copies to add, if this argument is
    * undefined 1 copy is added.
    * @return {boolean} true unless element is undefined.
    */
    Bag.prototype.add = function (element, nCopies) {
        if (nCopies === void 0) { nCopies = 1; }
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            var node = {
                value: element,
                copies: nCopies
            };
            this.dictionary.setValue(element, node);
        }
        else {
            this.dictionary.getValue(element).copies += nCopies;
        }
        this.nElements += nCopies;
        return true;
    };
    /**
    * Counts the number of copies of the specified object in this bag.
    * @param {Object} element the object to search for..
    * @return {number} the number of copies of the object, 0 if not found
    */
    Bag.prototype.count = function (element) {
        if (!this.contains(element)) {
            return 0;
        }
        else {
            return this.dictionary.getValue(element).copies;
        }
    };
    /**
     * Returns true if this bag contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this bag contains the specified element,
     * false otherwise.
     */
    Bag.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    /**
    * Removes nCopies of the specified object to this bag.
    * If the number of copies to remove is greater than the actual number
    * of copies in the Bag, all copies are removed.
    * @param {Object} element element to remove.
    * @param {number=} nCopies the number of copies to remove, if this argument is
    * undefined 1 copy is removed.
    * @return {boolean} true if at least 1 element was removed.
    */
    Bag.prototype.remove = function (element, nCopies) {
        if (nCopies === void 0) { nCopies = 1; }
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            return false;
        }
        else {
            var node = this.dictionary.getValue(element);
            if (nCopies > node.copies) {
                this.nElements -= node.copies;
            }
            else {
                this.nElements -= nCopies;
            }
            node.copies -= nCopies;
            if (node.copies <= 0) {
                this.dictionary.remove(element);
            }
            return true;
        }
    };
    /**
     * Returns an array containing all of the elements in this big in arbitrary order,
     * including multiple copies.
     * @return {Array} an array containing all of the elements in this bag.
     */
    Bag.prototype.toArray = function () {
        var a = [];
        var values = this.dictionary.values();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var node = values_1[_i];
            var element = node.value;
            var copies = node.copies;
            for (var j = 0; j < copies; j++) {
                a.push(element);
            }
        }
        return a;
    };
    /**
     * Returns a set of unique elements in this bag.
     * @return {collections.Set<T>} a set of unique elements in this bag.
     */
    Bag.prototype.toSet = function () {
        var toret = new Set_1.default(this.toStrF);
        var elements = this.dictionary.values();
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var ele = elements_1[_i];
            var value = ele.value;
            toret.add(value);
        }
        return toret;
    };
    /**
     * Executes the provided function once for each element
     * present in this bag, including multiple copies.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element. To break the iteration you can
     * optionally return false.
     */
    Bag.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            var value = v.value;
            var copies = v.copies;
            for (var i = 0; i < copies; i++) {
                if (callback(value) === false) {
                    return false;
                }
            }
            return true;
        });
    };
    /**
     * Returns the number of elements in this bag.
     * @return {number} the number of elements in this bag.
     */
    Bag.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this bag contains no elements.
     * @return {boolean} true if this bag contains no elements.
     */
    Bag.prototype.isEmpty = function () {
        return this.nElements === 0;
    };
    /**
     * Removes all of the elements from this bag.
     */
    Bag.prototype.clear = function () {
        this.nElements = 0;
        this.dictionary.clear();
    };
    return Bag;
}()); // End of bag
exports.default = Bag;
//# sourceMappingURL=Bag.js.map
});
___scope___.file("dist/lib/Dictionary.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary = /** @class */ (function () {
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    function Dictionary(toStrFunction) {
        this.table = {};
        this.nElements = 0;
        this.toStr = toStrFunction || util.defaultToString;
    }
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * undefined if the map contains no mapping for this key.
     */
    Dictionary.prototype.getValue = function (key) {
        var pair = this.table['$' + this.toStr(key)];
        if (util.isUndefined(pair)) {
            return undefined;
        }
        return pair.value;
    };
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or undefined if
     * there was no mapping for the key or if the key/value are undefined.
     */
    Dictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return undefined;
        }
        var ret;
        var k = '$' + this.toStr(key);
        var previousElement = this.table[k];
        if (util.isUndefined(previousElement)) {
            this.nElements++;
            ret = undefined;
        }
        else {
            ret = previousElement.value;
        }
        this.table[k] = {
            key: key,
            value: value
        };
        return ret;
    };
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @return {*} previous value associated with specified key, or undefined if
     * there was no mapping for key.
     */
    Dictionary.prototype.remove = function (key) {
        var k = '$' + this.toStr(key);
        var previousElement = this.table[k];
        if (!util.isUndefined(previousElement)) {
            delete this.table[k];
            this.nElements--;
            return previousElement.value;
        }
        return undefined;
    };
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @return {Array} an array containing all of the keys in this dictionary.
     */
    Dictionary.prototype.keys = function () {
        var array = [];
        for (var name_1 in this.table) {
            if (util.has(this.table, name_1)) {
                var pair = this.table[name_1];
                array.push(pair.key);
            }
        }
        return array;
    };
    /**
     * Returns an array containing all of the values in this dictionary.
     * @return {Array} an array containing all of the values in this dictionary.
     */
    Dictionary.prototype.values = function () {
        var array = [];
        for (var name_2 in this.table) {
            if (util.has(this.table, name_2)) {
                var pair = this.table[name_2];
                array.push(pair.value);
            }
        }
        return array;
    };
    /**
    * Executes the provided function once for each key-value pair
    * present in this dictionary.
    * @param {function(Object,Object):*} callback function to execute, it is
    * invoked with two arguments: key and value. To break the iteration you can
    * optionally return false.
    */
    Dictionary.prototype.forEach = function (callback) {
        for (var name_3 in this.table) {
            if (util.has(this.table, name_3)) {
                var pair = this.table[name_3];
                var ret = callback(pair.key, pair.value);
                if (ret === false) {
                    return;
                }
            }
        }
    };
    /**
     * Returns true if this dictionary contains a mapping for the specified key.
     * @param {Object} key key whose presence in this dictionary is to be
     * tested.
     * @return {boolean} true if this dictionary contains a mapping for the
     * specified key.
     */
    Dictionary.prototype.containsKey = function (key) {
        return !util.isUndefined(this.getValue(key));
    };
    /**
    * Removes all mappings from this dictionary.
    * @this {collections.Dictionary}
    */
    Dictionary.prototype.clear = function () {
        this.table = {};
        this.nElements = 0;
    };
    /**
     * Returns the number of keys in this dictionary.
     * @return {number} the number of key-value mappings in this dictionary.
     */
    Dictionary.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this dictionary contains no mappings.
     * @return {boolean} true if this dictionary contains no mappings.
     */
    Dictionary.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    Dictionary.prototype.toString = function () {
        var toret = '{';
        this.forEach(function (k, v) {
            toret += "\n\t" + k + " : " + v;
        });
        return toret + '\n}';
    };
    return Dictionary;
}()); // End of dictionary
exports.default = Dictionary;
//# sourceMappingURL=Dictionary.js.map
});
___scope___.file("dist/lib/Set.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var arrays = require("./arrays");
var Dictionary_1 = require("./Dictionary");
var Set = /** @class */ (function () {
    /**
     * Creates an empty set.
     * @class <p>A set is a data structure that contains no duplicate items.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStringFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    function Set(toStringFunction) {
        this.dictionary = new Dictionary_1.default(toStringFunction);
    }
    /**
     * Returns true if this set contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this set contains the specified element,
     * false otherwise.
     */
    Set.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    /**
     * Adds the specified element to this set if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this set did not already contain the specified element.
     */
    Set.prototype.add = function (element) {
        if (this.contains(element) || util.isUndefined(element)) {
            return false;
        }
        else {
            this.dictionary.setValue(element, element);
            return true;
        }
    };
    /**
     * Performs an intersecion between this and another set.
     * Removes all values that are not present this set and the given set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.intersection = function (otherSet) {
        var set = this;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                set.remove(element);
            }
            return true;
        });
    };
    /**
     * Performs a union between this and another set.
     * Adds all values from the given set to this set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.union = function (otherSet) {
        var set = this;
        otherSet.forEach(function (element) {
            set.add(element);
            return true;
        });
    };
    /**
     * Performs a difference between this and another set.
     * Removes from this set all the values that are present in the given set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.difference = function (otherSet) {
        var set = this;
        otherSet.forEach(function (element) {
            set.remove(element);
            return true;
        });
    };
    /**
     * Checks whether the given set contains all the elements in this set.
     * @param {collections.Set} otherSet other set.
     * @return {boolean} true if this set is a subset of the given set.
     */
    Set.prototype.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        var isSub = true;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                isSub = false;
                return false;
            }
            return true;
        });
        return isSub;
    };
    /**
     * Removes the specified element from this set if it is present.
     * @return {boolean} true if this set contained the specified element.
     */
    Set.prototype.remove = function (element) {
        if (!this.contains(element)) {
            return false;
        }
        else {
            this.dictionary.remove(element);
            return true;
        }
    };
    /**
     * Executes the provided function once for each element
     * present in this set.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one arguments: the element. To break the iteration you can
     * optionally return false.
     */
    Set.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            return callback(v);
        });
    };
    /**
     * Returns an array containing all of the elements in this set in arbitrary order.
     * @return {Array} an array containing all of the elements in this set.
     */
    Set.prototype.toArray = function () {
        return this.dictionary.values();
    };
    /**
     * Returns true if this set contains no elements.
     * @return {boolean} true if this set contains no elements.
     */
    Set.prototype.isEmpty = function () {
        return this.dictionary.isEmpty();
    };
    /**
     * Returns the number of elements in this set.
     * @return {number} the number of elements in this set.
     */
    Set.prototype.size = function () {
        return this.dictionary.size();
    };
    /**
     * Removes all of the elements from this set.
     */
    Set.prototype.clear = function () {
        this.dictionary.clear();
    };
    /*
    * Provides a string representation for display
    */
    Set.prototype.toString = function () {
        return arrays.toString(this.toArray());
    };
    return Set;
}()); // end of Set
exports.default = Set;
//# sourceMappingURL=Set.js.map
});
___scope___.file("dist/lib/BSTree.js", function(exports, require, module, __filename, __dirname){

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
var BSTreeKV_1 = require("./BSTreeKV");
/**
 * Special-case of the binary search tree in which the search key is equal to the element type.
 * This definition is suitable when the element type can not be split between what defines its order
 * and what does not (eg. primitive types as opposed to indexed records).
 *
 * The table below shows some use-case examples for both interfaces:
 *
 *           element type              |  most suitable interface
 * ------------------------------------|----------------------------
 *    number                           |  BSTree<number>
 *    string                           |  BSTree<string>
 * { order: number, data: string }     |  BSTreeKV<{order: number}, {order: number, data: string}>
 *
 * @see BSTreeKV
 */
var BSTree = /** @class */ (function (_super) {
    __extends(BSTree, _super);
    function BSTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BSTree;
}(BSTreeKV_1.default));
exports.default = BSTree;
//# sourceMappingURL=BSTree.js.map
});
___scope___.file("dist/lib/BSTreeKV.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Queue_1 = require("./Queue");
/**
 * General binary search tree implementation.
 *
 * This interface allows one to search elements using a subset of their attributes (thus the
 * tree can be used as an index for complex objects).
 * The attributes required to define an ordering in the tree must be defined in the type K.
 * Any additional attribute must be defined in the type V.
 *
 * @see BSTree
 */
var BSTreeKV = /** @class */ (function () {
    /**
     * Creates an empty binary search tree.
     * @class <p>A binary search tree is a binary tree in which each
     * internal node stores an element such that the elements stored in the
     * left subtree are less than it and the elements
     * stored in the right subtree are greater.</p>
     * <p>Formally, a binary search tree is a node-based binary tree data structure which
     * has the following properties:</p>
     * <ul>
     * <li>The left subtree of a node contains only nodes with elements less
     * than the node's element</li>
     * <li>The right subtree of a node contains only nodes with elements greater
     * than the node's element</li>
     * <li>Both the left and right subtrees must also be binary search trees.</li>
     * </ul>
     * <p>If the inserted elements are custom objects a compare function must
     * be provided at construction time, otherwise the <=, === and >= operators are
     * used to compare elements. Example:</p>
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two elements. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function BSTreeKV(compareFunction) {
        this.root = null;
        this.compare = compareFunction || util.defaultCompare;
        this.nElements = 0;
    }
    /**
     * Adds the specified element to this tree if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this tree did not already contain the specified element.
     */
    BSTreeKV.prototype.add = function (element) {
        if (util.isUndefined(element)) {
            return false;
        }
        if (this.insertNode(this.createNode(element)) !== null) {
            this.nElements++;
            return true;
        }
        return false;
    };
    /**
     * Removes all of the elements from this tree.
     */
    BSTreeKV.prototype.clear = function () {
        this.root = null;
        this.nElements = 0;
    };
    /**
     * Returns true if this tree contains no elements.
     * @return {boolean} true if this tree contains no elements.
     */
    BSTreeKV.prototype.isEmpty = function () {
        return this.nElements === 0;
    };
    /**
     * Returns the number of elements in this tree.
     * @return {number} the number of elements in this tree.
     */
    BSTreeKV.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this tree contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this tree contains the specified element,
     * false otherwise.
     */
    BSTreeKV.prototype.contains = function (element) {
        if (util.isUndefined(element)) {
            return false;
        }
        return this.searchNode(this.root, element) !== null;
    };
    /**
     * Looks for the value with the provided search key.
     * @param {Object} element The key to look for
     * @return {Object} The value found or undefined if it was not found.
     */
    BSTreeKV.prototype.search = function (element) {
        var ret = this.searchNode(this.root, element);
        if (ret === null) {
            return undefined;
        }
        return ret.element;
    };
    /**
     * Removes the specified element from this tree if it is present.
     * @return {boolean} true if this tree contained the specified element.
     */
    BSTreeKV.prototype.remove = function (element) {
        var node = this.searchNode(this.root, element);
        if (node === null) {
            return false;
        }
        this.removeNode(node);
        this.nElements--;
        return true;
    };
    /**
     * Executes the provided function once for each element present in this tree in
     * in-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.inorderTraversal = function (callback) {
        this.inorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in pre-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.preorderTraversal = function (callback) {
        this.preorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in post-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.postorderTraversal = function (callback) {
        this.postorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in
     * level-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.levelTraversal = function (callback) {
        this.levelTraversalAux(this.root, callback);
    };
    /**
     * Returns the minimum element of this tree.
     * @return {*} the minimum element of this tree or undefined if this tree is
     * is empty.
     */
    BSTreeKV.prototype.minimum = function () {
        if (this.isEmpty() || this.root === null) {
            return undefined;
        }
        return this.minimumAux(this.root).element;
    };
    /**
     * Returns the maximum element of this tree.
     * @return {*} the maximum element of this tree or undefined if this tree is
     * is empty.
     */
    BSTreeKV.prototype.maximum = function () {
        if (this.isEmpty() || this.root === null) {
            return undefined;
        }
        return this.maximumAux(this.root).element;
    };
    /**
     * Executes the provided function once for each element present in this tree in inorder.
     * Equivalent to inorderTraversal.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    BSTreeKV.prototype.forEach = function (callback) {
        this.inorderTraversal(callback);
    };
    /**
     * Returns an array containing all of the elements in this tree in in-order.
     * @return {Array} an array containing all of the elements in this tree in in-order.
     */
    BSTreeKV.prototype.toArray = function () {
        var array = [];
        this.inorderTraversal(function (element) {
            array.push(element);
            return true;
        });
        return array;
    };
    /**
     * Returns the height of this tree.
     * @return {number} the height of this tree or -1 if is empty.
     */
    BSTreeKV.prototype.height = function () {
        return this.heightAux(this.root);
    };
    /**
    * @private
    */
    BSTreeKV.prototype.searchNode = function (node, element) {
        var cmp = 1;
        while (node !== null && cmp !== 0) {
            cmp = this.compare(element, node.element);
            if (cmp < 0) {
                node = node.leftCh;
            }
            else if (cmp > 0) {
                node = node.rightCh;
            }
        }
        return node;
    };
    /**
    * @private
    */
    BSTreeKV.prototype.transplant = function (n1, n2) {
        if (n1.parent === null) {
            this.root = n2;
        }
        else if (n1 === n1.parent.leftCh) {
            n1.parent.leftCh = n2;
        }
        else {
            n1.parent.rightCh = n2;
        }
        if (n2 !== null) {
            n2.parent = n1.parent;
        }
    };
    /**
    * @private
    */
    BSTreeKV.prototype.removeNode = function (node) {
        if (node.leftCh === null) {
            this.transplant(node, node.rightCh);
        }
        else if (node.rightCh === null) {
            this.transplant(node, node.leftCh);
        }
        else {
            var y = this.minimumAux(node.rightCh);
            if (y.parent !== node) {
                this.transplant(y, y.rightCh);
                y.rightCh = node.rightCh;
                y.rightCh.parent = y;
            }
            this.transplant(node, y);
            y.leftCh = node.leftCh;
            y.leftCh.parent = y;
        }
    };
    /**
    * @private
    */
    BSTreeKV.prototype.inorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        this.inorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
        if (signal.stop) {
            return;
        }
        this.inorderTraversalAux(node.rightCh, callback, signal);
    };
    /**
    * @private
    */
    BSTreeKV.prototype.levelTraversalAux = function (node, callback) {
        var queue = new Queue_1.default();
        if (node !== null) {
            queue.enqueue(node);
        }
        node = queue.dequeue() || null;
        while (node != null) {
            if (callback(node.element) === false) {
                return;
            }
            if (node.leftCh !== null) {
                queue.enqueue(node.leftCh);
            }
            if (node.rightCh !== null) {
                queue.enqueue(node.rightCh);
            }
            node = queue.dequeue() || null;
        }
    };
    /**
    * @private
    */
    BSTreeKV.prototype.preorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
        if (signal.stop) {
            return;
        }
        this.preorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        this.preorderTraversalAux(node.rightCh, callback, signal);
    };
    /**
    * @private
    */
    BSTreeKV.prototype.postorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        this.postorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        this.postorderTraversalAux(node.rightCh, callback, signal);
        if (signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
    };
    BSTreeKV.prototype.minimumAux = function (node) {
        while (node != null && node.leftCh !== null) {
            node = node.leftCh;
        }
        return node;
    };
    BSTreeKV.prototype.maximumAux = function (node) {
        while (node != null && node.rightCh !== null) {
            node = node.rightCh;
        }
        return node;
    };
    /**
      * @private
      */
    BSTreeKV.prototype.heightAux = function (node) {
        if (node === null) {
            return -1;
        }
        return Math.max(this.heightAux(node.leftCh), this.heightAux(node.rightCh)) + 1;
    };
    /*
    * @private
    */
    BSTreeKV.prototype.insertNode = function (node) {
        var parent = null;
        var position = this.root;
        while (position !== null) {
            var cmp = this.compare(node.element, position.element);
            if (cmp === 0) {
                return null;
            }
            else if (cmp < 0) {
                parent = position;
                position = position.leftCh;
            }
            else {
                parent = position;
                position = position.rightCh;
            }
        }
        node.parent = parent;
        if (parent === null) {
            // tree is empty
            this.root = node;
        }
        else if (this.compare(node.element, parent.element) < 0) {
            parent.leftCh = node;
        }
        else {
            parent.rightCh = node;
        }
        return node;
    };
    /**
    * @private
    */
    BSTreeKV.prototype.createNode = function (element) {
        return {
            element: element,
            leftCh: null,
            rightCh: null,
            parent: null
        };
    };
    return BSTreeKV;
}());
exports.default = BSTreeKV;
//# sourceMappingURL=BSTreeKV.js.map
});
___scope___.file("dist/lib/Queue.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    /**
     * Creates an empty queue.
     * @class A queue is a First-In-First-Out (FIFO) data structure, the first
     * element added to the queue will be the first one to be removed. This
     * implementation uses a linked list as a container.
     * @constructor
     */
    function Queue() {
        this.list = new LinkedList_1.default();
    }
    /**
     * Inserts the specified element into the end of this queue.
     * @param {Object} elem the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    Queue.prototype.enqueue = function (elem) {
        return this.list.add(elem);
    };
    /**
     * Inserts the specified element into the end of this queue.
     * @param {Object} elem the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    Queue.prototype.add = function (elem) {
        return this.list.add(elem);
    };
    /**
     * Retrieves and removes the head of this queue.
     * @return {*} the head of this queue, or undefined if this queue is empty.
     */
    Queue.prototype.dequeue = function () {
        if (this.list.size() !== 0) {
            var el = this.list.first();
            this.list.removeElementAtIndex(0);
            return el;
        }
        return undefined;
    };
    /**
     * Retrieves, but does not remove, the head of this queue.
     * @return {*} the head of this queue, or undefined if this queue is empty.
     */
    Queue.prototype.peek = function () {
        if (this.list.size() !== 0) {
            return this.list.first();
        }
        return undefined;
    };
    /**
     * Returns the number of elements in this queue.
     * @return {number} the number of elements in this queue.
     */
    Queue.prototype.size = function () {
        return this.list.size();
    };
    /**
     * Returns true if this queue contains the specified element.
     * <p>If the elements inside this stack are
     * not comparable with the === operator, a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName (pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} elem element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function to check if two elements are equal.
     * @return {boolean} true if this queue contains the specified element,
     * false otherwise.
     */
    Queue.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    /**
     * Checks if this queue is empty.
     * @return {boolean} true if and only if this queue contains no items; false
     * otherwise.
     */
    Queue.prototype.isEmpty = function () {
        return this.list.size() <= 0;
    };
    /**
     * Removes all of the elements from this queue.
     */
    Queue.prototype.clear = function () {
        this.list.clear();
    };
    /**
     * Executes the provided function once for each element present in this queue in
     * FIFO order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Queue.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Queue;
}()); // End of queue
exports.default = Queue;
//# sourceMappingURL=Queue.js.map
});
___scope___.file("dist/lib/LinkedList.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var arrays = require("./arrays");
var LinkedList = /** @class */ (function () {
    /**
    * Creates an empty Linked List.
    * @class A linked list is a data structure consisting of a group of nodes
    * which together represent a sequence.
    * @constructor
    */
    function LinkedList() {
        /**
        * First node in the list
        * @type {Object}
        * @private
        */
        this.firstNode = null;
        /**
        * Last node in the list
        * @type {Object}
        * @private
        */
        this.lastNode = null;
        /**
        * Number of elements in the list
        * @type {number}
        * @private
        */
        this.nElements = 0;
    }
    /**
    * Adds an element to this list.
    * @param {Object} item element to be added.
    * @param {number=} index optional index to add the element. If no index is specified
    * the element is added to the end of this list.
    * @return {boolean} true if the element was added or false if the index is invalid
    * or if the element is undefined.
    */
    LinkedList.prototype.add = function (item, index) {
        if (util.isUndefined(index)) {
            index = this.nElements;
        }
        if (index < 0 || index > this.nElements || util.isUndefined(item)) {
            return false;
        }
        var newNode = this.createNode(item);
        if (this.nElements === 0 || this.lastNode === null) {
            // First node in the list.
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else if (index === this.nElements) {
            // Insert at the end.
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        else if (index === 0) {
            // Change first node.
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        else {
            var prev = this.nodeAtIndex(index - 1);
            if (prev == null) {
                return false;
            }
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.nElements++;
        return true;
    };
    /**
    * Returns the first element in this list.
    * @return {*} the first element of the list or undefined if the list is
    * empty.
    */
    LinkedList.prototype.first = function () {
        if (this.firstNode !== null) {
            return this.firstNode.element;
        }
        return undefined;
    };
    /**
    * Returns the last element in this list.
    * @return {*} the last element in the list or undefined if the list is
    * empty.
    */
    LinkedList.prototype.last = function () {
        if (this.lastNode !== null) {
            return this.lastNode.element;
        }
        return undefined;
    };
    /**
     * Returns the element at the specified position in this list.
     * @param {number} index desired index.
     * @return {*} the element at the given index or undefined if the index is
     * out of bounds.
     */
    LinkedList.prototype.elementAtIndex = function (index) {
        var node = this.nodeAtIndex(index);
        if (node === null) {
            return undefined;
        }
        return node.element;
    };
    /**
     * Returns the index in this list of the first occurrence of the
     * specified element, or -1 if the List does not contain this element.
     * <p>If the elements inside this list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction Optional
     * function used to check if two elements are equal.
     * @return {number} the index in this list of the first occurrence
     * of the specified element, or -1 if this list does not contain the
     * element.
     */
    LinkedList.prototype.indexOf = function (item, equalsFunction) {
        var equalsF = equalsFunction || util.defaultEquals;
        if (util.isUndefined(item)) {
            return -1;
        }
        var currentNode = this.firstNode;
        var index = 0;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    };
    /**
       * Returns true if this list contains the specified element.
       * <p>If the elements inside the list are
       * not comparable with the === operator a custom equals function should be
       * provided to perform searches, the function must receive two arguments and
       * return true if they are equal, false otherwise. Example:</p>
       *
       * <pre>
       * const petsAreEqualByName = function(pet1, pet2) {
       *  return pet1.name === pet2.name;
       * }
       * </pre>
       * @param {Object} item element to search for.
       * @param {function(Object,Object):boolean=} equalsFunction Optional
       * function used to check if two elements are equal.
       * @return {boolean} true if this list contains the specified element, false
       * otherwise.
       */
    LinkedList.prototype.contains = function (item, equalsFunction) {
        return (this.indexOf(item, equalsFunction) >= 0);
    };
    /**
     * Removes the first occurrence of the specified element in this list.
     * <p>If the elements inside the list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to be removed from this list, if present.
     * @return {boolean} true if the list contained the specified element.
     */
    LinkedList.prototype.remove = function (item, equalsFunction) {
        var equalsF = equalsFunction || util.defaultEquals;
        if (this.nElements < 1 || util.isUndefined(item)) {
            return false;
        }
        var previous = null;
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                if (previous == null) {
                    this.firstNode = currentNode.next;
                    if (currentNode === this.lastNode) {
                        this.lastNode = null;
                    }
                }
                else if (currentNode === this.lastNode) {
                    this.lastNode = previous;
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                else {
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                this.nElements--;
                return true;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    };
    /**
     * Removes all of the elements from this list.
     */
    LinkedList.prototype.clear = function () {
        this.firstNode = null;
        this.lastNode = null;
        this.nElements = 0;
    };
    /**
     * Returns true if this list is equal to the given list.
     * Two lists are equal if they have the same elements in the same order.
     * @param {LinkedList} other the other list.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function used to check if two elements are equal. If the elements in the lists
     * are custom objects you should provide a function, otherwise
     * the === operator is used to check equality between elements.
     * @return {boolean} true if this list is equal to the given list.
     */
    LinkedList.prototype.equals = function (other, equalsFunction) {
        var eqF = equalsFunction || util.defaultEquals;
        if (!(other instanceof LinkedList)) {
            return false;
        }
        if (this.size() !== other.size()) {
            return false;
        }
        return this.equalsAux(this.firstNode, other.firstNode, eqF);
    };
    /**
    * @private
    */
    LinkedList.prototype.equalsAux = function (n1, n2, eqF) {
        while (n1 !== null && n2 !== null) {
            if (!eqF(n1.element, n2.element)) {
                return false;
            }
            n1 = n1.next;
            n2 = n2.next;
        }
        return true;
    };
    /**
     * Removes the element at the specified position in this list.
     * @param {number} index given index.
     * @return {*} removed element or undefined if the index is out of bounds.
     */
    LinkedList.prototype.removeElementAtIndex = function (index) {
        if (index < 0 || index >= this.nElements || this.firstNode === null || this.lastNode === null) {
            return undefined;
        }
        var element;
        if (this.nElements === 1) {
            //First node in the list.
            element = this.firstNode.element;
            this.firstNode = null;
            this.lastNode = null;
        }
        else {
            var previous = this.nodeAtIndex(index - 1);
            if (previous === null) {
                element = this.firstNode.element;
                this.firstNode = this.firstNode.next;
            }
            else if (previous.next === this.lastNode) {
                element = this.lastNode.element;
                this.lastNode = previous;
            }
            if (previous !== null && previous.next !== null) {
                element = previous.next.element;
                previous.next = previous.next.next;
            }
        }
        this.nElements--;
        return element;
    };
    /**
     * Executes the provided function once for each element present in this list in order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    LinkedList.prototype.forEach = function (callback) {
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (callback(currentNode.element) === false) {
                break;
            }
            currentNode = currentNode.next;
        }
    };
    /**
     * Reverses the order of the elements in this linked list (makes the last
     * element first, and the first element last).
     */
    LinkedList.prototype.reverse = function () {
        var previous = null;
        var current = this.firstNode;
        var temp = null;
        while (current !== null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        temp = this.firstNode;
        this.firstNode = this.lastNode;
        this.lastNode = temp;
    };
    /**
     * Returns an array containing all of the elements in this list in proper
     * sequence.
     * @return {Array.<*>} an array containing all of the elements in this list,
     * in proper sequence.
     */
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            array.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return array;
    };
    /**
     * Returns the number of elements in this list.
     * @return {number} the number of elements in this list.
     */
    LinkedList.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this list contains no elements.
     * @return {boolean} true if this list contains no elements.
     */
    LinkedList.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    LinkedList.prototype.toString = function () {
        return arrays.toString(this.toArray());
    };
    /**
     * @private
     */
    LinkedList.prototype.nodeAtIndex = function (index) {
        if (index < 0 || index >= this.nElements) {
            return null;
        }
        if (index === (this.nElements - 1)) {
            return this.lastNode;
        }
        var node = this.firstNode;
        for (var i = 0; i < index && node != null; i++) {
            node = node.next;
        }
        return node;
    };
    /**
     * @private
     */
    LinkedList.prototype.createNode = function (item) {
        return {
            element: item,
            next: null
        };
    };
    return LinkedList;
}()); // End of linked list
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map
});
___scope___.file("dist/lib/Heap.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collections = require("./util");
var arrays = require("./arrays");
var Heap = /** @class */ (function () {
    /**
     * Creates an empty Heap.
     * @class
     * <p>A heap is a binary tree, where the nodes maintain the heap property:
     * each node is smaller than each of its children and therefore a MinHeap
     * This implementation uses an array to store elements.</p>
     * <p>If the inserted elements are custom objects a compare function must be provided,
     *  at construction time, otherwise the <=, === and >= operators are
     * used to compare elements. Example:</p>
     *
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     *
     * <p>If a Max-Heap is wanted (greater elements on top) you can a provide a
     * reverse compare function to accomplish that behavior. Example:</p>
     *
     * <pre>
     * function reverseCompare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return 1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return -1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two elements. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function Heap(compareFunction) {
        /**
         * Array used to store the elements of the heap.
         * @type {Array.<Object>}
         * @private
         */
        this.data = [];
        this.compare = compareFunction || collections.defaultCompare;
    }
    /**
     * Returns the index of the left child of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the left child
     * for.
     * @return {number} The index of the left child.
     * @private
     */
    Heap.prototype.leftChildIndex = function (nodeIndex) {
        return (2 * nodeIndex) + 1;
    };
    /**
     * Returns the index of the right child of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the right child
     * for.
     * @return {number} The index of the right child.
     * @private
     */
    Heap.prototype.rightChildIndex = function (nodeIndex) {
        return (2 * nodeIndex) + 2;
    };
    /**
     * Returns the index of the parent of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the parent for.
     * @return {number} The index of the parent.
     * @private
     */
    Heap.prototype.parentIndex = function (nodeIndex) {
        return Math.floor((nodeIndex - 1) / 2);
    };
    /**
     * Returns the index of the smaller child node (if it exists).
     * @param {number} leftChild left child index.
     * @param {number} rightChild right child index.
     * @return {number} the index with the minimum value or -1 if it doesn't
     * exists.
     * @private
     */
    Heap.prototype.minIndex = function (leftChild, rightChild) {
        if (rightChild >= this.data.length) {
            if (leftChild >= this.data.length) {
                return -1;
            }
            else {
                return leftChild;
            }
        }
        else {
            if (this.compare(this.data[leftChild], this.data[rightChild]) <= 0) {
                return leftChild;
            }
            else {
                return rightChild;
            }
        }
    };
    /**
     * Moves the node at the given index up to its proper place in the heap.
     * @param {number} index The index of the node to move up.
     * @private
     */
    Heap.prototype.siftUp = function (index) {
        var parent = this.parentIndex(index);
        while (index > 0 && this.compare(this.data[parent], this.data[index]) > 0) {
            arrays.swap(this.data, parent, index);
            index = parent;
            parent = this.parentIndex(index);
        }
    };
    /**
     * Moves the node at the given index down to its proper place in the heap.
     * @param {number} nodeIndex The index of the node to move down.
     * @private
     */
    Heap.prototype.siftDown = function (nodeIndex) {
        //smaller child index
        var min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
        while (min >= 0 && this.compare(this.data[nodeIndex], this.data[min]) > 0) {
            arrays.swap(this.data, min, nodeIndex);
            nodeIndex = min;
            min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
        }
    };
    /**
     * Retrieves but does not remove the root element of this heap.
     * @return {*} The value at the root of the heap. Returns undefined if the
     * heap is empty.
     */
    Heap.prototype.peek = function () {
        if (this.data.length > 0) {
            return this.data[0];
        }
        else {
            return undefined;
        }
    };
    /**
     * Adds the given element into the heap.
     * @param {*} element the element.
     * @return true if the element was added or fals if it is undefined.
     */
    Heap.prototype.add = function (element) {
        if (collections.isUndefined(element)) {
            return false;
        }
        this.data.push(element);
        this.siftUp(this.data.length - 1);
        return true;
    };
    /**
     * Retrieves and removes the root element of this heap.
     * @return {*} The value removed from the root of the heap. Returns
     * undefined if the heap is empty.
     */
    Heap.prototype.removeRoot = function () {
        if (this.data.length > 0) {
            var obj = this.data[0];
            this.data[0] = this.data[this.data.length - 1];
            this.data.splice(this.data.length - 1, 1);
            if (this.data.length > 0) {
                this.siftDown(0);
            }
            return obj;
        }
        return undefined;
    };
    /**
     * Returns true if this heap contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this Heap contains the specified element, false
     * otherwise.
     */
    Heap.prototype.contains = function (element) {
        var equF = collections.compareToEquals(this.compare);
        return arrays.contains(this.data, element, equF);
    };
    /**
     * Returns the number of elements in this heap.
     * @return {number} the number of elements in this heap.
     */
    Heap.prototype.size = function () {
        return this.data.length;
    };
    /**
     * Checks if this heap is empty.
     * @return {boolean} true if and only if this heap contains no items; false
     * otherwise.
     */
    Heap.prototype.isEmpty = function () {
        return this.data.length <= 0;
    };
    /**
     * Removes all of the elements from this heap.
     */
    Heap.prototype.clear = function () {
        this.data.length = 0;
    };
    /**
     * Executes the provided function once for each element present in this heap in
     * no particular order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Heap.prototype.forEach = function (callback) {
        arrays.forEach(this.data, callback);
    };
    return Heap;
}());
exports.default = Heap;
//# sourceMappingURL=Heap.js.map
});
___scope___.file("dist/lib/LinkedDictionary.js", function(exports, require, module, __filename, __dirname){

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
var Dictionary_1 = require("./Dictionary");
var util = require("./util");
/**
 * This class is used by the LinkedDictionary Internally
 * Has to be a class, not an interface, because it needs to have
 * the 'unlink' function defined.
 */
var LinkedDictionaryPair = /** @class */ (function () {
    function LinkedDictionaryPair(key, value) {
        this.key = key;
        this.value = value;
    }
    LinkedDictionaryPair.prototype.unlink = function () {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    };
    return LinkedDictionaryPair;
}());
/**
 * The head and tail elements of the list have null key and value properties but they
 * usually link to normal nodes.
 */
var HeadOrTailLinkedDictionaryPair = /** @class */ (function () {
    function HeadOrTailLinkedDictionaryPair() {
        this.key = null;
        this.value = null;
    }
    HeadOrTailLinkedDictionaryPair.prototype.unlink = function () {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    };
    return HeadOrTailLinkedDictionaryPair;
}());
function isHeadOrTailLinkedDictionaryPair(p) {
    return p.next === null;
}
var LinkedDictionary = /** @class */ (function (_super) {
    __extends(LinkedDictionary, _super);
    function LinkedDictionary(toStrFunction) {
        var _this = _super.call(this, toStrFunction) || this;
        _this.head = new HeadOrTailLinkedDictionaryPair();
        _this.tail = new HeadOrTailLinkedDictionaryPair();
        _this.head.next = _this.tail;
        _this.tail.prev = _this.head;
        return _this;
    }
    /**
     * Inserts the new node to the 'tail' of the list, updating the
     * neighbors, and moving 'this.tail' (the End of List indicator) that
     * to the end.
     */
    LinkedDictionary.prototype.appendToTail = function (entry) {
        var lastNode = this.tail.prev;
        lastNode.next = entry;
        entry.prev = lastNode;
        entry.next = this.tail;
        this.tail.prev = entry;
    };
    /**
     * Retrieves a linked dictionary from the table internally
     */
    LinkedDictionary.prototype.getLinkedDictionaryPair = function (key) {
        if (util.isUndefined(key)) {
            return undefined;
        }
        var k = '$' + this.toStr(key);
        var pair = (this.table[k]);
        return pair;
    };
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * undefined if the map contains no mapping for this key.
     */
    LinkedDictionary.prototype.getValue = function (key) {
        var pair = this.getLinkedDictionaryPair(key);
        if (!util.isUndefined(pair)) {
            return pair.value;
        }
        return undefined;
    };
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * Also, if a value is present for this key, the entry is removed from the
     * insertion ordering.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @return {*} previous value associated with specified key, or undefined if
     * there was no mapping for key.
     */
    LinkedDictionary.prototype.remove = function (key) {
        var pair = this.getLinkedDictionaryPair(key);
        if (!util.isUndefined(pair)) {
            _super.prototype.remove.call(this, key); // This will remove it from the table
            pair.unlink(); // This will unlink it from the chain
            return pair.value;
        }
        return undefined;
    };
    /**
    * Removes all mappings from this LinkedDictionary.
    * @this {collections.LinkedDictionary}
    */
    LinkedDictionary.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    };
    /**
     * Internal function used when updating an existing KeyValue pair.
     * It places the new value indexed by key into the table, but maintains
     * its place in the linked ordering.
     */
    LinkedDictionary.prototype.replace = function (oldPair, newPair) {
        var k = '$' + this.toStr(newPair.key);
        // set the new Pair's links to existingPair's links
        newPair.next = oldPair.next;
        newPair.prev = oldPair.prev;
        // Delete Existing Pair from the table, unlink it from chain.
        // As a result, the nElements gets decremented by this operation
        this.remove(oldPair.key);
        // Link new Pair in place of where oldPair was,
        // by pointing the old pair's neighbors to it.
        newPair.prev.next = newPair;
        newPair.next.prev = newPair;
        this.table[k] = newPair;
        // To make up for the fact that the number of elements was decremented,
        // We need to increase it by one.
        ++this.nElements;
    };
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * Updating of a key that already exists maintains its place in the
     * insertion order into the map.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or undefined if
     * there was no mapping for the key or if the key/value are undefined.
     */
    LinkedDictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return undefined;
        }
        var existingPair = this.getLinkedDictionaryPair(key);
        var newPair = new LinkedDictionaryPair(key, value);
        var k = '$' + this.toStr(key);
        // If there is already an element for that key, we
        // keep it's place in the LinkedList
        if (!util.isUndefined(existingPair)) {
            this.replace(existingPair, newPair);
            return existingPair.value;
        }
        else {
            this.appendToTail(newPair);
            this.table[k] = newPair;
            ++this.nElements;
            return undefined;
        }
    };
    /**
     * Returns an array containing all of the keys in this LinkedDictionary, ordered
     * by insertion order.
     * @return {Array} an array containing all of the keys in this LinkedDictionary,
     * ordered by insertion order.
     */
    LinkedDictionary.prototype.keys = function () {
        var array = [];
        this.forEach(function (key, value) {
            array.push(key);
        });
        return array;
    };
    /**
     * Returns an array containing all of the values in this LinkedDictionary, ordered by
     * insertion order.
     * @return {Array} an array containing all of the values in this LinkedDictionary,
     * ordered by insertion order.
     */
    LinkedDictionary.prototype.values = function () {
        var array = [];
        this.forEach(function (key, value) {
            array.push(value);
        });
        return array;
    };
    /**
    * Executes the provided function once for each key-value pair
    * present in this LinkedDictionary. It is done in the order of insertion
    * into the LinkedDictionary
    * @param {function(Object,Object):*} callback function to execute, it is
    * invoked with two arguments: key and value. To break the iteration you can
    * optionally return false.
    */
    LinkedDictionary.prototype.forEach = function (callback) {
        var crawlNode = this.head.next;
        while (!isHeadOrTailLinkedDictionaryPair(crawlNode)) {
            var ret = callback(crawlNode.key, crawlNode.value);
            if (ret === false) {
                return;
            }
            crawlNode = crawlNode.next;
        }
    };
    return LinkedDictionary;
}(Dictionary_1.default)); // End of LinkedDictionary
exports.default = LinkedDictionary;
// /**
//  * Returns true if this dictionary is equal to the given dictionary.
//  * Two dictionaries are equal if they contain the same mappings.
//  * @param {collections.Dictionary} other the other dictionary.
//  * @param {function(Object,Object):boolean=} valuesEqualFunction optional
//  * function used to check if two values are equal.
//  * @return {boolean} true if this dictionary is equal to the given dictionary.
//  */
// collections.Dictionary.prototype.equals = function(other,valuesEqualFunction) {
// 	const eqF = valuesEqualFunction || collections.defaultEquals;
// 	if(!(other instanceof collections.Dictionary)){
// 		return false;
// 	}
// 	if(this.size() !== other.size()){
// 		return false;
// 	}
// 	return this.equalsAux(this.firstNode,other.firstNode,eqF);
// }
//# sourceMappingURL=LinkedDictionary.js.map
});
___scope___.file("dist/lib/MultiDictionary.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary_1 = require("./Dictionary");
var arrays = require("./arrays");
var MultiDictionary = /** @class */ (function () {
    /**
     * Creates an empty multi dictionary.
     * @class <p>A multi dictionary is a special kind of dictionary that holds
     * multiple values against each key. Setting a value into the dictionary will
     * add the value to an array at that key. Getting a key will return an array,
     * holding all the values set to that key.
     * You can configure to allow duplicates in the values.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to strings must be
     * provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
       *  return pet.name;
       * }
     * </pre>
     * <p>If the values are custom objects a function to check equality between values
     * must be provided. Example:</p>
     *
     * <pre>
     * function petsAreEqualByAge(pet1,pet2) {
       *  return pet1.age===pet2.age;
       * }
     * </pre>
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     * @param {function(Object,Object):boolean=} valuesEqualsFunction optional
     * function to check if two values are equal.
     *
     * @param allowDuplicateValues
     */
    function MultiDictionary(toStrFunction, valuesEqualsFunction, allowDuplicateValues) {
        if (allowDuplicateValues === void 0) { allowDuplicateValues = false; }
        this.dict = new Dictionary_1.default(toStrFunction);
        this.equalsF = valuesEqualsFunction || util.defaultEquals;
        this.allowDuplicate = allowDuplicateValues;
    }
    /**
    * Returns an array holding the values to which this dictionary maps
    * the specified key.
    * Returns an empty array if this dictionary contains no mappings for this key.
    * @param {Object} key key whose associated values are to be returned.
    * @return {Array} an array holding the values to which this dictionary maps
    * the specified key.
    */
    MultiDictionary.prototype.getValue = function (key) {
        var values = this.dict.getValue(key);
        if (util.isUndefined(values)) {
            return [];
        }
        return arrays.copy(values);
    };
    /**
     * Adds the value to the array associated with the specified key, if
     * it is not already present.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value the value to add to the array at the key
     * @return {boolean} true if the value was not already associated with that key.
     */
    MultiDictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return false;
        }
        var array = this.dict.getValue(key);
        if (util.isUndefined(array)) {
            this.dict.setValue(key, [value]);
            return true;
        }
        if (!this.allowDuplicate) {
            if (arrays.contains(array, value, this.equalsF)) {
                return false;
            }
        }
        array.push(value);
        return true;
    };
    /**
     * Removes the specified values from the array of values associated with the
     * specified key. If a value isn't given, all values associated with the specified
     * key are removed.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @param {Object=} value optional argument to specify the value to remove
     * from the array associated with the specified key.
     * @return {*} true if the dictionary changed, false if the key doesn't exist or
     * if the specified value isn't associated with the specified key.
     */
    MultiDictionary.prototype.remove = function (key, value) {
        if (util.isUndefined(value)) {
            var v = this.dict.remove(key);
            return !util.isUndefined(v);
        }
        var array = this.dict.getValue(key);
        if (!util.isUndefined(array) && arrays.remove(array, value, this.equalsF)) {
            if (array.length === 0) {
                this.dict.remove(key);
            }
            return true;
        }
        return false;
    };
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @return {Array} an array containing all of the keys in this dictionary.
     */
    MultiDictionary.prototype.keys = function () {
        return this.dict.keys();
    };
    /**
     * Returns an array containing all of the values in this dictionary.
     * @return {Array} an array containing all of the values in this dictionary.
     */
    MultiDictionary.prototype.values = function () {
        var values = this.dict.values();
        var array = [];
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            for (var _a = 0, v_1 = v; _a < v_1.length; _a++) {
                var w = v_1[_a];
                array.push(w);
            }
        }
        return array;
    };
    /**
     * Returns true if this dictionary at least one value associatted the specified key.
     * @param {Object} key key whose presence in this dictionary is to be
     * tested.
     * @return {boolean} true if this dictionary at least one value associatted
     * the specified key.
     */
    MultiDictionary.prototype.containsKey = function (key) {
        return this.dict.containsKey(key);
    };
    /**
     * Removes all mappings from this dictionary.
     */
    MultiDictionary.prototype.clear = function () {
        this.dict.clear();
    };
    /**
     * Returns the number of keys in this dictionary.
     * @return {number} the number of key-value mappings in this dictionary.
     */
    MultiDictionary.prototype.size = function () {
        return this.dict.size();
    };
    /**
     * Returns true if this dictionary contains no mappings.
     * @return {boolean} true if this dictionary contains no mappings.
     */
    MultiDictionary.prototype.isEmpty = function () {
        return this.dict.isEmpty();
    };
    return MultiDictionary;
}()); // end of multi dictionary
exports.default = MultiDictionary;
//# sourceMappingURL=MultiDictionary.js.map
});
___scope___.file("dist/lib/FactoryDictionary.js", function(exports, require, module, __filename, __dirname){

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
var Dictionary_1 = require("./Dictionary");
var util = require("./util");
var FactoryDictionary = /** @class */ (function (_super) {
    __extends(FactoryDictionary, _super);
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>The default factory function should return a new object of the provided
     * type. Example:</p>
     * <pre>
     * function petFactory() {
     *  return new Pet();
     * }
     * </pre>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function():V=} defaultFactoryFunction function used to create a
     * default object.
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    function FactoryDictionary(defaultFactoryFunction, toStrFunction) {
        var _this = _super.call(this, toStrFunction) || this;
        _this.defaultFactoryFunction = defaultFactoryFunction;
        return _this;
    }
    /**
     * Associates the specified default value with the specified key in this dictionary,
     * if it didn't contain the key yet. If the key existed, the existing value will be used.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} defaultValue default value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or the default value,
     * if the key didn't exist yet.
     */
    FactoryDictionary.prototype.setDefault = function (key, defaultValue) {
        var currentValue = _super.prototype.getValue.call(this, key);
        if (util.isUndefined(currentValue)) {
            this.setValue(key, defaultValue);
            return defaultValue;
        }
        return currentValue;
    };
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns a default value created by the factory passed in the constructor,
     * if this dictionary contains no mapping for this key. The missing key will
     * automatically be added to the dictionary.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * a default value if the map contains no mapping for this key.
     */
    FactoryDictionary.prototype.getValue = function (key) {
        return this.setDefault(key, this.defaultFactoryFunction());
    };
    return FactoryDictionary;
}(Dictionary_1.default));
exports.default = FactoryDictionary;
//# sourceMappingURL=FactoryDictionary.js.map
});
___scope___.file("dist/lib/PriorityQueue.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Heap_1 = require("./Heap");
var PriorityQueue = /** @class */ (function () {
    /**
     * Creates an empty priority queue.
     * @class <p>In a priority queue each element is associated with a "priority",
     * elements are dequeued in highest-priority-first order (the elements with the
     * highest priority are dequeued first). Priority Queues are implemented as heaps.
     * If the inserted elements are custom objects a compare function must be provided,
     * otherwise the <=, === and >= operators are used to compare object priority.</p>
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two element priorities. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function PriorityQueue(compareFunction) {
        this.heap = new Heap_1.default(util.reverseCompareFunction(compareFunction));
    }
    /**
     * Inserts the specified element into this priority queue.
     * @param {Object} element the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    PriorityQueue.prototype.enqueue = function (element) {
        return this.heap.add(element);
    };
    /**
     * Inserts the specified element into this priority queue.
     * @param {Object} element the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    PriorityQueue.prototype.add = function (element) {
        return this.heap.add(element);
    };
    /**
     * Retrieves and removes the highest priority element of this queue.
     * @return {*} the the highest priority element of this queue,
     *  or undefined if this queue is empty.
     */
    PriorityQueue.prototype.dequeue = function () {
        if (this.heap.size() !== 0) {
            var el = this.heap.peek();
            this.heap.removeRoot();
            return el;
        }
        return undefined;
    };
    /**
     * Retrieves, but does not remove, the highest priority element of this queue.
     * @return {*} the highest priority element of this queue, or undefined if this queue is empty.
     */
    PriorityQueue.prototype.peek = function () {
        return this.heap.peek();
    };
    /**
     * Returns true if this priority queue contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this priority queue contains the specified element,
     * false otherwise.
     */
    PriorityQueue.prototype.contains = function (element) {
        return this.heap.contains(element);
    };
    /**
     * Checks if this priority queue is empty.
     * @return {boolean} true if and only if this priority queue contains no items; false
     * otherwise.
     */
    PriorityQueue.prototype.isEmpty = function () {
        return this.heap.isEmpty();
    };
    /**
     * Returns the number of elements in this priority queue.
     * @return {number} the number of elements in this priority queue.
     */
    PriorityQueue.prototype.size = function () {
        return this.heap.size();
    };
    /**
     * Removes all of the elements from this priority queue.
     */
    PriorityQueue.prototype.clear = function () {
        this.heap.clear();
    };
    /**
     * Executes the provided function once for each element present in this queue in
     * no particular order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    PriorityQueue.prototype.forEach = function (callback) {
        this.heap.forEach(callback);
    };
    return PriorityQueue;
}()); // end of priority queue
exports.default = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map
});
___scope___.file("dist/lib/Stack.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Stack = /** @class */ (function () {
    /**
     * Creates an empty Stack.
     * @class A Stack is a Last-In-First-Out (LIFO) data structure, the last
     * element added to the stack will be the first one to be removed. This
     * implementation uses a linked list as a container.
     * @constructor
     */
    function Stack() {
        this.list = new LinkedList_1.default();
    }
    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} elem the element to be pushed onto this stack.
     * @return {boolean} true if the element was pushed or false if it is undefined.
     */
    Stack.prototype.push = function (elem) {
        return this.list.add(elem, 0);
    };
    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} elem the element to be pushed onto this stack.
     * @return {boolean} true if the element was pushed or false if it is undefined.
     */
    Stack.prototype.add = function (elem) {
        return this.list.add(elem, 0);
    };
    /**
     * Removes the object at the top of this stack and returns that object.
     * @return {*} the object at the top of this stack or undefined if the
     * stack is empty.
     */
    Stack.prototype.pop = function () {
        return this.list.removeElementAtIndex(0);
    };
    /**
     * Looks at the object at the top of this stack without removing it from the
     * stack.
     * @return {*} the object at the top of this stack or undefined if the
     * stack is empty.
     */
    Stack.prototype.peek = function () {
        return this.list.first();
    };
    /**
     * Returns the number of elements in this stack.
     * @return {number} the number of elements in this stack.
     */
    Stack.prototype.size = function () {
        return this.list.size();
    };
    /**
     * Returns true if this stack contains the specified element.
     * <p>If the elements inside this stack are
     * not comparable with the === operator, a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName (pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} elem element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function to check if two elements are equal.
     * @return {boolean} true if this stack contains the specified element,
     * false otherwise.
     */
    Stack.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    /**
     * Checks if this stack is empty.
     * @return {boolean} true if and only if this stack contains no items; false
     * otherwise.
     */
    Stack.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    /**
     * Removes all of the elements from this stack.
     */
    Stack.prototype.clear = function () {
        this.list.clear();
    };
    /**
     * Executes the provided function once for each element present in this stack in
     * LIFO order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Stack.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Stack;
}()); // End of stack
exports.default = Stack;
//# sourceMappingURL=Stack.js.map
});
___scope___.file("dist/lib/MultiRootTree.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["BEFORE"] = 0] = "BEFORE";
    Direction[Direction["AFTER"] = 1] = "AFTER";
    Direction[Direction["INSIDE_AT_END"] = 2] = "INSIDE_AT_END";
    Direction[Direction["INSIDE_AT_START"] = 3] = "INSIDE_AT_START";
})(Direction || (Direction = {}));
var MultiRootTree = /** @class */ (function () {
    function MultiRootTree(rootIds, nodes) {
        if (rootIds === void 0) { rootIds = []; }
        if (nodes === void 0) { nodes = {}; }
        this.rootIds = rootIds;
        this.nodes = nodes;
        this.initRootIds();
        this.initNodes();
    }
    MultiRootTree.prototype.initRootIds = function () {
        for (var _i = 0, _a = this.rootIds; _i < _a.length; _i++) {
            var rootId = _a[_i];
            this.createEmptyNodeIfNotExist(rootId);
        }
    };
    MultiRootTree.prototype.initNodes = function () {
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                for (var _i = 0, _a = this.nodes[nodeKey]; _i < _a.length; _i++) {
                    var nodeListItem = _a[_i];
                    this.createEmptyNodeIfNotExist(nodeListItem);
                }
            }
        }
    };
    MultiRootTree.prototype.createEmptyNodeIfNotExist = function (nodeKey) {
        if (!this.nodes[nodeKey]) {
            this.nodes[nodeKey] = [];
        }
    };
    MultiRootTree.prototype.getRootIds = function () {
        var clone = this.rootIds.slice();
        return clone;
    };
    MultiRootTree.prototype.getNodes = function () {
        var clone = {};
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                clone[nodeKey] = this.nodes[nodeKey].slice();
            }
        }
        return clone;
    };
    MultiRootTree.prototype.getObject = function () {
        return {
            rootIds: this.getRootIds(),
            nodes: this.getNodes(),
        };
    };
    MultiRootTree.prototype.toObject = function () {
        return this.getObject();
    };
    MultiRootTree.prototype.flatten = function () {
        var _this = this;
        var extraPropsObject = [];
        for (var i = 0; i < this.rootIds.length; i++) {
            var rootId = this.rootIds[i];
            extraPropsObject.push({
                id: rootId,
                level: 0,
                hasParent: false,
                childrenCount: 0,
            });
            traverse(rootId, this.nodes, extraPropsObject, 0);
        }
        for (var _i = 0, extraPropsObject_1 = extraPropsObject; _i < extraPropsObject_1.length; _i++) {
            var o = extraPropsObject_1[_i];
            o.childrenCount = countChildren(o.id);
        }
        return extraPropsObject;
        function countChildren(id) {
            if (!_this.nodes[id]) {
                return 0;
            }
            else {
                var childrenCount = _this.nodes[id].length;
                return childrenCount;
            }
        }
        function traverse(startId, nodes, returnArray, level) {
            if (level === void 0) { level = 0; }
            if (!startId || !nodes || !returnArray || !nodes[startId]) {
                return;
            }
            level++;
            var idsList = nodes[startId];
            for (var i = 0; i < idsList.length; i++) {
                var id = idsList[i];
                returnArray.push({ id: id, level: level, hasParent: true });
                traverse(id, nodes, returnArray, level);
            }
            level--;
        }
    };
    MultiRootTree.prototype.moveIdBeforeId = function (moveId, beforeId) {
        return this.moveId(moveId, beforeId, Direction.BEFORE);
    };
    MultiRootTree.prototype.moveIdAfterId = function (moveId, afterId) {
        return this.moveId(moveId, afterId, Direction.AFTER);
    };
    MultiRootTree.prototype.moveIdIntoId = function (moveId, insideId, atStart) {
        if (atStart === void 0) { atStart = true; }
        if (atStart) {
            return this.moveId(moveId, insideId, Direction.INSIDE_AT_START);
        }
        else {
            return this.moveId(moveId, insideId, Direction.INSIDE_AT_END);
        }
    };
    MultiRootTree.prototype.swapRootIdWithRootId = function (rootId, withRootId) {
        var leftIndex = this.findRootId(rootId);
        var rightIndex = this.findRootId(withRootId);
        this.swapRootPositionWithRootPosition(leftIndex, rightIndex);
    };
    MultiRootTree.prototype.swapRootPositionWithRootPosition = function (swapRootPosition, withRootPosition) {
        var temp = this.rootIds[withRootPosition];
        this.rootIds[withRootPosition] = this.rootIds[swapRootPosition];
        this.rootIds[swapRootPosition] = temp;
    };
    MultiRootTree.prototype.deleteId = function (id) {
        this.rootDeleteId(id);
        this.nodeAndSubNodesDelete(id);
        this.nodeRefrencesDelete(id);
    };
    MultiRootTree.prototype.insertIdBeforeId = function (beforeId, insertId) {
        var foundRootIdIndex = this.findRootId(beforeId);
        if (foundRootIdIndex > -1) {
            this.insertIdIntoRoot(insertId, foundRootIdIndex);
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                var foundNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                if (foundNodeIdIndex > -1) {
                    this.insertIdIntoNode(nodeKey, insertId, foundNodeIdIndex);
                }
            }
        }
    };
    MultiRootTree.prototype.insertIdAfterId = function (belowId, insertId) {
        var foundRootIdIndex = this.findRootId(belowId);
        if (foundRootIdIndex > -1) {
            this.insertIdIntoRoot(insertId, foundRootIdIndex + 1);
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                var foundNodeIdIndex = this.findNodeId(nodeKey, belowId);
                if (foundNodeIdIndex > -1) {
                    this.insertIdIntoNode(nodeKey, insertId, foundNodeIdIndex + 1);
                }
            }
        }
    };
    MultiRootTree.prototype.insertIdIntoId = function (insideId, insertId) {
        this.nodeInsertAtEnd(insideId, insertId);
        this.nodes[insertId] = [];
    };
    MultiRootTree.prototype.insertIdIntoRoot = function (id, position) {
        if (position === undefined) {
            this.rootInsertAtEnd(id);
        }
        else {
            if (position < 0) {
                var length_1 = this.rootIds.length;
                this.rootIds.splice((position + length_1 + 1), 0, id);
            }
            else {
                this.rootIds.splice(position, 0, id);
            }
        }
        this.nodes[id] = this.nodes[id] || [];
    };
    MultiRootTree.prototype.insertIdIntoNode = function (nodeKey, id, position) {
        this.nodes[nodeKey] = this.nodes[nodeKey] || [];
        this.nodes[id] = this.nodes[id] || [];
        if (position === undefined) {
            this.nodeInsertAtEnd(nodeKey, id);
        }
        else {
            if (position < 0) {
                var length_2 = this.nodes[nodeKey].length;
                this.nodes[nodeKey].splice((position + length_2 + 1), 0, id);
            }
            else {
                this.nodes[nodeKey].splice(position, 0, id);
            }
        }
    };
    MultiRootTree.prototype.moveId = function (moveId, beforeId, direction) {
        var sourceId = moveId;
        var sourceRootIndex = this.findRootId(sourceId);
        var sourceNodeKey;
        var sourceNodeIdIndex;
        if (this.nodes[beforeId]) {
            sourceNodeKey = beforeId;
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                sourceNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                break;
            }
        }
        // got all
        var targetId = beforeId;
        var targetRootIndex = this.findRootId(targetId);
        var targetNodeKey;
        var targetNodeIdIndex;
        if (this.nodes[beforeId]) {
            targetNodeKey = beforeId;
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                targetNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                break;
            }
        }
        // got all
        if (sourceRootIndex > -1) {
            if (targetRootIndex > -1) {
                // moving root to root
                // console.log(`Moving ROOT to ROOT`);
                // console.log(`RootIds:`);
                // console.log(this.rootIds);
                // console.log(`TargetIndex=${targetRootIndex}, SourceIndex=${sourceRootIndex}`);
                // console.log(`TargetId=${targetId}, SourceId=${sourceId}`);
                this.rootDelete(sourceRootIndex); // indexes change now
                if (targetRootIndex > sourceRootIndex) {
                    targetRootIndex--;
                }
                else {
                }
                switch (direction) {
                    case Direction.BEFORE:
                        this.insertIdIntoRoot(sourceId, targetRootIndex);
                        break;
                    case Direction.AFTER:
                        this.insertIdIntoRoot(sourceId, targetRootIndex + 1);
                        break;
                    case Direction.INSIDE_AT_START:
                        this.nodeInsertAtStart(targetId, sourceId);
                        break;
                    case Direction.INSIDE_AT_END:
                        this.nodeInsertAtEnd(targetId, sourceId);
                        break;
                }
            }
            else {
                // moving root (source) ABOVE node (target)
                // will remove one entry from roots
                this.rootDelete(sourceRootIndex);
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, targetId);
                        if (index > -1) {
                            switch (direction) {
                                case Direction.BEFORE:
                                    this.insertIdIntoNode(nodeKey, sourceId, index);
                                    break;
                                case Direction.AFTER:
                                    this.insertIdIntoNode(nodeKey, sourceId, index + 1);
                                    break;
                                case Direction.INSIDE_AT_START:
                                    this.nodeInsertAtStart(targetId, sourceId);
                                    break;
                                case Direction.INSIDE_AT_END:
                                    this.nodeInsertAtEnd(targetId, sourceId);
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
        else {
            if (targetRootIndex > -1) {
                // moving node (source) ABOVE root (target)
                // delete source id from each node
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, sourceId);
                        if (index > -1) {
                            // this.nodeInsertId(nodeKey, sourceId, index);
                            this.nodeDeleteAtIndex(nodeKey, index);
                            break;
                        }
                    }
                }
                switch (direction) {
                    case Direction.BEFORE:
                        this.insertIdIntoRoot(sourceId, targetRootIndex);
                        break;
                    case Direction.AFTER:
                        this.insertIdIntoRoot(sourceId, targetRootIndex + 1);
                        break;
                    case Direction.INSIDE_AT_START:
                        this.nodeInsertAtStart(targetId, sourceId);
                        break;
                    case Direction.INSIDE_AT_END:
                        this.nodeInsertAtEnd(targetId, sourceId);
                        break;
                }
            }
            else {
                // moving node (source) ABOVE node (target)
                // delete source id from each node
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, sourceId);
                        if (index > -1) {
                            this.nodeDeleteAtIndex(nodeKey, index);
                            break;
                        }
                    }
                }
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, targetId);
                        if (index > -1) {
                            switch (direction) {
                                case Direction.BEFORE:
                                    this.insertIdIntoNode(nodeKey, sourceId, index);
                                    break;
                                case Direction.AFTER:
                                    this.insertIdIntoNode(nodeKey, sourceId, index + 1);
                                    break;
                                case Direction.INSIDE_AT_START:
                                    this.nodeInsertAtStart(targetId, sourceId);
                                    break;
                                case Direction.INSIDE_AT_END:
                                    this.nodeInsertAtEnd(targetId, sourceId);
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
    };
    MultiRootTree.prototype.swapArrayElements = function (arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    };
    MultiRootTree.prototype.rootDeleteId = function (id) {
        var index = this.findRootId(id);
        if (index > -1) {
            this.rootDelete(index);
        }
    };
    MultiRootTree.prototype.nodeAndSubNodesDelete = function (nodeKey) {
        var toDeleteLater = [];
        for (var i = 0; i < this.nodes[nodeKey].length; i++) {
            var id = this.nodes[nodeKey][i];
            this.nodeAndSubNodesDelete(id);
            toDeleteLater.push(nodeKey);
        }
        this.nodeDelete(nodeKey);
        for (var i = 0; i < toDeleteLater.length; i++) {
            this.nodeDelete(toDeleteLater[i]);
        }
    };
    MultiRootTree.prototype.nodeRefrencesDelete = function (id) {
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                for (var i = 0; i < this.nodes[nodeKey].length; i++) {
                    var targetId = this.nodes[nodeKey][i];
                    if (targetId === id) {
                        this.nodeDeleteAtIndex(nodeKey, i);
                    }
                }
            }
        }
    };
    MultiRootTree.prototype.nodeDelete = function (nodeKey) {
        delete this.nodes[nodeKey];
    };
    MultiRootTree.prototype.findRootId = function (id) {
        return this.rootIds.indexOf(id);
    };
    MultiRootTree.prototype.findNodeId = function (nodeKey, id) {
        return this.nodes[nodeKey].indexOf(id);
    };
    MultiRootTree.prototype.findNode = function (nodeKey) {
        return this.nodes[nodeKey];
    };
    MultiRootTree.prototype.nodeInsertAtStart = function (nodeKey, id) {
        this.nodes[nodeKey].unshift(id);
    };
    MultiRootTree.prototype.nodeInsertAtEnd = function (nodeKey, id) {
        this.nodes[nodeKey].push(id);
    };
    MultiRootTree.prototype.rootDelete = function (index) {
        this.rootIds.splice(index, 1);
    };
    MultiRootTree.prototype.nodeDeleteAtIndex = function (nodeKey, index) {
        this.nodes[nodeKey].splice(index, 1);
    };
    MultiRootTree.prototype.rootInsertAtStart = function (id) {
        this.rootIds.unshift(id);
    };
    MultiRootTree.prototype.rootInsertAtEnd = function (id) {
        this.rootIds.push(id);
    };
    return MultiRootTree;
}());
exports.default = MultiRootTree;
//# sourceMappingURL=MultiRootTree.js.map
});
return ___scope___.entry = "dist/lib/index.js";
});
FuseBox.pkg("sanctuary-type-classes", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

/*
             ############                  #
            ############                  ###
                  #####                  #####
                #####      ####################
              #####       ######################
            #####                     ###########
          #####         ######################
        #####          ####################
      #####                        #####
     ############                 ###
    ############                 */

//. # sanctuary-type-classes
//.
//. The [Fantasy Land Specification][FL] "specifies interoperability of common
//. algebraic structures" by defining a number of type classes. For each type
//. class, it states laws which every member of a type must obey in order for
//. the type to be a member of the type class. In order for the Maybe type to
//. be considered a [Functor][], for example, every `Maybe a` value must have
//. a `fantasy-land/map` method which obeys the identity and composition laws.
//.
//. This project provides:
//.
//.   - [`TypeClass`](#TypeClass), a function for defining type classes;
//.   - one `TypeClass` value for each Fantasy Land type class;
//.   - lawful Fantasy Land methods for JavaScript's built-in types;
//.   - one function for each Fantasy Land method; and
//.   - several functions derived from these functions.
//.
//. ## Type-class hierarchy
//.
/* eslint-disable max-len */
//. <pre>
//.  Setoid   Semigroupoid  Semigroup   Foldable        Functor      Contravariant  Filterable
//. (equals)    (compose)    (concat)   (reduce)         (map)        (contramap)    (filter)
//.     |           |           |           \         / | | | | \
//.     |           |           |            \       /  | | | |  \
//.     |           |           |             \     /   | | | |   \
//.     |           |           |              \   /    | | | |    \
//.     |           |           |               \ /     | | | |     \
//.    Ord      Category     Monoid         Traversable | | | |      \
//.   (lte)       (id)       (empty)        (traverse)  / | | \       \
//.                             |                      /  | |  \       \
//.                             |                     /   / \   \       \
//.                             |             Profunctor /   \ Bifunctor \
//.                             |              (promap) /     \ (bimap)   \
//.                             |                      /       \           \
//.                           Group                   /         \           \
//.                          (invert)               Alt        Apply      Extend
//.                                                (alt)        (ap)     (extend)
//.                                                 /           / \           \
//.                                                /           /   \           \
//.                                               /           /     \           \
//.                                              /           /       \           \
//.                                             /           /         \           \
//.                                           Plus    Applicative    Chain      Comonad
//.                                          (zero)       (of)      (chain)    (extract)
//.                                             \         / \         / \
//.                                              \       /   \       /   \
//.                                               \     /     \     /     \
//.                                                \   /       \   /       \
//.                                                 \ /         \ /         \
//.                                             Alternative    Monad     ChainRec
//.                                                                     (chainRec)
//. </pre>
/* eslint-enable max-len */
//.
//. ## API

(function(f) {

  'use strict';

  /* istanbul ignore else */
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = f(require('sanctuary-type-identifiers'));
  } else if (typeof define === 'function' && define.amd != null) {
    define(['sanctuary-type-identifiers'], f);
  } else {
    self.sanctuaryTypeClasses = f(self.sanctuaryTypeIdentifiers);
  }

}(function(type) {

  'use strict';

  /* istanbul ignore if */
  if (typeof __doctest !== 'undefined') {
    /* global __doctest:false */
    /* eslint-disable no-unused-vars */
    var Identity = __doctest.require('./test/Identity');
    var List = __doctest.require('./test/List');
    var Maybe = __doctest.require('./test/Maybe');
    var Sum = __doctest.require('./test/Sum');
    var Tuple = __doctest.require('./test/Tuple');

    var Nil = List.Nil, Cons = List.Cons;
    var Nothing = Maybe.Nothing, Just = Maybe.Just;
    /* eslint-enable no-unused-vars */
  }

  //  concat_ :: Array a -> Array a -> Array a
  function concat_(xs) {
    return function(ys) {
      return xs.concat(ys);
    };
  }

  //  constant :: a -> b -> a
  function constant(x) {
    return function(y) {
      return x;
    };
  }

  //  forEachKey :: (StrMap a, StrMap a ~> String -> Undefined) -> Undefined
  function forEachKey(strMap, f) {
    Object.keys(strMap).forEach(f, strMap);
  }

  //  has :: (String, Object) -> Boolean
  function has(k, o) {
    return Object.prototype.hasOwnProperty.call(o, k);
  }

  //  identity :: a -> a
  function identity(x) { return x; }

  //  pair :: a -> b -> Array2 a b
  function pair(x) {
    return function(y) {
      return [x, y];
    };
  }

  //  sameType :: (a, b) -> Boolean
  function sameType(x, y) {
    return typeof x === typeof y && type(x) === type(y);
  }

  //  thrush :: a -> (a -> b) -> b
  function thrush(x) {
    return function(f) {
      return f(x);
    };
  }

  //  type Iteration a = { value :: a, done :: Boolean }

  //  iterationNext :: a -> Iteration a
  function iterationNext(x) { return {value: x, done: false}; }

  //  iterationDone :: a -> Iteration a
  function iterationDone(x) { return {value: x, done: true}; }

  //# TypeClass :: (String, String, Array TypeClass, a -> Boolean) -> TypeClass
  //.
  //. The arguments are:
  //.
  //.   - the name of the type class, prefixed by its npm package name;
  //.   - the documentation URL of the type class;
  //.   - an array of dependencies; and
  //.   - a predicate which accepts any JavaScript value and returns `true`
  //.     if the value satisfies the requirements of the type class; `false`
  //.     otherwise.
  //.
  //. Example:
  //.
  //. ```javascript
  //. //    hasMethod :: String -> a -> Boolean
  //. const hasMethod = name => x => x != null && typeof x[name] == 'function';
  //.
  //. //    Foo :: TypeClass
  //. const Foo = Z.TypeClass(
  //.   'my-package/Foo',
  //.   'http://example.com/my-package#Foo',
  //.   [],
  //.   hasMethod('foo')
  //. );
  //.
  //. //    Bar :: TypeClass
  //. const Bar = Z.TypeClass(
  //.   'my-package/Bar',
  //.   'http://example.com/my-package#Bar',
  //.   [Foo],
  //.   hasMethod('bar')
  //. );
  //. ```
  //.
  //. Types whose values have a `foo` method are members of the Foo type class.
  //. Members of the Foo type class whose values have a `bar` method are also
  //. members of the Bar type class.
  //.
  //. Each `TypeClass` value has a `test` field: a function which accepts
  //. any JavaScript value and returns `true` if the value satisfies the
  //. type class's predicate and the predicates of all the type class's
  //. dependencies; `false` otherwise.
  //.
  //. `TypeClass` values may be used with [sanctuary-def][type-classes]
  //. to define parametrically polymorphic functions which verify their
  //. type-class constraints at run time.
  function TypeClass(name, url, dependencies, test) {
    if (!(this instanceof TypeClass)) {
      return new TypeClass(name, url, dependencies, test);
    }
    this.name = name;
    this.url = url;
    this.test = function(x) {
      return dependencies.every(function(d) { return d.test(x); }) && test(x);
    };
  }

  TypeClass['@@type'] = 'sanctuary-type-classes/TypeClass';

  //  data Location = Constructor | Value

  //  Constructor :: Location
  var Constructor = 'Constructor';

  //  Value :: Location
  var Value = 'Value';

  //  _funcPath :: (Boolean, Array String, a) -> Nullable Function
  function _funcPath(allowInheritedProps, path, _x) {
    var x = _x;
    for (var idx = 0; idx < path.length; idx += 1) {
      var k = path[idx];
      if (x == null || !(allowInheritedProps || has(k, x))) return null;
      x = x[k];
    }
    return typeof x === 'function' ? x : null;
  }

  //  funcPath :: (Array String, a) -> Nullable Function
  function funcPath(path, x) {
    return _funcPath(true, path, x);
  }

  //  implPath :: Array String -> Nullable Function
  function implPath(path) {
    return _funcPath(false, path, implementations);
  }

  //  functionName :: Function -> String
  var functionName = has('name', function f() {}) ?
    function functionName(f) { return f.name; } :
    /* istanbul ignore next */
    function functionName(f) {
      var match = /function (\w*)/.exec(f);
      return match == null ? '' : match[1];
    };

  //  $ :: (String, Array TypeClass, StrMap (Array Location)) -> TypeClass
  function $(_name, dependencies, requirements) {
    function getBoundMethod(_name) {
      var name = 'fantasy-land/' + _name;
      return requirements[_name] === Constructor ?
        function(typeRep) {
          var f = funcPath([name], typeRep);
          return f == null && typeof typeRep === 'function' ?
            implPath([functionName(typeRep), name]) :
            f;
        } :
        function(x) {
          var isPrototype = x != null &&
                            x.constructor != null &&
                            x.constructor.prototype === x;
          var m = null;
          if (!isPrototype) m = funcPath([name], x);
          if (m == null)    m = implPath([type(x), 'prototype', name]);
          return m && m.bind(x);
        };
    }

    var version = '9.0.0';  // updated programmatically
    var keys = Object.keys(requirements);

    var typeClass = TypeClass(
      'sanctuary-type-classes/' + _name,
      'https://github.com/sanctuary-js/sanctuary-type-classes/tree/v' + version
        + '#' + _name,
      dependencies,
      function(x) {
        return keys.every(function(_name) {
          var arg = requirements[_name] === Constructor ? x.constructor : x;
          return getBoundMethod(_name)(arg) != null;
        });
      }
    );

    typeClass.methods = keys.reduce(function(methods, _name) {
      methods[_name] = getBoundMethod(_name);
      return methods;
    }, {});

    return typeClass;
  }

  //# Setoid :: TypeClass
  //.
  //. `TypeClass` value for [Setoid][].
  //.
  //. ```javascript
  //. > Setoid.test(null)
  //. true
  //. ```
  var Setoid = $('Setoid', [], {equals: Value});

  //# Ord :: TypeClass
  //.
  //. `TypeClass` value for [Ord][].
  //.
  //. ```javascript
  //. > Ord.test(0)
  //. true
  //.
  //. > Ord.test(Math.sqrt)
  //. false
  //. ```
  var Ord = $('Ord', [Setoid], {lte: Value});

  //# Semigroupoid :: TypeClass
  //.
  //. `TypeClass` value for [Semigroupoid][].
  //.
  //. ```javascript
  //. > Semigroupoid.test(Math.sqrt)
  //. true
  //.
  //. > Semigroupoid.test(0)
  //. false
  //. ```
  var Semigroupoid = $('Semigroupoid', [], {compose: Value});

  //# Category :: TypeClass
  //.
  //. `TypeClass` value for [Category][].
  //.
  //. ```javascript
  //. > Category.test(Math.sqrt)
  //. true
  //.
  //. > Category.test(0)
  //. false
  //. ```
  var Category = $('Category', [Semigroupoid], {id: Constructor});

  //# Semigroup :: TypeClass
  //.
  //. `TypeClass` value for [Semigroup][].
  //.
  //. ```javascript
  //. > Semigroup.test('')
  //. true
  //.
  //. > Semigroup.test(0)
  //. false
  //. ```
  var Semigroup = $('Semigroup', [], {concat: Value});

  //# Monoid :: TypeClass
  //.
  //. `TypeClass` value for [Monoid][].
  //.
  //. ```javascript
  //. > Monoid.test('')
  //. true
  //.
  //. > Monoid.test(0)
  //. false
  //. ```
  var Monoid = $('Monoid', [Semigroup], {empty: Constructor});

  //# Group :: TypeClass
  //.
  //. `TypeClass` value for [Group][].
  //.
  //. ```javascript
  //. > Group.test(Sum(0))
  //. true
  //.
  //. > Group.test('')
  //. false
  //. ```
  var Group = $('Group', [Monoid], {invert: Value});

  //# Filterable :: TypeClass
  //.
  //. `TypeClass` value for [Filterable][].
  //.
  //. ```javascript
  //. > Filterable.test({})
  //. true
  //.
  //. > Filterable.test('')
  //. false
  //. ```
  var Filterable = $('Filterable', [], {filter: Value});

  //# Functor :: TypeClass
  //.
  //. `TypeClass` value for [Functor][].
  //.
  //. ```javascript
  //. > Functor.test([])
  //. true
  //.
  //. > Functor.test('')
  //. false
  //. ```
  var Functor = $('Functor', [], {map: Value});

  //# Bifunctor :: TypeClass
  //.
  //. `TypeClass` value for [Bifunctor][].
  //.
  //. ```javascript
  //. > Bifunctor.test(Tuple('foo', 64))
  //. true
  //.
  //. > Bifunctor.test([])
  //. false
  //. ```
  var Bifunctor = $('Bifunctor', [Functor], {bimap: Value});

  //# Profunctor :: TypeClass
  //.
  //. `TypeClass` value for [Profunctor][].
  //.
  //. ```javascript
  //. > Profunctor.test(Math.sqrt)
  //. true
  //.
  //. > Profunctor.test([])
  //. false
  //. ```
  var Profunctor = $('Profunctor', [Functor], {promap: Value});

  //# Apply :: TypeClass
  //.
  //. `TypeClass` value for [Apply][].
  //.
  //. ```javascript
  //. > Apply.test([])
  //. true
  //.
  //. > Apply.test('')
  //. false
  //. ```
  var Apply = $('Apply', [Functor], {ap: Value});

  //# Applicative :: TypeClass
  //.
  //. `TypeClass` value for [Applicative][].
  //.
  //. ```javascript
  //. > Applicative.test([])
  //. true
  //.
  //. > Applicative.test({})
  //. false
  //. ```
  var Applicative = $('Applicative', [Apply], {of: Constructor});

  //# Chain :: TypeClass
  //.
  //. `TypeClass` value for [Chain][].
  //.
  //. ```javascript
  //. > Chain.test([])
  //. true
  //.
  //. > Chain.test({})
  //. false
  //. ```
  var Chain = $('Chain', [Apply], {chain: Value});

  //# ChainRec :: TypeClass
  //.
  //. `TypeClass` value for [ChainRec][].
  //.
  //. ```javascript
  //. > ChainRec.test([])
  //. true
  //.
  //. > ChainRec.test({})
  //. false
  //. ```
  var ChainRec = $('ChainRec', [Chain], {chainRec: Constructor});

  //# Monad :: TypeClass
  //.
  //. `TypeClass` value for [Monad][].
  //.
  //. ```javascript
  //. > Monad.test([])
  //. true
  //.
  //. > Monad.test({})
  //. false
  //. ```
  var Monad = $('Monad', [Applicative, Chain], {});

  //# Alt :: TypeClass
  //.
  //. `TypeClass` value for [Alt][].
  //.
  //. ```javascript
  //. > Alt.test({})
  //. true
  //.
  //. > Alt.test('')
  //. false
  //. ```
  var Alt = $('Alt', [Functor], {alt: Value});

  //# Plus :: TypeClass
  //.
  //. `TypeClass` value for [Plus][].
  //.
  //. ```javascript
  //. > Plus.test({})
  //. true
  //.
  //. > Plus.test('')
  //. false
  //. ```
  var Plus = $('Plus', [Alt], {zero: Constructor});

  //# Alternative :: TypeClass
  //.
  //. `TypeClass` value for [Alternative][].
  //.
  //. ```javascript
  //. > Alternative.test([])
  //. true
  //.
  //. > Alternative.test({})
  //. false
  //. ```
  var Alternative = $('Alternative', [Applicative, Plus], {});

  //# Foldable :: TypeClass
  //.
  //. `TypeClass` value for [Foldable][].
  //.
  //. ```javascript
  //. > Foldable.test({})
  //. true
  //.
  //. > Foldable.test('')
  //. false
  //. ```
  var Foldable = $('Foldable', [], {reduce: Value});

  //# Traversable :: TypeClass
  //.
  //. `TypeClass` value for [Traversable][].
  //.
  //. ```javascript
  //. > Traversable.test([])
  //. true
  //.
  //. > Traversable.test('')
  //. false
  //. ```
  var Traversable = $('Traversable', [Functor, Foldable], {traverse: Value});

  //# Extend :: TypeClass
  //.
  //. `TypeClass` value for [Extend][].
  //.
  //. ```javascript
  //. > Extend.test([])
  //. true
  //.
  //. > Extend.test({})
  //. false
  //. ```
  var Extend = $('Extend', [Functor], {extend: Value});

  //# Comonad :: TypeClass
  //.
  //. `TypeClass` value for [Comonad][].
  //.
  //. ```javascript
  //. > Comonad.test(Identity(0))
  //. true
  //.
  //. > Comonad.test([])
  //. false
  //. ```
  var Comonad = $('Comonad', [Extend], {extract: Value});

  //# Contravariant :: TypeClass
  //.
  //. `TypeClass` value for [Contravariant][].
  //.
  //. ```javascript
  //. > Contravariant.test(Math.sqrt)
  //. true
  //.
  //. > Contravariant.test([])
  //. false
  //. ```
  var Contravariant = $('Contravariant', [], {contramap: Value});

  //  Null$prototype$equals :: Null ~> Null -> Boolean
  function Null$prototype$equals(other) {
    return true;
  }

  //  Null$prototype$lte :: Null ~> Null -> Boolean
  function Null$prototype$lte(other) {
    return true;
  }

  //  Undefined$prototype$equals :: Undefined ~> Undefined -> Boolean
  function Undefined$prototype$equals(other) {
    return true;
  }

  //  Undefined$prototype$lte :: Undefined ~> Undefined -> Boolean
  function Undefined$prototype$lte(other) {
    return true;
  }

  //  Boolean$prototype$equals :: Boolean ~> Boolean -> Boolean
  function Boolean$prototype$equals(other) {
    return typeof this === 'object' ?
      equals(this.valueOf(), other.valueOf()) :
      this === other;
  }

  //  Boolean$prototype$lte :: Boolean ~> Boolean -> Boolean
  function Boolean$prototype$lte(other) {
    return typeof this === 'object' ?
      lte(this.valueOf(), other.valueOf()) :
      this === false || other === true;
  }

  //  Number$prototype$equals :: Number ~> Number -> Boolean
  function Number$prototype$equals(other) {
    return typeof this === 'object' ?
      equals(this.valueOf(), other.valueOf()) :
      isNaN(this) && isNaN(other) || this === other;
  }

  //  Number$prototype$lte :: Number ~> Number -> Boolean
  function Number$prototype$lte(other) {
    return typeof this === 'object' ?
      lte(this.valueOf(), other.valueOf()) :
      isNaN(this) || this <= other;
  }

  //  Date$prototype$equals :: Date ~> Date -> Boolean
  function Date$prototype$equals(other) {
    return equals(this.valueOf(), other.valueOf());
  }

  //  Date$prototype$lte :: Date ~> Date -> Boolean
  function Date$prototype$lte(other) {
    return lte(this.valueOf(), other.valueOf());
  }

  //  RegExp$prototype$equals :: RegExp ~> RegExp -> Boolean
  function RegExp$prototype$equals(other) {
    return other.source === this.source &&
           other.global === this.global &&
           other.ignoreCase === this.ignoreCase &&
           other.multiline === this.multiline &&
           other.sticky === this.sticky &&
           other.unicode === this.unicode;
  }

  //  String$empty :: () -> String
  function String$empty() {
    return '';
  }

  //  String$prototype$equals :: String ~> String -> Boolean
  function String$prototype$equals(other) {
    return typeof this === 'object' ?
      equals(this.valueOf(), other.valueOf()) :
      this === other;
  }

  //  String$prototype$lte :: String ~> String -> Boolean
  function String$prototype$lte(other) {
    return typeof this === 'object' ?
      lte(this.valueOf(), other.valueOf()) :
      this <= other;
  }

  //  String$prototype$concat :: String ~> String -> String
  function String$prototype$concat(other) {
    return this + other;
  }

  //  Array$empty :: () -> Array a
  function Array$empty() {
    return [];
  }

  //  Array$of :: a -> Array a
  function Array$of(x) {
    return [x];
  }

  //  Array$chainRec :: ((a -> c, b -> c, a) -> Array c, a) -> Array b
  function Array$chainRec(f, x) {
    var result = [];
    var nil = {};
    var todo = {head: x, tail: nil};
    while (todo !== nil) {
      var more = nil;
      var steps = f(iterationNext, iterationDone, todo.head);
      for (var idx = 0; idx < steps.length; idx += 1) {
        var step = steps[idx];
        if (step.done) {
          result.push(step.value);
        } else {
          more = {head: step.value, tail: more};
        }
      }
      todo = todo.tail;
      while (more !== nil) {
        todo = {head: more.head, tail: todo};
        more = more.tail;
      }
    }
    return result;
  }

  //  Array$zero :: () -> Array a
  function Array$zero() {
    return [];
  }

  //  Array$prototype$equals :: Array a ~> Array a -> Boolean
  function Array$prototype$equals(other) {
    if (other.length !== this.length) return false;
    for (var idx = 0; idx < this.length; idx += 1) {
      if (!equals(this[idx], other[idx])) return false;
    }
    return true;
  }

  //  Array$prototype$lte :: Array a ~> Array a -> Boolean
  function Array$prototype$lte(other) {
    for (var idx = 0; true; idx += 1) {
      if (idx === this.length) return true;
      if (idx === other.length) return false;
      if (!equals(this[idx], other[idx])) return lte(this[idx], other[idx]);
    }
  }

  //  Array$prototype$concat :: Array a ~> Array a -> Array a
  function Array$prototype$concat(other) {
    return this.concat(other);
  }

  //  Array$prototype$filter :: Array a ~> (a -> Boolean) -> Array a
  function Array$prototype$filter(pred) {
    return this.filter(function(x) { return pred(x); });
  }

  //  Array$prototype$map :: Array a ~> (a -> b) -> Array b
  function Array$prototype$map(f) {
    return this.map(function(x) { return f(x); });
  }

  //  Array$prototype$ap :: Array a ~> Array (a -> b) -> Array b
  function Array$prototype$ap(fs) {
    var result = [];
    for (var idx = 0; idx < fs.length; idx += 1) {
      for (var idx2 = 0; idx2 < this.length; idx2 += 1) {
        result.push(fs[idx](this[idx2]));
      }
    }
    return result;
  }

  //  Array$prototype$chain :: Array a ~> (a -> Array b) -> Array b
  function Array$prototype$chain(f) {
    var result = [];
    for (var idx = 0; idx < this.length; idx += 1) {
      for (var idx2 = 0, xs = f(this[idx]); idx2 < xs.length; idx2 += 1) {
        result.push(xs[idx2]);
      }
    }
    return result;
  }

  //  Array$prototype$alt :: Array a ~> Array a -> Array a
  var Array$prototype$alt = Array$prototype$concat;

  //  Array$prototype$reduce :: Array a ~> ((b, a) -> b, b) -> b
  function Array$prototype$reduce(f, initial) {
    var acc = initial;
    for (var idx = 0; idx < this.length; idx += 1) acc = f(acc, this[idx]);
    return acc;
  }

  //  Array$prototype$traverse :: Applicative f => Array a ~> (TypeRep f, a -> f b) -> f (Array b)
  function Array$prototype$traverse(typeRep, f) {
    var xs = this;
    function go(idx, n) {
      switch (n) {
        case 0: return of(typeRep, []);
        case 2: return lift2(pair, f(xs[idx]), f(xs[idx + 1]));
        default:
          var m = Math.floor(n / 4) * 2;
          return lift2(concat_, go(idx, m), go(idx + m, n - m));
      }
    }
    return this.length % 2 === 1 ?
      lift2(concat_, map(Array$of, f(this[0])), go(1, this.length - 1)) :
      go(0, this.length);
  }

  //  Array$prototype$extend :: Array a ~> (Array a -> b) -> Array b
  function Array$prototype$extend(f) {
    return this.map(function(_, idx, xs) { return f(xs.slice(idx)); });
  }

  //  Arguments$prototype$equals :: Arguments ~> Arguments -> Boolean
  function Arguments$prototype$equals(other) {
    return Array$prototype$equals.call(this, other);
  }

  //  Arguments$prototype$lte :: Arguments ~> Arguments -> Boolean
  function Arguments$prototype$lte(other) {
    return Array$prototype$lte.call(this, other);
  }

  //  Error$prototype$equals :: Error ~> Error -> Boolean
  function Error$prototype$equals(other) {
    return equals(this.name, other.name) &&
           equals(this.message, other.message);
  }

  //  Object$empty :: () -> StrMap a
  function Object$empty() {
    return {};
  }

  //  Object$zero :: () -> StrMap a
  function Object$zero() {
    return {};
  }

  //  Object$prototype$equals :: StrMap a ~> StrMap a -> Boolean
  function Object$prototype$equals(other) {
    var self = this;
    var keys = Object.keys(this).sort();
    return equals(keys, Object.keys(other).sort()) &&
           keys.every(function(k) { return equals(self[k], other[k]); });
  }

  //  Object$prototype$lte :: StrMap a ~> StrMap a -> Boolean
  function Object$prototype$lte(other) {
    var theseKeys = Object.keys(this).sort();
    var otherKeys = Object.keys(other).sort();
    while (true) {
      if (theseKeys.length === 0) return true;
      if (otherKeys.length === 0) return false;
      var k = theseKeys.shift();
      var z = otherKeys.shift();
      if (k < z) return true;
      if (k > z) return false;
      if (!equals(this[k], other[k])) return lte(this[k], other[k]);
    }
  }

  //  Object$prototype$concat :: StrMap a ~> StrMap a -> StrMap a
  function Object$prototype$concat(other) {
    var result = {};
    function assign(k) { result[k] = this[k]; }
    forEachKey(this, assign);
    forEachKey(other, assign);
    return result;
  }

  //  Object$prototype$filter :: StrMap a ~> (a -> Boolean) -> StrMap a
  function Object$prototype$filter(pred) {
    var result = {};
    forEachKey(this, function(k) { if (pred(this[k])) result[k] = this[k]; });
    return result;
  }

  //  Object$prototype$map :: StrMap a ~> (a -> b) -> StrMap b
  function Object$prototype$map(f) {
    var result = {};
    forEachKey(this, function(k) { result[k] = f(this[k]); });
    return result;
  }

  //  Object$prototype$ap :: StrMap a ~> StrMap (a -> b) -> StrMap b
  function Object$prototype$ap(other) {
    var result = {};
    forEachKey(this, function(k) {
      if (has(k, other)) result[k] = other[k](this[k]);
    });
    return result;
  }

  //  Object$prototype$alt :: StrMap a ~> StrMap a -> StrMap a
  var Object$prototype$alt = Object$prototype$concat;

  //  Object$prototype$reduce :: StrMap a ~> ((b, a) -> b, b) -> b
  function Object$prototype$reduce(f, initial) {
    var self = this;
    function reducer(acc, k) { return f(acc, self[k]); }
    return Object.keys(this).sort().reduce(reducer, initial);
  }

  //  Object$prototype$traverse :: Applicative f => StrMap a ~> (TypeRep f, a -> f b) -> f (StrMap b)
  function Object$prototype$traverse(typeRep, f) {
    var self = this;
    return Object.keys(this).reduce(function(applicative, k) {
      function set(o) {
        return function(v) {
          var singleton = {}; singleton[k] = v;
          return Object$prototype$concat.call(o, singleton);
        };
      }
      return lift2(set, applicative, f(self[k]));
    }, of(typeRep, {}));
  }

  //  Function$id :: () -> a -> a
  function Function$id() {
    return identity;
  }

  //  Function$of :: b -> (a -> b)
  function Function$of(x) {
    return function(_) { return x; };
  }

  //  Function$chainRec :: ((a -> c, b -> c, a) -> (z -> c), a) -> (z -> b)
  function Function$chainRec(f, x) {
    return function(a) {
      var step = iterationNext(x);
      while (!step.done) {
        step = f(iterationNext, iterationDone, step.value)(a);
      }
      return step.value;
    };
  }

  //  Function$prototype$equals :: Function ~> Function -> Boolean
  function Function$prototype$equals(other) {
    return other === this;
  }

  //  Function$prototype$compose :: (a -> b) ~> (b -> c) -> (a -> c)
  function Function$prototype$compose(other) {
    var semigroupoid = this;
    return function(x) { return other(semigroupoid(x)); };
  }

  //  Function$prototype$map :: (a -> b) ~> (b -> c) -> (a -> c)
  function Function$prototype$map(f) {
    var functor = this;
    return function(x) { return f(functor(x)); };
  }

  //  Function$prototype$promap :: (b -> c) ~> (a -> b, c -> d) -> (a -> d)
  function Function$prototype$promap(f, g) {
    var profunctor = this;
    return function(x) { return g(profunctor(f(x))); };
  }

  //  Function$prototype$ap :: (a -> b) ~> (a -> b -> c) -> (a -> c)
  function Function$prototype$ap(f) {
    var apply = this;
    return function(x) { return f(x)(apply(x)); };
  }

  //  Function$prototype$chain :: (a -> b) ~> (b -> a -> c) -> (a -> c)
  function Function$prototype$chain(f) {
    var chain = this;
    return function(x) { return f(chain(x))(x); };
  }

  //  Function$prototype$extend :: Semigroup a => (a -> b) ~> ((a -> b) -> c) -> (a -> c)
  function Function$prototype$extend(f) {
    var extend = this;
    return function(x) {
      return f(function(y) { return extend(concat(x, y)); });
    };
  }

  //  Function$prototype$contramap :: (b -> c) ~> (a -> b) -> (a -> c)
  function Function$prototype$contramap(f) {
    var contravariant = this;
    return function(x) { return contravariant(f(x)); };
  }

  /* eslint-disable key-spacing */
  var implementations = {
    Null: {
      'prototype': {
        'fantasy-land/equals':      Null$prototype$equals,
        'fantasy-land/lte':         Null$prototype$lte
      }
    },
    Undefined: {
      'prototype': {
        'fantasy-land/equals':      Undefined$prototype$equals,
        'fantasy-land/lte':         Undefined$prototype$lte
      }
    },
    Boolean: {
      'prototype': {
        'fantasy-land/equals':      Boolean$prototype$equals,
        'fantasy-land/lte':         Boolean$prototype$lte
      }
    },
    Number: {
      'prototype': {
        'fantasy-land/equals':      Number$prototype$equals,
        'fantasy-land/lte':         Number$prototype$lte
      }
    },
    Date: {
      'prototype': {
        'fantasy-land/equals':      Date$prototype$equals,
        'fantasy-land/lte':         Date$prototype$lte
      }
    },
    RegExp: {
      'prototype': {
        'fantasy-land/equals':      RegExp$prototype$equals
      }
    },
    String: {
      'fantasy-land/empty':         String$empty,
      'prototype': {
        'fantasy-land/equals':      String$prototype$equals,
        'fantasy-land/lte':         String$prototype$lte,
        'fantasy-land/concat':      String$prototype$concat
      }
    },
    Array: {
      'fantasy-land/empty':         Array$empty,
      'fantasy-land/of':            Array$of,
      'fantasy-land/chainRec':      Array$chainRec,
      'fantasy-land/zero':          Array$zero,
      'prototype': {
        'fantasy-land/equals':      Array$prototype$equals,
        'fantasy-land/lte':         Array$prototype$lte,
        'fantasy-land/concat':      Array$prototype$concat,
        'fantasy-land/filter':      Array$prototype$filter,
        'fantasy-land/map':         Array$prototype$map,
        'fantasy-land/ap':          Array$prototype$ap,
        'fantasy-land/chain':       Array$prototype$chain,
        'fantasy-land/alt':         Array$prototype$alt,
        'fantasy-land/reduce':      Array$prototype$reduce,
        'fantasy-land/traverse':    Array$prototype$traverse,
        'fantasy-land/extend':      Array$prototype$extend
      }
    },
    Arguments: {
      'prototype': {
        'fantasy-land/equals':      Arguments$prototype$equals,
        'fantasy-land/lte':         Arguments$prototype$lte
      }
    },
    Error: {
      'prototype': {
        'fantasy-land/equals':      Error$prototype$equals
      }
    },
    Object: {
      'fantasy-land/empty':         Object$empty,
      'fantasy-land/zero':          Object$zero,
      'prototype': {
        'fantasy-land/equals':      Object$prototype$equals,
        'fantasy-land/lte':         Object$prototype$lte,
        'fantasy-land/concat':      Object$prototype$concat,
        'fantasy-land/filter':      Object$prototype$filter,
        'fantasy-land/map':         Object$prototype$map,
        'fantasy-land/ap':          Object$prototype$ap,
        'fantasy-land/alt':         Object$prototype$alt,
        'fantasy-land/reduce':      Object$prototype$reduce,
        'fantasy-land/traverse':    Object$prototype$traverse
      }
    },
    Function: {
      'fantasy-land/id':            Function$id,
      'fantasy-land/of':            Function$of,
      'fantasy-land/chainRec':      Function$chainRec,
      'prototype': {
        'fantasy-land/equals':      Function$prototype$equals,
        'fantasy-land/compose':     Function$prototype$compose,
        'fantasy-land/map':         Function$prototype$map,
        'fantasy-land/promap':      Function$prototype$promap,
        'fantasy-land/ap':          Function$prototype$ap,
        'fantasy-land/chain':       Function$prototype$chain,
        'fantasy-land/extend':      Function$prototype$extend,
        'fantasy-land/contramap':   Function$prototype$contramap
      }
    }
  };
  /* eslint-enable key-spacing */

  //# equals :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and equal according
  //. to the type's [`fantasy-land/equals`][] method; `false` otherwise.
  //.
  //. `fantasy-land/equals` implementations are provided for the following
  //. built-in types: Null, Undefined, Boolean, Number, Date, RegExp, String,
  //. Array, Arguments, Error, Object, and Function.
  //.
  //. The algorithm supports circular data structures. Two arrays are equal
  //. if they have the same index paths and for each path have equal values.
  //. Two arrays which represent `[1, [1, [1, [1, [1, ...]]]]]`, for example,
  //. are equal even if their internal structures differ. Two objects are equal
  //. if they have the same property paths and for each path have equal values.
  //.
  //. ```javascript
  //. > equals(0, -0)
  //. true
  //.
  //. > equals(NaN, NaN)
  //. true
  //.
  //. > equals(Cons('foo', Cons('bar', Nil)), Cons('foo', Cons('bar', Nil)))
  //. true
  //.
  //. > equals(Cons('foo', Cons('bar', Nil)), Cons('bar', Cons('foo', Nil)))
  //. false
  //. ```
  var equals = (function() {
    //  $pairs :: Array (Array2 Any Any)
    var $pairs = [];

    return function equals(x, y) {
      if (!sameType(x, y)) return false;

      //  This algorithm for comparing circular data structures was
      //  suggested in <http://stackoverflow.com/a/40622794/312785>.
      if ($pairs.some(function(p) { return p[0] === x && p[1] === y; })) {
        return true;
      }

      $pairs.push([x, y]);
      try {
        return Setoid.test(x) && Setoid.test(y) && Setoid.methods.equals(x)(y);
      } finally {
        $pairs.pop();
      }
    };
  }());

  //# lt :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and the first is
  //. less than the second according to the type's [`fantasy-land/lte`][]
  //. method; `false` otherwise.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`gt`](#gt) and [`gte`](#gte).
  //.
  //. ```javascript
  //. > lt(0, 0)
  //. false
  //.
  //. > lt(0, 1)
  //. true
  //.
  //. > lt(1, 0)
  //. false
  //. ```
  function lt(x, y) {
    return sameType(x, y) && !lte(y, x);
  }

  //# lte :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and the first
  //. is less than or equal to the second according to the type's
  //. [`fantasy-land/lte`][] method; `false` otherwise.
  //.
  //. `fantasy-land/lte` implementations are provided for the following
  //. built-in types: Null, Undefined, Boolean, Number, Date, String, Array,
  //. Arguments, and Object.
  //.
  //. The algorithm supports circular data structures in the same manner as
  //. [`equals`](#equals).
  //.
  //. See also [`lt`](#lt), [`gt`](#gt), and [`gte`](#gte).
  //.
  //. ```javascript
  //. > lte(0, 0)
  //. true
  //.
  //. > lte(0, 1)
  //. true
  //.
  //. > lte(1, 0)
  //. false
  //. ```
  var lte = (function() {
    //  $pairs :: Array (Array2 Any Any)
    var $pairs = [];

    return function lte(x, y) {
      if (!sameType(x, y)) return false;

      //  This algorithm for comparing circular data structures was
      //  suggested in <http://stackoverflow.com/a/40622794/312785>.
      if ($pairs.some(function(p) { return p[0] === x && p[1] === y; })) {
        return equals(x, y);
      }

      $pairs.push([x, y]);
      try {
        return Ord.test(x) && Ord.test(y) && Ord.methods.lte(x)(y);
      } finally {
        $pairs.pop();
      }
    };
  }());

  //# gt :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and the first is
  //. greater than the second according to the type's [`fantasy-land/lte`][]
  //. method; `false` otherwise.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`lt`](#lt) and [`gte`](#gte).
  //.
  //. ```javascript
  //. > gt(0, 0)
  //. false
  //.
  //. > gt(0, 1)
  //. false
  //.
  //. > gt(1, 0)
  //. true
  //. ```
  function gt(x, y) {
    return lt(y, x);
  }

  //# gte :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and the first
  //. is greater than or equal to the second according to the type's
  //. [`fantasy-land/lte`][] method; `false` otherwise.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`lt`](#lt) and [`gt`](#gt).
  //.
  //. ```javascript
  //. > gte(0, 0)
  //. true
  //.
  //. > gte(0, 1)
  //. false
  //.
  //. > gte(1, 0)
  //. true
  //. ```
  function gte(x, y) {
    return lte(y, x);
  }

  //# min :: Ord a => (a, a) -> a
  //.
  //. Returns the smaller of its two arguments.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`max`](#max).
  //.
  //. ```javascript
  //. > min(10, 2)
  //. 2
  //.
  //. > min(new Date('1999-12-31'), new Date('2000-01-01'))
  //. new Date('1999-12-31')
  //.
  //. > min('10', '2')
  //. '10'
  //. ```
  function min(x, y) {
    return lte(x, y) ? x : y;
  }

  //# max :: Ord a => (a, a) -> a
  //.
  //. Returns the larger of its two arguments.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`min`](#min).
  //.
  //. ```javascript
  //. > max(10, 2)
  //. 10
  //.
  //. > max(new Date('1999-12-31'), new Date('2000-01-01'))
  //. new Date('2000-01-01')
  //.
  //. > max('10', '2')
  //. '2'
  //. ```
  function max(x, y) {
    return lte(x, y) ? y : x;
  }

  //# compose :: Semigroupoid c => (c j k, c i j) -> c i k
  //.
  //. Function wrapper for [`fantasy-land/compose`][].
  //.
  //. `fantasy-land/compose` implementations are provided for the following
  //. built-in types: Function.
  //.
  //. ```javascript
  //. > compose(Math.sqrt, x => x + 1)(99)
  //. 10
  //. ```
  function compose(x, y) {
    return Semigroupoid.methods.compose(y)(x);
  }

  //# id :: Category c => TypeRep c -> c
  //.
  //. Function wrapper for [`fantasy-land/id`][].
  //.
  //. `fantasy-land/id` implementations are provided for the following
  //. built-in types: Function.
  //.
  //. ```javascript
  //. > id(Function)('foo')
  //. 'foo'
  //. ```
  function id(typeRep) {
    return Category.methods.id(typeRep)();
  }

  //# concat :: Semigroup a => (a, a) -> a
  //.
  //. Function wrapper for [`fantasy-land/concat`][].
  //.
  //. `fantasy-land/concat` implementations are provided for the following
  //. built-in types: String, Array, and Object.
  //.
  //. ```javascript
  //. > concat('abc', 'def')
  //. 'abcdef'
  //.
  //. > concat([1, 2, 3], [4, 5, 6])
  //. [1, 2, 3, 4, 5, 6]
  //.
  //. > concat({x: 1, y: 2}, {y: 3, z: 4})
  //. {x: 1, y: 3, z: 4}
  //.
  //. > concat(Cons('foo', Cons('bar', Cons('baz', Nil))), Cons('quux', Nil))
  //. Cons('foo', Cons('bar', Cons('baz', Cons('quux', Nil))))
  //. ```
  function concat(x, y) {
    return Semigroup.methods.concat(x)(y);
  }

  //# empty :: Monoid m => TypeRep m -> m
  //.
  //. Function wrapper for [`fantasy-land/empty`][].
  //.
  //. `fantasy-land/empty` implementations are provided for the following
  //. built-in types: String, Array, and Object.
  //.
  //. ```javascript
  //. > empty(String)
  //. ''
  //.
  //. > empty(Array)
  //. []
  //.
  //. > empty(Object)
  //. {}
  //.
  //. > empty(List)
  //. Nil
  //. ```
  function empty(typeRep) {
    return Monoid.methods.empty(typeRep)();
  }

  //# invert :: Group g => g -> g
  //.
  //. Function wrapper for [`fantasy-land/invert`][].
  //.
  //. ```javascript
  //. > invert(Sum(5))
  //. Sum(-5)
  //. ```
  function invert(group) {
    return Group.methods.invert(group)();
  }

  //# filter :: Filterable f => (a -> Boolean, f a) -> f a
  //.
  //. Function wrapper for [`fantasy-land/filter`][]. Discards every element
  //. which does not satisfy the predicate.
  //.
  //. `fantasy-land/filter` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. See also [`reject`](#reject).
  //.
  //. ```javascript
  //. > filter(x => x % 2 == 1, [1, 2, 3])
  //. [1, 3]
  //.
  //. > filter(x => x % 2 == 1, {x: 1, y: 2, z: 3})
  //. {x: 1, z: 3}
  //.
  //. > filter(x => x % 2 == 1, Cons(1, Cons(2, Cons(3, Nil))))
  //. Cons(1, Cons(3, Nil))
  //.
  //. > filter(x => x % 2 == 1, Nothing)
  //. Nothing
  //.
  //. > filter(x => x % 2 == 1, Just(0))
  //. Nothing
  //.
  //. > filter(x => x % 2 == 1, Just(1))
  //. Just(1)
  //. ```
  function filter(pred, filterable) {
    return Filterable.methods.filter(filterable)(pred);
  }

  //# reject :: Filterable f => (a -> Boolean, f a) -> f a
  //.
  //. Discards every element which satisfies the predicate.
  //.
  //. This function is derived from [`filter`](#filter).
  //.
  //. ```javascript
  //. > reject(x => x % 2 == 1, [1, 2, 3])
  //. [2]
  //.
  //. > reject(x => x % 2 == 1, {x: 1, y: 2, z: 3})
  //. {y: 2}
  //.
  //. > reject(x => x % 2 == 1, Cons(1, Cons(2, Cons(3, Nil))))
  //. Cons(2, Nil)
  //.
  //. > reject(x => x % 2 == 1, Nothing)
  //. Nothing
  //.
  //. > reject(x => x % 2 == 1, Just(0))
  //. Just(0)
  //.
  //. > reject(x => x % 2 == 1, Just(1))
  //. Nothing
  //. ```
  function reject(pred, filterable) {
    return filter(function(x) { return !pred(x); }, filterable);
  }

  //# takeWhile :: Filterable f => (a -> Boolean, f a) -> f a
  //.
  //. Discards the first element which does not satisfy the predicate, and all
  //. subsequent elements.
  //.
  //. This function is derived from [`filter`](#filter).
  //.
  //. See also [`dropWhile`](#dropWhile).
  //.
  //. ```javascript
  //. > takeWhile(s => /x/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['xy', 'xz', 'yx']
  //.
  //. > takeWhile(s => /y/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['xy']
  //.
  //. > takeWhile(s => /z/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. []
  //. ```
  function takeWhile(pred, filterable) {
    var take = true;
    return filter(function(x) { return take = take && pred(x); }, filterable);
  }

  //# dropWhile :: Filterable f => (a -> Boolean, f a) -> f a
  //.
  //. Retains the first element which does not satisfy the predicate, and all
  //. subsequent elements.
  //.
  //. This function is derived from [`filter`](#filter).
  //.
  //. See also [`takeWhile`](#takeWhile).
  //.
  //. ```javascript
  //. > dropWhile(s => /x/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['yz', 'zx', 'zy']
  //.
  //. > dropWhile(s => /y/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['xz', 'yx', 'yz', 'zx', 'zy']
  //.
  //. > dropWhile(s => /z/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['xy', 'xz', 'yx', 'yz', 'zx', 'zy']
  //. ```
  function dropWhile(pred, filterable) {
    var take = false;
    return filter(function(x) { return take = take || !pred(x); }, filterable);
  }

  //# map :: Functor f => (a -> b, f a) -> f b
  //.
  //. Function wrapper for [`fantasy-land/map`][].
  //.
  //. `fantasy-land/map` implementations are provided for the following
  //. built-in types: Array, Object, and Function.
  //.
  //. ```javascript
  //. > map(Math.sqrt, [1, 4, 9])
  //. [1, 2, 3]
  //.
  //. > map(Math.sqrt, {x: 1, y: 4, z: 9})
  //. {x: 1, y: 2, z: 3}
  //.
  //. > map(Math.sqrt, s => s.length)('Sanctuary')
  //. 3
  //.
  //. > map(Math.sqrt, Tuple('foo', 64))
  //. Tuple('foo', 8)
  //.
  //. > map(Math.sqrt, Nil)
  //. Nil
  //.
  //. > map(Math.sqrt, Cons(1, Cons(4, Cons(9, Nil))))
  //. Cons(1, Cons(2, Cons(3, Nil)))
  //. ```
  function map(f, functor) {
    return Functor.methods.map(functor)(f);
  }

  //# flip :: Functor f => (f (a -> b), a) -> f b
  //.
  //. Maps over the given functions, applying each to the given value.
  //.
  //. This function is derived from [`map`](#map).
  //.
  //. ```javascript
  //. > flip(x => y => x + y, '!')('foo')
  //. 'foo!'
  //.
  //. > flip([Math.floor, Math.ceil], 1.5)
  //. [1, 2]
  //.
  //. > flip({floor: Math.floor, ceil: Math.ceil}, 1.5)
  //. {floor: 1, ceil: 2}
  //.
  //. > flip(Cons(Math.floor, Cons(Math.ceil, Nil)), 1.5)
  //. Cons(1, Cons(2, Nil))
  //. ```
  function flip(functor, x) {
    return Functor.methods.map(functor)(thrush(x));
  }

  //# bimap :: Bifunctor f => (a -> b, c -> d, f a c) -> f b d
  //.
  //. Function wrapper for [`fantasy-land/bimap`][].
  //.
  //. ```javascript
  //. > bimap(s => s.toUpperCase(), Math.sqrt, Tuple('foo', 64))
  //. Tuple('FOO', 8)
  //. ```
  function bimap(f, g, bifunctor) {
    return Bifunctor.methods.bimap(bifunctor)(f, g);
  }

  //# mapLeft :: Bifunctor f => (a -> b, f a c) -> f b c
  //.
  //. Maps the given function over the left side of a Bifunctor.
  //.
  //. ```javascript
  //. > mapLeft(Math.sqrt, Tuple(64, 9))
  //. Tuple(8, 9)
  //. ```
  function mapLeft(f, bifunctor) {
    return bimap(f, identity, bifunctor);
  }

  //# promap :: Profunctor p => (a -> b, c -> d, p b c) -> p a d
  //.
  //. Function wrapper for [`fantasy-land/promap`][].
  //.
  //. `fantasy-land/promap` implementations are provided for the following
  //. built-in types: Function.
  //.
  //. ```javascript
  //. > promap(Math.abs, x => x + 1, Math.sqrt)(-100)
  //. 11
  //. ```
  function promap(f, g, profunctor) {
    return Profunctor.methods.promap(profunctor)(f, g);
  }

  //# ap :: Apply f => (f (a -> b), f a) -> f b
  //.
  //. Function wrapper for [`fantasy-land/ap`][].
  //.
  //. `fantasy-land/ap` implementations are provided for the following
  //. built-in types: Array, Object, and Function.
  //.
  //. ```javascript
  //. > ap([Math.sqrt, x => x * x], [1, 4, 9, 16, 25])
  //. [1, 2, 3, 4, 5, 1, 16, 81, 256, 625]
  //.
  //. > ap({a: Math.sqrt, b: x => x * x}, {a: 16, b: 10, c: 1})
  //. {a: 4, b: 100}
  //.
  //. > ap(s => n => s.slice(0, n), s => Math.ceil(s.length / 2))('Haskell')
  //. 'Hask'
  //.
  //. > ap(Identity(Math.sqrt), Identity(64))
  //. Identity(8)
  //.
  //. > ap(Cons(Math.sqrt, Cons(x => x * x, Nil)), Cons(16, Cons(100, Nil)))
  //. Cons(4, Cons(10, Cons(256, Cons(10000, Nil))))
  //. ```
  function ap(applyF, applyX) {
    return Apply.methods.ap(applyX)(applyF);
  }

  //# lift2 :: Apply f => (a -> b -> c, f a, f b) -> f c
  //.
  //. Lifts `a -> b -> c` to `Apply f => f a -> f b -> f c` and returns the
  //. result of applying this to the given arguments.
  //.
  //. This function is derived from [`map`](#map) and [`ap`](#ap).
  //.
  //. See also [`lift3`](#lift3).
  //.
  //. ```javascript
  //. > lift2(x => y => Math.pow(x, y), [10], [1, 2, 3])
  //. [10, 100, 1000]
  //.
  //. > lift2(x => y => Math.pow(x, y), Identity(10), Identity(3))
  //. Identity(1000)
  //. ```
  function lift2(f, x, y) {
    return ap(map(f, x), y);
  }

  //# lift3 :: Apply f => (a -> b -> c -> d, f a, f b, f c) -> f d
  //.
  //. Lifts `a -> b -> c -> d` to `Apply f => f a -> f b -> f c -> f d` and
  //. returns the result of applying this to the given arguments.
  //.
  //. This function is derived from [`map`](#map) and [`ap`](#ap).
  //.
  //. See also [`lift2`](#lift2).
  //.
  //. ```javascript
  //. > lift3(x => y => z => x + z + y, ['<'], ['>'], ['foo', 'bar', 'baz'])
  //. ['<foo>', '<bar>', '<baz>']
  //.
  //. > lift3(x => y => z => x + z + y, Identity('<'), Identity('>'), Identity('baz'))
  //. Identity('<baz>')
  //. ```
  function lift3(f, x, y, z) {
    return ap(ap(map(f, x), y), z);
  }

  //# apFirst :: Apply f => (f a, f b) -> f a
  //.
  //. Combines two effectful actions, keeping only the result of the first.
  //. Equivalent to Haskell's `(<*)` function.
  //.
  //. This function is derived from [`lift2`](#lift2).
  //.
  //. See also [`apSecond`](#apSecond).
  //.
  //. ```javascript
  //. > apFirst([1, 2], [3, 4])
  //. [1, 1, 2, 2]
  //.
  //. > apFirst(Identity(1), Identity(2))
  //. Identity(1)
  //. ```
  function apFirst(x, y) {
    return lift2(constant, x, y);
  }

  //# apSecond :: Apply f => (f a, f b) -> f b
  //.
  //. Combines two effectful actions, keeping only the result of the second.
  //. Equivalent to Haskell's `(*>)` function.
  //.
  //. This function is derived from [`lift2`](#lift2).
  //.
  //. See also [`apFirst`](#apFirst).
  //.
  //. ```javascript
  //. > apSecond([1, 2], [3, 4])
  //. [3, 4, 3, 4]
  //.
  //. > apSecond(Identity(1), Identity(2))
  //. Identity(2)
  //. ```
  function apSecond(x, y) {
    return lift2(constant(identity), x, y);
  }

  //# of :: Applicative f => (TypeRep f, a) -> f a
  //.
  //. Function wrapper for [`fantasy-land/of`][].
  //.
  //. `fantasy-land/of` implementations are provided for the following
  //. built-in types: Array and Function.
  //.
  //. ```javascript
  //. > of(Array, 42)
  //. [42]
  //.
  //. > of(Function, 42)(null)
  //. 42
  //.
  //. > of(List, 42)
  //. Cons(42, Nil)
  //. ```
  function of(typeRep, x) {
    return Applicative.methods.of(typeRep)(x);
  }

  //# append :: (Applicative f, Semigroup (f a)) => (a, f a) -> f a
  //.
  //. Returns the result of appending the first argument to the second.
  //.
  //. This function is derived from [`concat`](#concat) and [`of`](#of).
  //.
  //. See also [`prepend`](#prepend).
  //.
  //. ```javascript
  //. > append(3, [1, 2])
  //. [1, 2, 3]
  //.
  //. > append(3, Cons(1, Cons(2, Nil)))
  //. Cons(1, Cons(2, Cons(3, Nil)))
  //. ```
  function append(x, xs) {
    return concat(xs, of(xs.constructor, x));
  }

  //# prepend :: (Applicative f, Semigroup (f a)) => (a, f a) -> f a
  //.
  //. Returns the result of prepending the first argument to the second.
  //.
  //. This function is derived from [`concat`](#concat) and [`of`](#of).
  //.
  //. See also [`append`](#append).
  //.
  //. ```javascript
  //. > prepend(1, [2, 3])
  //. [1, 2, 3]
  //.
  //. > prepend(1, Cons(2, Cons(3, Nil)))
  //. Cons(1, Cons(2, Cons(3, Nil)))
  //. ```
  function prepend(x, xs) {
    return concat(of(xs.constructor, x), xs);
  }

  //# chain :: Chain m => (a -> m b, m a) -> m b
  //.
  //. Function wrapper for [`fantasy-land/chain`][].
  //.
  //. `fantasy-land/chain` implementations are provided for the following
  //. built-in types: Array and Function.
  //.
  //. ```javascript
  //. > chain(x => [x, x], [1, 2, 3])
  //. [1, 1, 2, 2, 3, 3]
  //.
  //. > chain(x => x % 2 == 1 ? of(List, x) : Nil, Cons(1, Cons(2, Cons(3, Nil))))
  //. Cons(1, Cons(3, Nil))
  //.
  //. > chain(n => s => s.slice(0, n), s => Math.ceil(s.length / 2))('Haskell')
  //. 'Hask'
  //. ```
  function chain(f, chain_) {
    return Chain.methods.chain(chain_)(f);
  }

  //# join :: Chain m => m (m a) -> m a
  //.
  //. Removes one level of nesting from a nested monadic structure.
  //.
  //. This function is derived from [`chain`](#chain).
  //.
  //. ```javascript
  //. > join([[1], [2], [3]])
  //. [1, 2, 3]
  //.
  //. > join([[[1, 2, 3]]])
  //. [[1, 2, 3]]
  //.
  //. > join(Identity(Identity(1)))
  //. Identity(1)
  //. ```
  function join(chain_) {
    return chain(identity, chain_);
  }

  //# chainRec :: ChainRec m => (TypeRep m, (a -> c, b -> c, a) -> m c, a) -> m b
  //.
  //. Function wrapper for [`fantasy-land/chainRec`][].
  //.
  //. `fantasy-land/chainRec` implementations are provided for the following
  //. built-in types: Array.
  //.
  //. ```javascript
  //. > chainRec(
  //. .   Array,
  //. .   (next, done, s) => s.length == 2 ? [s + '!', s + '?'].map(done)
  //. .                                    : [s + 'o', s + 'n'].map(next),
  //. .   ''
  //. . )
  //. ['oo!', 'oo?', 'on!', 'on?', 'no!', 'no?', 'nn!', 'nn?']
  //. ```
  function chainRec(typeRep, f, x) {
    return ChainRec.methods.chainRec(typeRep)(f, x);
  }

  //# alt :: Alt f => (f a, f a) -> f a
  //.
  //. Function wrapper for [`fantasy-land/alt`][].
  //.
  //. `fantasy-land/alt` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. ```javascript
  //. > alt([1, 2, 3], [4, 5, 6])
  //. [1, 2, 3, 4, 5, 6]
  //.
  //. > alt(Nothing, Nothing)
  //. Nothing
  //.
  //. > alt(Nothing, Just(1))
  //. Just(1)
  //.
  //. > alt(Just(2), Just(3))
  //. Just(2)
  //. ```
  function alt(x, y) {
    return Alt.methods.alt(x)(y);
  }

  //# zero :: Plus f => TypeRep f -> f a
  //.
  //. Function wrapper for [`fantasy-land/zero`][].
  //.
  //. `fantasy-land/zero` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. ```javascript
  //. > zero(Array)
  //. []
  //.
  //. > zero(Object)
  //. {}
  //.
  //. > zero(Maybe)
  //. Nothing
  //. ```
  function zero(typeRep) {
    return Plus.methods.zero(typeRep)();
  }

  //# reduce :: Foldable f => ((b, a) -> b, b, f a) -> b
  //.
  //. Function wrapper for [`fantasy-land/reduce`][].
  //.
  //. `fantasy-land/reduce` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. ```javascript
  //. > reduce((xs, x) => [x].concat(xs), [], [1, 2, 3])
  //. [3, 2, 1]
  //.
  //. > reduce(concat, '', Cons('foo', Cons('bar', Cons('baz', Nil))))
  //. 'foobarbaz'
  //. ```
  function reduce(f, x, foldable) {
    return Foldable.methods.reduce(foldable)(f, x);
  }

  //# size :: Foldable f => f a -> Integer
  //.
  //. Returns the number of elements of the given structure.
  //.
  //. This function is derived from [`reduce`](#reduce).
  //.
  //. ```javascript
  //. > size([])
  //. 0
  //.
  //. > size(['foo', 'bar', 'baz'])
  //. 3
  //.
  //. > size(Nil)
  //. 0
  //.
  //. > size(Cons('foo', Cons('bar', Cons('baz', Nil))))
  //. 3
  //. ```
  function size(foldable) {
    //  Fast path for arrays.
    if (Array.isArray(foldable)) return foldable.length;
    return reduce(function(n, _) { return n + 1; }, 0, foldable);
  }

  //# elem :: (Setoid a, Foldable f) => (a, f a) -> Boolean
  //.
  //. Takes a value and a structure and returns `true` if the
  //. value is an element of the structure; `false` otherwise.
  //.
  //. This function is derived from [`equals`](#equals) and
  //. [`reduce`](#reduce).
  //.
  //. ```javascript
  //. > elem('c', ['a', 'b', 'c'])
  //. true
  //.
  //. > elem('x', ['a', 'b', 'c'])
  //. false
  //.
  //. > elem(3, {x: 1, y: 2, z: 3})
  //. true
  //.
  //. > elem(8, {x: 1, y: 2, z: 3})
  //. false
  //.
  //. > elem(0, Just(0))
  //. true
  //.
  //. > elem(0, Just(1))
  //. false
  //.
  //. > elem(0, Nothing)
  //. false
  //. ```
  function elem(x, foldable) {
    return reduce(function(b, y) { return b || equals(x, y); },
                  false,
                  foldable);
  }

  //# foldMap :: (Monoid m, Foldable f) => (TypeRep m, a -> m, f a) -> m
  //.
  //. Deconstructs a foldable by mapping every element to a monoid and
  //. concatenating the results.
  //.
  //. This function is derived from [`concat`](#concat), [`empty`](#empty),
  //. and [`reduce`](#reduce).
  //.
  //. ```javascript
  //. > foldMap(String, f => f.name, [Math.sin, Math.cos, Math.tan])
  //. 'sincostan'
  //. ```
  function foldMap(typeRep, f, foldable) {
    return reduce(function(monoid, x) { return concat(monoid, f(x)); },
                  empty(typeRep),
                  foldable);
  }

  //# reverse :: (Applicative f, Foldable f, Monoid (f a)) => f a -> f a
  //.
  //. Reverses the elements of the given structure.
  //.
  //. This function is derived from [`concat`](#concat), [`empty`](#empty),
  //. [`of`](#of), and [`reduce`](#reduce).
  //.
  //. ```javascript
  //. > reverse([1, 2, 3])
  //. [3, 2, 1]
  //.
  //. > reverse(Cons(1, Cons(2, Cons(3, Nil))))
  //. Cons(3, Cons(2, Cons(1, Nil)))
  //. ```
  function reverse(foldable) {
    //  Fast path for arrays.
    if (Array.isArray(foldable)) return foldable.slice().reverse();
    var F = foldable.constructor;
    return reduce(function(xs, x) { return concat(of(F, x), xs); },
                  empty(F),
                  foldable);
  }

  //# sort :: (Ord a, Applicative f, Foldable f, Monoid (f a)) => f a -> f a
  //.
  //. Performs a [stable sort][] of the elements of the given structure,
  //. using [`lte`](#lte) for comparisons.
  //.
  //. This function is derived from [`lte`](#lte), [`concat`](#concat),
  //. [`empty`](#empty), [`of`](#of), and [`reduce`](#reduce).
  //.
  //. See also [`sortBy`](#sortBy).
  //.
  //. ```javascript
  //. > sort(['foo', 'bar', 'baz'])
  //. ['bar', 'baz', 'foo']
  //.
  //. > sort([Just(2), Nothing, Just(1)])
  //. [Nothing, Just(1), Just(2)]
  //.
  //. > sort(Cons('foo', Cons('bar', Cons('baz', Nil))))
  //. Cons('bar', Cons('baz', Cons('foo', Nil)))
  //. ```
  function sort(foldable) {
    return sortBy(identity, foldable);
  }

  //# sortBy :: (Ord b, Applicative f, Foldable f, Monoid (f a)) => (a -> b, f a) -> f a
  //.
  //. Performs a [stable sort][] of the elements of the given structure,
  //. using [`lte`](#lte) to compare the values produced by applying the
  //. given function to each element of the structure.
  //.
  //. This function is derived from [`lte`](#lte), [`concat`](#concat),
  //. [`empty`](#empty), [`of`](#of), and [`reduce`](#reduce).
  //.
  //. See also [`sort`](#sort).
  //.
  //. ```javascript
  //. > sortBy(s => s.length, ['red', 'green', 'blue'])
  //. ['red', 'blue', 'green']
  //.
  //. > sortBy(s => s.length, ['black', 'white'])
  //. ['black', 'white']
  //.
  //. > sortBy(s => s.length, ['white', 'black'])
  //. ['white', 'black']
  //.
  //. > sortBy(s => s.length, Cons('red', Cons('green', Cons('blue', Nil))))
  //. Cons('red', Cons('blue', Cons('green', Nil)))
  //. ```
  function sortBy(f, foldable) {
    var rs = reduce(function(rs, x) {
      rs.push({idx: rs.length, x: x, fx: f(x)});
      return rs;
    }, [], foldable);

    var lte_ = (function(r) {
      switch (typeof (r && r.fx)) {
        case 'number':  return function(x, y) { return x <= y || x !== x; };
        case 'string':  return function(x, y) { return x <= y; };
        default:        return lte;
      }
    }(rs[0]));

    rs.sort(function(a, b) {
      return lte_(a.fx, b.fx) ? lte_(b.fx, a.fx) ? a.idx - b.idx : -1 : 1;
    });

    if (Array.isArray(foldable)) {
      for (var idx = 0; idx < rs.length; idx += 1) rs[idx] = rs[idx].x;
      return rs;
    }

    var F = foldable.constructor;
    var result = empty(F);
    for (idx = 0; idx < rs.length; idx += 1) {
      result = concat(result, of(F, rs[idx].x));
    }
    return result;
  }

  //# traverse :: (Applicative f, Traversable t) => (TypeRep f, a -> f b, t a) -> f (t b)
  //.
  //. Function wrapper for [`fantasy-land/traverse`][].
  //.
  //. `fantasy-land/traverse` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. See also [`sequence`](#sequence).
  //.
  //. ```javascript
  //. > traverse(Array, x => x, [[1, 2, 3], [4, 5]])
  //. [[1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]]
  //.
  //. > traverse(Identity, x => Identity(x + 1), [1, 2, 3])
  //. Identity([2, 3, 4])
  //. ```
  function traverse(typeRep, f, traversable) {
    return Traversable.methods.traverse(traversable)(typeRep, f);
  }

  //# sequence :: (Applicative f, Traversable t) => (TypeRep f, t (f a)) -> f (t a)
  //.
  //. Inverts the given `t (f a)` to produce an `f (t a)`.
  //.
  //. This function is derived from [`traverse`](#traverse).
  //.
  //. ```javascript
  //. > sequence(Array, Identity([1, 2, 3]))
  //. [Identity(1), Identity(2), Identity(3)]
  //.
  //. > sequence(Identity, [Identity(1), Identity(2), Identity(3)])
  //. Identity([1, 2, 3])
  //. ```
  function sequence(typeRep, traversable) {
    return traverse(typeRep, identity, traversable);
  }

  //# extend :: Extend w => (w a -> b, w a) -> w b
  //.
  //. Function wrapper for [`fantasy-land/extend`][].
  //.
  //. `fantasy-land/extend` implementations are provided for the following
  //. built-in types: Array and Function.
  //.
  //. ```javascript
  //. > extend(ss => ss.join(''), ['x', 'y', 'z'])
  //. ['xyz', 'yz', 'z']
  //.
  //. > extend(f => f([3, 4]), reverse)([1, 2])
  //. [4, 3, 2, 1]
  //. ```
  function extend(f, extend_) {
    return Extend.methods.extend(extend_)(f);
  }

  //# duplicate :: Extend w => w a -> w (w a)
  //.
  //. Adds one level of nesting to a comonadic structure.
  //.
  //. This function is derived from [`extend`](#extend).
  //.
  //. ```javascript
  //. > duplicate(Identity(1))
  //. Identity(Identity(1))
  //.
  //. > duplicate([1])
  //. [[1]]
  //.
  //. > duplicate([1, 2, 3])
  //. [[1, 2, 3], [2, 3], [3]]
  //.
  //. > duplicate(reverse)([1, 2])([3, 4])
  //. [4, 3, 2, 1]
  //. ```
  function duplicate(extend_) {
    return extend(identity, extend_);
  }

  //# extract :: Comonad w => w a -> a
  //.
  //. Function wrapper for [`fantasy-land/extract`][].
  //.
  //. ```javascript
  //. > extract(Identity(42))
  //. 42
  //. ```
  function extract(comonad) {
    return Comonad.methods.extract(comonad)();
  }

  //# contramap :: Contravariant f => (b -> a, f a) -> f b
  //.
  //. Function wrapper for [`fantasy-land/contramap`][].
  //.
  //. `fantasy-land/contramap` implementations are provided for the following
  //. built-in types: Function.
  //.
  //. ```javascript
  //. > contramap(s => s.length, Math.sqrt)('Sanctuary')
  //. 3
  //. ```
  function contramap(f, contravariant) {
    return Contravariant.methods.contramap(contravariant)(f);
  }

  return {
    TypeClass: TypeClass,
    Setoid: Setoid,
    Ord: Ord,
    Semigroupoid: Semigroupoid,
    Category: Category,
    Semigroup: Semigroup,
    Monoid: Monoid,
    Group: Group,
    Filterable: Filterable,
    Functor: Functor,
    Bifunctor: Bifunctor,
    Profunctor: Profunctor,
    Apply: Apply,
    Applicative: Applicative,
    Chain: Chain,
    ChainRec: ChainRec,
    Monad: Monad,
    Alt: Alt,
    Plus: Plus,
    Alternative: Alternative,
    Foldable: Foldable,
    Traversable: Traversable,
    Extend: Extend,
    Comonad: Comonad,
    Contravariant: Contravariant,
    equals: equals,
    lt: lt,
    lte: lte,
    gt: gt,
    gte: gte,
    min: min,
    max: max,
    compose: compose,
    id: id,
    concat: concat,
    empty: empty,
    invert: invert,
    filter: filter,
    reject: reject,
    map: map,
    flip: flip,
    bimap: bimap,
    mapLeft: mapLeft,
    promap: promap,
    ap: ap,
    lift2: lift2,
    lift3: lift3,
    apFirst: apFirst,
    apSecond: apSecond,
    of: of,
    append: append,
    prepend: prepend,
    chain: chain,
    join: join,
    chainRec: chainRec,
    alt: alt,
    zero: zero,
    reduce: reduce,
    size: size,
    elem: elem,
    foldMap: foldMap,
    reverse: reverse,
    sort: sort,
    sortBy: sortBy,
    takeWhile: takeWhile,
    dropWhile: dropWhile,
    traverse: traverse,
    sequence: sequence,
    extend: extend,
    duplicate: duplicate,
    extract: extract,
    contramap: contramap
  };

}));

//. [Alt]:                      v:fantasyland/fantasy-land#alt
//. [Alternative]:              v:fantasyland/fantasy-land#alternative
//. [Applicative]:              v:fantasyland/fantasy-land#applicative
//. [Apply]:                    v:fantasyland/fantasy-land#apply
//. [Bifunctor]:                v:fantasyland/fantasy-land#bifunctor
//. [Category]:                 v:fantasyland/fantasy-land#category
//. [Chain]:                    v:fantasyland/fantasy-land#chain
//. [ChainRec]:                 v:fantasyland/fantasy-land#chainrec
//. [Comonad]:                  v:fantasyland/fantasy-land#comonad
//. [Contravariant]:            v:fantasyland/fantasy-land#contravariant
//. [Extend]:                   v:fantasyland/fantasy-land#extend
//. [FL]:                       v:fantasyland/fantasy-land
//. [Filterable]:               v:fantasyland/fantasy-land#filterable
//. [Foldable]:                 v:fantasyland/fantasy-land#foldable
//. [Functor]:                  v:fantasyland/fantasy-land#functor
//. [Group]:                    v:fantasyland/fantasy-land#group
//. [Monad]:                    v:fantasyland/fantasy-land#monad
//. [Monoid]:                   v:fantasyland/fantasy-land#monoid
//. [Ord]:                      v:fantasyland/fantasy-land#ord
//. [Plus]:                     v:fantasyland/fantasy-land#plus
//. [Profunctor]:               v:fantasyland/fantasy-land#profunctor
//. [Semigroup]:                v:fantasyland/fantasy-land#semigroup
//. [Semigroupoid]:             v:fantasyland/fantasy-land#semigroupoid
//. [Setoid]:                   v:fantasyland/fantasy-land#setoid
//. [Traversable]:              v:fantasyland/fantasy-land#traversable
//. [`fantasy-land/alt`]:       v:fantasyland/fantasy-land#alt-method
//. [`fantasy-land/ap`]:        v:fantasyland/fantasy-land#ap-method
//. [`fantasy-land/bimap`]:     v:fantasyland/fantasy-land#bimap-method
//. [`fantasy-land/chain`]:     v:fantasyland/fantasy-land#chain-method
//. [`fantasy-land/chainRec`]:  v:fantasyland/fantasy-land#chainrec-method
//. [`fantasy-land/compose`]:   v:fantasyland/fantasy-land#compose-method
//. [`fantasy-land/concat`]:    v:fantasyland/fantasy-land#concat-method
//. [`fantasy-land/contramap`]: v:fantasyland/fantasy-land#contramap-method
//. [`fantasy-land/empty`]:     v:fantasyland/fantasy-land#empty-method
//. [`fantasy-land/equals`]:    v:fantasyland/fantasy-land#equals-method
//. [`fantasy-land/extend`]:    v:fantasyland/fantasy-land#extend-method
//. [`fantasy-land/extract`]:   v:fantasyland/fantasy-land#extract-method
//. [`fantasy-land/filter`]:    v:fantasyland/fantasy-land#filter-method
//. [`fantasy-land/id`]:        v:fantasyland/fantasy-land#id-method
//. [`fantasy-land/invert`]:    v:fantasyland/fantasy-land#invert-method
//. [`fantasy-land/lte`]:       v:fantasyland/fantasy-land#lte-method
//. [`fantasy-land/map`]:       v:fantasyland/fantasy-land#map-method
//. [`fantasy-land/of`]:        v:fantasyland/fantasy-land#of-method
//. [`fantasy-land/promap`]:    v:fantasyland/fantasy-land#promap-method
//. [`fantasy-land/reduce`]:    v:fantasyland/fantasy-land#reduce-method
//. [`fantasy-land/traverse`]:  v:fantasyland/fantasy-land#traverse-method
//. [`fantasy-land/zero`]:      v:fantasyland/fantasy-land#zero-method
//. [stable sort]:              https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
//. [type-classes]:             https://github.com/sanctuary-js/sanctuary-def#type-classes

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("sanctuary-type-identifiers", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

/*
        @@@@@@@            @@@@@@@         @@
      @@       @@        @@       @@      @@@
    @@   @@@ @@  @@    @@   @@@ @@  @@   @@@@@@ @@   @@@  @@ @@@      @@@@
   @@  @@   @@@   @@  @@  @@   @@@   @@   @@@   @@   @@@  @@@   @@  @@@   @@
   @@  @@   @@@   @@  @@  @@   @@@   @@   @@@   @@   @@@  @@@   @@  @@@@@@@@
   @@  @@   @@@  @@   @@  @@   @@@  @@    @@@   @@   @@@  @@@   @@  @@@
    @@   @@@ @@@@@     @@   @@@ @@@@@      @@@    @@@ @@  @@@@@@      @@@@@
      @@                 @@                           @@  @@
        @@@@@@@            @@@@@@@               @@@@@    @@
                                                          */
//. # sanctuary-type-identifiers
//.
//. A type is a set of values. Boolean, for example, is the type comprising
//. `true` and `false`. A value may be a member of multiple types (`42` is a
//. member of Number, PositiveNumber, Integer, and many other types).
//.
//. In certain situations it is useful to divide JavaScript values into
//. non-overlapping types. The language provides two constructs for this
//. purpose: the [`typeof`][1] operator and [`Object.prototype.toString`][2].
//. Each has pros and cons, but neither supports user-defined types.
//.
//. This package specifies an [algorithm][3] for deriving a _type identifier_
//. from any JavaScript value, and exports an implementation of the algorithm.
//. Authors of algebraic data types may follow this specification in order to
//. make their data types compatible with the algorithm.
//.
//. ### Algorithm
//.
//. 1.  Take any JavaScript value `x`.
//.
//. 2.  If `x` is `null` or `undefined`, go to step 6.
//.
//. 3.  If `x.constructor` evaluates to `null` or `undefined`, go to step 6.
//.
//. 4.  If `x.constructor.prototype === x`, go to step 6. This check prevents a
//.     prototype object from being considered a member of its associated type.
//.
//. 5.  If `typeof x.constructor['@@type']` evaluates to `'string'`, return
//.     the value of `x.constructor['@@type']`.
//.
//. 6.  Return the [`Object.prototype.toString`][2] representation of `x`
//.     without the leading `'[object '` and trailing `']'`.
//.
//. ### Compatibility
//.
//. For an algebraic data type to be compatible with the [algorithm][3]:
//.
//.   - every member of the type must have a `constructor` property pointing
//.     to an object known as the _type representative_;
//.
//.   - the type representative must have a `@@type` property; and
//.
//.   - the type representative's `@@type` property (the _type identifier_)
//.     must be a string primitive, ideally `'<npm-package-name>/<type-name>'`.
//.
//. For example:
//.
//. ```javascript
//. //  Identity :: a -> Identity a
//. function Identity(x) {
//.   if (!(this instanceof Identity)) return new Identity(x);
//.   this.value = x;
//. }
//.
//. Identity['@@type'] = 'my-package/Identity';
//. ```
//.
//. Note that by using a constructor function the `constructor` property is set
//. implicitly for each value created. Constructor functions are convenient for
//. this reason, but are not required. This definition is also valid:
//.
//. ```javascript
//. //  IdentityTypeRep :: TypeRep Identity
//. var IdentityTypeRep = {
//.   '@@type': 'my-package/Identity'
//. };
//.
//. //  Identity :: a -> Identity a
//. function Identity(x) {
//.   return {constructor: IdentityTypeRep, value: x};
//. }
//. ```
//.
//. ### Usage
//.
//. ```javascript
//. var Identity = require('my-package').Identity;
//. var type = require('sanctuary-type-identifiers');
//.
//. type(null);         // => 'Null'
//. type(true);         // => 'Boolean'
//. type([1, 2, 3]);    // => 'Array'
//. type(Identity);     // => 'Function'
//. type(Identity(0));  // => 'my-package/Identity'
//. ```
//.
//.
//. [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
//. [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
//. [3]: #algorithm

(function(f) {

  'use strict';

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = f();
  } else if (typeof define === 'function' && define.amd != null) {
    define([], f);
  } else {
    self.sanctuaryTypeIdentifiers = f();
  }

}(function() {

  'use strict';

  //  $$type :: String
  var $$type = '@@type';

  //  type :: Any -> String
  function type(x) {
    return x != null &&
           x.constructor != null &&
           x.constructor.prototype !== x &&
           typeof x.constructor[$$type] === 'string' ?
      x.constructor[$$type] :
      Object.prototype.toString.call(x).slice('[object '.length, -']'.length);
  }

  return type;

}));

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("typescript-collections", {}, function(___scope___){
___scope___.file("dist/lib/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2013 Basarat Ali Syed. All Rights Reserved.
//
// Licensed under MIT open source license http://opensource.org/licenses/MIT
//
// Orginal javascript code was by Mauricio Santos
//
var _arrays = require("./arrays");
exports.arrays = _arrays;
var Bag_1 = require("./Bag");
exports.Bag = Bag_1.default;
var BSTree_1 = require("./BSTree");
exports.BSTree = BSTree_1.default;
var Dictionary_1 = require("./Dictionary");
exports.Dictionary = Dictionary_1.default;
var Heap_1 = require("./Heap");
exports.Heap = Heap_1.default;
var LinkedDictionary_1 = require("./LinkedDictionary");
exports.LinkedDictionary = LinkedDictionary_1.default;
var LinkedList_1 = require("./LinkedList");
exports.LinkedList = LinkedList_1.default;
var MultiDictionary_1 = require("./MultiDictionary");
exports.MultiDictionary = MultiDictionary_1.default;
var FactoryDictionary_1 = require("./FactoryDictionary");
exports.FactoryDictionary = FactoryDictionary_1.default;
var FactoryDictionary_2 = require("./FactoryDictionary");
exports.DefaultDictionary = FactoryDictionary_2.default;
var Queue_1 = require("./Queue");
exports.Queue = Queue_1.default;
var PriorityQueue_1 = require("./PriorityQueue");
exports.PriorityQueue = PriorityQueue_1.default;
var Set_1 = require("./Set");
exports.Set = Set_1.default;
var Stack_1 = require("./Stack");
exports.Stack = Stack_1.default;
var MultiRootTree_1 = require("./MultiRootTree");
exports.MultiRootTree = MultiRootTree_1.default;
var _util = require("./util");
exports.util = _util;
//# sourceMappingURL=index.js.map
});
___scope___.file("dist/lib/arrays.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
/**
 * Returns the position of the first occurrence of the specified item
 * within the specified array.4
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the position of the first occurrence of the specified element
 * within the specified array, or -1 if not found.
 */
function indexOf(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (equals(array[i], item)) {
            return i;
        }
    }
    return -1;
}
exports.indexOf = indexOf;
/**
 * Returns the position of the last occurrence of the specified element
 * within the specified array.
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the position of the last occurrence of the specified element
 * within the specified array or -1 if not found.
 */
function lastIndexOf(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        if (equals(array[i], item)) {
            return i;
        }
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
/**
 * Returns true if the specified array contains the specified element.
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function to
 * check equality between 2 elements.
 * @return {boolean} true if the specified array contains the specified element.
 */
function contains(array, item, equalsFunction) {
    return indexOf(array, item, equalsFunction) >= 0;
}
exports.contains = contains;
/**
 * Removes the first ocurrence of the specified element from the specified array.
 * @param {*} array the array in which to search element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function to
 * check equality between 2 elements.
 * @return {boolean} true if the array changed after this call.
 */
function remove(array, item, equalsFunction) {
    var index = indexOf(array, item, equalsFunction);
    if (index < 0) {
        return false;
    }
    array.splice(index, 1);
    return true;
}
exports.remove = remove;
/**
 * Returns the number of elements in the specified array equal
 * to the specified object.
 * @param {Array} array the array in which to determine the frequency of the element.
 * @param {Object} item the element whose frequency is to be determined.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the number of elements in the specified array
 * equal to the specified object.
 */
function frequency(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    var freq = 0;
    for (var i = 0; i < length; i++) {
        if (equals(array[i], item)) {
            freq++;
        }
    }
    return freq;
}
exports.frequency = frequency;
/**
 * Returns true if the two specified arrays are equal to one another.
 * Two arrays are considered equal if both arrays contain the same number
 * of elements, and all corresponding pairs of elements in the two
 * arrays are equal and are in the same order.
 * @param {Array} array1 one array to be tested for equality.
 * @param {Array} array2 the other array to be tested for equality.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between elemements in the arrays.
 * @return {boolean} true if the two arrays are equal
 */
function equals(array1, array2, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    if (array1.length !== array2.length) {
        return false;
    }
    var length = array1.length;
    for (var i = 0; i < length; i++) {
        if (!equals(array1[i], array2[i])) {
            return false;
        }
    }
    return true;
}
exports.equals = equals;
/**
 * Returns shallow a copy of the specified array.
 * @param {*} array the array to copy.
 * @return {Array} a copy of the specified array
 */
function copy(array) {
    return array.concat();
}
exports.copy = copy;
/**
 * Swaps the elements at the specified positions in the specified array.
 * @param {Array} array The array in which to swap elements.
 * @param {number} i the index of one element to be swapped.
 * @param {number} j the index of the other element to be swapped.
 * @return {boolean} true if the array is defined and the indexes are valid.
 */
function swap(array, i, j) {
    if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
        return false;
    }
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return true;
}
exports.swap = swap;
function toString(array) {
    return '[' + array.toString() + ']';
}
exports.toString = toString;
/**
 * Executes the provided function once for each element present in this array
 * starting from index 0 to length - 1.
 * @param {Array} array The array in which to iterate.
 * @param {function(Object):*} callback function to execute, it is
 * invoked with one argument: the element value, to break the iteration you can
 * optionally return false.
 */
function forEach(array, callback) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var ele = array_1[_i];
        if (callback(ele) === false) {
            return;
        }
    }
}
exports.forEach = forEach;
//# sourceMappingURL=arrays.js.map
});
___scope___.file("dist/lib/util.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _hasOwnProperty = Object.prototype.hasOwnProperty;
exports.has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
/**
 * Default function to compare element order.
 * @function
 */
function defaultCompare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a === b) {
        return 0;
    }
    else {
        return 1;
    }
}
exports.defaultCompare = defaultCompare;
/**
 * Default function to test equality.
 * @function
 */
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
/**
 * Default function to convert an object to a string.
 * @function
 */
function defaultToString(item) {
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return '$s' + item;
    }
    else {
        return '$o' + item.toString();
    }
}
exports.defaultToString = defaultToString;
/**
* Joins all the properies of the object using the provided join string
*/
function makeString(item, join) {
    if (join === void 0) { join = ','; }
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        var toret = '{';
        var first = true;
        for (var prop in item) {
            if (exports.has(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + prop + ':' + item[prop];
            }
        }
        return toret + '}';
    }
}
exports.makeString = makeString;
/**
 * Checks if the given argument is a function.
 * @function
 */
function isFunction(func) {
    return (typeof func) === 'function';
}
exports.isFunction = isFunction;
/**
 * Checks if the given argument is undefined.
 * @function
 */
function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
exports.isUndefined = isUndefined;
/**
 * Checks if the given argument is a string.
 * @function
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
exports.isString = isString;
/**
 * Reverses a compare function.
 * @function
 */
function reverseCompareFunction(compareFunction) {
    if (!isFunction(compareFunction)) {
        return function (a, b) {
            if (a < b) {
                return 1;
            }
            else if (a === b) {
                return 0;
            }
            else {
                return -1;
            }
        };
    }
    else {
        return function (d, v) {
            return compareFunction(d, v) * -1;
        };
    }
}
exports.reverseCompareFunction = reverseCompareFunction;
/**
 * Returns an equal function given a compare function.
 * @function
 */
function compareToEquals(compareFunction) {
    return function (a, b) {
        return compareFunction(a, b) === 0;
    };
}
exports.compareToEquals = compareToEquals;
//# sourceMappingURL=util.js.map
});
___scope___.file("dist/lib/Bag.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary_1 = require("./Dictionary");
var Set_1 = require("./Set");
var Bag = /** @class */ (function () {
    /**
     * Creates an empty bag.
     * @class <p>A bag is a special kind of set in which members are
     * allowed to appear more than once.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to unique strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    function Bag(toStrFunction) {
        this.toStrF = toStrFunction || util.defaultToString;
        this.dictionary = new Dictionary_1.default(this.toStrF);
        this.nElements = 0;
    }
    /**
    * Adds nCopies of the specified object to this bag.
    * @param {Object} element element to add.
    * @param {number=} nCopies the number of copies to add, if this argument is
    * undefined 1 copy is added.
    * @return {boolean} true unless element is undefined.
    */
    Bag.prototype.add = function (element, nCopies) {
        if (nCopies === void 0) { nCopies = 1; }
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            var node = {
                value: element,
                copies: nCopies
            };
            this.dictionary.setValue(element, node);
        }
        else {
            this.dictionary.getValue(element).copies += nCopies;
        }
        this.nElements += nCopies;
        return true;
    };
    /**
    * Counts the number of copies of the specified object in this bag.
    * @param {Object} element the object to search for..
    * @return {number} the number of copies of the object, 0 if not found
    */
    Bag.prototype.count = function (element) {
        if (!this.contains(element)) {
            return 0;
        }
        else {
            return this.dictionary.getValue(element).copies;
        }
    };
    /**
     * Returns true if this bag contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this bag contains the specified element,
     * false otherwise.
     */
    Bag.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    /**
    * Removes nCopies of the specified object to this bag.
    * If the number of copies to remove is greater than the actual number
    * of copies in the Bag, all copies are removed.
    * @param {Object} element element to remove.
    * @param {number=} nCopies the number of copies to remove, if this argument is
    * undefined 1 copy is removed.
    * @return {boolean} true if at least 1 element was removed.
    */
    Bag.prototype.remove = function (element, nCopies) {
        if (nCopies === void 0) { nCopies = 1; }
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            return false;
        }
        else {
            var node = this.dictionary.getValue(element);
            if (nCopies > node.copies) {
                this.nElements -= node.copies;
            }
            else {
                this.nElements -= nCopies;
            }
            node.copies -= nCopies;
            if (node.copies <= 0) {
                this.dictionary.remove(element);
            }
            return true;
        }
    };
    /**
     * Returns an array containing all of the elements in this big in arbitrary order,
     * including multiple copies.
     * @return {Array} an array containing all of the elements in this bag.
     */
    Bag.prototype.toArray = function () {
        var a = [];
        var values = this.dictionary.values();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var node = values_1[_i];
            var element = node.value;
            var copies = node.copies;
            for (var j = 0; j < copies; j++) {
                a.push(element);
            }
        }
        return a;
    };
    /**
     * Returns a set of unique elements in this bag.
     * @return {collections.Set<T>} a set of unique elements in this bag.
     */
    Bag.prototype.toSet = function () {
        var toret = new Set_1.default(this.toStrF);
        var elements = this.dictionary.values();
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var ele = elements_1[_i];
            var value = ele.value;
            toret.add(value);
        }
        return toret;
    };
    /**
     * Executes the provided function once for each element
     * present in this bag, including multiple copies.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element. To break the iteration you can
     * optionally return false.
     */
    Bag.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            var value = v.value;
            var copies = v.copies;
            for (var i = 0; i < copies; i++) {
                if (callback(value) === false) {
                    return false;
                }
            }
            return true;
        });
    };
    /**
     * Returns the number of elements in this bag.
     * @return {number} the number of elements in this bag.
     */
    Bag.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this bag contains no elements.
     * @return {boolean} true if this bag contains no elements.
     */
    Bag.prototype.isEmpty = function () {
        return this.nElements === 0;
    };
    /**
     * Removes all of the elements from this bag.
     */
    Bag.prototype.clear = function () {
        this.nElements = 0;
        this.dictionary.clear();
    };
    return Bag;
}()); // End of bag
exports.default = Bag;
//# sourceMappingURL=Bag.js.map
});
___scope___.file("dist/lib/Dictionary.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary = /** @class */ (function () {
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    function Dictionary(toStrFunction) {
        this.table = {};
        this.nElements = 0;
        this.toStr = toStrFunction || util.defaultToString;
    }
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * undefined if the map contains no mapping for this key.
     */
    Dictionary.prototype.getValue = function (key) {
        var pair = this.table['$' + this.toStr(key)];
        if (util.isUndefined(pair)) {
            return undefined;
        }
        return pair.value;
    };
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or undefined if
     * there was no mapping for the key or if the key/value are undefined.
     */
    Dictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return undefined;
        }
        var ret;
        var k = '$' + this.toStr(key);
        var previousElement = this.table[k];
        if (util.isUndefined(previousElement)) {
            this.nElements++;
            ret = undefined;
        }
        else {
            ret = previousElement.value;
        }
        this.table[k] = {
            key: key,
            value: value
        };
        return ret;
    };
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @return {*} previous value associated with specified key, or undefined if
     * there was no mapping for key.
     */
    Dictionary.prototype.remove = function (key) {
        var k = '$' + this.toStr(key);
        var previousElement = this.table[k];
        if (!util.isUndefined(previousElement)) {
            delete this.table[k];
            this.nElements--;
            return previousElement.value;
        }
        return undefined;
    };
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @return {Array} an array containing all of the keys in this dictionary.
     */
    Dictionary.prototype.keys = function () {
        var array = [];
        for (var name_1 in this.table) {
            if (util.has(this.table, name_1)) {
                var pair = this.table[name_1];
                array.push(pair.key);
            }
        }
        return array;
    };
    /**
     * Returns an array containing all of the values in this dictionary.
     * @return {Array} an array containing all of the values in this dictionary.
     */
    Dictionary.prototype.values = function () {
        var array = [];
        for (var name_2 in this.table) {
            if (util.has(this.table, name_2)) {
                var pair = this.table[name_2];
                array.push(pair.value);
            }
        }
        return array;
    };
    /**
    * Executes the provided function once for each key-value pair
    * present in this dictionary.
    * @param {function(Object,Object):*} callback function to execute, it is
    * invoked with two arguments: key and value. To break the iteration you can
    * optionally return false.
    */
    Dictionary.prototype.forEach = function (callback) {
        for (var name_3 in this.table) {
            if (util.has(this.table, name_3)) {
                var pair = this.table[name_3];
                var ret = callback(pair.key, pair.value);
                if (ret === false) {
                    return;
                }
            }
        }
    };
    /**
     * Returns true if this dictionary contains a mapping for the specified key.
     * @param {Object} key key whose presence in this dictionary is to be
     * tested.
     * @return {boolean} true if this dictionary contains a mapping for the
     * specified key.
     */
    Dictionary.prototype.containsKey = function (key) {
        return !util.isUndefined(this.getValue(key));
    };
    /**
    * Removes all mappings from this dictionary.
    * @this {collections.Dictionary}
    */
    Dictionary.prototype.clear = function () {
        this.table = {};
        this.nElements = 0;
    };
    /**
     * Returns the number of keys in this dictionary.
     * @return {number} the number of key-value mappings in this dictionary.
     */
    Dictionary.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this dictionary contains no mappings.
     * @return {boolean} true if this dictionary contains no mappings.
     */
    Dictionary.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    Dictionary.prototype.toString = function () {
        var toret = '{';
        this.forEach(function (k, v) {
            toret += "\n\t" + k + " : " + v;
        });
        return toret + '\n}';
    };
    return Dictionary;
}()); // End of dictionary
exports.default = Dictionary;
//# sourceMappingURL=Dictionary.js.map
});
___scope___.file("dist/lib/Set.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var arrays = require("./arrays");
var Dictionary_1 = require("./Dictionary");
var Set = /** @class */ (function () {
    /**
     * Creates an empty set.
     * @class <p>A set is a data structure that contains no duplicate items.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStringFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives a onject and returns a
     * unique string must be provided.
     */
    function Set(toStringFunction) {
        this.dictionary = new Dictionary_1.default(toStringFunction);
    }
    /**
     * Returns true if this set contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this set contains the specified element,
     * false otherwise.
     */
    Set.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    /**
     * Adds the specified element to this set if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this set did not already contain the specified element.
     */
    Set.prototype.add = function (element) {
        if (this.contains(element) || util.isUndefined(element)) {
            return false;
        }
        else {
            this.dictionary.setValue(element, element);
            return true;
        }
    };
    /**
     * Performs an intersecion between this an another set.
     * Removes all values that are not present this set and the given set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.intersection = function (otherSet) {
        var set = this;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                set.remove(element);
            }
            return true;
        });
    };
    /**
     * Performs a union between this an another set.
     * Adds all values from the given set to this set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.union = function (otherSet) {
        var set = this;
        otherSet.forEach(function (element) {
            set.add(element);
            return true;
        });
    };
    /**
     * Performs a difference between this an another set.
     * Removes from this set all the values that are present in the given set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.difference = function (otherSet) {
        var set = this;
        otherSet.forEach(function (element) {
            set.remove(element);
            return true;
        });
    };
    /**
     * Checks whether the given set contains all the elements in this set.
     * @param {collections.Set} otherSet other set.
     * @return {boolean} true if this set is a subset of the given set.
     */
    Set.prototype.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        var isSub = true;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                isSub = false;
                return false;
            }
            return true;
        });
        return isSub;
    };
    /**
     * Removes the specified element from this set if it is present.
     * @return {boolean} true if this set contained the specified element.
     */
    Set.prototype.remove = function (element) {
        if (!this.contains(element)) {
            return false;
        }
        else {
            this.dictionary.remove(element);
            return true;
        }
    };
    /**
     * Executes the provided function once for each element
     * present in this set.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one arguments: the element. To break the iteration you can
     * optionally return false.
     */
    Set.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            return callback(v);
        });
    };
    /**
     * Returns an array containing all of the elements in this set in arbitrary order.
     * @return {Array} an array containing all of the elements in this set.
     */
    Set.prototype.toArray = function () {
        return this.dictionary.values();
    };
    /**
     * Returns true if this set contains no elements.
     * @return {boolean} true if this set contains no elements.
     */
    Set.prototype.isEmpty = function () {
        return this.dictionary.isEmpty();
    };
    /**
     * Returns the number of elements in this set.
     * @return {number} the number of elements in this set.
     */
    Set.prototype.size = function () {
        return this.dictionary.size();
    };
    /**
     * Removes all of the elements from this set.
     */
    Set.prototype.clear = function () {
        this.dictionary.clear();
    };
    /*
    * Provides a string representation for display
    */
    Set.prototype.toString = function () {
        return arrays.toString(this.toArray());
    };
    return Set;
}()); // end of Set
exports.default = Set;
//# sourceMappingURL=Set.js.map
});
___scope___.file("dist/lib/BSTree.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Queue_1 = require("./Queue");
var BSTree = /** @class */ (function () {
    /**
     * Creates an empty binary search tree.
     * @class <p>A binary search tree is a binary tree in which each
     * internal node stores an element such that the elements stored in the
     * left subtree are less than it and the elements
     * stored in the right subtree are greater.</p>
     * <p>Formally, a binary search tree is a node-based binary tree data structure which
     * has the following properties:</p>
     * <ul>
     * <li>The left subtree of a node contains only nodes with elements less
     * than the node's element</li>
     * <li>The right subtree of a node contains only nodes with elements greater
     * than the node's element</li>
     * <li>Both the left and right subtrees must also be binary search trees.</li>
     * </ul>
     * <p>If the inserted elements are custom objects a compare function must
     * be provided at construction time, otherwise the <=, === and >= operators are
     * used to compare elements. Example:</p>
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two elements. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function BSTree(compareFunction) {
        this.root = null;
        this.compare = compareFunction || util.defaultCompare;
        this.nElements = 0;
    }
    /**
     * Adds the specified element to this tree if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this tree did not already contain the specified element.
     */
    BSTree.prototype.add = function (element) {
        if (util.isUndefined(element)) {
            return false;
        }
        if (this.insertNode(this.createNode(element)) !== null) {
            this.nElements++;
            return true;
        }
        return false;
    };
    /**
     * Removes all of the elements from this tree.
     */
    BSTree.prototype.clear = function () {
        this.root = null;
        this.nElements = 0;
    };
    /**
     * Returns true if this tree contains no elements.
     * @return {boolean} true if this tree contains no elements.
     */
    BSTree.prototype.isEmpty = function () {
        return this.nElements === 0;
    };
    /**
     * Returns the number of elements in this tree.
     * @return {number} the number of elements in this tree.
     */
    BSTree.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this tree contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this tree contains the specified element,
     * false otherwise.
     */
    BSTree.prototype.contains = function (element) {
        if (util.isUndefined(element)) {
            return false;
        }
        return this.searchNode(this.root, element) !== null;
    };
    /**
     * Removes the specified element from this tree if it is present.
     * @return {boolean} true if this tree contained the specified element.
     */
    BSTree.prototype.remove = function (element) {
        var node = this.searchNode(this.root, element);
        if (node === null) {
            return false;
        }
        this.removeNode(node);
        this.nElements--;
        return true;
    };
    /**
     * Executes the provided function once for each element present in this tree in
     * in-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTree.prototype.inorderTraversal = function (callback) {
        this.inorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in pre-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTree.prototype.preorderTraversal = function (callback) {
        this.preorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in post-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTree.prototype.postorderTraversal = function (callback) {
        this.postorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in
     * level-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTree.prototype.levelTraversal = function (callback) {
        this.levelTraversalAux(this.root, callback);
    };
    /**
     * Returns the minimum element of this tree.
     * @return {*} the minimum element of this tree or undefined if this tree is
     * is empty.
     */
    BSTree.prototype.minimum = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.minimumAux(this.root).element;
    };
    /**
     * Returns the maximum element of this tree.
     * @return {*} the maximum element of this tree or undefined if this tree is
     * is empty.
     */
    BSTree.prototype.maximum = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.maximumAux(this.root).element;
    };
    /**
     * Executes the provided function once for each element present in this tree in inorder.
     * Equivalent to inorderTraversal.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    BSTree.prototype.forEach = function (callback) {
        this.inorderTraversal(callback);
    };
    /**
     * Returns an array containing all of the elements in this tree in in-order.
     * @return {Array} an array containing all of the elements in this tree in in-order.
     */
    BSTree.prototype.toArray = function () {
        var array = [];
        this.inorderTraversal(function (element) {
            array.push(element);
            return true;
        });
        return array;
    };
    /**
     * Returns the height of this tree.
     * @return {number} the height of this tree or -1 if is empty.
     */
    BSTree.prototype.height = function () {
        return this.heightAux(this.root);
    };
    /**
    * @private
    */
    BSTree.prototype.searchNode = function (node, element) {
        var cmp = null;
        while (node !== null && cmp !== 0) {
            cmp = this.compare(element, node.element);
            if (cmp < 0) {
                node = node.leftCh;
            }
            else if (cmp > 0) {
                node = node.rightCh;
            }
        }
        return node;
    };
    /**
    * @private
    */
    BSTree.prototype.transplant = function (n1, n2) {
        if (n1.parent === null) {
            this.root = n2;
        }
        else if (n1 === n1.parent.leftCh) {
            n1.parent.leftCh = n2;
        }
        else {
            n1.parent.rightCh = n2;
        }
        if (n2 !== null) {
            n2.parent = n1.parent;
        }
    };
    /**
    * @private
    */
    BSTree.prototype.removeNode = function (node) {
        if (node.leftCh === null) {
            this.transplant(node, node.rightCh);
        }
        else if (node.rightCh === null) {
            this.transplant(node, node.leftCh);
        }
        else {
            var y = this.minimumAux(node.rightCh);
            if (y.parent !== node) {
                this.transplant(y, y.rightCh);
                y.rightCh = node.rightCh;
                y.rightCh.parent = y;
            }
            this.transplant(node, y);
            y.leftCh = node.leftCh;
            y.leftCh.parent = y;
        }
    };
    /**
    * @private
    */
    BSTree.prototype.inorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        this.inorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
        if (signal.stop) {
            return;
        }
        this.inorderTraversalAux(node.rightCh, callback, signal);
    };
    /**
    * @private
    */
    BSTree.prototype.levelTraversalAux = function (node, callback) {
        var queue = new Queue_1.default();
        if (node !== null) {
            queue.enqueue(node);
        }
        while (!queue.isEmpty()) {
            node = queue.dequeue();
            if (callback(node.element) === false) {
                return;
            }
            if (node.leftCh !== null) {
                queue.enqueue(node.leftCh);
            }
            if (node.rightCh !== null) {
                queue.enqueue(node.rightCh);
            }
        }
    };
    /**
    * @private
    */
    BSTree.prototype.preorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
        if (signal.stop) {
            return;
        }
        this.preorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        this.preorderTraversalAux(node.rightCh, callback, signal);
    };
    /**
    * @private
    */
    BSTree.prototype.postorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        this.postorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        this.postorderTraversalAux(node.rightCh, callback, signal);
        if (signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
    };
    /**
    * @private
    */
    BSTree.prototype.minimumAux = function (node) {
        while (node.leftCh !== null) {
            node = node.leftCh;
        }
        return node;
    };
    /**
    * @private
    */
    BSTree.prototype.maximumAux = function (node) {
        while (node.rightCh !== null) {
            node = node.rightCh;
        }
        return node;
    };
    /**
      * @private
      */
    BSTree.prototype.heightAux = function (node) {
        if (node === null) {
            return -1;
        }
        return Math.max(this.heightAux(node.leftCh), this.heightAux(node.rightCh)) + 1;
    };
    /*
    * @private
    */
    BSTree.prototype.insertNode = function (node) {
        var parent = null;
        var position = this.root;
        var cmp = null;
        while (position !== null) {
            cmp = this.compare(node.element, position.element);
            if (cmp === 0) {
                return null;
            }
            else if (cmp < 0) {
                parent = position;
                position = position.leftCh;
            }
            else {
                parent = position;
                position = position.rightCh;
            }
        }
        node.parent = parent;
        if (parent === null) {
            // tree is empty
            this.root = node;
        }
        else if (this.compare(node.element, parent.element) < 0) {
            parent.leftCh = node;
        }
        else {
            parent.rightCh = node;
        }
        return node;
    };
    /**
    * @private
    */
    BSTree.prototype.createNode = function (element) {
        return {
            element: element,
            leftCh: null,
            rightCh: null,
            parent: null
        };
    };
    return BSTree;
}());
exports.default = BSTree;
//# sourceMappingURL=BSTree.js.map
});
___scope___.file("dist/lib/Queue.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    /**
     * Creates an empty queue.
     * @class A queue is a First-In-First-Out (FIFO) data structure, the first
     * element added to the queue will be the first one to be removed. This
     * implementation uses a linked list as a container.
     * @constructor
     */
    function Queue() {
        this.list = new LinkedList_1.default();
    }
    /**
     * Inserts the specified element into the end of this queue.
     * @param {Object} elem the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    Queue.prototype.enqueue = function (elem) {
        return this.list.add(elem);
    };
    /**
     * Inserts the specified element into the end of this queue.
     * @param {Object} elem the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    Queue.prototype.add = function (elem) {
        return this.list.add(elem);
    };
    /**
     * Retrieves and removes the head of this queue.
     * @return {*} the head of this queue, or undefined if this queue is empty.
     */
    Queue.prototype.dequeue = function () {
        if (this.list.size() !== 0) {
            var el = this.list.first();
            this.list.removeElementAtIndex(0);
            return el;
        }
        return undefined;
    };
    /**
     * Retrieves, but does not remove, the head of this queue.
     * @return {*} the head of this queue, or undefined if this queue is empty.
     */
    Queue.prototype.peek = function () {
        if (this.list.size() !== 0) {
            return this.list.first();
        }
        return undefined;
    };
    /**
     * Returns the number of elements in this queue.
     * @return {number} the number of elements in this queue.
     */
    Queue.prototype.size = function () {
        return this.list.size();
    };
    /**
     * Returns true if this queue contains the specified element.
     * <p>If the elements inside this stack are
     * not comparable with the === operator, a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName (pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} elem element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function to check if two elements are equal.
     * @return {boolean} true if this queue contains the specified element,
     * false otherwise.
     */
    Queue.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    /**
     * Checks if this queue is empty.
     * @return {boolean} true if and only if this queue contains no items; false
     * otherwise.
     */
    Queue.prototype.isEmpty = function () {
        return this.list.size() <= 0;
    };
    /**
     * Removes all of the elements from this queue.
     */
    Queue.prototype.clear = function () {
        this.list.clear();
    };
    /**
     * Executes the provided function once for each element present in this queue in
     * FIFO order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Queue.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Queue;
}()); // End of queue
exports.default = Queue;
//# sourceMappingURL=Queue.js.map
});
___scope___.file("dist/lib/LinkedList.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var arrays = require("./arrays");
var LinkedList = /** @class */ (function () {
    /**
    * Creates an empty Linked List.
    * @class A linked list is a data structure consisting of a group of nodes
    * which together represent a sequence.
    * @constructor
    */
    function LinkedList() {
        /**
        * First node in the list
        * @type {Object}
        * @private
        */
        this.firstNode = null;
        /**
        * Last node in the list
        * @type {Object}
        * @private
        */
        this.lastNode = null;
        /**
        * Number of elements in the list
        * @type {number}
        * @private
        */
        this.nElements = 0;
    }
    /**
    * Adds an element to this list.
    * @param {Object} item element to be added.
    * @param {number=} index optional index to add the element. If no index is specified
    * the element is added to the end of this list.
    * @return {boolean} true if the element was added or false if the index is invalid
    * or if the element is undefined.
    */
    LinkedList.prototype.add = function (item, index) {
        if (util.isUndefined(index)) {
            index = this.nElements;
        }
        if (index < 0 || index > this.nElements || util.isUndefined(item)) {
            return false;
        }
        var newNode = this.createNode(item);
        if (this.nElements === 0) {
            // First node in the list.
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else if (index === this.nElements) {
            // Insert at the end.
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        else if (index === 0) {
            // Change first node.
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        else {
            var prev = this.nodeAtIndex(index - 1);
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.nElements++;
        return true;
    };
    /**
    * Returns the first element in this list.
    * @return {*} the first element of the list or undefined if the list is
    * empty.
    */
    LinkedList.prototype.first = function () {
        if (this.firstNode !== null) {
            return this.firstNode.element;
        }
        return undefined;
    };
    /**
    * Returns the last element in this list.
    * @return {*} the last element in the list or undefined if the list is
    * empty.
    */
    LinkedList.prototype.last = function () {
        if (this.lastNode !== null) {
            return this.lastNode.element;
        }
        return undefined;
    };
    /**
     * Returns the element at the specified position in this list.
     * @param {number} index desired index.
     * @return {*} the element at the given index or undefined if the index is
     * out of bounds.
     */
    LinkedList.prototype.elementAtIndex = function (index) {
        var node = this.nodeAtIndex(index);
        if (node === null) {
            return undefined;
        }
        return node.element;
    };
    /**
     * Returns the index in this list of the first occurrence of the
     * specified element, or -1 if the List does not contain this element.
     * <p>If the elements inside this list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction Optional
     * function used to check if two elements are equal.
     * @return {number} the index in this list of the first occurrence
     * of the specified element, or -1 if this list does not contain the
     * element.
     */
    LinkedList.prototype.indexOf = function (item, equalsFunction) {
        var equalsF = equalsFunction || util.defaultEquals;
        if (util.isUndefined(item)) {
            return -1;
        }
        var currentNode = this.firstNode;
        var index = 0;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    };
    /**
       * Returns true if this list contains the specified element.
       * <p>If the elements inside the list are
       * not comparable with the === operator a custom equals function should be
       * provided to perform searches, the function must receive two arguments and
       * return true if they are equal, false otherwise. Example:</p>
       *
       * <pre>
       * const petsAreEqualByName = function(pet1, pet2) {
       *  return pet1.name === pet2.name;
       * }
       * </pre>
       * @param {Object} item element to search for.
       * @param {function(Object,Object):boolean=} equalsFunction Optional
       * function used to check if two elements are equal.
       * @return {boolean} true if this list contains the specified element, false
       * otherwise.
       */
    LinkedList.prototype.contains = function (item, equalsFunction) {
        return (this.indexOf(item, equalsFunction) >= 0);
    };
    /**
     * Removes the first occurrence of the specified element in this list.
     * <p>If the elements inside the list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to be removed from this list, if present.
     * @return {boolean} true if the list contained the specified element.
     */
    LinkedList.prototype.remove = function (item, equalsFunction) {
        var equalsF = equalsFunction || util.defaultEquals;
        if (this.nElements < 1 || util.isUndefined(item)) {
            return false;
        }
        var previous = null;
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                if (currentNode === this.firstNode) {
                    this.firstNode = this.firstNode.next;
                    if (currentNode === this.lastNode) {
                        this.lastNode = null;
                    }
                }
                else if (currentNode === this.lastNode) {
                    this.lastNode = previous;
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                else {
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                this.nElements--;
                return true;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    };
    /**
     * Removes all of the elements from this list.
     */
    LinkedList.prototype.clear = function () {
        this.firstNode = null;
        this.lastNode = null;
        this.nElements = 0;
    };
    /**
     * Returns true if this list is equal to the given list.
     * Two lists are equal if they have the same elements in the same order.
     * @param {LinkedList} other the other list.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function used to check if two elements are equal. If the elements in the lists
     * are custom objects you should provide a function, otherwise
     * the === operator is used to check equality between elements.
     * @return {boolean} true if this list is equal to the given list.
     */
    LinkedList.prototype.equals = function (other, equalsFunction) {
        var eqF = equalsFunction || util.defaultEquals;
        if (!(other instanceof LinkedList)) {
            return false;
        }
        if (this.size() !== other.size()) {
            return false;
        }
        return this.equalsAux(this.firstNode, other.firstNode, eqF);
    };
    /**
    * @private
    */
    LinkedList.prototype.equalsAux = function (n1, n2, eqF) {
        while (n1 !== null) {
            if (!eqF(n1.element, n2.element)) {
                return false;
            }
            n1 = n1.next;
            n2 = n2.next;
        }
        return true;
    };
    /**
     * Removes the element at the specified position in this list.
     * @param {number} index given index.
     * @return {*} removed element or undefined if the index is out of bounds.
     */
    LinkedList.prototype.removeElementAtIndex = function (index) {
        if (index < 0 || index >= this.nElements) {
            return undefined;
        }
        var element;
        if (this.nElements === 1) {
            //First node in the list.
            element = this.firstNode.element;
            this.firstNode = null;
            this.lastNode = null;
        }
        else {
            var previous = this.nodeAtIndex(index - 1);
            if (previous === null) {
                element = this.firstNode.element;
                this.firstNode = this.firstNode.next;
            }
            else if (previous.next === this.lastNode) {
                element = this.lastNode.element;
                this.lastNode = previous;
            }
            if (previous !== null) {
                element = previous.next.element;
                previous.next = previous.next.next;
            }
        }
        this.nElements--;
        return element;
    };
    /**
     * Executes the provided function once for each element present in this list in order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    LinkedList.prototype.forEach = function (callback) {
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (callback(currentNode.element) === false) {
                break;
            }
            currentNode = currentNode.next;
        }
    };
    /**
     * Reverses the order of the elements in this linked list (makes the last
     * element first, and the first element last).
     */
    LinkedList.prototype.reverse = function () {
        var previous = null;
        var current = this.firstNode;
        var temp = null;
        while (current !== null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        temp = this.firstNode;
        this.firstNode = this.lastNode;
        this.lastNode = temp;
    };
    /**
     * Returns an array containing all of the elements in this list in proper
     * sequence.
     * @return {Array.<*>} an array containing all of the elements in this list,
     * in proper sequence.
     */
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            array.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return array;
    };
    /**
     * Returns the number of elements in this list.
     * @return {number} the number of elements in this list.
     */
    LinkedList.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this list contains no elements.
     * @return {boolean} true if this list contains no elements.
     */
    LinkedList.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    LinkedList.prototype.toString = function () {
        return arrays.toString(this.toArray());
    };
    /**
     * @private
     */
    LinkedList.prototype.nodeAtIndex = function (index) {
        if (index < 0 || index >= this.nElements) {
            return null;
        }
        if (index === (this.nElements - 1)) {
            return this.lastNode;
        }
        var node = this.firstNode;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    };
    /**
     * @private
     */
    LinkedList.prototype.createNode = function (item) {
        return {
            element: item,
            next: null
        };
    };
    return LinkedList;
}()); // End of linked list
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map
});
___scope___.file("dist/lib/Heap.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collections = require("./util");
var arrays = require("./arrays");
var Heap = /** @class */ (function () {
    /**
     * Creates an empty Heap.
     * @class
     * <p>A heap is a binary tree, where the nodes maintain the heap property:
     * each node is smaller than each of its children and therefore a MinHeap
     * This implementation uses an array to store elements.</p>
     * <p>If the inserted elements are custom objects a compare function must be provided,
     *  at construction time, otherwise the <=, === and >= operators are
     * used to compare elements. Example:</p>
     *
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     *
     * <p>If a Max-Heap is wanted (greater elements on top) you can a provide a
     * reverse compare function to accomplish that behavior. Example:</p>
     *
     * <pre>
     * function reverseCompare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return 1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return -1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two elements. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function Heap(compareFunction) {
        /**
         * Array used to store the elements of the heap.
         * @type {Array.<Object>}
         * @private
         */
        this.data = [];
        this.compare = compareFunction || collections.defaultCompare;
    }
    /**
     * Returns the index of the left child of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the left child
     * for.
     * @return {number} The index of the left child.
     * @private
     */
    Heap.prototype.leftChildIndex = function (nodeIndex) {
        return (2 * nodeIndex) + 1;
    };
    /**
     * Returns the index of the right child of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the right child
     * for.
     * @return {number} The index of the right child.
     * @private
     */
    Heap.prototype.rightChildIndex = function (nodeIndex) {
        return (2 * nodeIndex) + 2;
    };
    /**
     * Returns the index of the parent of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the parent for.
     * @return {number} The index of the parent.
     * @private
     */
    Heap.prototype.parentIndex = function (nodeIndex) {
        return Math.floor((nodeIndex - 1) / 2);
    };
    /**
     * Returns the index of the smaller child node (if it exists).
     * @param {number} leftChild left child index.
     * @param {number} rightChild right child index.
     * @return {number} the index with the minimum value or -1 if it doesn't
     * exists.
     * @private
     */
    Heap.prototype.minIndex = function (leftChild, rightChild) {
        if (rightChild >= this.data.length) {
            if (leftChild >= this.data.length) {
                return -1;
            }
            else {
                return leftChild;
            }
        }
        else {
            if (this.compare(this.data[leftChild], this.data[rightChild]) <= 0) {
                return leftChild;
            }
            else {
                return rightChild;
            }
        }
    };
    /**
     * Moves the node at the given index up to its proper place in the heap.
     * @param {number} index The index of the node to move up.
     * @private
     */
    Heap.prototype.siftUp = function (index) {
        var parent = this.parentIndex(index);
        while (index > 0 && this.compare(this.data[parent], this.data[index]) > 0) {
            arrays.swap(this.data, parent, index);
            index = parent;
            parent = this.parentIndex(index);
        }
    };
    /**
     * Moves the node at the given index down to its proper place in the heap.
     * @param {number} nodeIndex The index of the node to move down.
     * @private
     */
    Heap.prototype.siftDown = function (nodeIndex) {
        //smaller child index
        var min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
        while (min >= 0 && this.compare(this.data[nodeIndex], this.data[min]) > 0) {
            arrays.swap(this.data, min, nodeIndex);
            nodeIndex = min;
            min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
        }
    };
    /**
     * Retrieves but does not remove the root element of this heap.
     * @return {*} The value at the root of the heap. Returns undefined if the
     * heap is empty.
     */
    Heap.prototype.peek = function () {
        if (this.data.length > 0) {
            return this.data[0];
        }
        else {
            return undefined;
        }
    };
    /**
     * Adds the given element into the heap.
     * @param {*} element the element.
     * @return true if the element was added or fals if it is undefined.
     */
    Heap.prototype.add = function (element) {
        if (collections.isUndefined(element)) {
            return undefined;
        }
        this.data.push(element);
        this.siftUp(this.data.length - 1);
        return true;
    };
    /**
     * Retrieves and removes the root element of this heap.
     * @return {*} The value removed from the root of the heap. Returns
     * undefined if the heap is empty.
     */
    Heap.prototype.removeRoot = function () {
        if (this.data.length > 0) {
            var obj = this.data[0];
            this.data[0] = this.data[this.data.length - 1];
            this.data.splice(this.data.length - 1, 1);
            if (this.data.length > 0) {
                this.siftDown(0);
            }
            return obj;
        }
        return undefined;
    };
    /**
     * Returns true if this heap contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this Heap contains the specified element, false
     * otherwise.
     */
    Heap.prototype.contains = function (element) {
        var equF = collections.compareToEquals(this.compare);
        return arrays.contains(this.data, element, equF);
    };
    /**
     * Returns the number of elements in this heap.
     * @return {number} the number of elements in this heap.
     */
    Heap.prototype.size = function () {
        return this.data.length;
    };
    /**
     * Checks if this heap is empty.
     * @return {boolean} true if and only if this heap contains no items; false
     * otherwise.
     */
    Heap.prototype.isEmpty = function () {
        return this.data.length <= 0;
    };
    /**
     * Removes all of the elements from this heap.
     */
    Heap.prototype.clear = function () {
        this.data.length = 0;
    };
    /**
     * Executes the provided function once for each element present in this heap in
     * no particular order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Heap.prototype.forEach = function (callback) {
        arrays.forEach(this.data, callback);
    };
    return Heap;
}());
exports.default = Heap;
//# sourceMappingURL=Heap.js.map
});
___scope___.file("dist/lib/LinkedDictionary.js", function(exports, require, module, __filename, __dirname){

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
var Dictionary_1 = require("./Dictionary");
var util = require("./util");
/**
 * This class is used by the LinkedDictionary Internally
 * Has to be a class, not an interface, because it needs to have
 * the 'unlink' function defined.
 */
var LinkedDictionaryPair = /** @class */ (function () {
    function LinkedDictionaryPair(key, value) {
        this.key = key;
        this.value = value;
    }
    LinkedDictionaryPair.prototype.unlink = function () {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    };
    return LinkedDictionaryPair;
}());
var LinkedDictionary = /** @class */ (function (_super) {
    __extends(LinkedDictionary, _super);
    function LinkedDictionary(toStrFunction) {
        var _this = _super.call(this, toStrFunction) || this;
        _this.head = new LinkedDictionaryPair(null, null);
        _this.tail = new LinkedDictionaryPair(null, null);
        _this.head.next = _this.tail;
        _this.tail.prev = _this.head;
        return _this;
    }
    /**
     * Inserts the new node to the 'tail' of the list, updating the
     * neighbors, and moving 'this.tail' (the End of List indicator) that
     * to the end.
     */
    LinkedDictionary.prototype.appendToTail = function (entry) {
        var lastNode = this.tail.prev;
        lastNode.next = entry;
        entry.prev = lastNode;
        entry.next = this.tail;
        this.tail.prev = entry;
    };
    /**
     * Retrieves a linked dictionary from the table internally
     */
    LinkedDictionary.prototype.getLinkedDictionaryPair = function (key) {
        if (util.isUndefined(key)) {
            return undefined;
        }
        var k = '$' + this.toStr(key);
        var pair = (this.table[k]);
        return pair;
    };
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * undefined if the map contains no mapping for this key.
     */
    LinkedDictionary.prototype.getValue = function (key) {
        var pair = this.getLinkedDictionaryPair(key);
        if (!util.isUndefined(pair)) {
            return pair.value;
        }
        return undefined;
    };
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * Also, if a value is present for this key, the entry is removed from the
     * insertion ordering.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @return {*} previous value associated with specified key, or undefined if
     * there was no mapping for key.
     */
    LinkedDictionary.prototype.remove = function (key) {
        var pair = this.getLinkedDictionaryPair(key);
        if (!util.isUndefined(pair)) {
            _super.prototype.remove.call(this, key); // This will remove it from the table
            pair.unlink(); // This will unlink it from the chain
            return pair.value;
        }
        return undefined;
    };
    /**
    * Removes all mappings from this LinkedDictionary.
    * @this {collections.LinkedDictionary}
    */
    LinkedDictionary.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    };
    /**
     * Internal function used when updating an existing KeyValue pair.
     * It places the new value indexed by key into the table, but maintains
     * its place in the linked ordering.
     */
    LinkedDictionary.prototype.replace = function (oldPair, newPair) {
        var k = '$' + this.toStr(newPair.key);
        // set the new Pair's links to existingPair's links
        newPair.next = oldPair.next;
        newPair.prev = oldPair.prev;
        // Delete Existing Pair from the table, unlink it from chain.
        // As a result, the nElements gets decremented by this operation
        this.remove(oldPair.key);
        // Link new Pair in place of where oldPair was,
        // by pointing the old pair's neighbors to it.
        newPair.prev.next = newPair;
        newPair.next.prev = newPair;
        this.table[k] = newPair;
        // To make up for the fact that the number of elements was decremented,
        // We need to increase it by one.
        ++this.nElements;
    };
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * Updating of a key that already exists maintains its place in the
     * insertion order into the map.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or undefined if
     * there was no mapping for the key or if the key/value are undefined.
     */
    LinkedDictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return undefined;
        }
        var existingPair = this.getLinkedDictionaryPair(key);
        var newPair = new LinkedDictionaryPair(key, value);
        var k = '$' + this.toStr(key);
        // If there is already an element for that key, we
        // keep it's place in the LinkedList
        if (!util.isUndefined(existingPair)) {
            this.replace(existingPair, newPair);
            return existingPair.value;
        }
        else {
            this.appendToTail(newPair);
            this.table[k] = newPair;
            ++this.nElements;
            return undefined;
        }
    };
    /**
     * Returns an array containing all of the keys in this LinkedDictionary, ordered
     * by insertion order.
     * @return {Array} an array containing all of the keys in this LinkedDictionary,
     * ordered by insertion order.
     */
    LinkedDictionary.prototype.keys = function () {
        var array = [];
        this.forEach(function (key, value) {
            array.push(key);
        });
        return array;
    };
    /**
     * Returns an array containing all of the values in this LinkedDictionary, ordered by
     * insertion order.
     * @return {Array} an array containing all of the values in this LinkedDictionary,
     * ordered by insertion order.
     */
    LinkedDictionary.prototype.values = function () {
        var array = [];
        this.forEach(function (key, value) {
            array.push(value);
        });
        return array;
    };
    /**
    * Executes the provided function once for each key-value pair
    * present in this LinkedDictionary. It is done in the order of insertion
    * into the LinkedDictionary
    * @param {function(Object,Object):*} callback function to execute, it is
    * invoked with two arguments: key and value. To break the iteration you can
    * optionally return false.
    */
    LinkedDictionary.prototype.forEach = function (callback) {
        var crawlNode = this.head.next;
        while (crawlNode.next != null) {
            var ret = callback(crawlNode.key, crawlNode.value);
            if (ret === false) {
                return;
            }
            crawlNode = crawlNode.next;
        }
    };
    return LinkedDictionary;
}(Dictionary_1.default)); // End of LinkedDictionary
exports.default = LinkedDictionary;
// /**
//  * Returns true if this dictionary is equal to the given dictionary.
//  * Two dictionaries are equal if they contain the same mappings.
//  * @param {collections.Dictionary} other the other dictionary.
//  * @param {function(Object,Object):boolean=} valuesEqualFunction optional
//  * function used to check if two values are equal.
//  * @return {boolean} true if this dictionary is equal to the given dictionary.
//  */
// collections.Dictionary.prototype.equals = function(other,valuesEqualFunction) {
// 	const eqF = valuesEqualFunction || collections.defaultEquals;
// 	if(!(other instanceof collections.Dictionary)){
// 		return false;
// 	}
// 	if(this.size() !== other.size()){
// 		return false;
// 	}
// 	return this.equalsAux(this.firstNode,other.firstNode,eqF);
// }
//# sourceMappingURL=LinkedDictionary.js.map
});
___scope___.file("dist/lib/MultiDictionary.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary_1 = require("./Dictionary");
var arrays = require("./arrays");
var MultiDictionary = /** @class */ (function () {
    /**
     * Creates an empty multi dictionary.
     * @class <p>A multi dictionary is a special kind of dictionary that holds
     * multiple values against each key. Setting a value into the dictionary will
     * add the value to an array at that key. Getting a key will return an array,
     * holding all the values set to that key.
     * You can configure to allow duplicates in the values.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to strings must be
     * provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
       *  return pet.name;
       * }
     * </pre>
     * <p>If the values are custom objects a function to check equality between values
     * must be provided. Example:</p>
     *
     * <pre>
     * function petsAreEqualByAge(pet1,pet2) {
       *  return pet1.age===pet2.age;
       * }
     * </pre>
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     * @param {function(Object,Object):boolean=} valuesEqualsFunction optional
     * function to check if two values are equal.
     *
     * @param allowDuplicateValues
     */
    function MultiDictionary(toStrFunction, valuesEqualsFunction, allowDuplicateValues) {
        if (allowDuplicateValues === void 0) { allowDuplicateValues = false; }
        this.dict = new Dictionary_1.default(toStrFunction);
        this.equalsF = valuesEqualsFunction || util.defaultEquals;
        this.allowDuplicate = allowDuplicateValues;
    }
    /**
    * Returns an array holding the values to which this dictionary maps
    * the specified key.
    * Returns an empty array if this dictionary contains no mappings for this key.
    * @param {Object} key key whose associated values are to be returned.
    * @return {Array} an array holding the values to which this dictionary maps
    * the specified key.
    */
    MultiDictionary.prototype.getValue = function (key) {
        var values = this.dict.getValue(key);
        if (util.isUndefined(values)) {
            return [];
        }
        return arrays.copy(values);
    };
    /**
     * Adds the value to the array associated with the specified key, if
     * it is not already present.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value the value to add to the array at the key
     * @return {boolean} true if the value was not already associated with that key.
     */
    MultiDictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return false;
        }
        if (!this.containsKey(key)) {
            this.dict.setValue(key, [value]);
            return true;
        }
        var array = this.dict.getValue(key);
        if (!this.allowDuplicate) {
            if (arrays.contains(array, value, this.equalsF)) {
                return false;
            }
        }
        array.push(value);
        return true;
    };
    /**
     * Removes the specified values from the array of values associated with the
     * specified key. If a value isn't given, all values associated with the specified
     * key are removed.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @param {Object=} value optional argument to specify the value to remove
     * from the array associated with the specified key.
     * @return {*} true if the dictionary changed, false if the key doesn't exist or
     * if the specified value isn't associated with the specified key.
     */
    MultiDictionary.prototype.remove = function (key, value) {
        if (util.isUndefined(value)) {
            var v = this.dict.remove(key);
            return !util.isUndefined(v);
        }
        var array = this.dict.getValue(key);
        if (arrays.remove(array, value, this.equalsF)) {
            if (array.length === 0) {
                this.dict.remove(key);
            }
            return true;
        }
        return false;
    };
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @return {Array} an array containing all of the keys in this dictionary.
     */
    MultiDictionary.prototype.keys = function () {
        return this.dict.keys();
    };
    /**
     * Returns an array containing all of the values in this dictionary.
     * @return {Array} an array containing all of the values in this dictionary.
     */
    MultiDictionary.prototype.values = function () {
        var values = this.dict.values();
        var array = [];
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            for (var _a = 0, v_1 = v; _a < v_1.length; _a++) {
                var w = v_1[_a];
                array.push(w);
            }
        }
        return array;
    };
    /**
     * Returns true if this dictionary at least one value associatted the specified key.
     * @param {Object} key key whose presence in this dictionary is to be
     * tested.
     * @return {boolean} true if this dictionary at least one value associatted
     * the specified key.
     */
    MultiDictionary.prototype.containsKey = function (key) {
        return this.dict.containsKey(key);
    };
    /**
     * Removes all mappings from this dictionary.
     */
    MultiDictionary.prototype.clear = function () {
        this.dict.clear();
    };
    /**
     * Returns the number of keys in this dictionary.
     * @return {number} the number of key-value mappings in this dictionary.
     */
    MultiDictionary.prototype.size = function () {
        return this.dict.size();
    };
    /**
     * Returns true if this dictionary contains no mappings.
     * @return {boolean} true if this dictionary contains no mappings.
     */
    MultiDictionary.prototype.isEmpty = function () {
        return this.dict.isEmpty();
    };
    return MultiDictionary;
}()); // end of multi dictionary
exports.default = MultiDictionary;
//# sourceMappingURL=MultiDictionary.js.map
});
___scope___.file("dist/lib/FactoryDictionary.js", function(exports, require, module, __filename, __dirname){

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
var Dictionary_1 = require("./Dictionary");
var util = require("./util");
var FactoryDictionary = /** @class */ (function (_super) {
    __extends(FactoryDictionary, _super);
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>The default factory function should return a new object of the provided
     * type. Example:</p>
     * <pre>
     * function petFactory() {
     *  return new Pet();
     * }
     * </pre>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function():V=} defaultFactoryFunction function used to create a
     * default object.
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    function FactoryDictionary(defaultFactoryFunction, toStrFunction) {
        var _this = _super.call(this, toStrFunction) || this;
        _this.defaultFactoryFunction = defaultFactoryFunction;
        return _this;
    }
    /**
     * Associates the specified default value with the specified key in this dictionary,
     * if it didn't contain the key yet. If the key existed, the existing value will be used.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} defaultValue default value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or the default value,
     * if the key didn't exist yet.
     */
    FactoryDictionary.prototype.setDefault = function (key, defaultValue) {
        var currentValue = _super.prototype.getValue.call(this, key);
        if (util.isUndefined(currentValue)) {
            this.setValue(key, defaultValue);
            return defaultValue;
        }
        return currentValue;
    };
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns a default value created by the factory passed in the constructor,
     * if this dictionary contains no mapping for this key. The missing key will
     * automatically be added to the dictionary.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * a default value if the map contains no mapping for this key.
     */
    FactoryDictionary.prototype.getValue = function (key) {
        return this.setDefault(key, this.defaultFactoryFunction());
    };
    return FactoryDictionary;
}(Dictionary_1.default));
exports.default = FactoryDictionary;
//# sourceMappingURL=FactoryDictionary.js.map
});
___scope___.file("dist/lib/PriorityQueue.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Heap_1 = require("./Heap");
var PriorityQueue = /** @class */ (function () {
    /**
     * Creates an empty priority queue.
     * @class <p>In a priority queue each element is associated with a "priority",
     * elements are dequeued in highest-priority-first order (the elements with the
     * highest priority are dequeued first). Priority Queues are implemented as heaps.
     * If the inserted elements are custom objects a compare function must be provided,
     * otherwise the <=, === and >= operators are used to compare object priority.</p>
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two element priorities. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function PriorityQueue(compareFunction) {
        this.heap = new Heap_1.default(util.reverseCompareFunction(compareFunction));
    }
    /**
     * Inserts the specified element into this priority queue.
     * @param {Object} element the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    PriorityQueue.prototype.enqueue = function (element) {
        return this.heap.add(element);
    };
    /**
     * Inserts the specified element into this priority queue.
     * @param {Object} element the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    PriorityQueue.prototype.add = function (element) {
        return this.heap.add(element);
    };
    /**
     * Retrieves and removes the highest priority element of this queue.
     * @return {*} the the highest priority element of this queue,
     *  or undefined if this queue is empty.
     */
    PriorityQueue.prototype.dequeue = function () {
        if (this.heap.size() !== 0) {
            var el = this.heap.peek();
            this.heap.removeRoot();
            return el;
        }
        return undefined;
    };
    /**
     * Retrieves, but does not remove, the highest priority element of this queue.
     * @return {*} the highest priority element of this queue, or undefined if this queue is empty.
     */
    PriorityQueue.prototype.peek = function () {
        return this.heap.peek();
    };
    /**
     * Returns true if this priority queue contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this priority queue contains the specified element,
     * false otherwise.
     */
    PriorityQueue.prototype.contains = function (element) {
        return this.heap.contains(element);
    };
    /**
     * Checks if this priority queue is empty.
     * @return {boolean} true if and only if this priority queue contains no items; false
     * otherwise.
     */
    PriorityQueue.prototype.isEmpty = function () {
        return this.heap.isEmpty();
    };
    /**
     * Returns the number of elements in this priority queue.
     * @return {number} the number of elements in this priority queue.
     */
    PriorityQueue.prototype.size = function () {
        return this.heap.size();
    };
    /**
     * Removes all of the elements from this priority queue.
     */
    PriorityQueue.prototype.clear = function () {
        this.heap.clear();
    };
    /**
     * Executes the provided function once for each element present in this queue in
     * no particular order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    PriorityQueue.prototype.forEach = function (callback) {
        this.heap.forEach(callback);
    };
    return PriorityQueue;
}()); // end of priority queue
exports.default = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map
});
___scope___.file("dist/lib/Stack.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Stack = /** @class */ (function () {
    /**
     * Creates an empty Stack.
     * @class A Stack is a Last-In-First-Out (LIFO) data structure, the last
     * element added to the stack will be the first one to be removed. This
     * implementation uses a linked list as a container.
     * @constructor
     */
    function Stack() {
        this.list = new LinkedList_1.default();
    }
    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} elem the element to be pushed onto this stack.
     * @return {boolean} true if the element was pushed or false if it is undefined.
     */
    Stack.prototype.push = function (elem) {
        return this.list.add(elem, 0);
    };
    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} elem the element to be pushed onto this stack.
     * @return {boolean} true if the element was pushed or false if it is undefined.
     */
    Stack.prototype.add = function (elem) {
        return this.list.add(elem, 0);
    };
    /**
     * Removes the object at the top of this stack and returns that object.
     * @return {*} the object at the top of this stack or undefined if the
     * stack is empty.
     */
    Stack.prototype.pop = function () {
        return this.list.removeElementAtIndex(0);
    };
    /**
     * Looks at the object at the top of this stack without removing it from the
     * stack.
     * @return {*} the object at the top of this stack or undefined if the
     * stack is empty.
     */
    Stack.prototype.peek = function () {
        return this.list.first();
    };
    /**
     * Returns the number of elements in this stack.
     * @return {number} the number of elements in this stack.
     */
    Stack.prototype.size = function () {
        return this.list.size();
    };
    /**
     * Returns true if this stack contains the specified element.
     * <p>If the elements inside this stack are
     * not comparable with the === operator, a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName (pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} elem element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function to check if two elements are equal.
     * @return {boolean} true if this stack contains the specified element,
     * false otherwise.
     */
    Stack.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    /**
     * Checks if this stack is empty.
     * @return {boolean} true if and only if this stack contains no items; false
     * otherwise.
     */
    Stack.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    /**
     * Removes all of the elements from this stack.
     */
    Stack.prototype.clear = function () {
        this.list.clear();
    };
    /**
     * Executes the provided function once for each element present in this stack in
     * LIFO order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Stack.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Stack;
}()); // End of stack
exports.default = Stack;
//# sourceMappingURL=Stack.js.map
});
___scope___.file("dist/lib/MultiRootTree.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["BEFORE"] = 0] = "BEFORE";
    Direction[Direction["AFTER"] = 1] = "AFTER";
    Direction[Direction["INSIDE_AT_END"] = 2] = "INSIDE_AT_END";
    Direction[Direction["INSIDE_AT_START"] = 3] = "INSIDE_AT_START";
})(Direction || (Direction = {}));
var MultiRootTree = /** @class */ (function () {
    function MultiRootTree(rootIds, nodes) {
        if (rootIds === void 0) { rootIds = []; }
        if (nodes === void 0) { nodes = {}; }
        this.rootIds = rootIds;
        this.nodes = nodes;
        this.initRootIds();
        this.initNodes();
    }
    MultiRootTree.prototype.initRootIds = function () {
        for (var _i = 0, _a = this.rootIds; _i < _a.length; _i++) {
            var rootId = _a[_i];
            this.createEmptyNodeIfNotExist(rootId);
        }
    };
    MultiRootTree.prototype.initNodes = function () {
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                for (var _i = 0, _a = this.nodes[nodeKey]; _i < _a.length; _i++) {
                    var nodeListItem = _a[_i];
                    this.createEmptyNodeIfNotExist(nodeListItem);
                }
            }
        }
    };
    MultiRootTree.prototype.createEmptyNodeIfNotExist = function (nodeKey) {
        if (!this.nodes[nodeKey]) {
            this.nodes[nodeKey] = [];
        }
    };
    MultiRootTree.prototype.getRootIds = function () {
        var clone = this.rootIds.slice();
        return clone;
    };
    MultiRootTree.prototype.getNodes = function () {
        var clone = {};
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                clone[nodeKey] = this.nodes[nodeKey].slice();
            }
        }
        return clone;
    };
    MultiRootTree.prototype.getObject = function () {
        return {
            rootIds: this.getRootIds(),
            nodes: this.getNodes(),
        };
    };
    MultiRootTree.prototype.toObject = function () {
        return this.getObject();
    };
    MultiRootTree.prototype.flatten = function () {
        var _this = this;
        var extraPropsObject = [];
        for (var i = 0; i < this.rootIds.length; i++) {
            var rootId = this.rootIds[i];
            extraPropsObject.push({
                id: rootId,
                level: 0,
                hasParent: false,
                childrenCount: undefined,
            });
            traverse(rootId, this.nodes, extraPropsObject, 0);
        }
        for (var _i = 0, extraPropsObject_1 = extraPropsObject; _i < extraPropsObject_1.length; _i++) {
            var o = extraPropsObject_1[_i];
            o.childrenCount = countChildren(o.id);
        }
        return extraPropsObject;
        function countChildren(id) {
            if (!_this.nodes[id]) {
                return 0;
            }
            else {
                var childrenCount = _this.nodes[id].length;
                return childrenCount;
            }
        }
        function traverse(startId, nodes, returnArray, level) {
            if (level === void 0) { level = 0; }
            if (!startId || !nodes || !returnArray || !nodes[startId]) {
                return;
            }
            level++;
            var idsList = nodes[startId];
            for (var i = 0; i < idsList.length; i++) {
                var id = idsList[i];
                returnArray.push({ id: id, level: level, hasParent: true });
                traverse(id, nodes, returnArray, level);
            }
            level--;
        }
    };
    MultiRootTree.prototype.moveIdBeforeId = function (moveId, beforeId) {
        return this.moveId(moveId, beforeId, Direction.BEFORE);
    };
    MultiRootTree.prototype.moveIdAfterId = function (moveId, afterId) {
        return this.moveId(moveId, afterId, Direction.AFTER);
    };
    MultiRootTree.prototype.moveIdIntoId = function (moveId, insideId, atStart) {
        if (atStart === void 0) { atStart = true; }
        if (atStart) {
            return this.moveId(moveId, insideId, Direction.INSIDE_AT_START);
        }
        else {
            return this.moveId(moveId, insideId, Direction.INSIDE_AT_END);
        }
    };
    MultiRootTree.prototype.swapRootIdWithRootId = function (rootId, withRootId) {
        var leftIndex = this.findRootId(rootId);
        var rightIndex = this.findRootId(withRootId);
        this.swapRootPositionWithRootPosition(leftIndex, rightIndex);
    };
    MultiRootTree.prototype.swapRootPositionWithRootPosition = function (swapRootPosition, withRootPosition) {
        var temp = this.rootIds[withRootPosition];
        this.rootIds[withRootPosition] = this.rootIds[swapRootPosition];
        this.rootIds[swapRootPosition] = temp;
    };
    MultiRootTree.prototype.deleteId = function (id) {
        this.rootDeleteId(id);
        this.nodeAndSubNodesDelete(id);
        this.nodeRefrencesDelete(id);
    };
    MultiRootTree.prototype.insertIdBeforeId = function (beforeId, insertId) {
        var foundRootIdIndex = this.findRootId(beforeId);
        if (foundRootIdIndex > -1) {
            this.insertIdIntoRoot(insertId, foundRootIdIndex);
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                var foundNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                if (foundNodeIdIndex > -1) {
                    this.insertIdIntoNode(nodeKey, insertId, foundNodeIdIndex);
                }
            }
        }
    };
    MultiRootTree.prototype.insertIdAfterId = function (belowId, insertId) {
        var foundRootIdIndex = this.findRootId(belowId);
        if (foundRootIdIndex > -1) {
            this.insertIdIntoRoot(insertId, foundRootIdIndex + 1);
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                var foundNodeIdIndex = this.findNodeId(nodeKey, belowId);
                if (foundNodeIdIndex > -1) {
                    this.insertIdIntoNode(nodeKey, insertId, foundNodeIdIndex + 1);
                }
            }
        }
    };
    MultiRootTree.prototype.insertIdIntoId = function (insideId, insertId) {
        this.nodeInsertAtEnd(insideId, insertId);
        this.nodes[insertId] = [];
    };
    MultiRootTree.prototype.insertIdIntoRoot = function (id, position) {
        if (position === undefined) {
            this.rootInsertAtEnd(id);
        }
        else {
            if (position < 0) {
                var length_1 = this.rootIds.length;
                this.rootIds.splice((position + length_1 + 1), 0, id);
            }
            else {
                this.rootIds.splice(position, 0, id);
            }
        }
        this.nodes[id] = this.nodes[id] || [];
    };
    MultiRootTree.prototype.insertIdIntoNode = function (nodeKey, id, position) {
        this.nodes[nodeKey] = this.nodes[nodeKey] || [];
        this.nodes[id] = this.nodes[id] || [];
        if (position === undefined) {
            this.nodeInsertAtEnd(nodeKey, id);
        }
        else {
            if (position < 0) {
                var length_2 = this.nodes[nodeKey].length;
                this.nodes[nodeKey].splice((position + length_2 + 1), 0, id);
            }
            else {
                this.nodes[nodeKey].splice(position, 0, id);
            }
        }
    };
    MultiRootTree.prototype.moveId = function (moveId, beforeId, direction) {
        var sourceId = moveId;
        var sourceRootIndex = this.findRootId(sourceId);
        var sourceNodeKey;
        var sourceNodeIdIndex;
        if (this.nodes[beforeId]) {
            sourceNodeKey = beforeId;
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                sourceNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                break;
            }
        }
        // got all
        var targetId = beforeId;
        var targetRootIndex = this.findRootId(targetId);
        var targetNodeKey;
        var targetNodeIdIndex;
        if (this.nodes[beforeId]) {
            targetNodeKey = beforeId;
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                targetNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                break;
            }
        }
        // got all
        if (sourceRootIndex > -1) {
            if (targetRootIndex > -1) {
                // moving root to root
                // console.log(`Moving ROOT to ROOT`);
                // console.log(`RootIds:`);
                // console.log(this.rootIds);
                // console.log(`TargetIndex=${targetRootIndex}, SourceIndex=${sourceRootIndex}`);
                // console.log(`TargetId=${targetId}, SourceId=${sourceId}`);
                this.rootDelete(sourceRootIndex); // indexes change now
                if (targetRootIndex > sourceRootIndex) {
                    targetRootIndex--;
                }
                else {
                }
                switch (direction) {
                    case Direction.BEFORE:
                        this.insertIdIntoRoot(sourceId, targetRootIndex);
                        break;
                    case Direction.AFTER:
                        this.insertIdIntoRoot(sourceId, targetRootIndex + 1);
                        break;
                    case Direction.INSIDE_AT_START:
                        this.nodeInsertAtStart(targetId, sourceId);
                        break;
                    case Direction.INSIDE_AT_END:
                        this.nodeInsertAtEnd(targetId, sourceId);
                        break;
                }
            }
            else {
                // moving root (source) ABOVE node (target)
                // will remove one entry from roots
                this.rootDelete(sourceRootIndex);
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, targetId);
                        if (index > -1) {
                            switch (direction) {
                                case Direction.BEFORE:
                                    this.insertIdIntoNode(nodeKey, sourceId, index);
                                    break;
                                case Direction.AFTER:
                                    this.insertIdIntoNode(nodeKey, sourceId, index + 1);
                                    break;
                                case Direction.INSIDE_AT_START:
                                    this.nodeInsertAtStart(targetId, sourceId);
                                    break;
                                case Direction.INSIDE_AT_END:
                                    this.nodeInsertAtEnd(targetId, sourceId);
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
        else {
            if (targetRootIndex > -1) {
                // moving node (source) ABOVE root (target)
                // delete source id from each node
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, sourceId);
                        if (index > -1) {
                            // this.nodeInsertId(nodeKey, sourceId, index);
                            this.nodeDeleteAtIndex(nodeKey, index);
                            break;
                        }
                    }
                }
                switch (direction) {
                    case Direction.BEFORE:
                        this.insertIdIntoRoot(sourceId, targetRootIndex);
                        break;
                    case Direction.AFTER:
                        this.insertIdIntoRoot(sourceId, targetRootIndex + 1);
                        break;
                    case Direction.INSIDE_AT_START:
                        this.nodeInsertAtStart(targetId, sourceId);
                        break;
                    case Direction.INSIDE_AT_END:
                        this.nodeInsertAtEnd(targetId, sourceId);
                        break;
                }
            }
            else {
                // moving node (source) ABOVE node (target)
                // delete source id from each node
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, sourceId);
                        if (index > -1) {
                            this.nodeDeleteAtIndex(nodeKey, index);
                            break;
                        }
                    }
                }
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, targetId);
                        if (index > -1) {
                            switch (direction) {
                                case Direction.BEFORE:
                                    this.insertIdIntoNode(nodeKey, sourceId, index);
                                    break;
                                case Direction.AFTER:
                                    this.insertIdIntoNode(nodeKey, sourceId, index + 1);
                                    break;
                                case Direction.INSIDE_AT_START:
                                    this.nodeInsertAtStart(targetId, sourceId);
                                    break;
                                case Direction.INSIDE_AT_END:
                                    this.nodeInsertAtEnd(targetId, sourceId);
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
    };
    MultiRootTree.prototype.swapArrayElements = function (arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    };
    MultiRootTree.prototype.rootDeleteId = function (id) {
        var index = this.findRootId(id);
        if (index > -1) {
            this.rootDelete(index);
        }
    };
    MultiRootTree.prototype.nodeAndSubNodesDelete = function (nodeKey) {
        var toDeleteLater = [];
        for (var i = 0; i < this.nodes[nodeKey].length; i++) {
            var id = this.nodes[nodeKey][i];
            this.nodeAndSubNodesDelete(id);
            toDeleteLater.push(nodeKey);
        }
        this.nodeDelete(nodeKey);
        for (var i = 0; i < toDeleteLater.length; i++) {
            this.nodeDelete(toDeleteLater[i]);
        }
    };
    MultiRootTree.prototype.nodeRefrencesDelete = function (id) {
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                for (var i = 0; i < this.nodes[nodeKey].length; i++) {
                    var targetId = this.nodes[nodeKey][i];
                    if (targetId === id) {
                        this.nodeDeleteAtIndex(nodeKey, i);
                    }
                }
            }
        }
    };
    MultiRootTree.prototype.nodeDelete = function (nodeKey) {
        delete this.nodes[nodeKey];
    };
    MultiRootTree.prototype.findRootId = function (id) {
        return this.rootIds.indexOf(id);
    };
    MultiRootTree.prototype.findNodeId = function (nodeKey, id) {
        return this.nodes[nodeKey].indexOf(id);
    };
    MultiRootTree.prototype.findNode = function (nodeKey) {
        return this.nodes[nodeKey];
    };
    MultiRootTree.prototype.nodeInsertAtStart = function (nodeKey, id) {
        this.nodes[nodeKey].unshift(id);
    };
    MultiRootTree.prototype.nodeInsertAtEnd = function (nodeKey, id) {
        this.nodes[nodeKey].push(id);
    };
    MultiRootTree.prototype.rootDelete = function (index) {
        this.rootIds.splice(index, 1);
    };
    MultiRootTree.prototype.nodeDeleteAtIndex = function (nodeKey, index) {
        this.nodes[nodeKey].splice(index, 1);
    };
    MultiRootTree.prototype.rootInsertAtStart = function (id) {
        this.rootIds.unshift(id);
    };
    MultiRootTree.prototype.rootInsertAtEnd = function (id) {
        this.rootIds.push(id);
    };
    return MultiRootTree;
}());
exports.default = MultiRootTree;
//# sourceMappingURL=MultiRootTree.js.map
});
return ___scope___.entry = "dist/lib/index.js";
});
FuseBox.target = "browser"

FuseBox.import("default/app/main.js");
FuseBox.main("default/app/main.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((p||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(p){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!p&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=g[a];if(!s){if(p&&"electron"!==x.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),d=i(c),v=s.f[d];return!v&&d.indexOf("*")>-1&&(l=d),v||l||(d=t(c,"/","index.js"),v=s.f[d],v||"."!==c||(d=s.s&&s.s.entry||"index.js",v=s.f[d]),v||(d=c+".js",v=s.f[d]),v||(v=s.f[c+".jsx"]),v||(d=c+"/index.jsx",v=s.f[d])),{file:v,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:d}}function s(e,r,n){if(void 0===n&&(n={}),!p)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);x.dynamic(a,o),r(x.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=h[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=g[t.pkgName];if(u){var d={};for(var m in u.f)a.test(m)&&(d[m]=c(t.pkgName+"/"+m));return d}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var y=i.locals={},w=n(t.validPath);y.exports={},y.module={exports:y.exports},y.require=function(e,r){return c(e,{pkg:_,path:w,v:t.versions})},p||!v.require.main?y.require.main={filename:"./",paths:[]}:y.require.main=v.require.main;var j=[y.module.exports,y.require,y.module,t.validPath,w,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),y.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof WorkerGlobalScope,p="undefined"!=typeof window&&window.navigator||d,v=p?d?{}:window:global;p&&(v.global=d?{}:window),e=p&&"undefined"==typeof __fbx__dnm__?e:module.exports;var m=p?d?{}:window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};p||(v.require=require);var g=m.p=m.p||{},h=m.e=m.e||{},x=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){h[e]=h[e]||[],h[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=g[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=g.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(g[e])return n(g[e].s);var t=g[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=g,r.isBrowser=p,r.isServer=!p,r.plugins=[],r}();return p||(v.FuseBox=x),e.FuseBox=x}(this))
//# sourceMappingURL=online-quote.js.map