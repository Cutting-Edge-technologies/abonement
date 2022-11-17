import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IExternalResourceState<ExternalResource> {
  data: ExternalResource[];
  filters: IExternalResourceFilters;
}

interface IExternalResourceFilters {
  search: string;
}

// The slice that contains additional properties for handeling like search and page

export const createExternalResourceAPISlice = <ExternalResource extends {}>(externalResource: ExternalResource, resourceName: string) => {
  const initialResource: IExternalResourceState<ExternalResource> = {
    data: [] as ExternalResource[],
    filters: { 
      search: '',
    },
  }

  const slice = createSlice({
    name: resourceName,
    initialState: initialResource,
    reducers: {
      setResourses: (state, { payload }: PayloadAction<ExternalResource[]>) => {
        return {
          ...state,
          data: [...payload],
        };
      },
      setFilters: (state, { payload }: PayloadAction<Partial<IExternalResourceFilters>>) => ({
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        }
      }),
      resetResources: () =>({ ...initialResource }),
    },
  });

  return slice;
}
