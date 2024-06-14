import React from 'react'
import './seatingPanel.css';

export function SeatingPanel(){ 
    return(
        <div className='container'>
            <span className='subtitle-white'>Distribucion de asientos</span>
            <div className='sp-bus'>

                <div className='sp-row'>
                    <div className='sp-seat-secured'>1</div>
                    <div className='sp-seat-secured'>2</div>
                    <div className='sp-seat-empty'></div>
                    <div className='sp-seat-unsecured'>3</div>
                    <div className='sp-seat-secured'>4</div>
                </div>

                <div className='sp-row'>
                    <div className='sp-seat-secured'>5</div>
                    <div className='sp-seat-secured'>6</div>
                    <div className='sp-seat-empty'></div>
                    <div className='sp-seat-unsecured'>7</div>
                    <div className='sp-seat-secured'>8</div>
                </div>

                <div className='sp-row'>
                    <div className='sp-seat-secured'>9</div>
                    <div className='sp-seat-secured'>10</div>
                    <div className='sp-seat-empty'></div>
                    <div className='sp-seat-unsecured'>11</div>
                    <div className='sp-seat-secured'>12</div>
                </div>

                <div className='sp-row'>
                    <div className='sp-seat-secured'>13</div>
                    <div className='sp-seat-secured'>14</div>
                    <div className='sp-seat-empty'></div>
                    <div className='sp-seat-unsecured'>15</div>
                    <div className='sp-seat-secured'>16</div>
                </div>

                <div className='sp-row'>
                    <div className='sp-seat-secured'>17</div>
                    <div className='sp-seat-secured'>18</div>
                    <div className='sp-seat-empty'></div>
                    <div className='sp-seat-unsecured'>19</div>
                    <div className='sp-seat-secured'>20</div>
                </div>
            </div>
        </div>
    );
} 