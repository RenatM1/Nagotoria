import Head from 'next/head';

const images = [
  '/art/art1.jpg',
  '/art/art2.jpg',
  '/art/art3.jpg'
];

export default function ArtGallery() {
  return (
    <>
      <Head>
        <title>Art Gallery | Nagotoria</title>
      </Head>
      <div style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎨 Nagotoria Art Gallery</h1>
        <p style={{ color: '#aaa', marginBottom: '2rem' }}>Posters & scenes from the Forbidden universe</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Art ${index + 1}`}
              style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(255,255,255,0.2)'
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
