import { configureStore } from "@reduxjs/toolkit";
import { Action, AnyAction, Dispatch, Reducer, Store } from "redux";
import { ExtendedStore } from "../types/utility";
import { commonState } from "./commonReducer";
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
    const sagaMiddleware = makeSagaMiddleware();
    
    const store = configureStore({
      reducer,
      middleware: [
        sagaMiddleware,
      ],
      devTools: process.env.NODE_ENV !== 'production',
    });
  
    sagaMiddleware.run(rootSaga);
  
    const actionHistory: Action[] = [];
  
    const wrappedDispatch: Dispatch<AnyAction> = (action: Action) => {
      actionHistory.push(action);
      store.dispatch(action);
      return action as any;
    }
  
    return {
      ...store,
      dispatch: wrappedDispatch,
      asyncDispatch: (action: Action) => asyncDispatch(store, action),
      getActionHistory: () => actionHistory,
    };
  };

  return makeANewStore;
}
