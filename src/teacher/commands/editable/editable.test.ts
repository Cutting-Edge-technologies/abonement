import {
  changeAbonementLimitLessons,
  changeAbonementPrice,
  changeAbonementType,
  changeAbonementSubjects,
  deleteAbonementSubject,
  changeRuleDuration,
  changeRulePeriodicityType,
  changeRuleStartTime,
  toggleRuleWeekDay,
  changeRuleMonthDay,
  changeAbonementLimitTime,
  startChangeSubjectName,
  confirmChangeSubjectName,
  startChangeSubjectDescription,
  confirmChangeSubjectDescription,
  changeSubjectName
} from "./editable";
import {teacherStoreCreator} from "../../store"
import { ArgumentSelector, TeacherSelector } from "../../../common/types/utility";
import { abonementType, IAbonementOffer, id, IRule, ISubject, PeriodicityType } from "../../../common/types/domain";
import { editingFields, IEditingResourceState } from "../../../common/store/editingEntitySlice";

const selectAbonementOffer: TeacherSelector<IEditingResourceState<IAbonementOffer>> = (state) => state.editableAbonementOffer;
const selectAbonementOfferData: TeacherSelector<IAbonementOffer> = (state) => selectAbonementOffer(state).data;
const selectAbonementOfferEditingFields: TeacherSelector<editingFields> = (state) => selectAbonementOffer(state).fieldsEditing;
const selectAbonementOfferLimitLessons: TeacherSelector<number> = (state) => selectAbonementOfferData(state).limitLessons; 
const selectAbonementOfferPrice: TeacherSelector<number> = (state) => selectAbonementOfferData(state).price; 
const selectAbonementOfferAbonementType: TeacherSelector<abonementType> = (state) => selectAbonementOfferData(state).type;
const selectAbonementOfferAbonementSubjects: TeacherSelector<id[]> = (state) => selectAbonementOfferData(state).subjects;
const selectAbonementOfferLimitTime: TeacherSelector<number> = (state) => selectAbonementOfferData(state).limitTime; 



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

  test('change Abonement Limit Time test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectAbonementOfferLimitTime(initialState)).toBe(0);
    const newLimitTime = 45;
    await teacherStore.asyncDispatch(changeAbonementLimitTime.action(newLimitTime));
    const changedState = teacherStore.getState();
    expect(selectAbonementOfferLimitTime(changedState)).toBe(newLimitTime);
  });
});

const selectRule: TeacherSelector<IEditingResourceState<IRule>> = (state) => state.editableRule;
const selectRuleData: TeacherSelector<IRule> = (state) => selectRule(state).data;
const selectRuleDuration: TeacherSelector<number> = (state) => selectRuleData(state).durationMin;
const selectRulePeriodicityType: TeacherSelector<PeriodicityType> = (state) => selectRuleData(state).periodicity.periodicityType;  
const selectRuleStartTime: TeacherSelector<number> = (state) => selectRuleData(state).timeStart;
const selectRuleperiodicityRule: TeacherSelector<number[]> = (state) => selectRuleData(state).periodicity.periodicityRule;

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

  test('change Rule Periodicity Type test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectRulePeriodicityType(initialState)).toBe(PeriodicityType.weekly);
    const newPeriodicityType = PeriodicityType.manualDate;
    await teacherStore.asyncDispatch(changeRulePeriodicityType.action(newPeriodicityType));
    const changedState = teacherStore.getState();
    expect(selectRuleDuration(changedState)).toBe(newPeriodicityType);
  });

  test('change Rule Start Time test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectRuleStartTime(initialState)).toBe(0);
    const newStartTime = 20;
    await teacherStore.asyncDispatch(changeRuleStartTime.action(newStartTime));
    const changedState = teacherStore.getState();
    expect(selectRuleStartTime(changedState)).toBe(newStartTime);
  });

  test('change Rule Week Day test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectRuleperiodicityRule(initialState)).toBe([]);
    const changedWeekDay = 1;
    await teacherStore.asyncDispatch(toggleRuleWeekDay.action(changedWeekDay));
    const changedState = teacherStore.getState();
    expect(selectRuleperiodicityRule(changedState).includes(changedWeekDay)).toBeTruthy();
    const newChangedState = teacherStore.getState();
    await teacherStore.asyncDispatch(toggleRuleWeekDay.action(changedWeekDay));
    expect(selectRuleperiodicityRule(newChangedState).includes(changedWeekDay)).toBeFalsy();
  });

  test('change Rule Month Day test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectRuleperiodicityRule(initialState)).toBe([]);
    const newMonthkDay = 28;
    await teacherStore.asyncDispatch(changeRuleMonthDay.action(newMonthkDay));
    const changedState = teacherStore.getState();
    expect(selectRuleperiodicityRule(changedState).includes(newMonthkDay)).toBeTruthy();
    const newChangedState = teacherStore.getState();
    await teacherStore.asyncDispatch(changeRuleMonthDay.action(newMonthkDay));
    expect(selectRuleperiodicityRule(newChangedState).includes(newMonthkDay)).toBeFalsy();
  });
});

const selectSubject: TeacherSelector<IEditingResourceState<ISubject>> = (state) => state.editableSubject;
const selectSubjectData: TeacherSelector<ISubject> = (state) => selectSubject(state).data;
const selectSubjectEditingFields: TeacherSelector<editingFields> = (state) => selectSubject(state).fieldsEditing;

const isSubjectFieldEditingSelectorCreator: ArgumentSelector<TeacherSelector<boolean>> = (fieldName: string) => {
  return (state) => selectSubjectEditingFields(state)[fieldName];
}

const selectIsSubjectNameEditing = isSubjectFieldEditingSelectorCreator('name');
const selectIsSubjectDescriptionEditing = isSubjectFieldEditingSelectorCreator('description');
const selectSubjectName: TeacherSelector<string> = (state) => selectSubjectData(state).name;


describe('Teacher Editable Subject Commands', () => {

  test('start Change Subject Name test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsSubjectNameEditing(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startChangeSubjectName.action());
    const changedState = teacherStore.getState();
    expect(selectIsSubjectNameEditing(changedState)).toBeTruthy();
  });

  test('confirm Change Subject Name test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsSubjectNameEditing(initialState)).toBeTruthy();
    await teacherStore.asyncDispatch(confirmChangeSubjectName.action());
    const changedState = teacherStore.getState();
    expect(selectIsSubjectNameEditing(changedState)).toBeFalsy();
  });

  test('start Change Subject Description test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsSubjectDescriptionEditing(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startChangeSubjectDescription.action());
    const changedState = teacherStore.getState();
    expect(selectIsSubjectDescriptionEditing(changedState)).toBeTruthy();
  });

  test('confirm Change Subject Description test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsSubjectDescriptionEditing(initialState)).toBeTruthy();
    await teacherStore.asyncDispatch(confirmChangeSubjectDescription.action());
    const changedState = teacherStore.getState();
    expect(selectIsSubjectDescriptionEditing(changedState)).toBeFalsy();
  });

  test('change Subject Name test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectSubjectName(initialState)).toBe('');
    const newSubjectName = 'TratatataYoga';
    await teacherStore.asyncDispatch(changeSubjectName.action(newSubjectName));
    const changedState = teacherStore.getState();
    expect(selectSubjectName(changedState)).toBe(newSubjectName);
  });
});