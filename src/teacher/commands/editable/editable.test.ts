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
  changeSubjectName,
  changeSubjectDescription,
  startChangeTeacherName,
  confirmChangeTeacherName,
  startChangeTeacherDescription,
  confirmChangeTeacherDescription,
  changeTeacherName,
  changeTeacherDescription
} from "./editable";
import {teacherStoreCreator} from "../../store"
import { abonementType, id, PeriodicityType } from "../../../common/types/domain";
import {
  selectAbonementOfferLimitLessons,
  selectAbonementOfferPrice,
  selectAbonementOfferAbonementType,
  selectAbonementOfferAbonementSubjects,
  selectAbonementOfferLimitTime,
  selectRuleDuration,
  selectRulePeriodicityType,
  selectRuleStartTime,
  selectRuleperiodicityRule,
  selectIsSubjectDescriptionEditing,
  selectIsSubjectNameEditing,
  selectSubjectDescription,
  selectSubjectName,
  selectIsTeacherDescriptionEditing,
  selectIsTeacherNameEditing,
  selectTeacherDescription,
  selectTeacherName
} from "../../selectors/editable"

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
    const subjectsAddedState = teacherStore.getState();
    expect(selectAbonementOfferAbonementSubjects(subjectsAddedState).length).toBeGreaterThan(0);
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

  test('change Subject Description test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectSubjectDescription(initialState)).toBe('');
    const newSubjectDescription = 'Lorem ipsum';
    await teacherStore.asyncDispatch(changeSubjectDescription.action(newSubjectDescription));
    const changedState = teacherStore.getState();
    expect(selectSubjectDescription(changedState)).toBe(newSubjectDescription);
  });
});

describe('Teacher Editable Teacher Commands', () => {

  test('start Change Teacher Name test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsTeacherNameEditing(initialState)).toBeFalsy();
    await teacherStore.asyncDispatch(startChangeTeacherName.action());
    const changedState = teacherStore.getState();
    expect(selectIsTeacherNameEditing(changedState)).toBeTruthy();
  });

  test('confirm Change Teacher Name test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectIsTeacherNameEditing(initialState)).toBeTruthy();
    await teacherStore.asyncDispatch(confirmChangeTeacherName.action());
    const changedState = teacherStore.getState();
    expect(selectIsTeacherNameEditing(changedState)).toBeFalsy();
  });

test('start Change Teacher Description test', async () => {
  const teacherStore = teacherStoreCreator();
  const initialState = teacherStore.getState();
  expect(selectIsTeacherDescriptionEditing(initialState)).toBeFalsy();
  await teacherStore.asyncDispatch(startChangeTeacherDescription.action());
  const changedState = teacherStore.getState();
  expect(selectIsTeacherDescriptionEditing(changedState)).toBeTruthy();
});

test('confirm Change Teacher Description test', async () => {
  const teacherStore = teacherStoreCreator();
  const initialState = teacherStore.getState();
  expect(selectIsTeacherDescriptionEditing(initialState)).toBeTruthy();
  await teacherStore.asyncDispatch(confirmChangeTeacherDescription.action());
  const changedState = teacherStore.getState();
  expect(selectIsTeacherDescriptionEditing(changedState)).toBeFalsy();
});

test('change Teacher Name test', async () => {
  const teacherStore = teacherStoreCreator();
  const initialState = teacherStore.getState();
  expect(selectTeacherName(initialState)).toBe('');
  const newTeacherName = 'Loren Ipsum';
  await teacherStore.asyncDispatch(changeTeacherName.action(newTeacherName));
  const changedState = teacherStore.getState();
  expect(selectTeacherName(changedState)).toBe(newTeacherName);
});

test('change Teacher Description test', async () => {
  const teacherStore = teacherStoreCreator();
  const initialState = teacherStore.getState();
  expect(selectTeacherDescription(initialState)).toBe('');
  const newTeacherDescription = 'TratatataYoga teacher';
  await teacherStore.asyncDispatch(changeTeacherDescription.action(newTeacherDescription));
  const changedState = teacherStore.getState();
  expect(selectTeacherDescription(changedState)).toBe(newTeacherDescription);
});
});
