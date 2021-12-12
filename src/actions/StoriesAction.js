import ProductService from "../service/Personajes.service";
import { TYPES } from "./types";

export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING,
  };
};

export const getStories = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.getStories();

    dispatch({
      type: TYPES.GET_STORIES,
      payload: data.data.results,
    });
  } catch (error) {
    alert("ERROR: " + error);
  }
};

export const getStorieGetById = (values) => async (dispatch) => {
  try {
    const { data } = await ProductService.storieGetById(values);

    dispatch({
      type: TYPES.GET_STORIE_ID,
      payload: data.data.results[0],
    });
  } catch (error) {
    console.log(error);
  }
};
