import { combineReducers } from "redux";
import { errorSlice } from "../../common/store/errorSlice";
import { loadingSlice } from "../../common/store/loadingSlice";
import { teacherDomainViewSlice } from "./domainView";
import { exampleSlice } from "./example";
import * as resourceSlices from './teacherExternalResources';

const { externalLessonsSlice, externalSubjectsSlice, externalTeachersSlice, externalUsersSlice } = resourceSlices;

export const teacherRootReducer = combineReducers({
  loading: loadingSlice.reducer,
  error: errorSlice.reducer,
  example: exampleSlice.reducer,
  teacherDomain: teacherDomainViewSlice.reducer,
  externalLessons: externalLessonsSlice.reducer,
  externalSubjects: externalSubjectsSlice.reducer,
  externalTeachers: externalTeachersSlice.reducer,
  externalUsers: externalUsersSlice.reducer,
});
