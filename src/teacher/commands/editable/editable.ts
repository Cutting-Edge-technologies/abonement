import { call } from "redux-saga/effects";
import { abonementType, id, PeriodicityType } from "../../../common/types/domain";
import { createCommand } from "../../../common/utilities/createCommand";

export const startChangeSubjectName = createCommand<void>(
  'startChangeSubjectName',
  function*() {
    yield call(console.log,'startChangeSubjectName');
  }
);	
  
export const changeSubjectName = createCommand<string>(
  'changeSubjectName',
  function*({payload: subjectName}) {
    yield call(console.log,'changeSubjectName', subjectName);
  }
);

export const confirmChangeSubjectName = createCommand<void>(
  'confirmChangeSubjectName',
  function*() {
    yield call(console.log,'confirmChangeSubjectName');
  }
);	

export const startChangeTeacherName = createCommand<void>(
  'startChangeTeacherName',
  function*() {
    yield call(console.log,'startChangeTeacherName');
  }
);	

export const changeTeacherName = createCommand<string>(
  'changeTeacherName',
  function*({payload: teacherName}) {
    yield call(console.log,'changeTeacherName', teacherName);
  }
);

export const confirmChangeTeacherName = createCommand<void>(
  'confirmChangeTeacherName',
  function*() {
    yield call(console.log,'confirmChangeTeacherName');
  }
);	

export const startChangeTeacherDescription = createCommand<void>(
  'startChangeTeacherDescription',
  function*() {
    yield call(console.log,'startChangeTeacherDescription');
  }
);

export const changeTeacherDescription = createCommand<string>(
  'changeTeacherDescription',
  function*({payload: teacherDescription}) {
    yield call(console.log,'changeTeacherDescription', teacherDescription);
  }
);
    
export const confirmChangeTeacherDescription = createCommand<void>(
  'confirmChangeTeacherDescription',
  function*() {
    yield call(console.log,'confirmChangeTeacherDescription');
  }
);

export const changeAbonementType	= createCommand<abonementType>(
  'changeAbonementType',
  function*({payload: abonementType}) {
    yield call(console.log,'deleteAbonementSubjects', abonementType);
  }
);
	
export const changeAbonementLimitLessons	= createCommand<number>(
  'changeAbonementLimitLessons',
  function*({payload: caunt}) {
    yield call(console.log,'changeAbonementLimitLessons', caunt);
  }
);
	
export const changeAbonementPrice	= createCommand<number>(
  'changeAbonementPrice',
  function*({payload: price}) {
    yield call(console.log,'changeAbonementPrice', price);
  }
);

export const changeSubjectDescription = createCommand<string>(
  'changeSubjectDescription',
  function*({payload: subjectDescription}) {
    yield call(console.log,'changeSubjectDescription', subjectDescription);
  }
);

export const changeRulePeriodicityType	= createCommand<PeriodicityType>(
  'changeRulePeriodicityType',
  function*({payload: periodicityType}) {
    yield call(console.log,'changeRulePeriodicityType', periodicityType);
  }
);

export const toggleRuleWeekDay	= createCommand<number>(
  'toggleRuleWeekDay',
  function*({payload: weekDay}) {
    yield call(console.log,'toggleRuleWeekDay', weekDay);
  }
);	
 	
export const changeRuleStartTime	= createCommand<Date>(
  'changeRuleStartTime',
  function*({payload: startTime}) {
    yield call(console.log,'changeRuleStartTime', startTime);
  }
);

export const changeRuleDuration	= createCommand<number>(
  'changeRuleDuration',
  function*({payload: durationMin}) {
    yield call(console.log,'changeRuleDuration', durationMin);
  }
);

export const changeRuleMonthDay	= createCommand<Date>(
  'changeRuleMonthDay',
  function*({payload: monthDay}) {
    yield call(console.log,'changeRuleMonthDay', monthDay);
  }
);

export const changeAbonementSubjects	= createCommand<id[]>(
  'changeAbonementSubjects',
  function*({payload: subjectsIdArray}) {
    yield call(console.log,'changeAbonementSubjects', subjectsIdArray);
  }
);

export const deleteAbonementSubject	= createCommand<id>(
  'deleteAbonementSubject',
  function*({payload: subjectId}) {
    yield call(console.log,'deleteAbonementSubject', subjectId);
  }
);

export const startChangeSubjectDescription = createCommand<void>(
  'startChangeSubjectDescription',
  function*() {
    yield call(console.log,'startChangeSubjectDescription');
  }
);	

export const confirmChangeSubjectDescription = createCommand<void>(
  'confirmChangeSubjectDescription',
  function*() {
    yield call(console.log,'confirmChangeSubjectDescription');
  }
);
