import { teacherStoreCreator } from "../../store";
import {TeacherSelector} from "../../../common/types/utility";
import { 
  ModalMode,
  TecherCalendarRepresentationType,
  TeacherView,
  SubjectListView,
  LessonView
} from "../../store/modal";
import {
  setTecherCalendarRepresentationType,
  toggleRuleModalMode,
  subjectShowMore,
  teacherShowMore,
  startCreatingAbonements,
  closeAbonementModal,
  startCreatingRule,
  cancelModifyRule,
  openLessonAddParticipiantModal,
  closeLessonAddParticipiantModal,
  navigateSubjectList,
  navigateSchedule,
  startCreatingSubject,
  cancelModifySubject,
  subcectListViewSubjects,
  subjectListViewAbonements,
  lessonAcceptedView,
  lessonDiclainedView,
  lessonPendingView,
  confirmSavingAbonement,
  confirmSavingRule,
  confirmSavingSubject
} from "./navigation";


const selectTeacherCalendarRepresentationType: TeacherSelector<TecherCalendarRepresentationType> = (state) => state.modal.techerCalendarRepresentationType;
const selectRuleModalMode: TeacherSelector<ModalMode> = (state) => state.modal.ruleModalMode;
const selectIsSubjectShowMore: TeacherSelector<boolean> = (state) => state.modal.subjectDescriptionShowMore;
const selectIsTeacherShowMore: TeacherSelector<boolean> = (state) => state.modal.teacherDescriptionShowMore;
const selectIsAbonementModal: TeacherSelector<boolean> = (state) => state.modal.isAbonementModalOpen;
const selectIsNewRuleModalOpen: TeacherSelector<boolean> = (state) => state.modal.isNewRuleModalOpen;
const selectIsLessonAddParticipantModalOpen: TeacherSelector<boolean> = (state) => state.modal.isLessonAddParticipantModalOpen;
const selectTeacherView: TeacherSelector<TeacherView> = (state) => state.modal.teacherView;
const selectSubjectListView: TeacherSelector<SubjectListView> = (state) => state.modal.subjectListView;
const selectLessonView: TeacherSelector<LessonView> = (state) => state.modal.lessonView;







