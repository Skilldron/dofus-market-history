import React, { useEffect } from 'react';
import './overlay.css';

const Overlay: React.FC = () => {

  useEffect(() => {
    // Par défaut, on peut cliquer à travers
    window.electron.clickTrough();
    // Mettre en place les écouteurs d'événements pour le bouton
    // Sélectionner tous les éléments interactifs
    const interactiveElements = document.querySelectorAll('.interactive');

    // Ajouter les écouteurs sur chaque élément interactif
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        window.electron.skipClickTrough(); // Désactiver le clic à travers sur les éléments interactifs
      });

      element.addEventListener('mouseleave', () => {
        window.electron.clickTrough(); // Réactiver le clic à travers quand on quitte l'élément
      });
    });

    // Nettoyage lors du démontage
    return () => {
        interactiveElements.forEach(element => {
          element.removeEventListener('mouseenter', () => {
            window.electron.skipClickTrough();
          });

          element.removeEventListener('mouseleave', () => {
            window.electron.clickTrough();
          });
        });
      };
    }, []);

  return (
    <div className="overlay">
      <h2>Overlay Dofus</h2>
      <button className="interactive" onClick={() => alert('Historique')}>📈 Historique</button>
      <button className="interactive" onClick={() => alert('Pas à travers')}>📈 Pas à travers</button>

    </div>
  );
};

export default Overlay;