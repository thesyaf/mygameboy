import React from 'react';
import './assets/App.scss';

function App() {
  return (
    <div className="main">
        <div className="gameboy-container">
            <div className="section__top">
                <div className="verticals"></div>
                <div className="horizontal"></div>
            </div>
            <div className="section__screen">
                <div className="screen__title">
                    <div className="line"></div>      
                </div>
                <div className="screen__power">
                    <div className="light"></div>
                    <div className="label">BATTERY</div>
                </div>
                <div className="screen__viewport"></div>
            </div>
            <div className="section__label">Nintendo<span>GAMEBOY</span></div>
            <div className="section__buttons">
                <div className="dpad">
                    <div className="updown"></div>
                    <div className="leftright"></div>
                </div>
                <div className="ab">
                    <span className="b">B</span>
                    <span className="a">A</span>
                    <div className="button"></div>
                    <div className="button"></div>
                </div>
            </div>
            <div className="section__bottom">
                <div className="options">
                    <div className="button">
                        <div className="inner select"></div>
                        <span>SELECT</span>
                    </div>
                    <div className="button outer">
                        <div className="inner select"></div>
                        <span>START</span>
                    </div>
                </div>
                <div className="speaker">
                    <div className="grill"></div>
                    <div className="grill"></div>
                    <div className="grill"></div>
                    <div className="grill"></div>
                    <div className="grill"></div>
                    <div className="grill"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
