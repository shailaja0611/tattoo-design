import React, { useEffect, useState } from "react";
import './ArtistPage.css'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ArtistPage = () => {
  const [artists, setArtists] = useState([]);

  
  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      
      const formattedData = data.slice(0, 6).map((artist) => ({
        name: artist.name,
        image: "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e3009457724_experienced-tattoo-artist-front-his-studio-will-marker-tattooist-webflow-template.png",
        icons: [<FaFacebook />, <FaTwitter />, <FaInstagram />],
      }));
      setArtists(formattedData);
    };

    fetchArtists();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Tattoo Artists</h1>
        <p>Explore our talented tattoo artists and their exceptional work.</p>
      </header>
      <div className="artist-grid">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3>
            <div className="icons">
              {artist.icons.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
