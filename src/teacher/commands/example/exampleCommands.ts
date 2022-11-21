import { call, put } from "redux-saga/effects";
import { createCommand } from "../../../common/utilities/createCommand";
import { exampleApiEffect } from "../../api/example";
import { exampleApiCall, IExampleDomainType } from "../../api/example/exampleApi";
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
    const dataFromApiCall: IExampleDomainType = yield exampleApiEffect(count);
    yield put(exampleSlice.actions.setExample(dataFromApiCall));
  }
);

export const exampleResetCommand = createCommand<void>(
  'exampleResetCommand',
  function*() {
    yield put(exampleSlice.actions.resetExample());
  }
);
