import {teacherStoreCreator} from "../../store"
import { abonementType, PeriodicityType } from "../../../common/types/domain";
import {
  startEditingAbonementOffer,
  confirmSavingAbonement,
  startEditingRule,
  startEditingSubject,
  confirmSavingRule
} from "./domain"
import{
changeAbonementLimitLessons,
changeAbonementPrice,
changeAbonementType,
changeRuleDuration,
changeRulePeriodicityType,
changeRuleMonthDay,
changeRuleStartTime
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
selectRuleId,
selectSubjectRules,
selectRuleDuration,
selectRulePeriodicityType,
selectRuleStartTime,
selectRuleperiodicityRule
} from "../../selectors/editable"

describe('Domain Commands', () => {

  test('start Editing and confirm saving AbonemetOffer test', async () => {
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

  test('start Editing and confirm saving Rule test', async () => {
    const exampleDurationMin = 50;
    const exampleRulePeriodicityType = PeriodicityType.manualDate;
    const exampleMonthDay = 8;
    const exampleStartTime = 21;

    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectSubjectRules(initialState)).toEqual([]);
    await teacherStore.asyncDispatch(startCreatingRule.action());
    await teacherStore.asyncDispatch(changeRuleDuration.action(exampleDurationMin));
    await teacherStore.asyncDispatch(changeRulePeriodicityType.action(exampleRulePeriodicityType));
    await teacherStore.asyncDispatch(changeRuleMonthDay.action(exampleMonthDay));
    await teacherStore.asyncDispatch(changeRuleStartTime.action(exampleStartTime));
    await teacherStore.asyncDispatch(confirmSavingRule.action());
    const changedState = teacherStore.getState();
    expect(selectSubjectRules(changedState).length).toBeGreaterThan(0);
    const ruleId = selectTeacherAbonementOffers(changedState)[0];
    await teacherStore.asyncDispatch(startEditingRule.action(ruleId));
    const againChangedState = teacherStore.getState();
    expect(selectRuleId(againChangedState)).toBe(ruleId);
    expect(selectRuleDuration(againChangedState)).toEqual(exampleDurationMin);
    expect(selectRulePeriodicityType(againChangedState)).toEqual(exampleRulePeriodicityType);
    expect(selectRuleperiodicityRule(againChangedState)[0]).toEqual(exampleMonthDay);
    expect(selectRuleStartTime(againChangedState)).toBe(exampleStartTime);
  });
});