import React, { useEffect } from "react";
import "./overlay.css";

const Overlay: React.FC = () => {
  useEffect(() => {
    // Par défaut, on peut cliquer à travers
    window.electronAPI.clickTrough();

    const interactiveElements = document.querySelectorAll(".interactive");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        window.electronAPI.skipClickTrough();
      });

      element.addEventListener("mouseleave", () => {
        window.electronAPI.clickTrough();
      });
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {
          window.electronAPI.skipClickTrough();
        });

        element.removeEventListener("mouseleave", () => {
          window.electronAPI.clickTrough();
        });
      });
    };
  }, []);

  return (
    <div className="overlay">
      <h2>Overlay Dofus</h2>
      <button className="interactive" onClick={() => alert("Historique")}>
        📈 Historique
      </button>
      <button className="interactive" onClick={() => alert("Pas à travers")}>
        📈 Pas à travers
      </button>
    </div>
  );
};

export default Overlay;
