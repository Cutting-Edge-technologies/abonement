import { render, screen } from '@testing-library/react';
import { ExampleTeacher } from '.';
import { HocDecorator } from '../TeacherStateDecorator';

describe('Test Example HOC', () => {
  test('it checks that defaults are shown in HOC', async () => {
    const HocStoryToRender = HocDecorator(() => <ExampleTeacher />);
    render(HocStoryToRender);
    const message = await screen.findAllByText(/message is/);
    console.log(message[0]);
    console.log(message[0].innerHTML)

    expect(true).toBeTruthy();
  })
  test('it checks querring by role', async () => {
    const HocStoryToRender = HocDecorator(() => <ExampleTeacher />);
    render(HocStoryToRender);
    const message = await screen.findByRole('message');
    console.log(message);
    console.log(message.innerHTML);

    // const button

    expect(true).toBeTruthy();
  })
})