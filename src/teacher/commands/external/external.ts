import { call } from "redux-saga/effects";
import { id } from "../../../common/types/domain";
import { createCommand } from "../../../common/utilities/createCommand";

export const navigateLesson = createCommand<id>(
    'navigateLesson',
    function*({payload: lessonId}) {
      yield call(console.log,'navigateLesson', lessonId);
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
  