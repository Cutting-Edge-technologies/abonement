import { makeStoreCreator } from "../../common/store/utils";
import { teacherRootReducer } from "./rootReducer";
import { teacherRootSaga } from "../commands";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export type rootTeacherState = ReturnType<typeof teacherRootReducer>;

export const useTeacherSelector = useSelector as TypedUseSelectorHook<rootTeacherState>;

export const teacherStoreCreator = makeStoreCreator(teacherRootReducer, teacherRootSaga);

const teacherStore = teacherStoreCreator();

export default teacherStore;
