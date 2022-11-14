import { combineReducers } from "redux";
import { errorSlice } from "../../common/store/errorSlice";
import { loadingSlice } from "../../common/store/loadingSlice";

export const teacherRootReducer = combineReducers({
  loading: loadingSlice.reducer,
  error: errorSlice.reducer,
});
