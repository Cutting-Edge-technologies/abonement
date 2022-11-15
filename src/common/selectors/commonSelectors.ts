import { IErrorDetails } from "../store/errorSlice";
import { ArgumentSelector, CommonSelector } from "../types/utility";

export const selectLoading: ArgumentSelector<CommonSelector<boolean>> = (comandName: string) => {
  return (state) => !!state.loading[comandName];
}

export const selectError: ArgumentSelector<CommonSelector<IErrorDetails | undefined>> = (comandName: string) => {
  return (state) => state.error[comandName];
}

export const selectHasError: ArgumentSelector<CommonSelector<boolean>> = (comandName: string) => {
  return (state) => !!state.error[comandName];
}
