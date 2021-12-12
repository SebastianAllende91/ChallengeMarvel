import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Progress from "../../progress/Progress";
import { useDispatch, useSelector } from "react-redux";
import { getStories, setLoading } from "../../../actions/StoriesAction";
import CardsStories from "./CardsStories";

const ListadoStories = () => {
  const dispatch = useDispatch();

  const { stories, loading } = useSelector((state) => state.StoriesReducer);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getStories());
  }, []);

  return (
    <Box p={3}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {loading ? (
          <Progress />
        ) : (
          stories.map((el) => (
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
              <CardsStories el={el} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ListadoStories;
