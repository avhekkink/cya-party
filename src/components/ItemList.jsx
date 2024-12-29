import React from "react";
import monitorImg from "../images/raffle/monitor.jpeg";

const ItemList = () => {
  const allImages = import.meta.glob("../images/raffle/*.jpeg");

  const imagesToRender = [];
  for (const img in allImages) {
    allImages[img]().then((smth) => {
      imagesToRender.push(img);
    });
  }

  console.log("imagesToRender: ", imagesToRender);
  return (
    <div className="container">
      <img src={monitorImg} alt="Monitor" />
      {/* DEBUG FROM HERE */}
      {imagesToRender.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
};

export default ItemList;
