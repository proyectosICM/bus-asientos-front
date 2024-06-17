import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./busDetails.css";
import { SeatingPanel } from "./seatingPanel";
import { PiSeatbelt } from "react-icons/pi";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { BaseMap } from "../../maps/baseMap";
import mapaIcono from "../../images/mapaIcono.png";

const seats = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  secured: index < 35,
}));

export function BusDetails() {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false); // Estado para controlar la visibilidad del mapa

  const rows = [];
  for (let i = 0; i < seats.length; i += 4) {
    const row = seats.slice(i, i + 4);
    row.splice(2, 0, { id: `empty-${i}`, secured: null });
    rows.push(row);
  }

  const toggleMap = () => {
    setShowMap(!showMap); // Cambiar el estado de visibilidad del mapa
  };

  return (
    <div className="c-background">
      <Button className="backButton" onClick={() => navigate("/menu")}>
        Atrás
      </Button>
      <div className="bus-info">
        <span className="title">
          Placa: ABC 1234 <br />
        </span>
        <span className="title">
          Cantidad de asientos: 40 <br />
        </span>
      </div>
      <div className="seating-info">
        <div className="seats-info-secured">
          <span className="subtitle-black">
            <PiSeatbelt />
            Asientos asegurados
          </span>{" "}
          <br />
          <span className="subtitle-black">35</span>
        </div>

        <div className="seats-info-unsecured">
          <span className="subtitle-black">
            <PiSeatbelt />
            Asientos no asegurados
          </span>
          <br />
          <span className="subtitle-black">5</span>
        </div>
      </div>

      <SeatingPanel rows={rows} />

      <Button onClick={toggleMap} className="a-margin">
        {showMap ? <IoIosEyeOff className="icon" /> : <IoIosEye className="icon" />} {showMap ? "Ocultar mapa " : "Mostrar mapa "}
        <img src={mapaIcono} alt="Map Icon" className="icon" />
      </Button>

      {showMap && (
        <div className="mapa-panel">
          <BaseMap initialPosition={[-77.032965, -12.018358]} />
        </div>
      )}
    </div>
  );
}
