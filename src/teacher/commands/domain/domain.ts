import { call } from "redux-saga/effects";
import { createCommand } from "../../../common/utilities/createCommand";
import { id } from "../../../common/types/domain";

export const startDeletingSubject = createCommand<id>(
  'startDeletingSubject',
  function*({payload: subjectId}) {
    yield call(console.log,'startDeletingSubject', subjectId);
  }
);
 
export const startDeletingAbonement = createCommand<id>(
  'startDeletingAbonement',
  function*({payload: abonementId}) {
    yield call(console.log,'startDeletingAbonement', abonementId);
  }
); 

export const startTeacherApp = createCommand<void>(
  'startTeacherApp',
  function*() {
    yield call(console.log,'startTeacherApp');
  }
);

export const startDeletingRule = createCommand<id>(
  'startDeletingRule',
  function*({payload: ruleId}) {
    yield call(console.log,'startDeletingRule', ruleId);
  }
);

export const confirmSavingAbonement = createCommand<void>(
  'confirmSavingAbonement',
  function*() {
    yield call(console.log,'confirmSavingAbonement');
  }
);

export const confirmSavingSubject = createCommand<void>(
  'confirmSavingSubject',
  function*() {
    yield call(console.log,'confirmSavingSubject');
  }
);

export const confirmSavingRule = createCommand<void>(
  'confirmSavingRule',
  function*() {
    yield call(console.log,'confirmSavingRule');
  }
);
