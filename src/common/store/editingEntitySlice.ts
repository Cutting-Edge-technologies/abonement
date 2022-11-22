import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IHaveId } from "../types/domain";

export type editingFields = {[fieldName: string]: boolean};

export interface IEditingResourceState<EditingResource extends IHaveId> {
  data: EditingResource;
  fieldsEditing: editingFields;
}

export const createEditingSlice = <EditingResource extends IHaveId>(editingResource: EditingResource, resourceName: string) => {

  const initialEditingResource: IEditingResourceState<EditingResource> = {
    data: editingResource,
    fieldsEditing: {},
  }
  
  const slice = createSlice({
    name: resourceName,
    initialState: initialEditingResource,
    reducers: {
      setEditingResource: (state, { payload }: PayloadAction<Partial<EditingResource>>) => {
        return {
          ...state,
          data: {
            ...state.data,
            ...payload,
          },
        };
      },
      startEditingField: (state, { payload: fieldName }: PayloadAction<string>) => ({
        ...state,
        fieldsEditing: {
          ...state.fieldsEditing,
          [fieldName]: true,
        },
      }),
      finishEditingField: (state, { payload: fieldName }) => ({
        ...state,
        fieldsEditing: {
          ...state.fieldsEditing,
          [fieldName]: false,
        }
      }),
    },
  })

  return slice;
}
