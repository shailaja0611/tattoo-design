import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtistDetailPage = () => {
  const { id } = useParams(); // Extract artist ID from URL params
  const [artist, setArtist] = useState(null);

  // Array of images and bios for each artist
  const artistImages = [
    "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e8216457796_experienced-tattoo-artist-front-his-studio-matt-cannon-tattooist-webflow-template.png",
    "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e62f0457785_experienced-tattoo-artist-front-his-studio-daniel-cutts-tattooist-webflow-template.png",
    "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e592345774c_experienced-tattoo-artist-front-his-studio-patric-weber-tattooist-webflow-template.png",
    "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e4cf445775f_experienced-tattoo-artist-front-his-studio-sophie-moore-tattooist-webflow-template.png",
    "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e3009457724_experienced-tattoo-artist-front-his-studio-will-marker-tattooist-webflow-template.png",
    "https://cdn.prod.website-files.com/63e146b13f318ec9e24576b7/63e146b13f318e05d5457738_experienced-tattoo-artist-front-his-studio-lily-woods-tattooist-webflow-template.png",
  ];

  const artistBios = [
    "I have been in this beautiful profession for 8 years, specializing in the fascinating world of realism and shadows. My passion for the art of tattooing has led me to perfect my technique and to strive more and more to capture the most minute details in my 6 creations.",
    "With a background in abstract and geometric designs, I've spent the last 5 years refining my skills. Every piece I create is a challenge, and my goal is to push the boundaries of what can be achieved with ink.",
    "A tattoo artist whose main focus is creating vibrant and colorful tattoos that pop. After 7 years of experience, my dedication to bold colors and sharp lines has made me a favorite in the community.",
    "I specialize in black and gray tattoos, with a particular focus on portraits. My artistic journey started 10 years ago, and I've been perfecting my craft ever since, delivering hyper-realistic tattoos to my clients.",
    "For the past 6 years, I've been working on a wide range of styles, but my specialty lies in traditional tattoos. I draw my inspiration from classic tattoo artwork and modern trends, creating unique, timeless designs.",
    "A modern tattoo artist who integrates elements of nature into each design. I’ve been working in this profession for 4 years, blending organic forms with bold, artistic visions in every tattoo I create.",
  ];

  const artistNames = [
    "Leanne Graham", 
    "Ervin Howell", 
    "Clementine Bauch", 
    "Patric Weber", 
    "Chelsey Dietrich", 
    " Dennis Schulist",
  ];
  
  useEffect(() => {
    const fetchArtistDetail = async () => {
      // Fetch artist data based on ID
      const artistData = {
        id: id,
        name: artistNames[id - 1],  // Use artist ID to match name
        image: artistImages[id - 1],  // Use artist ID to match image
        bio: artistBios[id - 1], 

      };

      setArtist(artistData);
    };

    fetchArtistDetail();
  }, [id]);

  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <div className="artist-detail">
      <h1>{artist.name}</h1>
      <div className="bio">
      <img src={artist.image} alt={artist.name} width="300" />
      <p>{artist.bio}</p>  {/* Display the artist's full bio */}
      </div>
    </div>
  );
};

export default ArtistDetailPage;
