import React from "react";
import { Action, Store } from "redux";

export type id = string;
export type commandName = string;

export type HOC = React.FC<{}>;
export interface ExtendedStore<State> extends Store<State> {
  asyncDispatch: (action: Action) => Promise<unknown>;
  getActionHistory: () => Action<any>[];
}