import React from 'react'
import './HowItWorks.css'
import { cards } from '../Constant'

const HowItWorks = () => {
  return (
    <div className='how-it-works'>
      <h1>How NutriScan <span>Works</span></h1>
      <p>
        Our comprehensive AI platform combines cutting-edge technology with medical expertise to provide accurate, timely malnutrition detection and intervention support.
      </p>

      <div className="card-grid">
        {cards.map((card, index) => {
          const bgColors = [
            "#0a7658", // green
            "#3b82f6", // blue
            "#f97316", // orange
            "#a855f7", // purple
            "#10b981", // teal
            "#eab308", // yellow
          ];

          const imageBgColor = bgColors[index % bgColors.length];

          return (
            <div key={card.id} className="card">
              <div className="card-image" style={{ backgroundColor: imageBgColor }}>
                <img src={card.image} alt={card.title} />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.sub_text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
