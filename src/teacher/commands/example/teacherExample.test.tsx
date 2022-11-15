import { defaultExampleMessage } from '../../api/exampleApi';
import { teacherStoreCreator } from '../../store';
import { exampleApiCommand, exampleResetCommand } from './exampleCommands';

describe('from teacher example chapter', () => {
  test('obvious test', () => {
    expect(true).toBeTruthy();
  });

  test('it ensures the teacherStore is truthy', () => {
    const teacherStore = teacherStoreCreator();
    
    expect(teacherStore).toBeTruthy();
    expect(teacherStore.asyncDispatch).toBeTruthy();
    expect(teacherStore.getActionHistory).toBeTruthy();
  });

  test('it calls example api command and makes sure the state is changed', async () => {
    const teacherStore = teacherStoreCreator();

    const {example} = teacherStore.getState();
    expect(example.message).toBe('');
    expect(example.count).toBe(0);

    const newCount = 42;

    await teacherStore.asyncDispatch(exampleApiCommand.action(newCount));

    const {example: exampleAfter} = teacherStore.getState();
    expect(exampleAfter.count).toBe(newCount);
    expect(exampleAfter.message).toBe(defaultExampleMessage);

    console.info(teacherStore.getActionHistoryRepresentation());
  });

  test('it calls example api command and and then resets the state', async () => {
    const teacherStore = teacherStoreCreator();
    const newCount = 42;
    await teacherStore.asyncDispatch(exampleApiCommand.action(newCount));

    expect(teacherStore.getState().example.count).toBe(newCount);

    await teacherStore.asyncDispatch(exampleResetCommand.action());

    expect(teacherStore.getState().example.count).toBe(0);
    console.info(teacherStore.getActionHistoryRepresentation());
  })
});
