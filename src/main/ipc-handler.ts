import { ipcMain, BrowserWindow } from 'electron';

/**
 * Configure les gestionnaires d'événements IPC pour la fenêtre principale
 */
export function setupIpcHandlers(): void {
  // Gestion du clic à travers
  ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (win) {
      win.setIgnoreMouseEvents(ignore, options);
    }
  });
}