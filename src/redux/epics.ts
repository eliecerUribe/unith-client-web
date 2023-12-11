import { ajax } from "rxjs/ajax";
import { Epic, combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import { catchError, mergeMap, map, withLatestFrom } from "rxjs/operators";
import { fetchAllSuccess, fetchAllFailure } from "./actions";
import { RootState, ActionTypes } from "./types";

export const fetchAllEpic: Epic<ActionTypes, ActionTypes, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType("FETCH_ALL"),
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      const items = state.items.data;
      if (Object.values(items)?.length > 0) {
        return of(fetchAllSuccess(items));
      } else {
        return ajax.getJSON("http://54.73.73.228:4369/api/images").pipe(
          map((response) => fetchAllSuccess(response)),
          catchError((error) => [fetchAllFailure(error.error)])
        );
      }
    })
  );

export const rootEpic = combineEpics(fetchAllEpic);
