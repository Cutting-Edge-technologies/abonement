import { Provider } from "react-redux";
import { HOC } from "../common/types/utility";
import { ExampleTeacher } from "./hoc/Example";
import teacherStore from "./store";

const TeacherEntryPoint: HOC = () => (
  <Provider store={teacherStore}>
    <ExampleTeacher />
  </Provider>
);

export default TeacherEntryPoint;
