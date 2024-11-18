import React from 'react';
import './TattooArtists.css';

const fallbackImage = 'path/to/fallback-image.jpg';

const tattooArtists = [
  { name: 'Matt Cannon', specialty: 'American  tattooist', imageUrl: 'https://cdn.prod.website-files.com/63627969e697b61273d5987b/6363f37c1ec90d18d5c06af6_experienced-tattoo-artist-front-his-studio-john-carter-tattooist-webflow-template.png' },
  { name: 'John Carter', specialty: 'Old school tattooist', imageUrl: 'https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e62f0457785_experienced-tattoo-artist-front-his-studio-daniel-cutts-tattooist-webflow-template.png' },
  { name: 'Daniel Cutts', specialty: 'Cartoon style tattooist', imageUrl: 'https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e54a1457774_experienced-tattoo-artist-front-his-studio-tomas-smith-tattooist-webflow-template.png' },
  { name: 'Tomas Smith', specialty: 'Pop Culture Style tattooist', imageUrl: 'https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e592345774c_experienced-tattoo-artist-front-his-studio-patric-weber-tattooist-webflow-template.png' },
  { name: 'Sophie Moore', specialty: 'Portrait tattooist', imageUrl: 'https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e8216457796_experienced-tattoo-artist-front-his-studio-matt-cannon-tattooist-webflow-template.png' },
  { name: 'Patric Weber', specialty: 'Western style tattooist', imageUrl: 'https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e3009457724_experienced-tattoo-artist-front-his-studio-will-marker-tattooist-webflow-template.png' },
//   
];

const TattooArtists = () => {
  return (
    <div className="tattoo-artists">
      <h1>Tattoo Artists</h1>
      <div className="artists-grid">
        {tattooArtists.map((artist, index) => (
          <div key={index} className="artist-card">
            <img 
              src={artist.imageUrl || fallbackImage} 
              alt={artist.name} 
              onError={(e) => e.target.src = fallbackImage} 
            />
            <h2>{artist.name}</h2>
            <p>{artist.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TattooArtists;
