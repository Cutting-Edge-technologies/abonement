import {teacherStoreCreator} from "../../store"
import {
  navigateLesson
} from "./external";
import {
  selectExternalLessonsData
} from "../../selectors/external"
import { startTeacherApp } from "../domain/domain";
  
describe('External Commands', () => {
  
  test('navigation Lessons test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectExternalLessonsData(initialState)).toBe([]);
    await teacherStore.asyncDispatch(startTeacherApp.action());
    const changedState = teacherStore.getState();
    expect(selectExternalLessonsData(changedState).length).toBeGreaterThan(0);
    const lessonId = selectExternalLessonsData(changedState)[0].id;
    await teacherStore.asyncDispatch(navigateLesson.action(lessonId));
    const againChangedState = teacherStore.getState();
  });
});