import React from "react";
import "./seatingPanel.css";
import seatBeltLogo from "../../images/seatBelt.png";
import seatBeltLogo2 from "../../images/seatBelt2.png";

export function SeatingPanel() {
  return (
    <div className="container">
      <span className="subtitle-white">Distribución de asientos</span>
      <div className="sp-bus">
        <div className="sp-row">
          <div className="sp-seat sp-seat-secured">
            <span>1</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>2</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-empty"></div>
          <div className="sp-seat sp-seat-unsecured">
            <span>3</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>4</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
        </div>

        <div className="sp-row">
          <div className="sp-seat sp-seat-secured">
            <span>5</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>6</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-empty"></div>
          <div className="sp-seat sp-seat-unsecured">
            <span>7</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>8</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
        </div>

        <div className="sp-row">
          <div className="sp-seat sp-seat-secured">
            <span>9</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>10</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-empty"></div>
          <div className="sp-seat sp-seat-unsecured">
            <span>11</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>12</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
        </div>

        <div className="sp-row">
          <div className="sp-seat sp-seat-secured">
            <span>13</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>14</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-empty"></div>
          <div className="sp-seat sp-seat-unsecured">
            <span>15</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>16</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
        </div>

        <div className="sp-row">
          <div className="sp-seat sp-seat-secured">
            <span>17</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>18</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
          <div className="sp-seat sp-seat-empty"></div>
          <div className="sp-seat sp-seat-unsecured">
            <span>19</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="logo" />
          </div>
          <div className="sp-seat sp-seat-secured">
            <span>20</span>
            <img src={seatBeltLogo} alt="Seat Belt Logo" className="icon" />
          </div>
        </div>
      </div>
    </div>
  ); 
}
