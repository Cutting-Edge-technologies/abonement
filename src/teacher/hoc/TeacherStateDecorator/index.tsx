import { ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { makeHocTestingStore } from "../../../common/store/utils";
import { teacherStoreCreator } from "../../store";

export const createHOCDecorator = () => {
  const teacherStore = makeHocTestingStore(teacherStoreCreator());
  const HocDecorator = (Story: ComponentStory<any>) => {
    return (
      <Provider store={teacherStore}>
        <Story />
      </Provider>
    )
  };

  return {
    teacherStore, HocDecorator
  }
}
