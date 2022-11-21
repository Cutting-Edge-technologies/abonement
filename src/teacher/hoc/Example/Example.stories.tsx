import { Meta } from "@storybook/react";
import { ExampleTeacher } from '.';
import { HocDecorator } from "../TeacherStateDecorator";

export default {
  title: "Component/AdditionalInfoPlate",
  decorators: [HocDecorator],
} as Meta;

export const ExamplePageStory = () => {
  return (
    <ExampleTeacher />
  );
}

export const ExampleComponentStory = () => {
  return (
    <div className="story-content">I am story content</div>
  )
}
