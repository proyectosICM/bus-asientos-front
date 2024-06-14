import React from "react";
import { BusItem } from "./busItem";
import './busMenu.css';

export function BusMenu() {
  return (
    <div className="container c-fullscreen">
      <h1 className="title">Menu de Buses</h1>
      <div className="menu-container">
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />

        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
      </div>
    </div>
  );
}
