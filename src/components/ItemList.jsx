import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";

const ItemList = () => {
  const allImages = import.meta.glob("/src/images/raffle/*.jpeg");
  const imagesToRender = Object.keys(allImages).map((img) => img);
  const re = /\/([^\/]+)\.jpeg$/;

  let itemsBody = imagesToRender.map((item, i) => {
    const titleLowercase = item.match(re)[1].split("-").join(" ");
    const title =
      titleLowercase.charAt(0).toUpperCase() + titleLowercase.slice(1);
    return (
      // TO DO: Use (woven) image list from MUI instead of these cards
      <Card key={i} className="card" sx={{ maxWidth: 225 }}>
        <CardActionArea>
          <CardMedia component="img" image={item} />
          <CardContent>
            <p className="location">{title}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
  return <div className="image-container">{itemsBody}</div>;
};

export default ItemList;
