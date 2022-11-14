import { all, fork } from "redux-saga/effects";
import { takeLatestCommandSafe } from "../../common/utilities/safeEffect";
import * as exampleCommands from './example/exampleCommands';

const exampleCommandsArray = Object.values(exampleCommands);

function* watchExample() {
  const effects = exampleCommandsArray.map((command) => takeLatestCommandSafe(command as any));
  yield all(effects);
}

export const teacherRootSaga = function*() {
  yield all([
    fork(watchExample),
  ]);
};
