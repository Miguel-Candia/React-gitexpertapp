import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Puch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["HunterxHunter"]);

  //Agregar Elementos al arreglo
  //   const handleAdd = () => {
  //     //setCategories(["Espiritu de Lucha", ...categories]); //Se agrega al inicio
  //     setCategories((cats) => [...cats, "Espiritu de lucha"]);
  //   };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
