(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./pkg/online_cad.js":
/*!***************************!*\
  !*** ./pkg/online_cad.js ***!
  \***************************/
/*! exports provided: __wbg_log_2bfa6ee502552a92, __wbg_alert_dc61f43bafe38b25, greet, run, hlr_new, hlr_drop, hlr_add_triangle, hlr_add_lines_from_triangles, hlr_extract_drawing_ortho, __wbg_error_4bb6c2a97407129a, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_new_e4d30a4b4735c3c3, __wbg_push_813d9619c1a992c5, __wbg_apply_adfe6a07f5e56afc, __wbindgen_number_new, __wbindgen_throw, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_2bfa6ee502552a92", function() { return __wbg_log_2bfa6ee502552a92; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_alert_dc61f43bafe38b25", function() { return __wbg_alert_dc61f43bafe38b25; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet", function() { return greet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hlr_new", function() { return hlr_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hlr_drop", function() { return hlr_drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hlr_add_triangle", function() { return hlr_add_triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hlr_add_lines_from_triangles", function() { return hlr_add_lines_from_triangles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hlr_extract_drawing_ortho", function() { return hlr_extract_drawing_ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_e4d30a4b4735c3c3", function() { return __wbg_new_e4d30a4b4735c3c3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_push_813d9619c1a992c5", function() { return __wbg_push_813d9619c1a992c5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_apply_adfe6a07f5e56afc", function() { return __wbg_apply_adfe6a07f5e56afc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_new", function() { return __wbindgen_number_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony import */ var _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./online_cad_bg */ "./pkg/online_cad_bg.wasm");


let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbg_log_2bfa6ee502552a92(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    try {
        console.log(varg0);
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

function __wbg_alert_dc61f43bafe38b25(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    try {
        alert(varg0);
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {

        if (typeof(arg) !== 'string') throw new Error('expected a string argument');

        let size = arg.length;
        let ptr = _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](size);
        let writeOffset = 0;
        while (true) {
            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);
            const { read, written } = cachedTextEncoder.encodeInto(arg, view);
            writeOffset += written;
            if (read === arg.length) {
                break;
            }
            arg = arg.substring(read);
            ptr = _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"](ptr, size, size += arg.length * 3);
        }
        WASM_VECTOR_LEN = writeOffset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {

        if (typeof(arg) !== 'string') throw new Error('expected a string argument');

        const buf = cachedTextEncoder.encode(arg);
        const ptr = _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](buf.length);
        getUint8Memory().set(buf, ptr);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    };
}
/**
* @param {string} name
* @returns {void}
*/
function greet(name) {
    const ptr0 = passStringToWasm(name);
    const len0 = WASM_VECTOR_LEN;
    try {
        return _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["greet"](ptr0, len0);

    } finally {
        _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](ptr0, len0 * 1);

    }

}

/**
* @returns {void}
*/
function run() {
    return _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["run"]();
}

/**
* @returns {number}
*/
function hlr_new() {
    return _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["hlr_new"]();
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}
/**
* @param {number} hlr
* @returns {void}
*/
function hlr_drop(hlr) {
    _assertNum(hlr);
    return _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["hlr_drop"](hlr);
}

/**
* @param {number} hlr
* @param {number} v1x
* @param {number} v1y
* @param {number} v1z
* @param {number} v2x
* @param {number} v2y
* @param {number} v2z
* @param {number} v3x
* @param {number} v3y
* @param {number} v3z
* @returns {void}
*/
function hlr_add_triangle(hlr, v1x, v1y, v1z, v2x, v2y, v2z, v3x, v3y, v3z) {
    _assertNum(hlr);
    _assertNum(v1x);
    _assertNum(v1y);
    _assertNum(v1z);
    _assertNum(v2x);
    _assertNum(v2y);
    _assertNum(v2z);
    _assertNum(v3x);
    _assertNum(v3y);
    _assertNum(v3z);
    return _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["hlr_add_triangle"](hlr, v1x, v1y, v1z, v2x, v2y, v2z, v3x, v3y, v3z);
}

