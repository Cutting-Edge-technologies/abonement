import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ExampleTeacher } from '.';
import { setTeacherState } from '../../../common/store/utils';
import { exampleApiCommand, exampleResetCommand } from '../../commands/example/exampleCommands';
import { createHOCDecorator } from '../TeacherStateDecorator';

describe('Test Example HOC', () => {
  test('it checks that defaults are shown in HOC', async () => {
    const { HocDecorator } = createHOCDecorator();
    const HocStoryToRender = HocDecorator(() => <ExampleTeacher />);
    const { container } = await render(HocStoryToRender);
    
    const messageElement = container.querySelector('.message');
    const countElement = container.querySelector('.count');

    expect(messageElement?.textContent).toBe('The message is ');
    expect(countElement?.textContent).toBe('The count is 0');
  });

  test('it checks that changes in the state are reflected in the components', async () => {
    const { HocDecorator, teacherStore } = createHOCDecorator();
    const HocStoryToRender = HocDecorator(() => <ExampleTeacher />);
    const { container } = render(HocStoryToRender);
    
    await act(async () => {
      teacherStore.dispatch(setTeacherState({
        example: {
          message: 'Some generic message',
          count: 99,
        }
      }));
    });

    const messageElement = container.querySelector('.message');
    const countElement = container.querySelector('.count');

    expect(messageElement?.textContent).toBe('The message is Some generic message');
    expect(countElement?.textContent).toBe('The count is 99');
  });

  test('it checks that actions are dispatched on buttons click', () => {
    const { HocDecorator, teacherStore } = createHOCDecorator();
    const HocStoryToRender = HocDecorator(() => <ExampleTeacher />);
    const { container } = render(HocStoryToRender);

    const buttons = container.querySelectorAll('button');
    buttons[1].click();
    expect(teacherStore.getActionHistory()[0].type).toBe(exampleApiCommand.action.type);

    buttons[2].click();
    expect(teacherStore.getActionHistory()[1].type).toBe(exampleResetCommand.action.type);
  });
})
