import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeacherView } from '../../../common/types/teacherDomainView'

const initialDomainView: TeacherView = {
  id: '',
  firstName: 'Harry',
  lastName: 'Potter',
  avatar: '',
  description: '',
  subjects: [],
  abonementOffers: [],
}

export const teacherDomainViewSlice = createSlice({
  name: 'teacherDomainView',
  initialState: initialDomainView,
  reducers: {
    setDomainView: (state, {payload}: PayloadAction<TeacherView>) => JSON.parse(JSON.stringify(payload)),
    resetDomainView: () => JSON.parse(JSON.stringify(initialDomainView)),
  },
});
