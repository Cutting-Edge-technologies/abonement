import { makeStoreCreator } from "../../common/store/utils";
import { teacherRootReducer } from "./rootReducer";
import { teacherRootSaga } from "../commands";

export type rootState = ReturnType<typeof teacherRootReducer>;

const teacherStoreCreator = makeStoreCreator(teacherRootReducer, teacherRootSaga);

const teacherStore = teacherStoreCreator();

export default teacherStore;
