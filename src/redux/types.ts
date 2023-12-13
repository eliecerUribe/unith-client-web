export interface Items {
  data: object;
  loading: boolean;
  errors: string | null;
}

export interface Item {
  index: number;
  title: string;
  image: string;
  description: string;
}
export interface RootState {
  items: Items;
  activeItem: Item | null;
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

export interface SetActiveAction {
  type: "SET_ACTIVE";
  payload: object;
}

export type ActionTypes =
  | FetchAllRequestAction
  | FetchAllSuccessAction
  | FetchAllFailureAction
  | SetActiveAction;
