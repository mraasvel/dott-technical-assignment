"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Matrix_table, _Matrix_rows, _Matrix_columns;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
class Matrix {
    constructor(rows, columns) {
        _Matrix_table.set(this, void 0);
        _Matrix_rows.set(this, void 0);
        _Matrix_columns.set(this, void 0);
        __classPrivateFieldSet(this, _Matrix_rows, rows, "f");
        __classPrivateFieldSet(this, _Matrix_columns, columns, "f");
        __classPrivateFieldSet(this, _Matrix_table, [], "f");
    }
}
exports.Matrix = Matrix;
_Matrix_table = new WeakMap(), _Matrix_rows = new WeakMap(), _Matrix_columns = new WeakMap();
;
