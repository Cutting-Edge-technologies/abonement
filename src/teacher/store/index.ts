import { Store } from "redux";
import { teacherRootReducer } from "./rootReducer";
import makeSagaMiddleware from 'redux-saga';
import { configureStore } from "@reduxjs/toolkit";
import { teacherRootSaga } from "../commands";

export type rootState = ReturnType<typeof teacherRootReducer>;

export const makeANewStore = (): Store<rootState> => {
  const sagaMiddleware = makeSagaMiddleware();
  
  const store = configureStore({
    reducer: teacherRootReducer,
    middleware: [
      sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(teacherRootSaga);

  return store;
};

const teacherStore = makeANewStore();

export default teacherStore;
