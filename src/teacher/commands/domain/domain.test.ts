import {teacherStoreCreator} from "../../store"
import { abonementType, PeriodicityType } from "../../../common/types/domain";
import {
  startEditingAbonementOffer,
  confirmSavingAbonement,
  startEditingRule,
  startEditingSubject,
  confirmSavingRule,
  confirmSavingSubject,
  startDeletingAbonement,
  startDeletingRule,
  startDeletingSubject,
  startTeacherApp
} from "./domain"
import{
changeAbonementLimitLessons,
changeAbonementPrice,
changeAbonementType,
changeRuleDuration,
changeRulePeriodicityType,
changeRuleMonthDay,
changeRuleStartTime,
startChangeSubjectDescription,
startChangeSubjectName,
changeSubjectName,
changeSubjectDescription,
confirmChangeSubjectName,
confirmChangeSubjectDescription
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
selectRuleperiodicityRule,
selectTeacherSubjects,
selectSubjectId,
selectSubjectDescription,
selectSubjectName
} from "../../selectors/editable"
import {selectTeacherId} from "../../selectors/domain"

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
  
  test('start Editing and confirm saving Subject test', async () => {
    const exampleSubjectDescription = 'best yoga';
    const exampleSubjectName = 'Tratata Yoga';

    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherSubjects(initialState)).toEqual([]);
    await teacherStore.asyncDispatch(startCreatingSubject.action());
    await teacherStore.asyncDispatch(startChangeSubjectName.action());
    await teacherStore.asyncDispatch(changeSubjectName.action(exampleSubjectName));
    await teacherStore.asyncDispatch(confirmChangeSubjectName.action());
    await teacherStore.asyncDispatch(startChangeSubjectDescription.action());
    await teacherStore.asyncDispatch(changeSubjectDescription.action(exampleSubjectDescription));
    await teacherStore.asyncDispatch(confirmChangeSubjectDescription.action());
    await teacherStore.asyncDispatch(confirmSavingSubject.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherSubjects(changedState).length).toBeGreaterThan(0);
    const subjectId = selectTeacherSubjects(changedState)[0];
    await teacherStore.asyncDispatch(startEditingSubject.action(subjectId));
    const againChangedState = teacherStore.getState();
    expect(selectSubjectId(againChangedState)).toBe(subjectId);
    expect(selectSubjectName(againChangedState)).toEqual(exampleSubjectName);
    expect(selectSubjectDescription(againChangedState)).toEqual(exampleSubjectDescription);
  });

  test('start delete AbonemetOffer test', async () => {
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
    await teacherStore.asyncDispatch(startDeletingAbonement.action(abonemetOfferId));
    const againChangedState = teacherStore.getState();
    expect(selectTeacherAbonementOffers(againChangedState)).toEqual([]);
  });

  test('start delete Rule test', async () => {
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
    await teacherStore.asyncDispatch(startDeletingRule.action(ruleId));
    const againChangedState = teacherStore.getState();
    expect(selectSubjectRules(againChangedState)).toEqual([]);
  });
  
  test('start delete Subject test', async () => {
    const exampleSubjectDescription = 'best yoga';
    const exampleSubjectName = 'Tratata Yoga';

    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherSubjects(initialState)).toEqual([]);
    await teacherStore.asyncDispatch(startCreatingSubject.action());
    await teacherStore.asyncDispatch(startChangeSubjectName.action());
    await teacherStore.asyncDispatch(changeSubjectName.action(exampleSubjectName));
    await teacherStore.asyncDispatch(confirmChangeSubjectName.action());
    await teacherStore.asyncDispatch(startChangeSubjectDescription.action());
    await teacherStore.asyncDispatch(changeSubjectDescription.action(exampleSubjectDescription));
    await teacherStore.asyncDispatch(confirmChangeSubjectDescription.action());
    await teacherStore.asyncDispatch(confirmSavingSubject.action());
    const changedState = teacherStore.getState();
    expect(selectTeacherSubjects(changedState).length).toBeGreaterThan(0);
    const subjectId = selectTeacherSubjects(changedState)[0];
    await teacherStore.asyncDispatch(startDeletingSubject.action(subjectId));
    const againChangedState = teacherStore.getState();
    expect(selectTeacherSubjects(againChangedState)).toEqual([]);
  });

  test('start Teacher App test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectTeacherId(initialState)).toEqual('');
    await teacherStore.asyncDispatch(startTeacherApp.action());
    const changedState = teacherStore.getState();
    console.warn(changedState.loading);
    expect(selectTeacherId(changedState)).toBeTruthy();
  });
  //finish after creation dummie APIeffects
});