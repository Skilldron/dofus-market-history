import React, { useEffect } from "react";
import "./overlay.css";

const Overlay: React.FC = () => {
  useEffect(() => {
    // Par défaut, on peut cliquer à travers
    window.electron.clickTrough();

    const interactiveElements = document.querySelectorAll(".interactive");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        window.electron.skipClickTrough();
      });

      element.addEventListener("mouseleave", () => {
        window.electron.clickTrough();
      });
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {
          window.electron.skipClickTrough();
        });

        element.removeEventListener("mouseleave", () => {
          window.electron.clickTrough();
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
