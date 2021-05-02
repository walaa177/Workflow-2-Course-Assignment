"use strict";
exports.__esModule = true;
exports.limitLength = exports.replaceSpaces = exports.makeUppercase = void 0;
function makeUppercase(str) {
    return str.toUpperCase();
}
exports.makeUppercase = makeUppercase;
function replaceSpaces(str) {
    return str.replace(/\s/g, "_");
}
exports.replaceSpaces = replaceSpaces;
function limitLength(len, str) {
    return str.substr(0, len);
}
exports.limitLength = limitLength;
