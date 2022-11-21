import { ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { teacherStoreCreator } from "../../store";

export const HocDecorator = (Story: ComponentStory<any>) => {
  const teacherStore = teacherStoreCreator();
  return (
    <Provider store={teacherStore}>
      <Story />
    </Provider>
  )
}
