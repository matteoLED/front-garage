import React from 'react';


export function PlaceImage({ place, imageSize }) {
  return (
    <img
      src={place}
      alt={place}
      width={imageSize}
      height={imageSize}
      style={{
        objectFit: "initial",
        borderRadius: "2%",
        border: "1px solid #000",
        margin: "10px auto",
      }}
    />
  );
}