/**
* @param {number} hlr
* @returns {void}
*/
function hlr_add_lines_from_triangles(hlr) {
    _assertNum(hlr);
    return _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["hlr_add_lines_from_triangles"](hlr);
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}
/**
* @param {number} hlr
* @param {number} view_origin_x
* @param {number} view_origin_y
* @param {number} view_origin_z
* @param {number} view_dir_x
* @param {number} view_dir_y
* @param {number} view_dir_z
* @param {any} f
* @returns {void}
*/
function hlr_extract_drawing_ortho(hlr, view_origin_x, view_origin_y, view_origin_z, view_dir_x, view_dir_y, view_dir_z, f) {
    _assertNum(hlr);
    _assertNum(view_origin_x);
    _assertNum(view_origin_y);
    _assertNum(view_origin_z);
    _assertNum(view_dir_x);
    _assertNum(view_dir_y);
    _assertNum(view_dir_z);
    return _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["hlr_extract_drawing_ortho"](hlr, view_origin_x, view_origin_y, view_origin_z, view_dir_x, view_dir_y, view_dir_z, addHeapObject(f));
}

function __wbg_error_4bb6c2a97407129a(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);

    varg0 = varg0.slice();
    _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1 * 1);

    try {
        console.error(varg0);
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

function __wbg_new_59cb74e423758ede() {
    try {
        return addHeapObject(new Error());
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

function getObject(idx) { return heap[idx]; }

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint32Memory = new Uint32Array(_online_cad_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint32Memory;
}

function __wbg_stack_558ba5917b466edd(ret, arg0) {
    try {

        const retptr = passStringToWasm(getObject(arg0).stack);
        const retlen = WASM_VECTOR_LEN;
        const mem = getUint32Memory();
        mem[ret / 4] = retptr;
        mem[ret / 4 + 1] = retlen;

    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

function __wbg_new_e4d30a4b4735c3c3() {
    try {
        return addHeapObject(new Array());
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

function __wbg_push_813d9619c1a992c5(arg0, arg1) {
    try {
        return getObject(arg0).push(getObject(arg1));
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

function __wbg_apply_adfe6a07f5e56afc(arg0, arg1, arg2, exnptr) {
    try {
        return addHeapObject(getObject(arg0).apply(getObject(arg1), getObject(arg2)));
    } catch (e) {
        handleError(exnptr, e);
    }
}

function __wbindgen_number_new(i) { return addHeapObject(i); }

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function __wbindgen_object_drop_ref(i) { dropObject(i); }


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ "./node_modules/text-encoding/index.js")["TextDecoder"], __webpack_require__(/*! text-encoding */ "./node_modules/text-encoding/index.js")["TextEncoder"]))

/***/ }),

/***/ "./pkg/online_cad_bg.wasm":
/*!********************************!*\
  !*** ./pkg/online_cad_bg.wasm ***!
  \********************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, greet, run, hlr_new, hlr_drop, hlr_add_triangle, hlr_add_lines_from_triangles, hlr_extract_drawing_ortho, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./online_cad */ "./pkg/online_cad.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wa2cvb25saW5lX2NhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3Qzs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RSxxREFBVztBQUNsRiw2Q0FBNkMscURBQVc7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsZ0VBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpRUFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IsZ0VBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQVU7O0FBRXpCLEtBQUs7QUFDTCxRQUFRLDhEQUFvQjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQLFdBQVcsa0RBQVE7QUFDbkI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQLFdBQVcsc0RBQVk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBLFdBQVcsdURBQWE7QUFDeEI7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsK0RBQXFCO0FBQ2hDOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQSxXQUFXLDJFQUFpQztBQUM1Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLElBQUk7QUFDZCxZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3RUFBOEI7QUFDekM7O0FBRU87QUFDUDs7QUFFQTtBQUNBLElBQUksOERBQW9COztBQUV4QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQztBQUNBO0FBQ0EseUVBQXlFLHFEQUFXO0FBQ3BGLCtDQUErQyxxREFBVztBQUMxRDtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTyxtQ0FBbUMseUJBQXlCOztBQUU1RDtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyx3Q0FBd0MsZUFBZSIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi9vbmxpbmVfY2FkX2JnJztcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2xvZ18yYmZhNmVlNTAyNTUyYTkyKGFyZzAsIGFyZzEpIHtcbiAgICBsZXQgdmFyZzAgPSBnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YXJnMCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwid2FzbS1iaW5kZ2VuOiBpbXBvcnRlZCBKUyBmdW5jdGlvbiB0aGF0IHdhcyBub3QgbWFya2VkIGFzIGBjYXRjaGAgdGhyZXcgYW4gZXJyb3I6XCIsIGUpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2FsZXJ0X2RjNjFmNDNiYWZlMzhiMjUoYXJnMCwgYXJnMSkge1xuICAgIGxldCB2YXJnMCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpO1xuICAgIHRyeSB7XG4gICAgICAgIGFsZXJ0KHZhcmcwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ3YXNtLWJpbmRnZW46IGltcG9ydGVkIEpTIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtYXJrZWQgYXMgYGNhdGNoYCB0aHJldyBhbiBlcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgcGFzc1N0cmluZ1RvV2FzbTtcbmlmICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhc3NTdHJpbmdUb1dhc20gPSBmdW5jdGlvbihhcmcpIHtcblxuICAgICAgICBpZiAodHlwZW9mKGFyZykgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIGEgc3RyaW5nIGFyZ3VtZW50Jyk7XG5cbiAgICAgICAgbGV0IHNpemUgPSBhcmcubGVuZ3RoO1xuICAgICAgICBsZXQgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhzaXplKTtcbiAgICAgICAgbGV0IHdyaXRlT2Zmc2V0ID0gMDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeSgpLnN1YmFycmF5KHB0ciArIHdyaXRlT2Zmc2V0LCBwdHIgKyBzaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVhZCwgd3JpdHRlbiB9ID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xuICAgICAgICAgICAgd3JpdGVPZmZzZXQgKz0gd3JpdHRlbjtcbiAgICAgICAgICAgIGlmIChyZWFkID09PSBhcmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmcgPSBhcmcuc3Vic3RyaW5nKHJlYWQpO1xuICAgICAgICAgICAgcHRyID0gd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MocHRyLCBzaXplLCBzaXplICs9IGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgfVxuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSB3cml0ZU9mZnNldDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBwYXNzU3RyaW5nVG9XYXNtID0gZnVuY3Rpb24oYXJnKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZihhcmcpICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIHN0cmluZyBhcmd1bWVudCcpO1xuXG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKGJ1Zi5sZW5ndGgpO1xuICAgICAgICBnZXRVaW50OE1lbW9yeSgpLnNldChidWYsIHB0cik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfTtcbn1cbi8qKlxuKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuKiBAcmV0dXJucyB7dm9pZH1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ3JlZXQobmFtZSkge1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtKG5hbWUpO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHdhc20uZ3JlZXQocHRyMCwgbGVuMCk7XG5cbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShwdHIwLCBsZW4wICogMSk7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4qIEByZXR1cm5zIHt2b2lkfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4oKSB7XG4gICAgcmV0dXJuIHdhc20ucnVuKCk7XG59XG5cbi8qKlxuKiBAcmV0dXJucyB7bnVtYmVyfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBobHJfbmV3KCkge1xuICAgIHJldHVybiB3YXNtLmhscl9uZXcoKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydE51bShuKSB7XG4gICAgaWYgKHR5cGVvZihuKSAhPT0gJ251bWJlcicpIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBudW1iZXIgYXJndW1lbnQnKTtcbn1cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0gaGxyXG4qIEByZXR1cm5zIHt2b2lkfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBobHJfZHJvcChobHIpIHtcbiAgICBfYXNzZXJ0TnVtKGhscik7XG4gICAgcmV0dXJuIHdhc20uaGxyX2Ryb3AoaGxyKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSBobHJcbiogQHBhcmFtIHtudW1iZXJ9IHYxeFxuKiBAcGFyYW0ge251bWJlcn0gdjF5XG4qIEBwYXJhbSB7bnVtYmVyfSB2MXpcbiogQHBhcmFtIHtudW1iZXJ9IHYyeFxuKiBAcGFyYW0ge251bWJlcn0gdjJ5XG4qIEBwYXJhbSB7bnVtYmVyfSB2MnpcbiogQHBhcmFtIHtudW1iZXJ9IHYzeFxuKiBAcGFyYW0ge251bWJlcn0gdjN5XG4qIEBwYXJhbSB7bnVtYmVyfSB2M3pcbiogQHJldHVybnMge3ZvaWR9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGhscl9hZGRfdHJpYW5nbGUoaGxyLCB2MXgsIHYxeSwgdjF6LCB2MngsIHYyeSwgdjJ6LCB2M3gsIHYzeSwgdjN6KSB7XG4gICAgX2Fzc2VydE51bShobHIpO1xuICAgIF9hc3NlcnROdW0odjF4KTtcbiAgICBfYXNzZXJ0TnVtKHYxeSk7XG4gICAgX2Fzc2VydE51bSh2MXopO1xuICAgIF9hc3NlcnROdW0odjJ4KTtcbiAgICBfYXNzZXJ0TnVtKHYyeSk7XG4gICAgX2Fzc2VydE51bSh2MnopO1xuICAgIF9hc3NlcnROdW0odjN4KTtcbiAgICBfYXNzZXJ0TnVtKHYzeSk7XG4gICAgX2Fzc2VydE51bSh2M3opO1xuICAgIHJldHVybiB3YXNtLmhscl9hZGRfdHJpYW5nbGUoaGxyLCB2MXgsIHYxeSwgdjF6LCB2MngsIHYyeSwgdjJ6LCB2M3gsIHYzeSwgdjN6KTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSBobHJcbiogQHJldHVybnMge3ZvaWR9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGhscl9hZGRfbGluZXNfZnJvbV90cmlhbmdsZXMoaGxyKSB7XG4gICAgX2Fzc2VydE51bShobHIpO1xuICAgIHJldHVybiB3YXNtLmhscl9hZGRfbGluZXNfZnJvbV90cmlhbmdsZXMoaGxyKTtcbn1cblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgzMik7XG5cbmhlYXAuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGlmICh0eXBlb2YoaGVhcF9uZXh0KSAhPT0gJ251bWJlcicpIHRocm93IG5ldyBFcnJvcignY29ycnVwdCBoZWFwJyk7XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0gaGxyXG4qIEBwYXJhbSB7bnVtYmVyfSB2aWV3X29yaWdpbl94XG4qIEBwYXJhbSB7bnVtYmVyfSB2aWV3X29yaWdpbl95XG4qIEBwYXJhbSB7bnVtYmVyfSB2aWV3X29yaWdpbl96XG4qIEBwYXJhbSB7bnVtYmVyfSB2aWV3X2Rpcl94XG4qIEBwYXJhbSB7bnVtYmVyfSB2aWV3X2Rpcl95XG4qIEBwYXJhbSB7bnVtYmVyfSB2aWV3X2Rpcl96XG4qIEBwYXJhbSB7YW55fSBmXG4qIEByZXR1cm5zIHt2b2lkfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBobHJfZXh0cmFjdF9kcmF3aW5nX29ydGhvKGhsciwgdmlld19vcmlnaW5feCwgdmlld19vcmlnaW5feSwgdmlld19vcmlnaW5feiwgdmlld19kaXJfeCwgdmlld19kaXJfeSwgdmlld19kaXJfeiwgZikge1xuICAgIF9hc3NlcnROdW0oaGxyKTtcbiAgICBfYXNzZXJ0TnVtKHZpZXdfb3JpZ2luX3gpO1xuICAgIF9hc3NlcnROdW0odmlld19vcmlnaW5feSk7XG4gICAgX2Fzc2VydE51bSh2aWV3X29yaWdpbl96KTtcbiAgICBfYXNzZXJ0TnVtKHZpZXdfZGlyX3gpO1xuICAgIF9hc3NlcnROdW0odmlld19kaXJfeSk7XG4gICAgX2Fzc2VydE51bSh2aWV3X2Rpcl96KTtcbiAgICByZXR1cm4gd2FzbS5obHJfZXh0cmFjdF9kcmF3aW5nX29ydGhvKGhsciwgdmlld19vcmlnaW5feCwgdmlld19vcmlnaW5feSwgdmlld19vcmlnaW5feiwgdmlld19kaXJfeCwgdmlld19kaXJfeSwgdmlld19kaXJfeiwgYWRkSGVhcE9iamVjdChmKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19lcnJvcl80YmI2YzJhOTc0MDcxMjlhKGFyZzAsIGFyZzEpIHtcbiAgICBsZXQgdmFyZzAgPSBnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKTtcblxuICAgIHZhcmcwID0gdmFyZzAuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShhcmcwLCBhcmcxICogMSk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHZhcmcwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ3YXNtLWJpbmRnZW46IGltcG9ydGVkIEpTIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtYXJrZWQgYXMgYGNhdGNoYCB0aHJldyBhbiBlcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzU5Y2I3NGU0MjM3NThlZGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QobmV3IEVycm9yKCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIndhc20tYmluZGdlbjogaW1wb3J0ZWQgSlMgZnVuY3Rpb24gdGhhdCB3YXMgbm90IG1hcmtlZCBhcyBgY2F0Y2hgIHRocmV3IGFuIGVycm9yOlwiLCBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQzMk1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQzMk1lbW9yeSA9IG5ldyBVaW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50MzJNZW1vcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zdGFja181NThiYTU5MTdiNDY2ZWRkKHJldCwgYXJnMCkge1xuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgcmV0cHRyID0gcGFzc1N0cmluZ1RvV2FzbShnZXRPYmplY3QoYXJnMCkuc3RhY2spO1xuICAgICAgICBjb25zdCByZXRsZW4gPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGNvbnN0IG1lbSA9IGdldFVpbnQzMk1lbW9yeSgpO1xuICAgICAgICBtZW1bcmV0IC8gNF0gPSByZXRwdHI7XG4gICAgICAgIG1lbVtyZXQgLyA0ICsgMV0gPSByZXRsZW47XG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ3YXNtLWJpbmRnZW46IGltcG9ydGVkIEpTIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtYXJrZWQgYXMgYGNhdGNoYCB0aHJldyBhbiBlcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3X2U0ZDMwYTRiNDczNWMzYzMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QobmV3IEFycmF5KCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIndhc20tYmluZGdlbjogaW1wb3J0ZWQgSlMgZnVuY3Rpb24gdGhhdCB3YXMgbm90IG1hcmtlZCBhcyBgY2F0Y2hgIHRocmV3IGFuIGVycm9yOlwiLCBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19wdXNoXzgxM2Q5NjE5YzFhOTkyYzUoYXJnMCwgYXJnMSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBnZXRPYmplY3QoYXJnMCkucHVzaChnZXRPYmplY3QoYXJnMSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIndhc20tYmluZGdlbjogaW1wb3J0ZWQgSlMgZnVuY3Rpb24gdGhhdCB3YXMgbm90IG1hcmtlZCBhcyBgY2F0Y2hgIHRocmV3IGFuIGVycm9yOlwiLCBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGV4bnB0ciwgZSkge1xuICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50MzJNZW1vcnkoKTtcbiAgICB2aWV3W2V4bnB0ciAvIDRdID0gMTtcbiAgICB2aWV3W2V4bnB0ciAvIDQgKyAxXSA9IGFkZEhlYXBPYmplY3QoZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19hcHBseV9hZGZlNmEwN2Y1ZTU2YWZjKGFyZzAsIGFyZzEsIGFyZzIsIGV4bnB0cikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KGdldE9iamVjdChhcmcwKS5hcHBseShnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXhucHRyLCBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX251bWJlcl9uZXcoaSkgeyByZXR1cm4gYWRkSGVhcE9iamVjdChpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhwdHIsIGxlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikpO1xufVxuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZihpKSB7IGRyb3BPYmplY3QoaSk7IH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==