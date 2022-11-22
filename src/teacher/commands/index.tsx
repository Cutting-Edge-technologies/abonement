import { all, fork } from "redux-saga/effects";
import * as exampleCommands from './example/exampleCommands';
import * as domainCommands from './domain/domain';
import * as editableCommands from './editable/editable';
import * as navigationCommands from './novigation/navigation';
import { watchCommandChapter } from "../../common/utilities/createCommand";

export const teacherRootSaga = function*() {
  yield all([
    fork(watchCommandChapter(exampleCommands)),
    fork(watchCommandChapter(domainCommands)),
    fork(watchCommandChapter(editableCommands)),
    fork(watchCommandChapter(navigationCommands)),
  ]);
};
