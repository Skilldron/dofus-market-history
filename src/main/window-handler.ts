import { BrowserWindow, screen, Tray, Menu, nativeImage } from "electron";
import path from "node:path";

function createWindow(): BrowserWindow {
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

  return mainWindow;
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

function createTray(mainWindow: BrowserWindow | null, app: Electron.App) {

  const trayIcon = nativeImage.createFromPath(path.join(__dirname, "assets", "logo_png.png"))
  const tray = new Tray(trayIcon)
  const contextMenu = Menu.buildFromTemplate([
    { label: "Masquer", click: () => mainWindow?.hide() },
    { label: "Développeur", click: () => mainWindow?.webContents.openDevTools() },
    { label: "Afficher", click: () => mainWindow?.show() },
    { label: "Quitter", click: () => app.quit() },
  ]);
  tray.setToolTip("Dofus Community Shop");
  tray.setContextMenu(contextMenu);
}

export { createWindow, createTray };
