import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./busDetails.css";

const seats = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  secured: index < 35, // Los primeros 35 están asegurados
}));

export function BusDetails() {
  const navigate = useNavigate();

  // Dividir los asientos en filas de 4, e insertar un asiento vacío en la posición 3
  const rows = [];
  for (let i = 0; i < seats.length; i += 4) {
    const row = seats.slice(i, i + 4);
    row.splice(2, 0, { id: `empty-${i}`, secured: null }); // Insertar asiento vacío
    rows.push(row);
  }

  return (
    <div>
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
          <span className="subtitle">Asientos asegurados</span> <br />
          <span className="subtitle">35</span>
        </div>

        <div className="seats-info-unsecured">
          <span className="subtitle">Asientos no asegurados</span>
          <br />
          <span className="subtitle">5</span>
        </div>
      </div>
      <div className="seating-panel">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((seat) =>
              seat.secured !== null ? (
                <div key={seat.id} className={`seat ${seat.secured ? "secured" : "unsecured"}`}>
                  {seat.id}
                </div>
              ) : (
                <div key={seat.id} className="seat empty"></div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
