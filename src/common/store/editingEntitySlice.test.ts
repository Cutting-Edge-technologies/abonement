import { configureStore } from '@reduxjs/toolkit';
import { createEditingSlice } from './editingEntitySlice';

const initialState = {
  a: 0,
  b: 42,
  message: 'piece',
}

const slice = createEditingSlice(initialState, 'testSlice');

const createStore = () => {
  const store = configureStore({reducer: slice.reducer});
  return store;
}



describe('editing slice creator tests', () => {

  test('if reducer returns a right state', () => {
    const store = createStore();
    const initialState = store.getState();
    console.warn(initialState);
    expect(initialState.data.message).toBe('piece');
    expect(initialState.data.b).toBe(42);
  })

  test('a data state could be changed', () => {
    const store = createStore();
    store.dispatch(slice.actions.setEditingResource({
      a: 77,
      b: 77,
    }));
    const state = store.getState();
    expect(state.data.a).toBe(77);
    expect(state.data.b).toBe(77);
  });

  test('fields could be changed', () => {
    const store = createStore();
    store.dispatch(slice.actions.startEditingField('x'));
    store.dispatch(slice.actions.startEditingField('y'));
    const state = store.getState();
    expect(state.fieldsEditing.x).toBe(true);
    expect(state.fieldsEditing.y).toBe(true);
    store.dispatch(slice.actions.finishEditingField('x'));
    store.dispatch(slice.actions.finishEditingField('y'));
    const state2 = store.getState();
    expect(state2.fieldsEditing.x).toBe(false);
    expect(state2.fieldsEditing.y).toBe(false);
  });

});
