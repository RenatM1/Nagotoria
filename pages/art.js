import Image from "next/image";
import Link from "next/link";

export default function ArtGallery() {
  const images = [
    { src: "/art/nagotorо-art1.jpg", alt: "Nagotoro Art 1" },
    { src: "/art/nagotorо-art2.jpg", alt: "Nagotoro Art 2" },
    { src: "/art/nagotorо-art3.jpg", alt: "Nagotoro Art 3" },
    { src: "/art/nagotorо-art4.jpg", alt: "Nagotoro Art 4" },
    { src: "/art/nagotorо-art5.jpg", alt: "Nagotoro Art 5" },
    { src: "/art/nagotorо-art6.jpg", alt: "Nagotoro Art 6" },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#000", color: "#fff" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "10px" }}>
        🎨 Nagotoria Art Gallery
      </h1>
      <p style={{ marginBottom: "30px" }}>
        Posters & scenes from the Forbidden universe
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((img, index) => (
          <div key={index} style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 0 10px rgba(255,255,255,0.2)" }}>
            <img src={img.src} alt={img.alt} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: "40px" }}>
        <Link href="/" style={{ color: "#0ff" }}>← Back to Home</Link>
      </div>
    </div>
  );
}
