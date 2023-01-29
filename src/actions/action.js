import axios from "axios";
import { LOAD_PANNEAUX, LOAD_BOISBLANC, LOAD_ALLCLIENTS, LOAD_FACTURES, LOAD_BOISDUR, LOAD_CONTREPAQUE, LOAD_BOISROUGE } from "./type";

export const loadpanneaux = () => async (dispatch) => {
  const { data } = await axios.get(
    "http://localhost:8080/api/v1/getproductsby/Panneaux"
  );
  dispatch({
    type: LOAD_PANNEAUX,
    payload: data,
  });
};
export const loadboisblanc = () => async (dispatch) => {
  const { data } = await axios.get(
    "http://localhost:8080/api/v1/getproductsby/Bois-Blanc"
  );
  dispatch({
    type: LOAD_BOISBLANC,
    payload: data,
  });
};
export const loadboisdur = () => async (dispatch) => {
  const { data } = await axios.get(
    "http://localhost:8080/api/v1/getproductsby/Bois-Dur"
  );
  dispatch({
    type: LOAD_BOISDUR,
    payload: data,
  });
};
export const loadboisrouge = () => async (dispatch) => {
  const { data } = await axios.get(
    "http://localhost:8080/api/v1/getproductsby/Bois-Rouge"
  );
  dispatch({
    type: LOAD_BOISROUGE,
    payload: data,
  });
};
export const loadcontreplaque = () => async (dispatch) => {
  const { data } = await axios.get(
    "http://localhost:8080/api/v1/getproductsby/Contre-Plaques"
  );
  dispatch({
    type: LOAD_CONTREPAQUE,
    payload: data,
  });
};

export const loadclient = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:8080/api/v1/clients");
  dispatch({
    type: LOAD_ALLCLIENTS,
    payload: data,
  });
};
export const loadfactures = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:8080/api/v1/factures");
  dispatch({
    type: LOAD_FACTURES,
    payload: data,
  });
};
