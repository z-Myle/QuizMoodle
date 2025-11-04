import React, { useEffect, useState } from "react";

const SakuraBackground = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 15; // how many petals
    const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percent
      size: Math.random() * 12 + 8, // px
      duration: Math.random() * 8 + 6, // seconds
      delay: Math.random() * 10, // seconds
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      {petals.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            top: "-10%",
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "rgba(255, 192, 203, 0.8)",
            borderRadius: "50% 50% 50% 0",
            transform: `rotate(${p.rotation}deg)`,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0.7,
          }}
        />
      ))}

      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.8;
            }
            70% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SakuraBackground;
