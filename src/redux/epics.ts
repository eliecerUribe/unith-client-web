import { ajax } from "rxjs/ajax";
import { Epic, combineEpics, ofType } from "redux-observable";
import { catchError, mergeMap, map } from "rxjs/operators";
import { fetchAllSuccess, fetchAllFailure } from "./actions";
import { RootState, ActionTypes } from "./types";

export const fetchAllEpic: Epic<ActionTypes, ActionTypes, RootState> = (
  action$
) =>
  action$.pipe(
    ofType("FETCH_ALL"),
    mergeMap(() =>
      ajax.getJSON("http://54.73.73.228:4369/api/images").pipe(
        map((response) => fetchAllSuccess(response)),
        catchError((error) => [fetchAllFailure(error.error)])
      )
    )
  );

export const rootEpic = combineEpics(fetchAllEpic);
