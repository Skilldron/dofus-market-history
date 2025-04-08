import { BrowserWindow, screen } from "electron";
import path from "node:path";

export function createWindow(): void {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width,
    height,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    transparent: true,
    skipTaskbar: true,
    hasShadow: false,
    webPreferences: {
      transparent: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Open the DevTools.
//   mainWindow.webContents.openDevTools();
}