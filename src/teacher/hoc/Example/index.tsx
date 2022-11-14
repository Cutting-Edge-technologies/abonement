import { useDispatch } from "react-redux";
import { HOC } from "../../../common/types/utility";
import { exampleCommand, exampleCommand2 } from "../../commands/example/exampleCommands";

export const ExampleTeacher: HOC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Teacher</div>
      <button
        onClick={() => dispatch(exampleCommand.action('Test message'))}
      >
        Call string command
      </button>
      <button
        onClick={() => dispatch(exampleCommand2.action(42))}
      >
        Call number command
      </button>
    </>
    
  )
}