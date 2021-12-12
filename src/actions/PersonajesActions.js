import ProductService from "../service/Personajes.service";
import { TYPES } from "./types";

export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING,
  };
};

export const getCharacters = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.getCharacters();

    dispatch({
      type: TYPES.GET_CHARACTERS,
      payload: data.data.results,
    });
  } catch (error) {
    alert("ERROR: " + error);
  }
};

export const getCharacterGetById = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.characterGetById(values);

    dispatch({
      type: TYPES.GET_CHARACTER_ID,
      payload: data.data.results[0],
    });
  } catch (error) {
    console.log(error);
  }
};
