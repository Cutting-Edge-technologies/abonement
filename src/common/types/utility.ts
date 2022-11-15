import React from "react";
import { Action, Store } from "redux";
import { rootTeacherState } from "../../teacher/store";
import { commonState } from "../store/commonReducer";

export type id = string;
export type commandName = string;

export type HOC = React.FC<{}>;
export interface ExtendedStore<State> extends Store<State> {
  asyncDispatch: (action: Action) => Promise<unknown>;
  getActionHistory: () => Action<any>[];
  getActionHistoryRepresentation: () => string;
}

export type GenericSelector<State, Result> = (state: State) => Result;
export type ArgumentSelector<Selector> = (...args: any[]) => Selector;
export type CommonSelector<Result> = GenericSelector<commonState, Result>;
export type TeacherSelector<Result> = GenericSelector<rootTeacherState, Result>;
