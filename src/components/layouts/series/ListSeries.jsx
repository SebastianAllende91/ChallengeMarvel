import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Progress from "../../progress/Progress";
import { useDispatch, useSelector } from "react-redux";
import { getSeries, setLoading } from "../../../actions/SeriesAction";
import CardsSeries from "./CardsSeries";

const ListadoSeries = () => {
  const dispatch = useDispatch();

  const { series, loading } = useSelector((state) => state.SeriesReducer);

  console.log(series);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getSeries());
  }, []);

  return (
    <Box p={3}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
        {loading ? (
          <Progress />
        ) : (
          series.map((el) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={el.id}
              justifyContent="space-around"
              style={{ padding: "30px" }}
            >
              <CardsSeries el={el} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ListadoSeries;
