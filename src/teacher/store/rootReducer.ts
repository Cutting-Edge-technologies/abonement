import { combineReducers } from "redux";
import { errorSlice } from "../../common/store/errorSlice";
import { loadingSlice } from "../../common/store/loadingSlice";
import { exampleSlice } from "./example";

export const teacherRootReducer = combineReducers({
  loading: loadingSlice.reducer,
  error: errorSlice.reducer,
  example: exampleSlice.reducer,
});
