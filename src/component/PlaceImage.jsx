import React from 'react';


export function PlaceImage({ place, imageSize }) {
  return (
    <img
      src={place}
      alt={place}
      width={imageSize}
      height={imageSize}
    />
  );
}
