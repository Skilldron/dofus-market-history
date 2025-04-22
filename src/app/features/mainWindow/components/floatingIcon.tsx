import imgUrl from "@assets/logo.jpeg";

export default function floatingIcon() {
  return (
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
  );
}
