import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ArtistPage.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ArtistPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      // Define an array of images
      const artistImages = [
        "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e8216457796_experienced-tattoo-artist-front-his-studio-matt-cannon-tattooist-webflow-template.png",
        "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e62f0457785_experienced-tattoo-artist-front-his-studio-daniel-cutts-tattooist-webflow-template.png",
        "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e592345774c_experienced-tattoo-artist-front-his-studio-patric-weber-tattooist-webflow-template.png",
        "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e4cf445775f_experienced-tattoo-artist-front-his-studio-sophie-moore-tattooist-webflow-template.png",
        "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e3009457724_experienced-tattoo-artist-front-his-studio-will-marker-tattooist-webflow-template.png",
        "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e05d5457738_experienced-tattoo-artist-front-his-studio-lily-woods-tattooist-webflow-template.png",
      ];

      // Format the data with unique images for each artist
      const formattedData = data.slice(0, 6).map((artist, index) => ({
        id: artist.id, 
        name: artist.name,
        image: artistImages[index],  // Assigning a different image for each artist
        bio: "A skilled tattoo artist with years of experience and creativity.",
        icons: [<span style={{color:"blue"}}><FaFacebook /></span>,  <span style={{color:"red"}}><FaInstagram /></span>,<span style={{color:"blue"}}><FaTwitter /></span>,]
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
        {artists.map((artist) => (
          <div className="artist-card" key={artist.id}>
            <Link  to={`/artist/${artist.id}`} style={{textDecoration:"none"}}> 
              <img src={artist.image} alt={artist.name} />
              <h3>{artist.name}</h3>
            </Link>
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







