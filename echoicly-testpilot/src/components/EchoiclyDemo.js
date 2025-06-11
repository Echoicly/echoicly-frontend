import { useState } from "react";

export default function EchoiclyDemo() {
  const [supportView, setSupportView] = useState(false);
  const [extraSupportArtist, setExtraSupportArtist] = useState(null);
  const [merchView, setMerchView] = useState(null);

  const artists = [
    {
      name: "Nathan Rivera",
      image: "https://via.placeholder.com/150",
      support: 159,
      merch: [
        { name: "T-shirt", price: 249 },
        { name: "Tote bag", price: 189 },
        { name: "Album", price: 99 },
        { name: "Hoodie", price: 499 },
      ],
    },
    {
      name: "Ida Lunde",
      image: "https://via.placeholder.com/150",
      support: 20,
      merch: [
        { name: "T-shirt", price: 199 },
        { name: "Poster", price: 89 },
      ],
    },
  ];

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Echoicly</h1>
      <p>Stream med mening</p>

      <section>
        <h2>Dine topp 5 støttede artister</h2>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {artists.map((artist, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: 16,
                borderRadius: 8,
                textAlign: "center",
                width: 200,
                cursor: "pointer",
              }}
              onClick={() => setSupportView(true)}
            >
              <img
                src={artist.image}
                alt={artist.name}
                style={{ borderRadius: "50%", width: 100, height: 100 }}
              />
              <p>{artist.name}</p>
              <p>{artist.support} kr</p>
              <button onClick={(e) => { e.stopPropagation(); setExtraSupportArtist(artist); }}>
                Gi ekstra
              </button>
              <button onClick={(e) => { e.stopPropagation(); setMerchView(artist); }}>
                Merch
              </button>
            </div>
          ))}
        </div>
      </section>

      {supportView && (
        <section style={{ marginTop: 30 }}>
          <h2>Din støtte denne måneden</h2>
          <ul>
            <li>Artister: 159 kr</li>
            <li>Drift: 20 kr</li>
            <li>Valgfrie bonuser: 20 kr</li>
          </ul>
        </section>
      )}

      {extraSupportArtist && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
          justifyContent: "center", alignItems: "center"
        }}>
          <div style={{ backgroundColor: "white", padding: 30, borderRadius: 10 }}>
            <h3>Gi ekstra støtte til {extraSupportArtist.name}</h3>
            <div>
              {[10, 20, 50].map((amt) => (
                <button key={amt} style={{ margin: 5 }}>{amt} kr</button>
              ))}
            </div>
            <input type="text" placeholder="Hva vil du si til artisten?" style={{ width: "100%", marginTop: 10 }} />
            <button onClick={() => setExtraSupportArtist(null)} style={{ marginTop: 10 }}>Bekreft</button>
          </div>
        </div>
      )}

      {merchView && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
          justifyContent: "center", alignItems: "center"
        }}>
          <div style={{ backgroundColor: "white", padding: 30, borderRadius: 10, maxHeight: "80vh", overflowY: "auto" }}>
            <h3>{merchView.name} – Merchandise</h3>
            {merchView.merch.map((item, idx) => (
              <div key={idx} style={{ marginBottom: 10 }}>
                <p>{item.name} – {item.price} kr</p>
                <button>Kjøp</button>
              </div>
            ))}
            <button onClick={() => setMerchView(null)} style={{ marginTop: 10 }}>Lukk</button>
          </div>
        </div>
      )}
    </div>
  );
}
