import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import mapView from "../images/map-view.png";

const MapCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={mapView}
          alt="map with a view of The Green Man pub"
        />
        <CardContent>
          <p className="location">The Green Man</p>
          <p>36 Riding House Street, London, W1W 7EP</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MapCard;
