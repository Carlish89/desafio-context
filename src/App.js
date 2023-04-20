import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./components/Context";
import { useEffect } from "react";
import { useState } from "react";


export default function App() {
  const endpoint = "/fotos.json";

  const [fotos, setFotos] = useState([])
  const getFotos = async () => {
    const res = await fetch("/fotos.json")
    const data = await res.json()
    const photos = data.photos.map((photo) => {
      return {
        src: photo.src.tiny,
        liked: false
      }
    })
    setFotos(photos)
  }
  useEffect(() => {
    getFotos()
  }, [])

  const globalState = {
    fotos,
    setFotos
  }


  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
