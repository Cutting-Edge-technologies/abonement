import { teacherStoreCreator } from "../../store";
import {TeacherSelector} from "../../../common/types/utility";
import { ModalMode, TecherCalendarRepresentationType } from "../../store/modal";
import {
  setTecherCalendarRepresentationType,
  toggleRuleModalMode
} from "./navigation";


const selectTeacherCalendarRepresentationType: TeacherSelector<TecherCalendarRepresentationType> = (state) => state.modal.techerCalendarRepresentationType;
const selectRuleModalMode: TeacherSelector<ModalMode> = (state) => state.modal.ruleModalMode;


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
});

