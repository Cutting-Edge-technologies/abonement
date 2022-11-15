import {SagaMonitor} from 'redux-saga';
import { Action } from 'redux'

export class StoreSagaMonitor implements SagaMonitor {
  constructor(private historyArray: any[]) {
    
  }

  private effectTypesToWatch: Set<string> = new Set(['PUT', 'CALL']); 

  effectTriggered(options: { effectId: number; parentEffectId: number; label?: string; effect: any }) {
    const isEffectTheOneToWatch = this.effectTypesToWatch.has(options.effect?.type);
    if (isEffectTheOneToWatch) {
      this.historyArray.push(options);
    };
  }

  actionDispatched(action: Action) {
    this.historyArray.push(action);
  }
}
