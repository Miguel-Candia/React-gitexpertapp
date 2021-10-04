import React from "react";
import { useFetchGifs } from "./hooks/useFetchGifs";
import { GifGridltem } from "./GifGridltem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__tada">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridltem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};