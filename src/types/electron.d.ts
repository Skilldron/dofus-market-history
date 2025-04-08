declare interface ElectronAPI {
  /**
   * Active le clic à travers pour la fenêtre
   */
  clickTrough: () => void;

  /**
   * Désactive le clic à travers pour la fenêtre
   */
  skipClickTrough: () => void;
}

// Cette ligne est importante pour que le fichier soit considéré comme un module
export { ElectronAPI };
