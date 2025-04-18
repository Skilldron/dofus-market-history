import { useEffect } from "react";
import "./overlay.css";
import FloatingIcon from "@/app/components/floating-icon";

const Overlay = () => {
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
      <FloatingIcon />
    </div>
  );
};

export default Overlay;
