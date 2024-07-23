import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import GifItems from "./GifItems";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifItems
            key={img.id}
            {...img} //Operador spread, esparce todas las prpiedades de img
          />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
