// pages/art.js
import Link from "next/link";

export default function ArtGallery() {
  const artworks = [
    { src: "/art/nagotoro-art1.jpg", title: "Nagotoro Art 1" },
    { src: "/art/nagotoro-art2.jpg", title: "Nagotoro Art 2" },
    { src: "/art/nagotoro-art3.jpg", title: "Nagotoro Art 3" },
    { src: "/art/nagotoro-art4.jpg", title: "Nagotoro Art 4" },
    { src: "/art/nagotoro-art5.jpg", title: "Nagotoro Art 5" },
    { src: "/art/nagotoro-art6.jpg", title: "Nagotoro Art 6" },
  ];

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        🎨 Nagotoria Art Gallery
      </h1>
      <p style={{ marginBottom: "2rem", fontStyle: "italic" }}>
        Posters & scenes from the Forbidden universe
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem"
      }}>
        {artworks.map((art, index) => (
          <div key={index} style={{
            background: "#111",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0 10px #444"
          }}>
            <img
              src={art.src}
              alt={art.title}
              style={{ width: "100%", borderRadius: "0.5rem" }}
            />
            <p style={{ marginTop: "0.5rem", textAlign: "center" }}>{art.title}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/">
          <span style={{ color: "#0ff", textDecoration: "underline", cursor: "pointer" }}>
            ← Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
