import {changeAbonementLimitLessons} from "./editable";
import {teacherStoreCreator} from "../../store"
import { Selector } from "@reduxjs/toolkit";
import { TeacherSelector } from "../../../common/types/utility";
import { IAbonementOffer } from "../../../common/types/domain";
import { editingFields, IEditingResourceState } from "../../../common/store/editingEntitySlice";

const selectAbonementOffer: TeacherSelector<IEditingResourceState<IAbonementOffer>> = (state) => state.editableAbonementOffer;
const selectAbonementOfferData: TeacherSelector<IAbonementOffer> = (state) => selectAbonementOffer(state).data;
const selectAbonementOfferEditingFields: TeacherSelector<editingFields> = (state) => selectAbonementOffer(state).fieldsEditing;
const selectAbonementOfferLimitLessons: TeacherSelector<number> = (state) => selectAbonementOfferData(state).limitLessons; 

describe('Teacher Editable Commands', () => {
  test('change Abonement Limit Lessons test', async () => {
    const teacherStore = teacherStoreCreator();
    const initialState = teacherStore.getState();
    expect(selectAbonementOfferLimitLessons(initialState)).toBe(0);
    const newLimitLessons = 15;
    await teacherStore.asyncDispatch(changeAbonementLimitLessons.action(newLimitLessons));
    const changedState = teacherStore.getState();
    expect(selectAbonementOfferLimitLessons(changedState)).toBe(newLimitLessons);
  });
});

