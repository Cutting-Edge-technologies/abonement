import { id } from "../../common/types/domain";
import { TeacherView } from "../../common/types/teacherDomainView";
import {TeacherSelector} from "../../common/types/utility";

export const selectTeacherDomain: TeacherSelector<TeacherView> = (state) => state.teacherDomain;
export const selectTeacherId: TeacherSelector<id> = (state) => selectTeacherDomain(state).id;
export const selectDomainTeacherName: TeacherSelector<string> = (state) => selectTeacherDomain(state).name;
export const selectDomainTeacherDescription: TeacherSelector<string> = (state) => selectTeacherDomain(state).description;