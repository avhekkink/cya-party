import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const ItemList = () => {
  const allImages = import.meta.glob("../images/raffle/*.jpeg");
  const imagesToRender = Object.keys(allImages).map((img) => img);
  const re = /\/([^\/]+)\.jpeg$/;

  let itemsBody = imagesToRender.map((item, i) => {
    const titleLowercase = item.match(re)[1].split("-").join(" ");
    const title =
      titleLowercase.charAt(0).toUpperCase() + titleLowercase.slice(1);

    return (
      <ImageListItem key={i}>
        <img
          srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item}?w=248&fit=crop&auto=format`}
          alt={title}
          loading="lazy"
          className="image"
        />
        <ImageListItemBar title={title} />
      </ImageListItem>
    );
  });
  return (
    <div className="image-container">
      <ImageList variant="woven" cols={2} gap={8}>
        {itemsBody}
      </ImageList>
    </div>
  );
};

export default ItemList;
