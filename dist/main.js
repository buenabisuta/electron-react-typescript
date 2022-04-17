"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const electron_1 = require("electron");
// 開発モードの場合はホットリロードする
if (process.env.NODE_ENV === 'development') {
    const execPath = process.platform === 'win32'
        ? '../node_modules/electron/dist/electron.exe'
        : '../node_modules/.bin/electron';
    require('electron-reload')(__dirname, {
        electron: path_1.default.resolve(__dirname, execPath),
    });
}
// BrowserWindow インスタンスを作成する関数
const createWindow = () => {
    const mainWindow = new electron_1.BrowserWindow({
        webPreferences: {
            preload: path_1.default.resolve(__dirname, 'preload.js'),
        },
    });
    // レンダラープロセスをロード
    mainWindow.loadFile('dist/index.html');
};
// アプリの起動イベント発火で上の関数を実行
electron_1.app.whenReady().then(createWindow);
// すべてのウィンドウが閉じられたらアプリを終了する
electron_1.app.once('window-all-closed', () => electron_1.app.quit());
