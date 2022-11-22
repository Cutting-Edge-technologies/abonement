import { createEditingSlice } from "../../common/store/editingEntitySlice";
import { abonementType, IAbonementOffer, IRule, ISubject, ITeacher, PeriodicityType } from "../../common/types/domain";

export const editableTeacherSlice = createEditingSlice<ITeacher>({
  id: '',
  name: '',
  abonementOffers: [],
  subjects: [],
  description: '',
  avatar: ''
}, 'editingTeacher');

export const editableSubjectSlice = createEditingSlice<ISubject>({
  id: '',
  name: '',
  description: '',
  rules: [],
}, 'editingSubject');

export const editableAbonementOfferSlice = createEditingSlice<IAbonementOffer>({
  id: '',
  type: abonementType.limited,
  subjects: [],
  limitTime: 0,
  limitLessons: 0,
  price: 0,
}, 'editingAbonementOffer');

export const editableRuleSlice = createEditingSlice<IRule>({
  id: '',
  timeStart: 0,
  durationMin: 0,
  periodicity: {
    periodicityType: PeriodicityType.weekly,
    periodicityRule: [],
  }

}, 'editableRule');
