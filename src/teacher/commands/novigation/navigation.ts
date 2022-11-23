import { call } from "redux-saga/effects";
import { createCommand } from "../../../common/utilities/createCommand";

export const setTecherCalendarRepresentationType = createCommand<void>(
  'setTecherCalendarRepresentationType',
  function*() {
    yield call(console.log,'setTecherCalendarRepresentationType');
  }
);

export const navigateSchedule = createCommand<void>(
  'navigateSchedule',
  function*() {
    yield call(console.log,'navigateSchedule');
  }
);

export const navigateSubjectList = createCommand<void>(
  'navigateSubjectList',
  function*() {
    yield call(console.log,'navigateSubjectList');
  }
);

export const subcectListViewSubjects = createCommand<void>(
  'subcectListViewSubjects',
  function*() {
    yield call(console.log,'subcectListViewSubjects');
  }
);

export const subjectListViewAbonements = createCommand<void>(
  'subjectListViewAbonements',
  function*() {
    yield call(console.log,'subjectListViewAbonements');
  }
);

export const cancelModifySubject = createCommand<void>(
  'cancelModifySubject',
  function*() {
    yield call(console.log,'cancelModifySubject');
  }
);

export const startCreatingSubject = createCommand<void>(
  'startCreatingSubject',
  function*() {
    yield call(console.log,'startCreatingSubject');
  }
);

export const startCreatingAbonements = createCommand<void>(
  'startCreatingAbonements',
  function*() {
    yield call(console.log,'startCreatingAbonements');
  }
);

export const closeAbonementModal = createCommand<void>(
  'closeAbonementModal',
  function*() {
    yield call(console.log,'closeAbonementModal');
  }
);

export const confirmSavingAbonement = createCommand<void>(
  'confirmSavingAbonement',
  function*() {
    yield call(console.log,'confirmSavingAbonement');
  }
);

export const subjectShowMore = createCommand<void>(
  'subjectShowMore',
  function*() {
    yield call(console.log,'subjectShowMore');
  }
);

export const teacherShowMore = createCommand<void>(
  'teacherShowMore',
  function*() {
    yield call(console.log,'teacherShowMore');
  }
);

export const startCreatingRule = createCommand<void>(
  'startCreatingRule',
  function*() {
    yield call(console.log,'startCreatingRule');
  }
);

export const confirmSavingSubject = createCommand<void>(
  'confirmSavingSubject',
  function*() {
    yield call(console.log,'confirmSavingSubject');
  }
);

export const toggleRuleModalMode = createCommand<void>(
  'toggleRuleModalMode',
  function*() {
    yield call(console.log,'toggleRuleModalMode');
  }
);

export const cancelModifyRule = createCommand<void>(
  'cancelModifyRule',
  function*() {
    yield call(console.log,'cancelModifyRule');
  }
);

export const confirmSavingRule = createCommand<void>(
  'confirmSavingRule',
  function*() {
    yield call(console.log,'confirmSavingRule');
  }
);

export const lessonAcceptedView = createCommand<void>(
  'lessonAcceptedView',
  function*() {
    yield call(console.log,'lessonAcceptedView');
  }
);

export const lessonPendingView = createCommand<void>(
  'lessonPendingView',
  function*() {
    yield call(console.log,'lessonPendingView');
  }
);

export const lessonDiclainedView = createCommand<void>(
  'lessonDiclainedView',
  function*() {
    yield call(console.log,'lessonDiclainedView');
  }
);

export const openLessonAddParticipiantModal = createCommand<void>(
  'openLessonAddParticipiantModal',
  function*() {
    yield call(console.log,'openLessonAddParticipiantModal');
  }
);

export const closeLessonAddParticipiantModal = createCommand<void>(
  'closeLessonAddParticipiantModal',
  function*() {
    yield call(console.log,'closeLessonAddParticipiantModal');
  }
);
