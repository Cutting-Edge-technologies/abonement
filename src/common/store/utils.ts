import { configureStore, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action, AnyAction, Dispatch, Reducer, Store } from "redux";
import { ExtendedStore } from "../types/utility";
import { commonState } from "./commonReducer";
import { StoreSagaMonitor } from "./sagaMonitor";
import makeSagaMiddleware from 'redux-saga';

const tooLongInMs = 3000;

export const asyncDispatch = <RootState extends commonState>(store: Store<RootState>, action: Action) => {
  const actionType = action.type;

  const promiseToDispachAction = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Rise error if taking too long
      throw new Error(`The action ${actionType} took too much time to execute`);
    }, tooLongInMs);

    // Subscribe on loading state
    let actionStarted = false;
    store.subscribe(() => {
      const state = store.getState();
      const actionLoad = !!state.loading[actionType];

      // loading is true. Action started
      if (actionLoad) {
        actionStarted = true;
      }

      // loading was true, but then changed to false. Action finished.
      if (actionLoad === false && actionStarted) {
        resolve('');
      }
    });
  });

  store.dispatch(action);
  return promiseToDispachAction;
};

export const makeStoreCreator = <State extends commonState>(reducer: Reducer<State>, rootSaga: () => Generator<any>) => {
  const makeANewStore = (): ExtendedStore<State> => {
    const actionHistory: any[] = [];
    const sagaMonitor = new StoreSagaMonitor(actionHistory);
    const sagaMiddleware = makeSagaMiddleware({sagaMonitor});
    
    const store = configureStore({
      reducer,
      middleware: [
        sagaMiddleware,
      ],
      devTools: process.env.NODE_ENV !== 'production',
    });
  
    sagaMiddleware.run(rootSaga);
  
    return {
      ...store,
      asyncDispatch: (action: Action) => asyncDispatch(store, action),
      getActionHistory: () => [...actionHistory],
      getActionHistoryRepresentation: () => JSON.stringify(actionHistory, undefined, 2),
    };
  };

  return makeANewStore;
}

export const makeHocTestingStore = <State extends commonState>(store: ExtendedStore<State>) => {
  const initialState = store.getState();
  
  const rootReducer = createReducer(initialState, {
    setState: (state, { payload }: PayloadAction<State>) => ({...payload}),
    resetState: () => ({...initialState}),
  })

  const actionHistory: any[] = [];
  const sagaMonitor = new StoreSagaMonitor(actionHistory);
  const sagaMiddleware = makeSagaMiddleware({sagaMonitor});

  const hocStore = configureStore({
    reducer: rootReducer,
    middleware: [
      sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
  });

  const rootSaga = function*() {

  }

  sagaMiddleware.run(rootSaga);

  return hocStore;
}
