import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import "./busItem.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function BusItem() {
  const navigate = useNavigate();

  return (
    <div className="bus-item">
      <FaTruckMoving className="icon" />
      <span className="plate">Placa ABC-1234</span>
      <span className="seats">Cantidad de asientos: 40</span>
      <span className="secured-seats">Asientos asegurados: 35</span>
      <span className="unsecured-seats">Asientos no asegurados: 5</span>
      <Button onClick={() => navigate('/details')}>Ver Detalles</Button>
    </div>
  );
}
