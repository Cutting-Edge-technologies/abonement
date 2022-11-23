import {TeacherSelector} from "../../common/types/utility";
import { 
    ModalMode,
    TecherCalendarRepresentationType,
    TeacherView,
    SubjectListView,
    LessonView
  } from "../store/modal";

export const selectTeacherCalendarRepresentationType: TeacherSelector<TecherCalendarRepresentationType> = (state) => state.modal.techerCalendarRepresentationType;
export const selectRuleModalMode: TeacherSelector<ModalMode> = (state) => state.modal.ruleModalMode;
export const selectIsSubjectShowMore: TeacherSelector<boolean> = (state) => state.modal.subjectDescriptionShowMore;
export const selectIsTeacherShowMore: TeacherSelector<boolean> = (state) => state.modal.teacherDescriptionShowMore;
export const selectIsAbonementModal: TeacherSelector<boolean> = (state) => state.modal.isAbonementModalOpen;
export const selectIsNewRuleModalOpen: TeacherSelector<boolean> = (state) => state.modal.isNewRuleModalOpen;
export const selectIsLessonAddParticipantModalOpen: TeacherSelector<boolean> = (state) => state.modal.isLessonAddParticipantModalOpen;
export const selectTeacherView: TeacherSelector<TeacherView> = (state) => state.modal.teacherView;
export const selectSubjectListView: TeacherSelector<SubjectListView> = (state) => state.modal.subjectListView;
export const selectLessonView: TeacherSelector<LessonView> = (state) => state.modal.lessonView;