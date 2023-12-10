export interface RootState {
  data: object;
  loading: boolean;
  errors: string | null;
}

export interface FetchAllRequestAction {
  type: "FETCH_ALL";
}

export interface FetchAllSuccessAction {
  type: "FETCH_ALL_SUCCESS";
  payload: object;
}

export interface FetchAllFailureAction {
  type: "FETCH_ALL_FAILURE";
  payload: string;
}

export type ActionTypes =
  | FetchAllRequestAction
  | FetchAllSuccessAction
  | FetchAllFailureAction;
