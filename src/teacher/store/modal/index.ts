import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TecherCalendarRepresentationType {
  schedule = 'schedule',
  calendarWeek = 'calendarWeek',
}

export enum TeacherView {
  schedule = 'schedule',
  subjectList = 'subjectList',
  subjectPage = 'subjectPage',
}

export enum SubjectListView {
  subjects = 'subjects',
  abonements = 'abonements',
}

export enum ModalMode {
  fillHeight = 'fillHeight',
  halfHeight = 'halfHeight',
}

export enum LessonView {
  accepted = 'accepted',
  pending = 'pending',
  declained = 'declained',
}

interface ITeacherModalState {
  techerCalendarRepresentationType: TecherCalendarRepresentationType;
  teacherView: TeacherView;
  subjectListView: SubjectListView;

  isAbonementModalOpen: boolean;

  isNewRuleModalOpen: boolean;
  ruleModalMode:ModalMode;

  lessonView: LessonView;

  isLessonAddParticipantModalOpen: boolean;

  teacherDescriptionShowMore: boolean;
  subjectDescriptionShowMore: boolean;
}

const teacherModalInitialState: ITeacherModalState = {
  techerCalendarRepresentationType: TecherCalendarRepresentationType.schedule,
  teacherView: TeacherView.schedule,
  subjectListView: SubjectListView.subjects,
  lessonView: LessonView.accepted,
  isAbonementModalOpen: false,
  isLessonAddParticipantModalOpen: false,
  isNewRuleModalOpen: false,
  ruleModalMode: ModalMode.halfHeight,
  teacherDescriptionShowMore: false,
  subjectDescriptionShowMore: false,
};

export const teacherModalSlice = createSlice({
  name: 'teacherModal',
  initialState: teacherModalInitialState,
  reducers: {
    setModalState: (state, { payload: stateDiff }: PayloadAction<Partial<ITeacherModalState>>) => ({
      ...state,
      ...stateDiff,
    }),
    resetModalState: () => ({...teacherModalInitialState}),
  },
});
