import { ActionTypes } from "./types";

export const fetchAll = (): ActionTypes => ({
  type: "FETCH_ALL",
});

export const fetchAllSuccess = (data: object): ActionTypes => ({
  type: "FETCH_ALL_SUCCESS",
  payload: data,
});

export const fetchAllFailure = (errors: string): ActionTypes => ({
  type: "FETCH_ALL_FAILURE",
  payload: errors,
});

export const setActive = (item: object): ActionTypes => ({
  type: "SET_ACTIVE",
  payload: item,
});
