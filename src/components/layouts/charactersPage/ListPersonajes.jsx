import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, setLoading } from "../../../actions/PersonajesActions";
import Progress from "../../progress/Progress";

const ListadoPersonajes = () => {
  const dispatch = useDispatch();

  const { personajes, loading } = useSelector(
    (state) => state.PersonajesReducers
  );

  console.log(personajes);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getCharacters());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {loading ? (
          <Progress />
        ) : (
          personajes.map((el) => (
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
              <Cards el={el} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ListadoPersonajes;
