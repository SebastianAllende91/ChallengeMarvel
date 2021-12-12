import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import CardsComics from "./CardsComics";
import { useDispatch, useSelector } from "react-redux";
import { getComics, setLoading } from "../../../actions/ComicsActions";
import Progress from "../../progress/Progress";

const ListadoComics = () => {
  const dispatch = useDispatch();

  const { comics, loading } = useSelector((state) => state.ComicsReducer);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getComics());
  }, []);

  return (
    <Box p={3}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {loading ? (
          <Progress />
        ) : (
          comics.map((el) => (
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
              <CardsComics el={el} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ListadoComics;
