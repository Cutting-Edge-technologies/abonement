import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { HOC } from "../../../common/types/utility";
import { exampleCommand, exampleApiCommand, exampleResetCommand } from "../../commands/example/exampleCommands";
import { useTeacherSelector } from "../../store";
import MessageIcon from '@mui/icons-material/Message';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';

export const ExampleTeacher: HOC = () => {
  const dispatch = useDispatch();
  const message = useTeacherSelector((state) => state.example.message);
  const count = useTeacherSelector((state) => state.example.count);
  return (
    <Card sx={{maxWidth: '400px'}}>
      <CardMedia
        component="img"
        image="img/teacher.jpeg"
        height="300px"
        alt="Teacher"
      />
      <CardContent>
        <Typography variant="h4">Teacher</Typography>
        <Divider variant="fullWidth" />
        <Box paddingTop={'30px'} display="flex" flexDirection={'column'} height="200px" justifyContent="space-evenly">
          <Chip color="primary" avatar={<MessageIcon/>} className="message" role={'message'} label={`The message is ${message}`} onDelete={console.log}/>
          <Chip color="secondary" avatar={<AlarmAddIcon />} className="count" role={'count'} label={`The count is ${count}`} />
        </Box>
      </CardContent>
      
      <CardActions className="controlls">
        <Button
          onClick={() => dispatch(exampleCommand.action('Test message'))}
        >
          Call string command
        </Button>
        <Button
          onClick={() => dispatch(exampleApiCommand.action(42))}
        >
          Call number command
        </Button>
        <Button
          onClick={() => dispatch(exampleResetCommand.action())}
        >
          Call reset command
        </Button>
      </CardActions>
    </Card>
  )
}
