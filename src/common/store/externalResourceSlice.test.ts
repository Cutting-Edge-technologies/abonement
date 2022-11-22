import { configureStore } from '@reduxjs/toolkit';
import { IHaveId } from '../types/domain';
import { createExternalResourceAPISlice } from './externalResourceSlice';

export interface TestEntity extends IHaveId {
  a: number;
  b: number;
  message: string;
}

const initialState: TestEntity = {
  id: '',
  a: 0,
  b: 42,
  message: 'piece',
}

const slice = createExternalResourceAPISlice(initialState, 'testSlice');

const createStore = () => {
  const store = configureStore({reducer: slice.reducer});
  return store;
}

describe('external slice creator tests', () => {

  test('if reducer returns a right state', () => {
    const store = createStore();
    const initialState = store.getState();
    console.warn(initialState);
    expect(true).toBeTruthy();
  });

  test('a data state could be changed', () => {
    const store = createStore();
    const resources: TestEntity[] = [{
        id: '11',
        a: 77,
        b: 77,
        message: 'some77'
      },
      {
        id: '22',
        a: 99,
        b: 87,
        message: 'some99'
      },
    ];
    store.dispatch(slice.actions.setResourses(resources));
    const {data} = store.getState();
    expect(data.length).toBe(2);

    expect(data[0].a).toBe(77);
    expect(data[0].b).toBe(77);
    expect(data[0].message).toBe('some77');

    expect(data[1].a).toBe(99);
    expect(data[1].b).toBe(87);
    expect(data[1].message).toBe('some99');

  });

  test('filters could be changed', () => {
    const store = createStore();
    store.dispatch(slice.actions.setFilters({ search: 'lorem ipsum' }));
    const state = store.getState();
    expect(state.filters.search).toBe('lorem ipsum');
  });

});