describe('Teacher Novigation Commands', () => {

  test('set Teacher CalendarRepresentationType test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherCalendarRepresentationType(initialState)).toBe(TecherCalendarRepresentationType.schedule);
    const newTeacherCalendarRepresentationType = TecherCalendarRepresentationType.calendarWeek;
    await teacherStore.asyncDispatch(setTecherCalendarRepresentationType.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherCalendarRepresentationType(changedState)).toBe(newTeacherCalendarRepresentationType);
  });

  test('set toggle Rule Modal Mode test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectRuleModalMode(initialState)).toBe(ModalMode.halfHeight);
    const newRuleModalMode = ModalMode.fillHeight;
    await teacherStore.asyncDispatch(toggleRuleModalMode.action());
    const changedState = teacherStore.getState();
    expect(selectRuleModalMode(changedState)).toBe(newRuleModalMode);
  });

  test('subject Decription ShowMore test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsSubjectShowMore(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(subjectShowMore.action());
    const changedState = teacherStore.getState();
    expect(selectIsSubjectShowMore(changedState)).toBeTruthy();
    await teacherStore.asyncDispatch(subjectShowMore.action());
    const againChangedState = teacherStore.getState();
    expect(selectIsSubjectShowMore(againChangedState)).toBeFalsy();
  });

  test('teacher Decription ShowMore test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsTeacherShowMore(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(teacherShowMore.action());
    const changedState = teacherStore.getState();
    expect(selectIsTeacherShowMore(changedState)).toBeTruthy();
    await teacherStore.asyncDispatch(teacherShowMore.action());
    const againChangedState = teacherStore.getState();
    expect(selectIsSubjectShowMore(againChangedState)).toBeFalsy();
  });

  test('start Creating Abonements test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsAbonementModal(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startCreatingAbonements.action());
    const changedState = teacherStore.getState();
    expect(selectIsAbonementModal(changedState)).toBeTruthy();
  });

  test('close Creating Abonements test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsAbonementModal(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startCreatingAbonements.action());
    const changedState = teacherStore.getState();
    expect(selectIsAbonementModal(changedState)).toBeTruthy();
    await teacherStore.asyncDispatch(closeAbonementModal.action());
    const againChangedState = teacherStore.getState();
    expect(selectIsAbonementModal(againChangedState)).toBeFalsy();
  });

  test('start Creating Rule test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsNewRuleModalOpen(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startCreatingRule.action());
    const changedState = teacherStore.getState();
    expect(selectIsNewRuleModalOpen(changedState)).toBeTruthy();
  });

  test('close Modify Rule test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsNewRuleModalOpen(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startCreatingRule.action());
    const changedState = teacherStore.getState();
    expect(selectIsNewRuleModalOpen(changedState)).toBeTruthy();
    await teacherStore.asyncDispatch(cancelModifyRule.action());
    const againChangedState = teacherStore.getState();
    expect(selectIsNewRuleModalOpen(againChangedState)).toBeFalsy();
  });

  test('open Lesson Add Participiant Modal test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsLessonAddParticipantModalOpen(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(openLessonAddParticipiantModal.action());
    const changedState = teacherStore.getState();
    expect(selectIsLessonAddParticipantModalOpen(changedState)).toBeTruthy();
  });

  test('close Lesson Add Participiant Modal test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsLessonAddParticipantModalOpen(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(openLessonAddParticipiantModal.action());
    const changedState = teacherStore.getState();
    expect(selectIsLessonAddParticipantModalOpen(changedState)).toBeTruthy();
    await teacherStore.asyncDispatch(closeLessonAddParticipiantModal.action());
    const againChangedState = teacherStore.getState();
    expect(selectIsLessonAddParticipantModalOpen(againChangedState)).toBeFalsy();
  });

  test('navigate SubjectList test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherView(initialState)).toBe(TeacherView.schedule);
    const newTeacherView = TeacherView.subjectList;
    await teacherStore.asyncDispatch(navigateSubjectList.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherView(changedState)).toBe(newTeacherView);
  });

  test('navigate Schedule test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherView(initialState)).toBe(TeacherView.schedule);
    const newTeacherView = TeacherView.subjectList;
    await teacherStore.asyncDispatch(navigateSubjectList.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherView(changedState)).toBe(newTeacherView);
    await teacherStore.asyncDispatch(navigateSchedule.action());
    const againChangedState = teacherStore.getState();
    expect(selectTeacherView(againChangedState)).toBe(TeacherView.schedule);
  });

  test('start Creating Subject test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherView(initialState)).toBe(TeacherView.schedule);
    const newTeacherView = TeacherView.subjectPage;
    await teacherStore.asyncDispatch(startCreatingSubject.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherView(changedState)).toBe(newTeacherView);
  });

  test('cancel Modify Subject test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherView(initialState)).toBe(TeacherView.schedule);
    const newTeacherView = TeacherView.subjectPage;
    await teacherStore.asyncDispatch(startCreatingSubject.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherView(changedState)).toBe(newTeacherView);
    await teacherStore.asyncDispatch(cancelModifySubject.action());
    const againChangedState = teacherStore.getState();
    expect(selectTeacherView(againChangedState)).toBe(TeacherView.schedule);
  });

  test('change subjectListView to Abonements test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectSubjectListView(initialState)).toBe(SubjectListView.subjects);
    const newSubjectListView = SubjectListView.abonements;
    await teacherStore.asyncDispatch(subjectListViewAbonements.action());
    const changedState = teacherStore.getState();
    expect(selectSubjectListView(changedState)).toBe(newSubjectListView);
  });

  test('change subjectListView to Subjects test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectSubjectListView(initialState)).toBe(SubjectListView.subjects);
    const newSubjectListView = SubjectListView.abonements;
    await teacherStore.asyncDispatch(subjectListViewAbonements.action());
    const changedState = teacherStore.getState();
    expect(selectSubjectListView(changedState)).toBe(newSubjectListView);
    await teacherStore.asyncDispatch(subcectListViewSubjects.action());
    const againChangedState = teacherStore.getState();
    expect(selectSubjectListView(againChangedState)).toBe(SubjectListView.subjects);
  });

  test('change LessonView to declained test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectLessonView(initialState)).toBe(LessonView.accepted);
    const newLessonView = LessonView.declained;
    await teacherStore.asyncDispatch(lessonDiclainedView.action());
    const changedState = teacherStore.getState();
    expect(selectLessonView(changedState)).toBe(newLessonView);
  });

  test('change LessonView to pending test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectLessonView(initialState)).toBe(LessonView.accepted);
    const newLessonView = LessonView.pending;
    await teacherStore.asyncDispatch(lessonPendingView.action());
    const changedState = teacherStore.getState();
    expect(selectLessonView(changedState)).toBe(newLessonView);
  });

  test('change LessonView to accepted test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectLessonView(initialState)).toBe(LessonView.accepted);
    const newLessonView = LessonView.pending;
    await teacherStore.asyncDispatch(lessonPendingView.action());
    const changedState = teacherStore.getState();
    expect(selectLessonView(changedState)).toBe(newLessonView);
    await teacherStore.asyncDispatch(lessonAcceptedView.action());
    const againChangedState = teacherStore.getState();
    expect(selectLessonView(againChangedState)).toBe(LessonView.accepted);
  });
  
  test('confirm Saving Abonements test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsAbonementModal(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startCreatingAbonements.action());
    const changedState = teacherStore.getState();
    expect(selectIsAbonementModal(changedState)).toBeTruthy();
    await teacherStore.asyncDispatch(confirmSavingAbonement.action());
    const againChangedState = teacherStore.getState();
    expect(selectIsAbonementModal(againChangedState)).toBeFalsy();
  });

  test('confirm Saving Rule test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsNewRuleModalOpen(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startCreatingRule.action());
    const changedState = teacherStore.getState();
    expect(selectIsNewRuleModalOpen(changedState)).toBeTruthy();
    await teacherStore.asyncDispatch(confirmSavingRule.action());
    const againChangedState = teacherStore.getState();
    expect(selectIsNewRuleModalOpen(againChangedState)).toBeFalsy();
  });

  test('confirm Saving Subject test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherView(initialState)).toBe(TeacherView.schedule);
    const newTeacherView = TeacherView.subjectPage;
    await teacherStore.asyncDispatch(startCreatingSubject.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherView(changedState)).toBe(newTeacherView);
    await teacherStore.asyncDispatch(confirmSavingSubject.action());
    const againChangedState = teacherStore.getState();
    expect(selectTeacherView(againChangedState)).toBe(TeacherView.subjectList);
  });
});

