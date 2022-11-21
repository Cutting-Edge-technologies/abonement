import { useDispatch } from "react-redux";
import { HOC } from "../../../common/types/utility";
import { exampleCommand, exampleApiCommand, exampleResetCommand } from "../../commands/example/exampleCommands";
import { useTeacherSelector } from "../../store";

export const ExampleTeacher: HOC = () => {
  const dispatch = useDispatch();
  const message = useTeacherSelector((state) => state.example.message);
  const count = useTeacherSelector((state) => state.example.count);
  return (
    <>
      <div>Teacher</div>
      <div className="message" role={'message'}>{`The message is ${message}`}</div>
      <div className="count" role={'count'}>{`The count is ${count}`}</div>
      <div className="controlls" style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
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
        <button
          onClick={() => dispatch(exampleResetCommand.action())}
        >
          Call reset command
        </button>
      </div>
      
    </>
  )
}