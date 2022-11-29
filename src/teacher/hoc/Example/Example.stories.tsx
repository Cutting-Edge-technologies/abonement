import { Meta } from "@storybook/react";
import { ExampleTeacher } from '.';
import { createHOCDecorator } from "../TeacherStateDecorator";

const { HocDecorator, teacherStore } = createHOCDecorator();

export default {
  title: "Component/AdditionalInfoPlate",
  decorators: [HocDecorator],
} as Meta;

export const ExamplePageStory = () => {
  return (
    <ExampleTeacher />
  );
}
