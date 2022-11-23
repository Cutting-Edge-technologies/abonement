import { editingFields, IEditingResourceState } from "../../common/store/editingEntitySlice";
import { abonementType, IAbonementOffer, id, IRule, ISubject, ITeacher, PeriodicityType } from "../../common/types/domain";
import { ArgumentSelector, TeacherSelector } from "../../common/types/utility";

const selectAbonementOffer: TeacherSelector<IEditingResourceState<IAbonementOffer>> = (state) => state.editableAbonementOffer;
const selectAbonementOfferData: TeacherSelector<IAbonementOffer> = (state) => selectAbonementOffer(state).data;
export const selectAbonementOfferLimitLessons: TeacherSelector<number> = (state) => selectAbonementOfferData(state).limitLessons; 
export const selectAbonementOfferPrice: TeacherSelector<number> = (state) => selectAbonementOfferData(state).price; 
export const selectAbonementOfferAbonementType: TeacherSelector<abonementType> = (state) => selectAbonementOfferData(state).type;
export const selectAbonementOfferAbonementSubjects: TeacherSelector<id[]> = (state) => selectAbonementOfferData(state).subjects;
export const selectAbonementOfferLimitTime: TeacherSelector<number> = (state) => selectAbonementOfferData(state).limitTime; 

const selectRule: TeacherSelector<IEditingResourceState<IRule>> = (state) => state.editableRule;
const selectRuleData: TeacherSelector<IRule> = (state) => selectRule(state).data;
export const selectRuleDuration: TeacherSelector<number> = (state) => selectRuleData(state).durationMin;
export const selectRulePeriodicityType: TeacherSelector<PeriodicityType> = (state) => selectRuleData(state).periodicity.periodicityType;  
export const selectRuleStartTime: TeacherSelector<number> = (state) => selectRuleData(state).timeStart;
export const selectRuleperiodicityRule: TeacherSelector<number[]> = (state) => selectRuleData(state).periodicity.periodicityRule;

const selectSubject: TeacherSelector<IEditingResourceState<ISubject>> = (state) => state.editableSubject;
const selectSubjectData: TeacherSelector<ISubject> = (state) => selectSubject(state).data;
const selectSubjectEditingFields: TeacherSelector<editingFields> = (state) => selectSubject(state).fieldsEditing;

const isSubjectFieldEditingSelectorCreator: ArgumentSelector<TeacherSelector<boolean>> = (fieldName: string) => {
  return (state) => selectSubjectEditingFields(state)[fieldName];
}

export const selectIsSubjectNameEditing = isSubjectFieldEditingSelectorCreator('name');
export const selectIsSubjectDescriptionEditing = isSubjectFieldEditingSelectorCreator('description');
export const selectSubjectName: TeacherSelector<string> = (state) => selectSubjectData(state).name;
export const selectSubjectDescription: TeacherSelector<string> = (state) => selectSubjectData(state).description;

const selectTeacher: TeacherSelector<IEditingResourceState<ITeacher>> = (state) => state.editableTeacher;
const selectTeacherData: TeacherSelector<ITeacher> = (state) => selectTeacher(state).data;
const selectTeacherEditingFields: TeacherSelector<editingFields> = (state) => selectTeacher(state).fieldsEditing;

const isTeacherFieldEditingSelectorCreator: ArgumentSelector<TeacherSelector<boolean>> = (fieldName: string) => {
  return (state) => selectTeacherEditingFields(state)[fieldName];
}

export const selectIsTeacherNameEditing = isTeacherFieldEditingSelectorCreator('name');
export const selectIsTeacherDescriptionEditing = isTeacherFieldEditingSelectorCreator('description');
export const selectTeacherName: TeacherSelector<string> = (state) => selectTeacherData(state).name;
export const selectTeacherDescription: TeacherSelector<string> = (state) => selectTeacherData(state).description;

export const selectSubjectId: TeacherSelector<id> = (state) => selectSubjectData(state).id;
export const selectRuleId: TeacherSelector<id> = (state) => selectRuleData(state).id;
export const selectAbonementOfferId: TeacherSelector<id> = (state) => selectAbonementOfferData(state).id;
export const selectSubjectRules: TeacherSelector<id[]> = (state) => selectSubjectData(state).rules;


