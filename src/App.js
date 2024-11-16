import React from 'react';
import ReactDOM from 'react-dom';
import TattooArtists from './TattooArtists'; 
import ArtistPage from './ArtistPage';



const App = () => {
  return (
    <div className="app">
      <header>
        <h1></h1>
      </header>
    <TattooArtists />
    <ArtistPage />
    
   </div>
  );
};

export default App;