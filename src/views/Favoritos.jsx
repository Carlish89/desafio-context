import Context from "../components/Context";
import { useContext } from "react";

export default function Favoritos() {
  
  const {fotos} = useContext(Context)
  const favoritos = fotos.filter((foto) => foto.liked===true)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((photo)=>{
          return(
            <div className="img"
            style={{backgroundImage : `url('${photo.src}')`}}>
            </div>
          )
        })}

      </div>
    </div>
  );
}
