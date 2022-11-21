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
 
export const startDeletingRule = createCommand<id>(
  'startDeletingRule',
  function*({payload: ruleId}) {
    yield call(console.log,'startDeletingRule', ruleId);
  }
);
 
export const removeStudentFromLesson = createCommand<id>(
  'removeStudentFromLesson',
  function*({payload: studentId}) {
    yield call(console.log,'removeStudentFromLesson', studentId);
  }
);

export const cancelLesson = createCommand<void>(
  'cancelLesson',
  function*() {
    yield call(console.log,'cancelLesson');
  }
); 

export const addStudentToLesson = createCommand<id>(
  'addStudentToLesson',
  function*({payload: studentId}) {
    yield call(console.log,'addStudentToLesson', studentId);
  }
);

export const sendAnotherNotification = createCommand<id>(
  'sendAnotherNotification',
  function*({payload: studentId}) {
    yield call(console.log,'sendAnotherNotification', studentId);
  }
);

export const requestStatusChange = createCommand<id>(
  'requestStatusChange',
  function*({payload: studentId}) {
    yield call(console.log,'requestStatusChange', studentId);
  }
);

export const changeAddParticipantSearch = createCommand<string>(
  'changeAddParticipantSearch',
  function*({payload: participantSearch}) {
    yield call(console.log,'requestStatusChange', participantSearch);
  }
);

export const searchParticipantToAdd = createCommand<void>(
  'searchParticipantToAdd',
  function*() {
    yield call(console.log,'searchParticipantToAdd');
  }
);

export const startTeacherApp = createCommand<void>(
  'startTeacherApp',
  function*() {
    yield call(console.log,'startTeacherApp');
  }
);
