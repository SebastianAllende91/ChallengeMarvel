import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CardsSeries = ({ el }) => {
  let navigate = useNavigate();
  console.log(el);

  const { id, title, thumbnail } = el;

  const newTitle = title.toLowerCase().substring(0, 30);

  const handleId = () => {
    navigate(`${id}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, height: "600px" }} className="card-img">
        <CardMedia
          component="img"
          alt="imagenComics"
          image={`${thumbnail.path}.${thumbnail.extension}`}
          height="80%"
        />
        <CardContent>
          <Typography gutterBottom component="div" style={{ margin: "1px" }}>
            <em>
              <b>{newTitle}</b>
            </em>
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="inherit"
            variant="contained"
            onClick={handleId}
            style={{ backgroundColor: "black" }}
          >
            <Link to={id} style={{ textDecoration: "none", color: "white" }}>
              view serie
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardsSeries;
