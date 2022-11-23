import { teacherStoreCreator } from "../../store";
import {TeacherSelector} from "../../../common/types/utility";
import { ModalMode, TecherCalendarRepresentationType, TeacherView } from "../../store/modal";
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
  navigateSchedule
} from "./navigation";


const selectTeacherCalendarRepresentationType: TeacherSelector<TecherCalendarRepresentationType> = (state) => state.modal.techerCalendarRepresentationType;
const selectRuleModalMode: TeacherSelector<ModalMode> = (state) => state.modal.ruleModalMode;
const selectIsSubjectShowMore: TeacherSelector<boolean> = (state) => state.modal.subjectDescriptionShowMore;
const selectIsTeacherShowMore: TeacherSelector<boolean> = (state) => state.modal.teacherDescriptionShowMore;
const selectIsAbonementModal: TeacherSelector<boolean> = (state) => state.modal.isAbonementModalOpen;
const selectIsNewRuleModalOpen: TeacherSelector<boolean> = (state) => state.modal.isNewRuleModalOpen;
const selectIsLessonAddParticipantModalOpen: TeacherSelector<boolean> = (state) => state.modal.isLessonAddParticipantModalOpen;
const selectTeacherView: TeacherSelector<TeacherView> = (state) => state.modal.teacherView;





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
});

