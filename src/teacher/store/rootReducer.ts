import { combineReducers } from "redux";
import { errorSlice } from "../../common/store/errorSlice";
import { loadingSlice } from "../../common/store/loadingSlice";
import { teacherDomainViewSlice } from "./domainView";
import { exampleSlice } from "./example";
import { externalLessonsSlice, externalSubjectsSlice, externalTeachersSlice, externalUsersSlice } from './teacherExternalResources';
import { editableAbonementOfferSlice, editableRuleSlice, editableSubjectSlice, editableTeacherSlice } from './teacherEditables';

export const teacherRootReducer = combineReducers({
  loading: loadingSlice.reducer,
  error: errorSlice.reducer,
  example: exampleSlice.reducer,
  teacherDomain: teacherDomainViewSlice.reducer,
  externalLessons: externalLessonsSlice.reducer,
  externalSubjects: externalSubjectsSlice.reducer,
  externalTeachers: externalTeachersSlice.reducer,
  externalUsers: externalUsersSlice.reducer,
  editableAbonementOffer: editableAbonementOfferSlice.reducer,
  editableRule: editableRuleSlice.reducer,
  editableSubject: editableSubjectSlice.reducer,
  editableTeacher: editableTeacherSlice.reducer,
});
