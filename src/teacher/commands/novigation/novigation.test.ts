import { teacherStoreCreator } from "../../store";
import {TeacherSelector} from "../../../common/types/utility";
import { ModalMode, TecherCalendarRepresentationType } from "../../store/modal";
import { setTecherCalendarRepresentationType } from "./navigation";


const selectTeacherCalendarRepresentationType: TeacherSelector<TecherCalendarRepresentationType> = (state) => state.modal.techerCalendarRepresentationType;


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
});

