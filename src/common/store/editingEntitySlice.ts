import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const createEditingSlice = <EditingResource extends {}>(editingResource: EditingResource, resourceName: string) => {

  const initialEditingResource = {
    data: editingResource,
    fieldsEditing: {} as {[fieldName: string]: Boolean},
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
