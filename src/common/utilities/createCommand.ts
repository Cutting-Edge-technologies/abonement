import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { takeLatestCommandSafe } from './safeEffect';

export const createCommand = <Payload>(
  name: string,
  saga: (action: PayloadAction<Payload>) => Generator<any, void, never>,
) => {
  const actionCreator = createAction<Payload>(name);

  const command = {
    action: actionCreator,
    saga,
  };

  return command;
};

export type command = ReturnType<typeof createCommand>;

export type commandChapter = {[key: symbol]: command };

export function watchCommandChapter(commands: commandChapter) {

  const watchChapterEffect = function*() {
    const commandArray: command[] = Object.values(commands);
    const effects = commandArray.map((command) => takeLatestCommandSafe(command));
    yield all(effects);
  }

  return watchChapterEffect;
}
