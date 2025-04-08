// See the Electron documentation for details on how to use preload scripts:

// import { ipcRenderer } from "electron";

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld(
    'electron', {
        clickTrough: () =>  ipcRenderer.send('set-ignore-mouse-events', true, { forward: true }),
        skipClickTrough: () => ipcRenderer.send('set-ignore-mouse-events', false),
    }
)