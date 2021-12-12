import ProductService from "../service/Personajes.service";
import { TYPES } from "./types";

export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING,
  };
};

export const getComics = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.getComics();

    dispatch({
      type: TYPES.GET_COMICS,
      payload: data.data.results,
    });
  } catch (error) {
    alert("ERROR: " + error);
  }
};

export const getComicsGetById = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.comicGetById(values);

    dispatch({
      type: TYPES.GET_COMIC_ID,
      payload: data.data.results[0],
    });
  } catch (error) {
    console.log(error);
  }
};
