import {changeAbonementLimitLessons, changeAbonementPrice, changeAbonementType} from "./editable";
import {teacherStoreCreator} from "../../store"
import { TeacherSelector } from "../../../common/types/utility";
import { abonementType, IAbonementOffer } from "../../../common/types/domain";
import { editingFields, IEditingResourceState } from "../../../common/store/editingEntitySlice";

const selectAbonementOffer: TeacherSelector<IEditingResourceState<IAbonementOffer>> = (state) => state.editableAbonementOffer;
const selectAbonementOfferData: TeacherSelector<IAbonementOffer> = (state) => selectAbonementOffer(state).data;
const selectAbonementOfferEditingFields: TeacherSelector<editingFields> = (state) => selectAbonementOffer(state).fieldsEditing;
const selectAbonementOfferLimitLessons: TeacherSelector<number> = (state) => selectAbonementOfferData(state).limitLessons; 
const selectAbonementOfferPrice: TeacherSelector<number> = (state) => selectAbonementOfferData(state).price; 
const selectAbonementOfferAbonementType: TeacherSelector<abonementType> = (state) => selectAbonementOfferData(state).type; 


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
});

