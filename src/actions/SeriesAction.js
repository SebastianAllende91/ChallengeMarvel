import ProductService from "../service/Personajes.service";
import { TYPES } from "./types";

export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING,
  };
};

export const getSeries = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.getSeries();

    dispatch({
      type: TYPES.GET_SERIES,
      payload: data.data.results,
    });
  } catch (error) {
    alert("ERROR: " + error);
  }
};

export const getSerieGetById = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.serieGetById(values);

    dispatch({
      type: TYPES.GET_SERIE_ID,
      payload: data.data.results[0],
    });
  } catch (error) {
    console.log(error);
  }
};
