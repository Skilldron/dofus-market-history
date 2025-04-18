// src/types/window.d.ts
import { ElectronAPI } from './electron';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}