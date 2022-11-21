import { IAbonementOffer, IRule, ISubject, ITeacher } from "./domain";

type OmitTeacher = Omit<ITeacher, 'subjects' | 'abonementOffers'>;
type OmitSubject = Omit<ISubject, 'rules'>;

interface ISubjectView extends OmitSubject {
  rules: IRule[];
}

export interface TeacherView extends OmitTeacher {
  subjects: ISubjectView[];
  abonementOffers: IAbonementOffer[],
}
