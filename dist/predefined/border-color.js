"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors = __importStar(require("./colors.json"));
const borderColor = {
    "border-transparent": { borderColor: colors.transparent },
    "border-black": { borderColor: colors.black },
    "border-white": { borderColor: colors.white },
    "border-gray-100": { borderColor: colors["gray-100"] },
    "border-gray-200": { borderColor: colors["gray-200"] },
    "border-gray-300": { borderColor: colors["gray-300"] },
    "border-gray-400": { borderColor: colors["gray-400"] },
    "border-gray-500": { borderColor: colors["gray-500"] },
    "border-gray-600": { borderColor: colors["gray-600"] },
    "border-gray-700": { borderColor: colors["gray-700"] },
    "border-gray-800": { borderColor: colors["gray-800"] },
    "border-gray-900": { borderColor: colors["gray-900"] },
    "border-red-100": { borderColor: colors["red-100"] },
    "border-red-200": { borderColor: colors["red-200"] },
    "border-red-300": { borderColor: colors["red-300"] },
    "border-red-400": { borderColor: colors["red-400"] },
    "border-red-500": { borderColor: colors["red-500"] },
    "border-red-600": { borderColor: colors["red-600"] },
    "border-red-700": { borderColor: colors["red-700"] },
    "border-red-800": { borderColor: colors["red-800"] },
    "border-red-900": { borderColor: colors["red-900"] },
    "border-orange-100": { borderColor: colors["orange-100"] },
    "border-orange-200": { borderColor: colors["orange-200"] },
    "border-orange-300": { borderColor: colors["orange-300"] },
    "border-orange-400": { borderColor: colors["orange-400"] },
    "border-orange-500": { borderColor: colors["orange-500"] },
    "border-orange-600": { borderColor: colors["orange-600"] },
    "border-orange-700": { borderColor: colors["orange-700"] },
    "border-orange-800": { borderColor: colors["orange-800"] },
    "border-orange-900": { borderColor: colors["orange-900"] },
    "border-yellow-100": { borderColor: colors["yellow-100"] },
    "border-yellow-200": { borderColor: colors["yellow-200"] },
    "border-yellow-300": { borderColor: colors["yellow-300"] },
    "border-yellow-400": { borderColor: colors["yellow-400"] },
    "border-yellow-500": { borderColor: colors["yellow-500"] },
    "border-yellow-600": { borderColor: colors["yellow-600"] },
    "border-yellow-700": { borderColor: colors["yellow-700"] },
    "border-yellow-800": { borderColor: colors["yellow-800"] },
    "border-yellow-900": { borderColor: colors["yellow-900"] },
    "border-green-100": { borderColor: colors["green-100"] },
    "border-green-200": { borderColor: colors["green-200"] },
    "border-green-300": { borderColor: colors["green-300"] },
    "border-green-400": { borderColor: colors["green-400"] },
    "border-green-500": { borderColor: colors["green-500"] },
    "border-green-600": { borderColor: colors["green-600"] },
    "border-green-700": { borderColor: colors["green-700"] },
    "border-green-800": { borderColor: colors["green-800"] },
    "border-green-900": { borderColor: colors["green-900"] },
    "border-blue-100": { borderColor: colors["blue-100"] },
    "border-blue-200": { borderColor: colors["blue-200"] },
    "border-blue-300": { borderColor: colors["blue-300"] },
    "border-blue-400": { borderColor: colors["blue-400"] },
    "border-blue-500": { borderColor: colors["blue-500"] },
    "border-blue-600": { borderColor: colors["blue-600"] },
    "border-blue-700": { borderColor: colors["blue-700"] },
    "border-blue-800": { borderColor: colors["blue-800"] },
    "border-blue-900": { borderColor: colors["blue-900"] },
    "border-indigo-100": { borderColor: colors["indigo-100"] },
    "border-indigo-200": { borderColor: colors["indigo-200"] },
    "border-indigo-300": { borderColor: colors["indigo-300"] },
    "border-indigo-400": { borderColor: colors["indigo-400"] },
    "border-indigo-500": { borderColor: colors["indigo-500"] },
    "border-indigo-600": { borderColor: colors["indigo-600"] },
    "border-indigo-700": { borderColor: colors["indigo-700"] },
    "border-indigo-800": { borderColor: colors["indigo-800"] },
    "border-indigo-900": { borderColor: colors["indigo-900"] },
    "border-purple-100": { borderColor: colors["purple-100"] },
    "border-purple-200": { borderColor: colors["purple-200"] },
    "border-purple-300": { borderColor: colors["purple-300"] },
    "border-purple-400": { borderColor: colors["purple-400"] },
    "border-purple-500": { borderColor: colors["purple-500"] },
    "border-purple-600": { borderColor: colors["purple-600"] },
    "border-purple-700": { borderColor: colors["purple-700"] },
    "border-purple-800": { borderColor: colors["purple-800"] },
    "border-purple-900": { borderColor: colors["purple-900"] },
    "border-pink-100": { borderColor: colors["pink-100"] },
    "border-pink-200": { borderColor: colors["pink-200"] },
    "border-pink-300": { borderColor: colors["pink-300"] },
    "border-pink-400": { borderColor: colors["pink-400"] },
    "border-pink-500": { borderColor: colors["pink-500"] },
    "border-pink-600": { borderColor: colors["pink-600"] },
    "border-pink-700": { borderColor: colors["pink-700"] },
    "border-pink-800": { borderColor: colors["pink-800"] },
    "border-pink-900": { borderColor: colors["pink-900"] },
};
exports.default = borderColor;
//# sourceMappingURL=border-color.js.map