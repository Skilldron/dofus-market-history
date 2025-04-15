import { useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import imgUrl from "../../assets/logo.jpeg?assets";

const ICON_SIZE = 50;
const WINDOW_WIDTH = 300;
const WINDOW_HEIGHT = 500;

const getSavedPosition = () => {
  const saved = localStorage.getItem("floating-icon-pos");
  return saved ? JSON.parse(saved) : { x: 100, y: 100 };
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function FloatingTool() {
  const [position, setPosition] = useState(getSavedPosition());
  const [expanded, setExpanded] = useState(false);
  const wasDragging = useRef(false);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const newX = clamp(
      position.x + info.offset.x,
      0,
      window.innerWidth - ICON_SIZE
    );
    const newY = clamp(
      position.y + info.offset.y,
      0,
      window.innerHeight - ICON_SIZE
    );
    const newPos = { x: newX, y: newY };
    wasDragging.current = false;
    setPosition(newPos);
    localStorage.setItem("floating-icon-pos", JSON.stringify(newPos));
  };

  return (
    <motion.div
      className="interactive"
      drag
      dragMomentum={false}
      onDragStart={() => (wasDragging.current = false)}
      onDrag={() => (wasDragging.current = true)}
      onDragEnd={handleDragEnd}
      initial={position}
      animate={position}
      onPointerUp={() => {
        if (!wasDragging.current && !expanded) {
          setExpanded((prev) => !prev);
        }
      }}
      style={{
        position: "absolute",
        zIndex: 9999,
        cursor: "grab",
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          width: expanded ? WINDOW_WIDTH : ICON_SIZE,
          height: expanded ? WINDOW_HEIGHT : ICON_SIZE,
          backgroundColor: expanded ? "#fff" : "#000",
          borderRadius: expanded ? 16 : "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {expanded ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: 8,
                padding: "4px 8px",
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(false);
                }}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </div>
            <div style={{ padding: "0 12px", flex: 1 }}>
              <input
                type="text"
                placeholder="Rechercher un item"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  fontSize: 14,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              userSelect: "none",
              transformOrigin: "top right",
              backgroundImage: `url('${imgUrl}')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          ></div>
        )}
      </motion.div>
    </motion.div>
  );
}
