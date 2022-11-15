import { TeacherSelector } from "../../../common/types/utility";

export const selectCount: TeacherSelector<number> = (state) => state.example.count;
export const selectMessage: TeacherSelector<string> = (state) => state.example.message;
