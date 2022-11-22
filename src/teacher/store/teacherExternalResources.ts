import { ILesson, ISubject, ITeacher, IUser, LessonStatus } from "../../common/types/domain";
import { createExternalResourceAPISlice } from "../../common/store/externalResourceSlice";

export const externalSubjectsSlice = createExternalResourceAPISlice<ISubject>({
  id: '',
  name: '',
  description: '',
  rules: [],
}, 'externalSubjects');

export const externalLessonsSlice = createExternalResourceAPISlice<ILesson>({
  id: '',
  date: new Date(),
  durationMin: 0,
  participants: [],
  status: LessonStatus.scheduled,
  timeStart: 0,
}, 'externalLessons');

export const externalUsersSlice = createExternalResourceAPISlice<IUser>({
  id: '',
  firstName: '',
  lastName: '',
  avatar: '',
}, 'externalUsers');

export const externalTeachersSlice = createExternalResourceAPISlice<ITeacher>({
  id: '',
  firstName: '',
  lastName: '',
  description: '',
  avatar: '',
  abonementOffers: [],
  subjects: [],
}, 'externalTeachers');
