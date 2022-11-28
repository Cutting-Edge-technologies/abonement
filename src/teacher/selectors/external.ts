import { TeacherSelector } from "../../common/types/utility";
import {IExternalResourceState} from "../../common/store/externalResourceSlice";
import { id, ILesson } from "../../common/types/domain";

const selectExternalLessons: TeacherSelector<IExternalResourceState<ILesson>> = (state) => state.externalLessons;
export const selectExternalLessonsData: TeacherSelector<ILesson[]> = (state) => selectExternalLessons(state).data;
export const selectExternalLessonsIdArray: TeacherSelector<id[]> = (state) => selectExternalLessonsData(state).map((lesson)=>lesson.id);