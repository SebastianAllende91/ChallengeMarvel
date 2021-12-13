import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getCharacterGetById,
  setLoading,
} from "../../../actions/CharactersActions";
import CardItem from "./CardItem";

const ContainerCharacter = () => {
  const dispatch = useDispatch();
  let params = useParams();
  let numberId = Number(params.id);

  const { personajeSelect } = useSelector((state) => state.CharactersReducers);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getCharacterGetById(numberId));
  }, []);

  return (
    <Grid container p={3}>
      <CardItem data={personajeSelect} />
    </Grid>
  );
};

export default ContainerCharacter;
