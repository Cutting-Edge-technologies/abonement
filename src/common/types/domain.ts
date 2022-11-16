export type id = string;

export interface IHaveId {
  id: id;
};

export interface ITakeTime {
  timeStart: number;
  durationMin: number;
}

export interface IUser extends IHaveId {
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface ITeacher extends IUser {
  description: string;
  subjects: id[];
  abonementOffers: id[];
}

export interface IStudent extends IUser {}

export interface IAbonement extends IHaveId {
  subjects: id[];
  type: abonementType;
  limitTime?: number;
  limitLessons?: number;
  price: number;
}

export interface IAbonementOffer extends IAbonement {}

export interface IAbonementConsumable extends IAbonement {
  dateStart: Date;
  lessonsLeft: number;
}

export interface ISubject extends IHaveId {
  description: string;
  rules: id[];
}

export interface IPeriodicity {
  periodicityType: PeriodicityType;
  periodicityRule: number[];
}

export interface IRule extends IHaveId, ITakeTime {
  periodicity: IPeriodicity;
}

export interface ILesson extends IHaveId, ITakeTime {
  date: Date;
  participants: id[];
  status: LessonStatus;
}

export enum abonementType {
  limited,
  unlimited
}

export enum PeriodicityType {
  weekly,
  manualDate    
}

export enum LessonStatus {
  scheduled,
  commingSoon,
  inProcess,
  finished,
  done,
  canceled
}
