import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Meta } from "@storybook/react";
import { ExampleTeacher } from '.';
import { createHOCDecorator } from "../TeacherStateDecorator";

const { HocDecorator, teacherStore } = createHOCDecorator();

export default {
  title: "Component/Example",
  decorators: [HocDecorator],
} as Meta;

export const ExamplePageStory = () => {
  return (
    <ExampleTeacher />
  );
}

export const HocDecoratorStory = () => {
  return (
    <>
      <ExampleTeacher />
      <MyStoryButton
        onClick={() => console.log(teacherStore.getActionHistoryRepresentation())}
        variant={"contained"}
        color="error"
      >
        Action history
      </MyStoryButton>
    </>
  );
}

const MyStoryButton = styled(Button)`
  margin-top: 40px;
`;
