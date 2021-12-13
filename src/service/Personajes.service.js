import { apiKey } from "../actions/types";
import http from "../helpers/AxiosInstance";

const characters = "characters";
const comics = "comics";
const series = "series";
const stories = "stories";

const getCharacters = () => {
  return http.get(`/${characters}?${apiKey}`);
};

const characterGetById = (id) => {
  return http.get(`/${characters}/${id}?${apiKey}`);
};

const characterGetName = (name) => {
  return http.get(`/${characters}?nameStartsWith=${name}&${apiKey}`);
};

const getComics = () => {
  return http.get(`/${comics}?${apiKey}`);
};

const comicGetById = (id) => {
  return http.get(`/${comics}/${id}?${apiKey}`);
};

const getSeries = () => {
  return http.get(`/${series}?${apiKey}`);
};

const serieGetById = (id) => {
  return http.get(`/${series}/${id}?${apiKey}`);
};

const getStories = () => {
  return http.get(`/${stories}?${apiKey}`);
};

const storieGetById = (id) => {
  return http.get(`/${stories}/${id}?${apiKey}`);
};

const ProductService = {
  getCharacters,
  characterGetById,
  characterGetName,
  getComics,
  comicGetById,
  getSeries,
  serieGetById,
  getStories,
  storieGetById,
};

export default ProductService;
