import React from 'react';
import { teacherStoreCreator } from '.';

describe('teacher state', () => {
  test('check initial state', () => {
    const store = teacherStoreCreator();
    const state = store.getState();
    console.warn(state);
    expect(state.teacherDomain.id).toBe('');
  });
})
