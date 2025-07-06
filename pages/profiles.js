export default function Profiles() {
  const avatars = [
    "avatar1.png.png",
    "avatar2.png.png",
    "avatar3.png.jpeg",
    "avatar4.png.png",
    "avatar5.png.png",
    "avatar6.png.png",
    "avatar7.png.jpg",
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Elige tu avatar</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {avatars.map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`Avatar ${index + 1}`}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "12px",
              border: "2px solid #ccc",
              objectFit: "cover",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
            onClick={() => alert(`Elegiste el avatar ${index + 1}`)}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>
    </div>
  );
}
