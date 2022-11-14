import { createAction, PayloadAction } from '@reduxjs/toolkit';

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
