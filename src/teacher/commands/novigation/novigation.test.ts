import { teacherStoreCreator } from "../../store";
import {TeacherSelector} from "../../../common/types/utility";
import { ModalMode, TecherCalendarRepresentationType } from "../../store/modal";
import {
  setTecherCalendarRepresentationType,
  toggleRuleModalMode,
  subjectShowMore,
  teacherShowMore
} from "./navigation";


const selectTeacherCalendarRepresentationType: TeacherSelector<TecherCalendarRepresentationType> = (state) => state.modal.techerCalendarRepresentationType;
const selectRuleModalMode: TeacherSelector<ModalMode> = (state) => state.modal.ruleModalMode;
const selectIsSubjectShowMore: TeacherSelector<boolean> = (state) => state.modal.subjectDescriptionShowMore;
const selectIsTeacherShowMore: TeacherSelector<boolean> = (state) => state.modal.teacherDescriptionShowMore;



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
});

