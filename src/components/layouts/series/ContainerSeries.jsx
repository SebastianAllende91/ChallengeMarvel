import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSerieGetById, setLoading } from "../../../actions/SeriesAction";
import CardItemSeries from "./CardItemSeries";

const ConteinerSeries = () => {
  const dispatch = useDispatch();
  let params = useParams();
  let numberId = Number(params.id);

  const { serieSelect } = useSelector((state) => state.SeriesReducer);
  console.log();

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getSerieGetById(numberId));
  }, []);

  return (
    <Grid container p={3}>
      <CardItemSeries data={serieSelect} />
    </Grid>
  );
};

export default ConteinerSeries;
