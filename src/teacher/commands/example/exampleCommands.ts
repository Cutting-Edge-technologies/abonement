import { call, put } from "redux-saga/effects";
import { createCommand } from "../../../common/utilities/createCommand";
import { exampleApiCall, IExampleDomainType } from "../../api/exampleApi";
import { exampleSlice } from "../../store/example";

export const exampleCommand = createCommand<string>(
  'exampleCommand',
  function*({ payload: message }) {
    yield call(console.info, message);
  },
);

export const exampleApiCommand = createCommand<number>(
  'exampleApiCommand',
  function*({ payload: count }) {
    const dataFromApiCall: IExampleDomainType = yield call(exampleApiCall, count)
    yield put(exampleSlice.actions.setExample(dataFromApiCall));
    yield call(console.info, dataFromApiCall);
  }
);

export const exampleResetCommand = createCommand<void>(
  'exampleResetCommand',
  function*() {
    yield put(exampleSlice.actions.resetExample());
  }
);
