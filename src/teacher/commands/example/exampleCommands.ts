import { call } from "redux-saga/effects";
import { createCommand } from "../../../common/utilities/createCommand";

export const exampleCommand = createCommand<string>(
  'exampleCommand',
  function*({ payload: message }) {
    yield call(console.info, message);
  },
);

export const exampleCommand2 = createCommand<number>(
  'exampleCommand2',
  function*({ payload: count }) {
    yield call(console.info, count);
  }
);
