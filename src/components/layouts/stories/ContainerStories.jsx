import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getStorieGetById, setLoading } from "../../../actions/StoriesAction";
import CardItemStories from "./CardItemStories";

const ConteinerStories = () => {
  const dispatch = useDispatch();
  let params = useParams();
  let numberId = Number(params.id);

  const { storieSelect } = useSelector((state) => state.StoriesReducer);
  console.log(storieSelect);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getStorieGetById(numberId));
  }, []);

  return (
    <Grid container p={3}>
      <CardItemStories data={storieSelect} />
    </Grid>
  );
};

export default ConteinerStories;
