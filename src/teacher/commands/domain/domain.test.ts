import {teacherStoreCreator} from "../../store"
import { abonementType, PeriodicityType } from "../../../common/types/domain";
import {
  startEditingAbonementOffer,
  confirmSavingAbonement,
  startEditingRule,
  startEditingSubject
} from "./domain"
import{
changeAbonementLimitLessons,
changeAbonementPrice,
changeAbonementType
  } from "../editable/editable"
import {
  startCreatingAbonements,
  startCreatingRule,
  startCreatingSubject
} from "../novigation/navigation"
import {
selectAbonementOfferId,
selectTeacherAbonementOffers,
selectAbonementOfferAbonementType,
selectAbonementOfferLimitLessons,
selectAbonementOfferPrice,
selectRuleId
} from "../../selectors/editable"

describe('Domain Commands', () => {

  test('start Editing AbonemetOffer test', async () => {
    const exampleLimitLessons = 15;
    const exampleAbonementPrice = 200;
    const exampleAbonementType = abonementType.limited;

    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherAbonementOffers(initialState)).toEqual([]);
    await teacherStore.asyncDispatch(startCreatingAbonements.action());
    await teacherStore.asyncDispatch(changeAbonementLimitLessons.action(exampleLimitLessons));
    await teacherStore.asyncDispatch(changeAbonementPrice.action(exampleAbonementPrice));
    await teacherStore.asyncDispatch(changeAbonementType.action(exampleAbonementType));
    await teacherStore.asyncDispatch(confirmSavingAbonement.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherAbonementOffers(changedState).length).toBeGreaterThan(0);
    const abonemetOfferId = selectTeacherAbonementOffers(changedState)[0];
    await teacherStore.asyncDispatch(startEditingAbonementOffer.action(abonemetOfferId));
    const againChangedState = teacherStore.getState();
    expect(selectAbonementOfferId(againChangedState)).toBe(abonemetOfferId);
    expect(selectAbonementOfferLimitLessons(againChangedState)).toEqual(exampleLimitLessons);
    expect(selectAbonementOfferPrice(againChangedState)).toEqual(exampleAbonementPrice);
    expect(selectAbonementOfferAbonementType(againChangedState)).toEqual(exampleAbonementType);
  });

  //test('start Editing Rule test', async () => {
  //  const teacherStore = teacherStoreCreator();
  //  const initialState = teacherStore.getState();
  //  expect(selectRuleId(initialState)).toBe('');
  //  const ruleId = '123';
  //  await teacherStore.asyncDispatch(startEditingRule.action(ruleId));
  //  const changedState = teacherStore.getState();
  //  expect(selectRuleId(changedState)).toBe(ruleId);
  //});
//
  //test('start Editing Subject test', async () => {
  //  const teacherStore = teacherStoreCreator();
  //  const initialState = teacherStore.getState();
  //  expect(selectSubjectId(initialState)).toBe('');
  //  const subjectId = '123;'
  //  await teacherStore.asyncDispatch(startEditingSubject.action(subjectId));
  //  const changedState = teacherStore.getState();
  //  expect(selectSubjectId(changedState)).toBe(subjectId);
  //});
});