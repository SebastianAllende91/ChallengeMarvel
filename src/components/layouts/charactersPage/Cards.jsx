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

const Cards = ({ el }) => {
  let navigate = useNavigate();

  const { id, name, thumbnail } = el;

  const handleId = () => {
    navigate(`${id}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, height: "500px" }} className="card-img">
        <CardMedia
          component="img"
          alt={name}
          image={`${thumbnail.path}.${thumbnail.extension}`}
          height="80%"
        />
        <CardContent>
          <Typography gutterBottom component="div" style={{ margin: "1px" }}>
            <em>
              <b>{name}</b>
            </em>
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleId}
            style={{ backgroundColor: "black" }}
          >
            <Link
              to={`../${id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              view Character
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cards;
