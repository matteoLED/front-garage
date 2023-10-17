import React, { useState } from "react";

function ProgressBarFilter({ cars, onFilterApplied }) {
 const [priceValue, setPriceValue] = useState(0);
  const [mileageValue, setMileageValue] = useState(0);
  const [yearValue, setYearValue] = useState(2000);

  const handleApplyFilter = () => {
    const filteredCars = cars.filter((car) => {
      // Filtre par prix
      const priceFilter = priceValue === 0 || car.price <= priceValue;

      // Filtre par kilométrage
      const mileageFilter = mileageValue === 0 || car.mileage <= mileageValue;

      // Filtre par année
      const yearFilter = car.year_circulation >= yearValue;

     
      return priceFilter || mileageFilter || yearFilter;
    });

    if (filteredCars.length === 0) {
      return <div>Aucun véhicule trouvé</div>;
    }
 console.log(filteredCars);
    onFilterApplied(filteredCars);
   
  };

  return (
    <div className="progress-bar-row-container">
      <div>
        <h4>Kilométrage</h4>
        <input
          type="range"
          min={0}
          max={100000}
          value={mileageValue}
          onChange={(e) => setMileageValue(parseInt(e.target.value, 10))}
        />
        <p>{mileageValue}km - {100000} km</p>
      </div>
      <div>
        <h4>Prix</h4>
        <input
          type="range"
          min={0}
          max={100000}
          value={priceValue}
          onChange={(e) => setPriceValue(parseInt(e.target.value, 10))}
        />
        <p>{priceValue}€ - {100000}€</p>
      </div>

      <div>
        <h4>Année</h4>
        <input
          type="range"
          min={2000}
          max={2023}
          value={yearValue}
          onChange={(e) => setYearValue(parseInt(e.target.value, 10))}
        />
        <p>
          {yearValue} - {2023}
        </p>
      </div>

      <button onClick={handleApplyFilter}>Appliquer le filtre</button>
    </div>
  );
}

export default ProgressBarFilter;
