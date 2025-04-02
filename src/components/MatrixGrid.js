"use client"
import { useState } from "react";

export default function MatrixGrid() {
  const size = 3;
  const [clickedOrder, setClickedOrder] = useState([]);
  const [colors, setColors] = useState(Array(size * size).fill("white"));

  const handleClick = (index) => {
    if (!clickedOrder.includes(index)) {
      setClickedOrder((prev) => [...prev, index]);
      setColors((prev) => {
        const newColors = [...prev];
        newColors[index] = "green";
        return newColors;
      });
    }
    
    if (clickedOrder.length + 1 === size * size) {
      changeToOrange([...clickedOrder, index]);
    }
  };

  const changeToOrange = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setColors((prev) => {
          const newColors = [...prev];
          newColors[idx] = "orange";
          return newColors;
        });
      }, i * 500);
    });
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-48 mx-auto mt-10">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-16 h-16 border flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
