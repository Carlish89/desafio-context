import "../assets/css/galeria.css";
import CorazonVacio from "./iconos/heart.svg";
import CorazonLleno from "./iconos/heart-filled.svg"
import { useContext } from "react";
import Context from "./Context";


export default function Home() {

  const { fotos, setFotos } = useContext(Context)
 

  return (
    <div className="galeria grid-columns-5 p-3">

      {fotos.map((photo,i) =>
        <div className="img"
          style={{ backgroundImage: `url('${photo.src}')` }}
         onDoubleClick={()=>{
          const foto = fotos[i]
          const likeState = foto.liked;
          if(likeState) foto.liked = false
          else foto.liked = true
          setFotos([...fotos])

         }}
         >
          {photo.liked ? (
            <img src={CorazonLleno} alt="" />
          ):(<img src={CorazonVacio} alt="" />)}
          
          
          </div>
      )}


    </div>
  );
}
