"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firestore_1 = require("firebase-admin/firestore");
const firebase_json_1 = __importDefault(require("./accounts/firebase.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(firebase_json_1.default)
});
// Export firestore
exports.db = (0, firestore_1.getFirestore)();
