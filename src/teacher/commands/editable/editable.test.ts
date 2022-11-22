import {
  changeAbonementLimitLessons,
  changeAbonementPrice,
  changeAbonementType,
  changeAbonementSubjects,
  deleteAbonementSubject,
  changeRuleDuration
} from "./editable";
import {teacherStoreCreator} from "../../store"
import { TeacherSelector } from "../../../common/types/utility";
import { abonementType, IAbonementOffer, id, IRule, ISubject } from "../../../common/types/domain";
import { editingFields, IEditingResourceState } from "../../../common/store/editingEntitySlice";

const selectAbonementOffer: TeacherSelector<IEditingResourceState<IAbonementOffer>> = (state) => state.editableAbonementOffer;
const selectAbonementOfferData: TeacherSelector<IAbonementOffer> = (state) => selectAbonementOffer(state).data;
const selectAbonementOfferEditingFields: TeacherSelector<editingFields> = (state) => selectAbonementOffer(state).fieldsEditing;
const selectAbonementOfferLimitLessons: TeacherSelector<number> = (state) => selectAbonementOfferData(state).limitLessons; 
const selectAbonementOfferPrice: TeacherSelector<number> = (state) => selectAbonementOfferData(state).price; 
const selectAbonementOfferAbonementType: TeacherSelector<abonementType> = (state) => selectAbonementOfferData(state).type;
const selectAbonementOfferAbonementSubjects: TeacherSelector<id[]> = (state) => selectAbonementOfferData(state).subjects;  


describe('Teacher Editable AbonementsOffer Commands', () => {

  test('change Abonement Limit Lessons test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectAbonementOfferLimitLessons(initialState)).toBe(0);
    const newLimitLessons = 15;
    await teacherStore.asyncDispatch(changeAbonementLimitLessons.action(newLimitLessons));
    const changedState = teacherStore.getState();
    expect(selectAbonementOfferLimitLessons(changedState)).toBe(newLimitLessons);
  });

  test('change Abonement Price test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectAbonementOfferPrice(initialState)).toBe(0);
    const newPrice = 1500;
    await teacherStore.asyncDispatch(changeAbonementPrice.action(newPrice));
    const changedState = teacherStore.getState();
    expect(selectAbonementOfferPrice(changedState)).toBe(newPrice);
  });

  test('change Abonement Type test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectAbonementOfferAbonementType(initialState)).toBe(abonementType.limited);
    const newAbonementType = abonementType.unlimited;
    await teacherStore.asyncDispatch(changeAbonementType.action(newAbonementType));
    const changedState = teacherStore.getState();
    expect(selectAbonementOfferAbonementType(changedState)).toBe(newAbonementType);
  });

  test('change Abonement Subject test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectAbonementOfferAbonementSubjects(initialState)).toEqual([]);
    const newSubjects = ['aaa','bbb','ccc'];
    await teacherStore.asyncDispatch(changeAbonementSubjects.action(newSubjects));
    const changedState = teacherStore.getState();
    expect(selectAbonementOfferAbonementSubjects(changedState)).toEqual(newSubjects);
  });

  test('delete Abonement Subject test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectAbonementOfferAbonementSubjects(initialState)).toEqual([]);
    const newSubjects = ['aaa','bbb','ccc'];
    await teacherStore.asyncDispatch(changeAbonementSubjects.action(newSubjects));
    const exampleId:id = newSubjects[0];
    await teacherStore.asyncDispatch(deleteAbonementSubject.action(exampleId));
    const changedState = teacherStore.getState();
    expect(selectAbonementOfferAbonementSubjects(changedState).includes(exampleId)).toBeFalsy();
  });  
});

const selectRule: TeacherSelector<IEditingResourceState<IRule>> = (state) => state.editableRule;
const selectRuleData: TeacherSelector<IRule> = (state) => selectRule(state).data;
const selectRuleDuration: TeacherSelector<number> = (state) => selectRuleData(state).durationMin; 

describe('Teacher Editable Rule Commands', () => {

  test('change Rule Duration test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectRuleDuration(initialState)).toBe(0);
    const newDurationMin = 15;
    await teacherStore.asyncDispatch(changeRuleDuration.action(newDurationMin));
    const changedState = teacherStore.getState();
    expect(selectRuleDuration(changedState)).toBe(newDurationMin);
  });
});
