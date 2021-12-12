import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getComicsGetById, setLoading } from "../../../actions/ComicsActions";
import CardItemComics from "./CardItemComics";

const ConteinerCard = () => {
  const dispatch = useDispatch();
  let params = useParams();
  let numberId = Number(params.id);

  const { comicsSelect } = useSelector((state) => state.ComicsReducer);
  console.log(comicsSelect);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getComicsGetById(numberId));
  }, []);

  return (
    <Grid container p={3}>
      <CardItemComics data={comicsSelect} />
    </Grid>
  );
};

export default ConteinerCard;
