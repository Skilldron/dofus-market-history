// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
import { ElectronAPI } from "../types/electron";

// Exposer les fonctions sécurisées au processus de rendu
contextBridge.exposeInMainWorld("electronAPI", {
  clickTrough: () =>
    ipcRenderer.send("set-ignore-mouse-events", true, { forward: true }),
  skipClickTrough: () => ipcRenderer.send("set-ignore-mouse-events", false),
} as ElectronAPI);
