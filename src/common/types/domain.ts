

export interface User {
    name: string
    lastName: string
    avatar: string
}

export interface Teacher extends User {
    description: string
    subjects: Subject
    abonements: Abonement
}

export interface Student extends User {}



export interface Abonement {
    subject: Subject
    type: typeAbonement
    limitTime ? : number
    limitLessons ? : number
    price: number
}

export interface TeacherAbonement extends Abonement {}

export interface StudentAbonement extends Abonement {
    dateBeginning: number
    validity: boolean
}

export interface Subject {
description: string
schedule: Schedule
lessons: Lesson

}

export interface Schedule {
    rule: Rule
}

export interface Rule {
    periodicity: Periodicity
    periodicityRule: PeriodicityRule
}

export interface Lesson {
    data: number
    time: number
    participants: Abonement
    status: LessonStatus
}



export enum typeAbonement {
    limited,
    unlimited
}

export enum PeriodicityRule {
    weekDay,
    monthDay,
    yearDay,
    manualDate
}

export enum Periodicity {
    weekly,
    monthly,
    annually,
    manualDate    
}

export enum LessonStatus {
    schedule,
    commingSoon,
    process,
    finished,
    done,
    canceled
}