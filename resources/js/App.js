import { useState } from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from "./ressources/Home/Home.js";
import Anime from "./ressources/Anime/Anime.js";
import NavBar from "./ressources/NavBar.js";
import Animes from "./ressources/Anime/Animes.js";
import Mangas from "./ressources/Manga/Mangas.js";
import Manga from "./ressources/Manga/Manga.js";
import MangaCharacters from "./ressources/Manga/MangaCharacters.js";
import AnimeCharacters from "./ressources/Anime/AnimeCharacters.js";
import MangaStaff from "./ressources/Manga/MangaStaff.js";
import MangaReviews from "./ressources/Manga/MangaReviews.js";
import MangaStats from "./ressources/Manga/MangaStats.js";
import AnimeReviews from "./ressources/Anime/AnimeReviews.js";
import AnimeStaff from "./ressources/Anime/AnimeStaff.js";
import AnimeStats from "./ressources/Anime/AnimeStats.js";
import FormRegister from "./ressources/Auth/FormRegister.js";
import FormLogin from "./ressources/Auth/FormLogin.js";
import Profil from "./ressources/Auth/Profil.js";
import Logout from "./ressources/Auth/Logout.js";
import Auth from "./ressources/Context/Auth.js";
import AuthRoute from "./ressources/Auth/AuthRoute.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
        
        
        
          <Route path="/" element={<Home/>}/>

          <Route path="/search/manga" element={<Mangas/>}/>
          <Route path="/search/manga/:idManga/:nameManga" element={<Manga/>}/>
          <Route path={"manga/:idManga/:nameManga/characters"} element={<MangaCharacters/>}/>
          <Route path={"manga/:idManga/:nameManga/staff"} element={<MangaStaff/>}/>
          <Route path={"manga/:idManga/:nameManga/reviews"} element={<MangaReviews/>}/>
          <Route path={"manga/:idManga/:nameManga/stats"} element={<MangaStats/>}/>


          <Route path="/Auth/Logout" element={<Logout/>}/>
          <Route path="/Auth/FormRegister" element={<FormRegister/>}/>
          <Route path="/Auth/FormLogin" element={<FormLogin/>}/>
          <Route path="/Auth/Profil" element={<Profil/>}/>
          <Route path="/search/anime" element={<Animes/>}/>
          <Route path="/search/anime:idAnime/:nameAnime" element={<Anime/>}/>
          <Route path={"anime/:idAnime/:nameAnime/characters"} element={<AnimeCharacters/>}/>
          <Route path={"anime/:idAnime/:nameAnime/staff"} element={<AnimeStaff/>}/>
          <Route path={"anime/:idAnime/:nameAnime/reviews"} element={<AnimeReviews/>}/>
          <Route path={"anime/:idAnime/:nameAnime/stats"} element={<AnimeStats/>}/>
        </Routes>  
        </BrowserRouter>
   </div>
  )
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}