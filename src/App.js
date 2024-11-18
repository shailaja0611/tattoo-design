import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtistPage from "./ArtistPage";
import ArtistDetailPage from "./ArtistDetailPage";
import TattooArtists from "./TattooArtists"; // Assuming TattooArtists is a different component.

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Tattoo Artists Gallery</h1>
        </header>

        {/* Display TattooArtists component as a section or a feature */}
        <TattooArtists />

        {/* Routing the ArtistPage and ArtistDetailPage */}
        <Routes>
          <Route path="/" element={<ArtistPage />} />
          <Route path="/artist/:id" element={<ArtistDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


