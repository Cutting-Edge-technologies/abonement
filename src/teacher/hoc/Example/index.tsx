import { useDispatch } from "react-redux";
import { HOC } from "../../../common/types/utility";
import { exampleCommand, exampleApiCommand } from "../../commands/example/exampleCommands";

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
        onClick={() => dispatch(exampleApiCommand.action(42))}
      >
        Call number command
      </button>
    </>
  )
}