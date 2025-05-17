import React from 'react';
import './BusStop.css';

export const BusStop = ({ name, station, time }) => {
  return (
    <div className="bus-stop">
      <div className="bus-stop__left">
        <div className="bus-stop__icon"></div>
        <div className="bus-stop__time">{time}</div>
      </div>
      <div className="bus-stop__middle">
        <div className="bus-stop__name">{name}</div>
        <div className="bus-stop__station">{station}</div>
      </div>
      <div className="bus-stop__right"></div>
    </div>
  );
};
