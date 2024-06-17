import React from "react";
import "./busItem.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaBusSimple } from "react-icons/fa6";

export function BusItem() {
  const navigate = useNavigate();
 
  return (
    <div className="bus-item">
      <FaBusSimple className="icon" />
      <span className="plate">Placa ABC-1234</span>
      <span className="seats">Cantidad de asientos: 40</span>
      <span className="secured-seats">Asientos asegurados: 35</span>
      <span className="unsecured-seats">Asientos no asegurados: 5</span>
      <Button variant="success" className="n-button" onClick={() => navigate('/details')}>Ver Detalles</Button>
    </div>
  );
}
