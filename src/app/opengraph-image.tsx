import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Edificio Elypse | Oficinas Privadas en San Pedro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0c10",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#c4a77d",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Edificio Elypse
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 600, lineHeight: 1.15, maxWidth: 950 }}>
          Tu Oficina Privada con Domicilio Fiscal en San Pedro Garza García
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9CA3AF", marginTop: 32 }}>
          Desde $12,500 MXN · All-Inclusive
        </div>
      </div>
    ),
    { ...size }
  );
}
